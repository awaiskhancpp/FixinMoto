import Image from 'next/image'
export default function FixinMotoAction() {
  return (
    <div className="w-full h-screen relative ">
      <Image src="/heroImg.png" alt=".." fill className="object-cover object-center" />
      <div className="absolute inset-0 flex justify-center items-center ">
        <Image src="/PlayButton.png" alt="..." width={64} height={64} className="" />
      </div>
      <div className="absolute inset-0 flex justify-start items-end px-10 py-10 ">
        <h3 className="text-white bg-secondary inline-block text-5xl skew-x-[-6deg] px-1">
          See FixinMoto in Action
        </h3>
      </div>
    </div>
  )
}
