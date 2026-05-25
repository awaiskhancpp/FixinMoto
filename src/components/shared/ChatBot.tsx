'use client'
import { MessageCircle, X, Send } from 'lucide-react'
import { useState, useRef, useEffect, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'

type Message = {
  role: 'user' | 'bot'
  text: string
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [conversationId, setConversationId] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = async () => {
    if (!text.trim()) return

    const userMessage: Message = { role: 'user', text }
    const messagePayload = text.trim()
    setMessages((prev) => [...prev, userMessage])
    setText('')
    setIsLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FAST_API}/chat/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messagePayload,
          ...(conversationId != null ? { conversation_id: conversationId } : {}),
        }),
      })

      const data = (await response.json()) as {
        detail?: string
        bot_reply?: string
        content?: string
        conversation_id?: number
      }

      if (!response.ok) {
        const detail = typeof data.detail === 'string' ? data.detail : 'Request failed'
        setMessages((prev) => prev.slice(0, -1))
        setMessages((prev) => [...prev, { role: 'bot', text: `⚠️ ${detail}` }])
        return
      }

      const reply = data.content || data.bot_reply || ''
      if (typeof data.conversation_id === 'number') {
        setConversationId(data.conversation_id)
      }

      const botMessage: Message = { role: 'bot', text: reply }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      setMessages((prev) => prev.slice(0, -1))
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: '⚠️ Something went wrong. Please try again.' },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-5 right-4 h-14 w-14 flex items-center justify-center bg-black rounded-full shadow-lg hover:bg-gray-900 transition-all z-[999] ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageCircle className="text-white size-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-5 right-4 w-80 h-100 bg-white rounded-lg shadow-xl flex flex-col z-[1000] border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 gap-2">
            <h2 className="font-semibold text-primary">FixinMoto</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X className="size-5" />
            </button>
          </div>

          <div
            className="flex-1 overflow-y-auto p-4 space-y-3"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.role === 'user' ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              placeholder="Message..."
              value={text}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              onClick={handleSubmit}
              className="p-3 bg-primary text-white rounded-lg hover:bg-gray-900"
            >
              <Send className="size-4" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
