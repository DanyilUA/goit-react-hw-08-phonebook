import { Box, Heading } from "@chakra-ui/react";
import backgroundImage from '../../images/photo-1450818074504-fb9713fe584e.avif'

export default function HomePage() {
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
      <Heading
        color="white" // Text color
        fontSize="6xl" // Font size
        fontWeight="bold" // Font weight
        textAlign="center" // Text alignment
        mt={20}
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)" // Add a text shadow
      >
        PhoneBook
      </Heading>
    </Box>
  );
}
