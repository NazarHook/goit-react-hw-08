import LoginForm from "../../components/LoginForm/LoginForm";
import css from './LoginPage.module.css'
export default function LoginPage() {
    return (
        <div>
        <p className={css.text}>Log into your account</p>
        <LoginForm></LoginForm>
       </div>
    )
}