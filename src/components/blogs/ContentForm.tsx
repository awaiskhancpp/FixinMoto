'use client'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Mail, CircleUserRound } from 'lucide-react'

interface ContentFormProps {
  blogId: Number
}

export default function ContentForm({ blogId }: ContentFormProps) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!firstName || !email || !content) {
      toast.error('Please fill all fields')
      return
    }

    try {
      setIsSubmitting(true)
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ firstName, email, content, blogId }),
      })

      if (response.ok) {
        toast.success('Comment posted!')
        setFirstName('')
        setEmail('')
        setContent('')
      } else {
        toast.error('Failed to post comment')
      }
    } catch (e) {
      toast.error('Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold pb-7">Leave a Comment</h2>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2">
                <CircleUserRound className="text-secondary" />
              </span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="bg-white rounded-sm text-black w-full px-2 py-2 pl-9"
              />
            </div>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2">
                <Mail className="text-secondary" />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-white rounded-sm text-black py-2 pl-9 w-full"
              />
            </div>
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Your Content"
            className="text-black bg-white w-full px-2 mb-2 rounded-sm py-2"
          />
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-secondary rounded-lg mt-4 px-8 py-[15px] text-white text-sm font-medium shadow-[0px_4px_12px_rgba(34,34,34,0.1)] flex items-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? 'Posting...' : 'Comment'}
            <ArrowUpRight className="size-5" />
          </button>
        </div>
      </div>
    </>
  )
}
