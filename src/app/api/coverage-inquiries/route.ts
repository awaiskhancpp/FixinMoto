import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'
import { validateCoveragePayload, type CoverageSubmitBody } from '@/lib/coverageFormValidation'

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<CoverageSubmitBody>

    const payloadData: CoverageSubmitBody = {
      firstName: String(body.firstName ?? ''),
      lastName: String(body.lastName ?? ''),
      email: String(body.email ?? ''),
      phone: String(body.phone ?? ''),
      addressLine: String(body.addressLine ?? ''),
      selectedAreaId:
        typeof body.selectedAreaId === 'number'
          ? body.selectedAreaId
          : body.selectedAreaId != null
            ? Number(body.selectedAreaId)
            : null,
      mainServiceId:
        typeof body.mainServiceId === 'number'
          ? body.mainServiceId
          : body.mainServiceId != null
            ? Number(body.mainServiceId)
            : null,
    }

    if (payloadData.selectedAreaId != null && Number.isNaN(payloadData.selectedAreaId)) {
      payloadData.selectedAreaId = null
    }
    if (payloadData.mainServiceId != null && Number.isNaN(payloadData.mainServiceId)) {
      payloadData.mainServiceId = null
    }

    const payload = await getPayload({ config })

    const { totalDocs: locationCount } = await payload.find({ collection: 'location', limit: 0 })
    const validation = validateCoveragePayload(payloadData, {
      requireArea: (locationCount ?? 0) > 0,
    })
    if (!validation.ok) {
      return NextResponse.json(
        { success: false, error: validation.message, field: validation.field },
        { status: 400 },
      )
    }

    const doc = await payload.create({
      collection: 'coverage-inquiries',
      data: {
        firstName: payloadData.firstName.trim(),
        lastName: payloadData.lastName.trim(),
        email: payloadData.email.trim().toLowerCase(),
        phone: payloadData.phone.trim(),
        addressLine: payloadData.addressLine.trim(),
        selectedArea:
          payloadData.selectedAreaId != null ? payloadData.selectedAreaId : undefined,
        mainServiceInterest:
          payloadData.mainServiceId != null ? payloadData.mainServiceId : undefined,
      },
      overrideAccess: true,
    })

    return NextResponse.json({ success: true, id: doc.id })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Something went wrong'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
