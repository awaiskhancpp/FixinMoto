import React, { Fragment } from 'react'
import Image from 'next/image'
type Node = {
  type: string
  tag?: string
  children?: Node[]
  text?: string
  format?: number
  [key: string]: any
}
export const Serialize = ({ nodes }: { nodes: Node | undefined }) => {
  if (!nodes) return null
  return (
    <Fragment>
      {/* @ts-ignore */}
      {nodes.map((node, index) => {
        if (!node) return null
        if (node.type == 'text') {
          let text: React.ReactNode = node.text || ''
          const format = node.format || 0
          if (format & 1) text = <strong key={index}>{text}</strong>
          if (format & 2) text = <em>{text}</em>
          if (format & 4) text = <s>{text}</s>
          return <Fragment key={index}>{text}</Fragment>
        }
        if (node.type == 'linebreak') {
          return <br key={index} />
        }
        switch (node.type) {
          case 'heading': {
            const HeadingTag = (node.tag || 'h3') as 'h3' | 'h4' | 'h5' | 'h6'

            const headingClasses =
              node.tag === 'h3'
                ? 'text-white my-5 font-medium text-[40px] leading-[48px]'
                : node.tag === 'h5'
                  ? 'text-white mb-4 font-semibold text-[24px] leading-[32px]'
                  : ''

            return (
              <HeadingTag key={index} className={headingClasses}>
                <Serialize nodes={node.children} />
              </HeadingTag>
            )
          }
          case 'paragraph': {
            if (!node.children || node.children.length === 0) {
              return <br key={index} />
            }
            return (
              <p
                key={index}
                className="text-white/50 tracking-normal text-[14px] font-normal leading-6"
              >
                <Serialize nodes={node.children} />
              </p>
            )
          }
          case 'quote':
            return (
              <blockquote
                key={index}
                className="border-l-4 border-red-500 pl-4 py-2 my-6 italic text-white/70"
              >
                <Serialize nodes={node.children} />
              </blockquote>
            )

          case 'list':
            if (node.listType === 'number') {
              return (
                <ol key={index} className="list-decimal pl-6 text-white/80 mb-4 space-y-2">
                  <Serialize nodes={node.children} />
                </ol>
              )
            }
            return (
              <ul key={index} className="list-disc pl-6 text-white/80 mb-4 space-y-2">
                <Serialize nodes={node.children} />
              </ul>
            )

          case 'listitem':
            return (
              <li key={index}>
                <Serialize nodes={node.children} />
              </li>
            )

          case 'upload': {
            const url = node.value?.url
            if (!url) return null
            return (
              <figure key={index} className="my-3">
                <Image
                  src={url}
                  alt={node.value?.alt || ''}
                  width={node.value?.width}
                  height={node.value?.height}
                  className="rounded-lg w-full h-auto"
                />
              </figure>
            )
          }
        }
      })}
    </Fragment>
  )
}
export default function RichText({ content }: { content: any }) {
  if (!content.root.children) return null
  return <Serialize nodes={content.root.children} />
}
