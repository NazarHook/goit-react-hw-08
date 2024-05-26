import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'
import * as Yup from 'yup'
import { addContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
const nameId = nanoid()
const numberId = nanoid()
const initialValues = {
    name: "",
    number: ""
  };
  const contactSchema = Yup.object().shape({
   name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
   number: Yup.number().min(3, 'Too Short!').required('Required')
  })
export default function ContactForm() {
    const dispatch = useDispatch()
    const handleSubmit = (values, actions) => {
        const newContact = {
            name: values.name,
            number: values.number,
          };
          dispatch(addContact(newContact));
        actions.resetForm();
    };
    return (
        <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
        >
        <Form className={css.form}>
            <label htmlFor={nameId}>Name</label>
            <Field type='text' name='name' id={nameId}></Field>
            <ErrorMessage className={css.error} name="name" component="span" />
            <label htmlFor={numberId}>Number</label>
            <Field type='number' name='number' id={numberId}></Field>
            <ErrorMessage className={css.error} name="number" component="span" />
            <button type="submit">Add contact</button>
        </Form>
           </Formik>
    )
}