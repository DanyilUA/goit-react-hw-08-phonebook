import { Box, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
    return (
      <Flex justify={'space-between'}>
        <Box w="150px" mr="20px">
          <NavLink className="asd" to="/register">
            Register
          </NavLink>
        </Box>
        <Box>
          <NavLink className="asd" to="/login">
            Log In
          </NavLink>
        </Box>
      </Flex>
    );
}