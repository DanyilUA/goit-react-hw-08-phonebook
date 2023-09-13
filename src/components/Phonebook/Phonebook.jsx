import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Box, Button, FormLabel, Input } from '@chakra-ui/react';

export default function Phonebook() {

  const contacts = useSelector(selectContacts);

  const nameInputId = nanoid();
  const phoneInputId = nanoid();
  const dispatch = useDispatch();



  const handleFomSubmit = event => {
    event.preventDefault();
    const form = event.target; 
      const name = form.elements.name.value;
      const number = form.elements.number.value;
    const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (existingContact) {
      alert('This contact already exists.');
      return;
    }

    dispatch(addContact({
      id: nanoid(),
      name,
      number,
    }));
    
    form.reset();
  };
        const labelStyle = {
          fontSize: '24px',
          fontWeight: '600',
          fontStyle: 'italic',
          color: 'black',
        };

  return (
    <Box maxW={480}>
      <form action="" onSubmit={handleFomSubmit}>
        <FormLabel htmlFor={nameInputId} style={labelStyle}>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nameInputId}
            placeholder="contact name"
            color="black"
            fontSize="20px"
            letterSpacing="1.3"
            _focus={{
              backgroundColor: 'lightblue',
            }}
            variant="filled"
          />
        </FormLabel>
        <FormLabel htmlFor={phoneInputId} style={labelStyle}>
          Phone
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone should contain more then 5 numbers (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) ."
            required
            id={phoneInputId}
            placeholder="contact phone"
            color="black"
            fontSize="20px"
            letterSpacing="1.3"
            _focus={{
              backgroundColor: 'lightblue',
            }}
            variant="filled"
          />
        </FormLabel>
        <Button
          type="submit"
          mt={3}
          colorScheme="teal"  
          size="md"  
          fontWeight="bold" 
          _hover={{ bg: 'teal.600' }} 
        >
          Add contact
        </Button>{' '}
      </form>
    </Box>
  );
}
