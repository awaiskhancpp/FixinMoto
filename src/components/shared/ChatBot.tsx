'use client'
import { MessageCircle, X, Send } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

type Message = {
  role: 'user' | 'bot'
  text: string
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = async () => {
    if (!text) return

    const userMessage: Message = { role: 'user', text }
    setMessages((prev) => [...prev, userMessage])
    setText('')

    try {
      setIsLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_FAST_API}/chat/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })
      setIsLoading(false)

      const data = await response.json()
      const botMessage: Message = { role: 'bot', text: data.bot_reply }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`h-[60px] w-[60px] fixed bottom-5 right-4 flex justify-center items-center bg-white z-[1000] rounded-full ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageCircle className="text-secondary size-10" />
      </div>

      {isOpen && (
        <div className="h-100 w-80 fixed bottom-5 right-4 flex pt-2 justify-center items-center bg-primary/70 z-[1000] rounded-lg">
          <div className="relative w-full h-full">
            <X
              onClick={() => setIsOpen(false)}
              className="text-white/50 absolute top-1 right-2 cursor-pointer"
            />

            <div className="flex flex-col w-full h-full">
              <div
                className="flex-1 overflow-y-auto flex flex-col gap-2 mx-2 mt-7"
                style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-[80%] px-3 mx-2 py-1 rounded-md text-white ${
                      msg.role === 'user' ? 'bg-secondary/80 self-end' : 'bg-white/30 self-start'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                {isLoading && (
                  <div className="bg-white/30 self-start px-3 py-1 rounded-md">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-white/70 rounded-full animate-bounce"></div>
                      <div
                        className="w-1 h-1 bg-white/70 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-white/70 rounded-full animate-bounce"
                        style={{ animationDelay: '0.4s' }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center relative mt-2 mx-2 my-2">
                <input
                  type="text"
                  placeholder="Type your query"
                  value={text}
                  onChange={handleInputChange}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  className="bg-white rounded-md py-1 pl-2 pr-8 w-full"
                />
                <Send
                  className="text-secondary absolute right-2 size-5 cursor-pointer"
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
