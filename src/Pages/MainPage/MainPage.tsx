import { ChangeEvent, MouseEvent, useState } from 'react'
import { Button, MessagesList } from 'components'
import { useChat } from 'hooks'

const MainPage = () => {
  const [value, setValue] = useState('')
  const {
    messages,
    sendMessage
  } = useChat()

  const onSendMessageHandler = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!value.trim()) return

    sendMessage(value)
    setValue('')
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <section className='w-full h-[90vh] bg-secondary flex flex-col justify-between'>
      <MessagesList messages={messages} />
      <form
        onSubmit={onSendMessageHandler}
        className='h-[10%] w-full flex items-center'
      >
        <input
          type='text'
          onChange={onChangeHandler}
          value={value}
          className='h-full w-[90%] text-2xl'
        />
        <Button
          type='submit'
          className='h-full !bg-[#38388f]'
        >
          Send
        </Button>
      </form>
    </section>
  )
}

export default MainPage