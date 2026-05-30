import type { TocEntry } from '@/lib/lexicalHeadings'

export default function BlogTableOfContents({ headings }: { headings: TocEntry[] }) {
  if (!headings.length) return null

  return (
    <nav
      aria-label="Table of contents"
      className="w-full max-h-[min(45vh,20rem)] overflow-y-auto rounded-[15px] border border-white/20 bg-primary/80 p-4 backdrop-blur-sm sm:p-5 lg:max-h-[calc(100dvh-8rem)]"
    >
      <h2 className="text-xs font-semibold uppercase tracking-wide text-white/70 sm:text-sm">
        On this page
      </h2>
      <ol className="mt-3 space-y-2 sm:mt-4">
        {headings.map((h) => (
          <li
            key={h.id}
            className={
              h.tag === 'h3' || h.tag === 'h4'
                ? 'ml-2 text-sm sm:ml-3'
                : h.tag === 'h5' || h.tag === 'h6'
                  ? 'ml-3 text-xs sm:ml-5'
                  : 'text-sm'
            }
          >
            <a
              href={`#${h.id}`}
              className="block break-words text-white/80 transition-colors hover:text-secondary"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
