import { useState, useEffect } from 'react';
import { selectLoading } from '../../redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactForm from '../../components/ContactForm/ContactForm';
export default function ContactsPage() {
    const loader = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    return (
        <>
        <ContactForm></ContactForm>
        <SearchBox></SearchBox>
        <ContactList></ContactList>
        </>
    )

}