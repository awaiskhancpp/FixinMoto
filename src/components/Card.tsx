import Image from 'next/image'
interface CARD {
  cardNo: number
  mainImg: string
  logoImg: string
  title: string
}

export default function Card({ cardNo, mainImg, logoImg, title }: CARD) {
  return (
    <>
      <div className="relative w-[90vw] h-100 md:w-70 rounded-[15px] overflow-hidden">
        <div className="text-white ">
          <Image src={mainImg} alt="cardimg" fill className="object-cover object-center " />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-[#292929] p-10">
            <div>{cardNo}</div>
            <div className="mt-50">
              <Image
                src={logoImg}
                alt="servicelogo1"
                width={64}
                height={64}
                className="object-contain"
              />
              <h3 className="text-lg">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
