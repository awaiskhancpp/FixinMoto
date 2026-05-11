export default function PromoCTA() {
  return (
    <section className="w-full min-h-[300px] relative flex bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black z-0 flex-1"></div>
      <div
        className="w-[45%] absolute inset-y-0 left-0 bg-red-500 "
        style={{
          clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0 100%)',
        }}
      ></div>
      <div className=" absolute inset-0 z-10 flex items-center justify-center w-[30%] h-[80%] rounded-xl">
        <div className="bg-gray-200"></div>
      </div>
    </section>
  )
}
