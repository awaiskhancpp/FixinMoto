import type { JSXConverters } from '@payloadcms/richtext-lexical/react'
import { headingTextToId } from '@/lib/lexicalHeadings'

function plainTextFromHeadingChildren(
  children: { type?: string; text?: string; children?: unknown[] }[] | undefined,
): string {
  if (!children?.length) return ''
  return children
    .map((c) => {
      if (c.type === 'text' && c.text) return c.text
      if (Array.isArray(c.children))
        return plainTextFromHeadingChildren(c.children as typeof children)
      return ''
    })
    .join('')
}

const headingClass: Record<string, string> = {
  h2: 'text-white my-4 font-semibold text-2xl leading-tight sm:my-5 sm:text-3xl lg:text-[32px] lg:leading-[40px]',
  h3: 'text-white my-4 font-medium text-xl leading-snug sm:my-5 sm:text-2xl lg:text-[40px] lg:leading-[48px]',
  h4: 'text-white my-3 font-medium text-lg leading-snug sm:my-4 sm:text-xl lg:text-[28px] lg:leading-[36px]',
  h5: 'text-white mb-3 font-semibold text-base leading-snug sm:mb-4 sm:text-xl lg:text-2xl lg:leading-8',
}

export const headingConverter: JSXConverters = {
  heading: ({ node, nodesToJSX }) => {
    const Tag = node.tag
    const children = nodesToJSX({ nodes: node.children })
    const plain = plainTextFromHeadingChildren(node.children).trim()
    const id = plain ? headingTextToId(plain) : undefined
    const className = headingClass[Tag] ?? 'text-white font-semibold'

    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    )
  },
}
