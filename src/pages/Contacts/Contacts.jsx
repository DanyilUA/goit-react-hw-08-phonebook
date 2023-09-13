import { ContactsList } from "components/Contacts/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading } from "redux/contacts/selectors";
import { useEffect } from "react";
import Filter from "components/Filter/Filter";
import Phonebook from "components/Phonebook/Phonebook";
import { Loader } from "components/Loader/Loader";
import { Box, Heading } from "@chakra-ui/react";

import backgroundImage from '../../images/vintage-typewriter-old-wooden-desk_627494-648.avif';


export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

        const labelStyle = {
          fontWeight: '600',
          fontStyle: 'italic',
          color: 'black',
        };


    return (
      <Box position="relative" w="100%" minHeight="100vh" overflow="hidden">
        <Heading mb={10} style={labelStyle}>
          Phonebook
        </Heading>

        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg={`url(${backgroundImage}) center/cover no-repeat`}
          filter="blur(2px)"
          zIndex={-1}
        />
        {isLoading && <Loader />}
        <Filter />

        <Phonebook />
        <ContactsList />
      </Box>
    );
};
