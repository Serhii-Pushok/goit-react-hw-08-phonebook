import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";
import { selectContacts, selectError, selectIsLoading } from "redux/contacts/selectors";
import Notiflix from "notiflix";
import { ContactsList } from "../components/ContactsList/ContactsList";
import { Filter } from "../components/Filter/Filter";
import { ContactForm } from "../components/ContactForm/ContactForm";
import css from "./Contacts.module.css";


export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const items = useSelector(selectContacts);
  
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
  

    return (
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
        
            <h2 className={css.title}>Contacts</h2>
            <Filter />
            {isLoading && <div className={css.text}>Loading...</div>}
            {error &&  Notiflix.Notify.failure('Error')}
            {items.length > 0 && < ContactsList />}
      </div>
    )
}