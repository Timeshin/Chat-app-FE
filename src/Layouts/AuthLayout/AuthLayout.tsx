import { useEffect } from 'react'
import { useLocalStorage } from 'hooks'
import { Outlet, useNavigate, useMatch } from 'react-router'
import { Header } from 'components'

const AuthLayout = () => {
  const [getName] = useLocalStorage('userName')
  const match = useMatch('/auth')
  const naviagte = useNavigate()

  useEffect(() => {
    if(!getName()) {
      naviagte('auth')
      return
    }

    if(match) {
      naviagte('/', { replace: true })
    }
  }, [getName, match, naviagte])

  return (
    <div className='w-screen h-screen flex justify-center pb-5'>
      <div className='max-w-[720px] w-full flex flex-col'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
