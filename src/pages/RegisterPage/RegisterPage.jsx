import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from './RegisterPage.module.css'
export default function RegisterPage() {
  return (
    <div>
    <p className={css.text}>Register your page</p>
    <RegistrationForm></RegistrationForm>
</div>
  ) 
}