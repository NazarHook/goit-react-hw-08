import { Formik, Form, Field } from "formik"
import css from './LoginForm.module.css'
import {toast} from 'react-hot-toast'
import { nanoid } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { logIn } from "../../redux/auth/operations"

export default function LoginForm() {
    const dispatch = useDispatch()
    const emailId = nanoid()
    const passwordId = nanoid()
    const initialValues = {
        email: '' ,
        password: ''
    }
    const handleSubmit = (values, actions) => {
          dispatch(logIn(values))
          .unwrap()
          .then(reponse => {
            console.log(reponse);
            toast.success("Success!!!");
          })
          .catch(error => {
            console.log(error);
          });
        actions.resetForm();
    }
    return (
       <Formik
       initialValues={initialValues}
        onSubmit={handleSubmit}
        >
         <Form className={css.form}>
            <label htmlFor={emailId}>Email</label>
            <Field type='email' name='email' id={emailId}></Field>
            <label htmlFor={passwordId}>Password</label>
            <Field type='password' name='password' id={passwordId}></Field>
            <button type="submit">Login</button>
        </Form>
       </Formik>
    )
}