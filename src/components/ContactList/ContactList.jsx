import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts)
    return (
        <ul className={css.contactList}>
          {contacts.map(item => (
            <li className={css.item} key={item.id}>
                <Contact 
                name={item.name} 
                id={item.id} 
                number={item.number} 
              ></Contact>
            </li>
          ))}
        </ul>
    )
}