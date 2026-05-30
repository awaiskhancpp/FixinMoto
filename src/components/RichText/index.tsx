import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { jsxConverter } from './converters'

type Props = {
  content: SerializedEditorState
  className?: string
}

export default function RichText({ content, className }: Props) {
  return (
    <PayloadRichText
      data={content}
      converters={jsxConverter}
      className={className ?? 'payload-richtext blog-detail-body space-y-4'}
    />
  )
}
