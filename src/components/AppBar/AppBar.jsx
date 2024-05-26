import { useSelector } from "react-redux";
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import UserNav from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
export default function Header() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    return (
       <header className={css.header}>
        <Navigation></Navigation>
        {isLoggedIn ? <UserNav /> : <AuthNav/>}
       </header>
    )
}