import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
      event.preventDefault();
      const form = event.currentTarget;
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    };
  
      const labelStyle = {
        fontSize: '24px',
        fontWeight: "600",
        fontStyle: 'italic',
        color: "white",
      };

    return (
      <Box ml={10}>
        <Box maxW="480px">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired mb="20px">
              <FormLabel style={labelStyle}>Name</FormLabel>
              <Input
                type="name"
                name="name"
                variant="filled"
                placeholder="enter your name"
                color="black"
                fontSize="20px"
                letterSpacing="1.3"
                _focus={{
                  backgroundColor: 'lightblue',
                }}
              />
            </FormControl>
            <FormControl isRequired mb="20px">
              <FormLabel style={labelStyle}>Email</FormLabel>
              <Input
                type="email"
                name="email"
                variant="filled"
                placeholder="enter your email"
                color="black"
                fontSize="20px"
                letterSpacing="1.3"
                _focus={{
                  backgroundColor: 'lightblue',
                }}
              />
            </FormControl>
            <FormControl isRequired mb="20px">
              <FormLabel style={labelStyle}>Password</FormLabel>
              <Input
                type="password"
                name="password"
                variant="filled"
                placeholder="enter your password"
                minLength={7}
                color="black"
                fontSize="20px"
                letterSpacing="1.3"
                _focus={{
                  backgroundColor: 'lightblue',
                }}
              />
            </FormControl>
            <Button type="submit">Register</Button>
          </form>
        </Box>
      </Box>
    );
}
