import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "redux/auth/selectors"
import { UserMenu } from "components/UserMenu/UserMenu";
import { Box, Flex } from "@chakra-ui/react";


export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const headerStyle = {
      background: 'linear-gradient(to right, white, lightgray)',  
    };

    return (
        <Flex
          justifyContent={'space-between'}
          h={14}
          alignItems="center"
          style={headerStyle}
        >
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
    );
}