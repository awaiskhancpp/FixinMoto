import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
export default function ContentForm() {
  return (
    <>
      <div>
        <h2 className=" text-4xl font-bold pb-4">Leave a Comment</h2>
        <div className="space-y-3">
          <textarea
            name=""
            id=""
            placeholder="Your Content"
            className="text-black bg-white w-full px-2 mb-2 rounded-sm py-2"
          ></textarea>
          <input
            type="text"
            placeholder="First Name"
            className="bg-white rounded-sm text-black w-full px-2 py-2"
          />
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <Image src="/appointmentForm/mail.png" alt="" width={16} height={16} className="" />
            </span>
            <input
              type="text"
              placeholder="Email"
              className="bg-white rounded-sm text-black py-2 pl-9 w-full"
            />
          </div>
          <button className="bg-secondary rounded-lg mt-4 px-8 py-[15px] text-white text-sm font-medium shadow-[0px_4px_12px_rgba(34,34,34,0.1)] flex items-center gap-2">
            Comment
            <ArrowUpRight className="size-5" />
          </button>
        </div>
      </div>
    </>
  )
}
