import { Box } from '@chakra-ui/react';
import { LogInForm } from 'components/LoginForm/LoginForm';

import backgroundImage from '../../images/vintage-typewriter-with-vase-flowers-cup-coffee_662214-49975.avif';


export default function LogInPage() {
  return (
    <Box position="relative" w="100%" minHeight="100vh" overflow="hidden">
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg={`url(${backgroundImage}) center/contain no-repeat`}
        filter="blur(3px)"
        zIndex={-1}
      />
      <LogInForm />
    </Box>
  );
}