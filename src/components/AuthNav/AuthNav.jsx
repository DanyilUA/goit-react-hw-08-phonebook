import { Box, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
    return (
      <Flex justifyContent="flex-end">
        <Box>
          <NavLink to="/register">
            <Text
              mr={5}
              _hover={{ color: 'teal.600', textDecoration: 'underline' }}
              fontWeight={700}
              fontSize={20}
            >
              Register
            </Text>
          </NavLink>
        </Box>
        <Box>
          <NavLink to="/login">
            <Text
              _hover={{ color: 'teal.600', textDecoration: 'underline' }}
              fontWeight={700}
              fontSize={20}
            >
              Log In
            </Text>
          </NavLink>
        </Box>
      </Flex>
    );
}
