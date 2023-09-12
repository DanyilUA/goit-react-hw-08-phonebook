import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({contact}) => {
    const dispatch = useDispatch();
     return (
       <Box>
         <Text>
           {contact.name}: <b>{contact.number}</b>
         </Text>
         <Button onClick={() => dispatch(deleteContact(contact.id))}>
           Delete
         </Button>
       </Box>
     );
}

