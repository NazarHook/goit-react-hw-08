import css from './HomePage.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
export default function HomePage() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <div className={css.wrapper}>
        <p className={css.msg}>{isLoggedIn ? 'Welcome to our application, now you can check your contact list' : 'Hello please login or register to have an access to your account'}</p>
        </div>
    )
}