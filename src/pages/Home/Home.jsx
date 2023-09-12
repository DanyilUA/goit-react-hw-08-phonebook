import { Box, Container, Heading } from "@chakra-ui/react";
import backgroundImage from '../../images/e-learning-smartphone-isometric_1284-22565.avif'

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
      <Container>
        <Heading color="white">PhoneBook</Heading>
      </Container>
    </Box>
  );
}
