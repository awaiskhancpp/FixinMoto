export function headingTextToId(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

type LexicalChild = {
  type?: string
  tag?: string
  text?: string
  children?: LexicalChild[]
}

function textFromChildren(children: LexicalChild[] | undefined): string {
  if (!children?.length) return ''
  return children
    .map((c) => {
      if (c.type === 'text' && c.text) return c.text
      if (c.children) return textFromChildren(c.children)
      return ''
    })
    .join('')
}

export type TocEntry = { id: string; text: string; tag: string }

export function getHeadingsFromLexical(
  content:
    | {
        root?: { children?: LexicalChild[] }
      }
    | null
    | undefined,
): TocEntry[] {
  const nodes = content?.root?.children
  if (!nodes?.length) return []

  const entries: TocEntry[] = []
  for (const node of nodes) {
    if (node.type !== 'heading' || !node.tag) continue
    const text = textFromChildren(node.children).trim()
    if (!text) continue
    entries.push({
      id: headingTextToId(text),
      text,
      tag: node.tag,
    })
  }
  return entries
}
