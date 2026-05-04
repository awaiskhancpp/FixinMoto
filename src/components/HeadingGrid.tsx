interface GridName {
  pageName: string
  pageTitle: string
  pageDescription: string
  wordsToHighlight: string[]
}
export function HeadingGrid({ pageName, pageTitle, pageDescription, wordsToHighlight }: GridName) {
  const pageDescriptionArray = pageDescription.split(' ')
  let j
  return (
    <div className="grid grid-cols-12 text-white md:py-10 md:px-20 px-4 py-4">
      <div className="md:col-span-8 col-span-12">
        <p className="text-slate-400">{pageName}</p>
        <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">{pageTitle}</h1>
      </div>
      <div className="md:col-span-4 col-span-12 flex md:justify-center md:items-center md:text-center justify-start ">
        <p className="text-slate-400">{pageDescription}</p>
      </div>
    </div>
  )
}
