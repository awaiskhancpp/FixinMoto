interface GridName {
  pageName: string
  pageTitle: string
  pageDescription: string
  wordsToHighlight: string[]
}
export function HeadingGrid({ pageName, pageTitle, pageDescription, wordsToHighlight }: GridName) {
  return (
    <div className="grid grid-cols-12 text-white py-10 px-10">
      <div className="md:col-span-8 col-span-12">
        <p className="text-slate-400">{pageName}</p>
        <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">{pageTitle}</h1>
      </div>
      <div className="md:col-span-4 col-span-12 flex justify-center items-center text-center ">
        <p className="text-slate-400">{pageDescription}</p>
      </div>
    </div>
  )
}
