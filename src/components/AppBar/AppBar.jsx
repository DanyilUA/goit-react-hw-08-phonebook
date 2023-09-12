import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "redux/auth/selectors"
import { UserMenu } from "components/UserMenu/UserMenu";
import { Flex, Box, Container } from "@chakra-ui/react";


export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
      <Container>
        <Flex bg="purple.100" w="200px" justify="space-evenly">
          <Box>
            <Navigation />
          </Box>
          {isLoggedIn ? (
            <Box>
              <UserMenu />
            </Box>
          ) : (
            <Box>
              <AuthNav />
            </Box>
          )}
        </Flex>
      </Container>
    );
}