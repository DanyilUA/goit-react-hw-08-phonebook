import { ContactsList } from "components/Contacts/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading } from "redux/contacts/selectors";
import { useEffect } from "react";
import Filter from "components/Filter/Filter";
import Phonebook from "components/Phonebook/Phonebook";
import { Loader } from "components/Loader/Loader";


export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    return (
        <div>
        <h1>Phonebook</h1>    
        {isLoading && <Loader />}
        <Filter />
        <Phonebook />
        <ContactsList />
      </div>
    );
};
