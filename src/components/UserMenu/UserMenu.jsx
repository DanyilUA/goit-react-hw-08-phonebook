import { Button, Icon, Text, Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { BiLogOut } from 'react-icons/bi'; // Import the BiLogOut icon

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Flex justifyContent="flex-end">
      <Text fontWeight={400} fontSize={20} mr={3}>
        Welcome, {user.email}
      </Text>
      <Button
        type="button"
        _hover={{ cursor: 'pointer' }}  
        onClick={handleLogout}
        leftIcon={<Icon as={BiLogOut} />}  
        colorScheme="red"
        variant="solid"
        size="sm"
      >
        Logout
      </Button>
    </Flex>
  );
};
