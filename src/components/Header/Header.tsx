import { useLocalStorage } from 'hooks'
import { Button } from 'components'
import { useNavigate } from 'react-router'

const Header = () => {
  const [getName, setName] = useLocalStorage('userName')
  const navigate = useNavigate()

  const onSignOutHandler = () => {
    setName('')

    navigate('/auth')
  }

  return (
    <header className='bg-[#181717] p-[10px] flex justify-end min-h-[72px]'>
      {
        getName() && (
          <Button onClick={onSignOutHandler}>
            Sign Out
          </Button>
        ) 
      }
    </header>
  )
}

export default Header