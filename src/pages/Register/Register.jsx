import { Box} from "@chakra-ui/react";
import { RegisterForm } from "components/RegisterForm/Register";
import backgroundImage from '../../images/photo-1432821596592-e2c18b78144f.avif';


const RegisterPage = () => {
    return (
      <Box position="relative" w="100%" h={800} overflow="hidden">
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg={`url(${backgroundImage}) center/cover no-repeat`}
          filter="blur(3px)"
          zIndex={-1}
        />
        <RegisterForm />
      </Box>
    );
};

export default RegisterPage;
