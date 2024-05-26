import { Formik, Form, Field } from "formik"
import css from './RegistrationForm.module.css'
import {toast} from 'react-hot-toast'
import { nanoid } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations"
export default function RegisterForm() {
    const dispatch = useDispatch()
    const nameId = nanoid()
    const emailId = nanoid()
    const passwordId = nanoid()
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }
    const handleSubmit = (values, actions, event) => {
          dispatch(register(values))
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
            <label htmlFor={nameId}>Name</label>
            <Field type='text' name='name' id={nameId}></Field>
            <label htmlFor={emailId}>Email</label>
            <Field type='email' name='email' id={emailId}></Field>
            <label htmlFor={passwordId}>Password</label>
            <Field type='password' name='password' id={passwordId}></Field>
            <button type="submit">Register</button>
        </Form>
       </Formik>
    )
}
