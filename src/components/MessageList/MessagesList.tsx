import { FC, memo, useEffect, useRef } from 'react'
import { IMessagesList } from 'interfaces/components/components.interfaces'

import { MessageItem } from 'components'
import { useLocalStorage } from 'hooks'

const MessagesList: FC<IMessagesList> = ({ messages }) => {
  const spanRef = useRef<HTMLSpanElement>(null)
  const [getName] = useLocalStorage('userName')

  useEffect(() => {
    spanRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <main className='h-[90%] p-[10px] overflow-y-scroll scrollbar scrollbar-track-[#1e1e24] scrollbar-thumb-[#6649b8]'>
      {
        messages.map(({ id, message, type }) =>
          <MessageItem
            key={id}
            text={message.text}
            type={type}
            name={message.userName}
            isMine={getName() === message.userName}
          />
        )
      }
      <span ref={spanRef} />
    </main>
  )
}

export default memo(MessagesList)