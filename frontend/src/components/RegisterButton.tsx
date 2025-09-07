import { Link } from 'react-router-dom'
import Button from './Button'

const RegisterButton = () => {
    return (

        <Link to="/register">
            <Button text='Register' color='white' bgColor="#28a745" />

        </Link>
    )
}

export default RegisterButton
