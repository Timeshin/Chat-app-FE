import { useEffect, useRef, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import { useLocalStorage } from 'hooks'
import { IMessageData } from 'interfaces/hooks/hooks.interfaces'
import { ChatEvents } from 'interfaces/enums/chatEvent.enum'

const API_URL = 'http://localhost:8080'

const useChat = () => {
  const [messages, setMessages] = useState<IMessageData[]>([])
  const [getName] = useLocalStorage('userName')
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    socketRef.current = io(API_URL, {
      path: '/websockets',
      reconnectionDelayMax: 10000,
      query: {
        userName: getName()
      }
    })

    socketRef.current.on(ChatEvents.CONNECT, () => {
      if(!socketRef.current) return

      socketRef.current.on(ChatEvents.GET_MESSAGE, (message: IMessageData | IMessageData[]) => {
        setMessages(prevMessages => {
          if(Array.isArray(message)) {
            return [...prevMessages, ...message]
          }

          return [...prevMessages, message]
        })
      })
    })
    
    return () => {
      if(!socketRef.current) return

      socketRef.current.disconnect()
    }
  }, [getName])

  const sendMessage = (message: string) => {
    if(!socketRef.current) return

    socketRef.current.emit(ChatEvents.SEND_MESSAGE, {
      message,
      userName: getName()
    })
  }

  return { messages, sendMessage }
}


export default useChat
