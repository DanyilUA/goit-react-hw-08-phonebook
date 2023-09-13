import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Contact } from 'components/ContactItem/ContactItem';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { List, ListItem } from '@chakra-ui/react';

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
      <List ml={10}>
        {showContacts &&
          getFilteredContacts().map(contact => (
            <ListItem
              key={contact.id}
            >
              <Contact contact={contact} />
            </ListItem>
          ))}
      </List>
    );
}

