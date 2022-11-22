import { ChangeEvent, FormEvent, useState } from 'react'
import { useLocalStorage } from 'hooks'
import { useNavigate } from 'react-router'
import UserService from 'services/user'

import { Button, Loader } from 'components'

const AuthPage = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [ , setName] = useLocalStorage('userName')
  const navigate = useNavigate()

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSignInHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!value.trim() || value.trim().length < 3 || value.trim().length > 20) {
      setError('Wrong name')
      return
    }
    
    try {
      setIsLoading(true)
      const isNameExist = await UserService.checkIsValidName(value.trim())

      if(isNameExist) {
        setError('This name is already exist')
        return
      }

      setName(value.trim())
      setValue('')
      setError('')
      navigate('/')
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className='w-full h-full flex items-center justify-center bg-secondary'>
      <form
        className='flex flex-col gap-3'
        onSubmit={onSignInHandler}
      >
        <input
          type='text'
          value={value}
          onChange={onChangeHandler}
          className={`${error ? 'border-[red] border' : ''} h-full`}
        />
        <p className='text-red-700'>
          {
            error && error
          }
        </p>
        <Button type='submit' className='h-[52px]'>
          {
            isLoading ? <Loader /> : 'Sign In'
          }
        </Button>
      </form>
    </section>
  )
}

export default AuthPage