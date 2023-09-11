import css from './Contact.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Contact } from 'components/ContactItem/ContactItem';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

export function ContactsList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const showContacts = Array.isArray(contacts) && contacts.length > 0;

    return (
      <ul className={css.contact__list}>
        {showContacts &&
          getFilteredContacts().map(contact => (
          <li key={contact.id} className={css.contact}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    );
}

