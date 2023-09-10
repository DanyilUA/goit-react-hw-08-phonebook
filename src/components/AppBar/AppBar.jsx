import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "redux/auth/selectors"
import { UserMenu } from "components/UserMenu/UserMenu";


export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}