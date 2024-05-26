import { useDispatch } from 'react-redux'
import css from './Contact.module.css'
import { deleteContact } from '../../redux/contacts/operations'
export default function Contact({name, number, id}) {
    const dispatch = useDispatch()
    return (
        <div className={css.container}>
<p className={css.text}>{name}</p>
<p className={css.text}>{number}</p>
<button className={css.btn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
</div>
    )
}