import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Button } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Box
      textAlign="center"
      marginTop="20vh"
      fontSize="xl"
      color="red.500"
      fontWeight="bold"
    >
      <Text fontSize="4xl">Error 404</Text>
      <Text fontSize="2xl">Page not found</Text>
      <Link to="/">
        <Button colorScheme="blue" size="lg" marginTop="4">
          Back to Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
