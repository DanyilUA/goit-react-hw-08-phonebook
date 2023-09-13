import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

export const LogInForm = () => {

    const dispatach = useDispatch();    
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatach(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));
        form.reset();
    };

      const labelStyle = {
        fontSize: '24px',
        fontWeight: '600',
        fontStyle: 'italic',
        color: 'white',
      };
  
    return (
      <Box ml={20} mt={20}>
        <Box maxW="480px" backgroundColor="">
          <form
            action=""
            autoComplete="off"
            className="form"
            onSubmit={handleSubmit}
          >
            <FormControl isRequired mb="20px">
              <FormLabel style={labelStyle}>Email</FormLabel>
              <Input
                type="email"
                name="email"
                variant="filled"
                placeholder="enter your email"
                ccolor="black"
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
            <Button
              type="submit"
              _hover={{ cursor: 'pointer', backgroundColor: 'lightblue' }} // Set cursor to pointer on hover
            >
              Log in
            </Button>
          </form>
        </Box>
      </Box>
    );
};