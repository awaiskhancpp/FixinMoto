import AppointmentForm from '@/components/appointment/AppointmentForm'
import Faq from '@/components/appointment/Faq'
import Testimonials from '@/components/appointment/Testimonials'
import Image from 'next/image'
export default function Appointment() {
  return (
    <>
      <section>
        <div className="relative flex min-h-[480px] w-full flex-col justify-center items-center md:min-h-screen">
          <Image
            src="/appointmentHeader.jpg"
            alt="appointment"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden />
          <div className="relative z-10 flex w-full flex-col justify-center items-center px-6 py-20 md:px-16 md:py-20">
            <div className="mx-auto w-full max-w-[1200px]">
              <h1 className="mx-auto max-w-[900px] text-4xl font-semibold leading-[1.125] text-white md:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[1.125]">
                <span className="text-secondary">Schedule</span> Your Auto Repair{' '}
                <span className="text-secondary">Appointment Today!</span>
              </h1>
              <p className="text-white/50">
                FixinMoto offers fast, reliable auto repair and roadside assistance, bringing expert
                service directly to you—whenever and wherever you need it. From quick fixes to major
                repairs, we’ve got you covered.
              </p>
            </div>
          </div>
        </div>
        <AppointmentForm />
        <Testimonials />
        <Faq />
      </section>
    </>
  )
}
