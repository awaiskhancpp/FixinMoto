interface GridName {
  pageName: string
  pageTitle: string
  pageDescription: string
  wordsToHighlight: string[]
}
export function HeadingGrid({ pageName, pageTitle, pageDescription, wordsToHighlight }: GridName) {
  const pageTitleArray = pageTitle.split(' ')
  let index = 0
  return (
    <div className="grid grid-cols-12 text-white md:py-10 py-4">
      <div className="md:col-span-8 col-span-12 md:w-150">
        <p className="text-white/50">{pageName}</p>
        <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">
          {pageTitleArray.map((m, i) =>
            wordsToHighlight.includes(m) ? (
              <span key={i} className="text-secondary">
                {m}{' '}
              </span>
            ) : (
              <span key={i} className="text-white">
                {m}{' '}
              </span>
            ),
          )}
        </h2>
      </div>
      <div className="md:col-span-4 col-span-12 flex md:justify-center md:items-center md:text-start justify-start ">
        <p className="text-white/70">{pageDescription}</p>
      </div>
    </div>
  )
}
