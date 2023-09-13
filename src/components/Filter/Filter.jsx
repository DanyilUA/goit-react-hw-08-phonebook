import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterContacts } from 'redux/contacts/filterSlice';
import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

   const handleInputChange = event => {
     dispatch(filterContacts(event.currentTarget.value));
   };

        const labelStyle = {
          fontSize: '24px',
          fontWeight: '600',
          fontStyle: 'italic',
          color: 'black',
        };


  return (
    <Box maxW="480px" mb={10} mt={20} ml={10}>
      <FormControl>
        <FormLabel style={labelStyle}>
          Find contacts by name
          <Input
            type="text"
            name="filter"
            value={filter}
            onChange={handleInputChange}
            placeholder="find your contact"
            ccolor="black"
            fontSize="20px"
            letterSpacing="1.3"
            _focus={{
              backgroundColor: 'lightblue',
            }}
            variant="filled"
          />
        </FormLabel>
      </FormControl>
    </Box>
  );
}

export default Filter;
