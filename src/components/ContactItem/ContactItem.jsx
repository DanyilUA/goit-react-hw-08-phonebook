import { Flex, Text, IconButton } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { DeleteIcon } from '@chakra-ui/icons';


export const Contact = ({contact}) => {
    const dispatch = useDispatch();
     return (
       <Flex
         maxW="480px"
         bgColor="white"
         borderRadius="7px"
         p="4"
         alignItems="center"
         boxShadow="base"
         justifyContent="space-between"
         mt={5}
       >
         <Flex justifyContent={'center'}>
           <Text fontWeight="bold" fontSize="lg" mr={5}>
             {contact.name}:
           </Text>
           <Text color="gray.500" fontSize="lg">
             {contact.number}
           </Text>
         </Flex>
             <IconButton
           aria-label={`Delete ${contact.name}`}
           icon={<DeleteIcon />}
            colorScheme="red"
           onClick={() => dispatch(deleteContact(contact.id))}
         />
       </Flex>
     );
}

