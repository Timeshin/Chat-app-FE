import { IMessageItem } from 'interfaces/components/components.interfaces'
import { FC } from 'react'

const MessageItem: FC<IMessageItem> = ({ text, name, type, isMine }) => {

  if(type === 'action') {
    return (
      <div className='flex w-full justify-center mb-3 text-gray-400'>
        {text}
      </div>
    )
  }

  return (
    <div className={`flex flex-col gap-1 ${isMine ? 'items-end' : 'items-start'}`}>
      <h2 className='text-white'>
        {name}
      </h2>
      <p className={`
        w-fit
        max-w-[500px]
        mb-3
        py-[10px]
        px-[32px]
        rounded-3xl
        break-all
        ${isMine ?
          'bg-blue-500 text-white' :
          'bg-white text-black'
        }
      `}>
        {text}
      </p>
    </div>
  )
}

export default MessageItem