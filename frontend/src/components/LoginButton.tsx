import { Link } from 'react-router-dom'
import Button from './Button'

const LoginButton = () => {
  return (
      <Link to="/login">
        <Button text='Login' color='white' bgColor="#007bff" />

      </Link>
  )
}

export default LoginButton
