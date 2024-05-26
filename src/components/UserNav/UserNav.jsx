import {useDispatch, useSelector} from 'react-redux'
import { selectName } from '../../redux/auth/selectors'
import css from './UserNav.module.css'
import { logout } from '../../redux/auth/operations'
export default function UserNav() {
    const dispatch = useDispatch()
    const userName = useSelector(selectName)
    const handleClick = () => {
        dispatch(logout())
    }
    return ( 
        <div className={css.wrapper}>
      <p>Hello {userName}</p>
    <button type="button" onClick={handleClick}>logout</button>
        </div>
    )
}