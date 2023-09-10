import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav>
            <NavLink className="asd" to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className='asd' to="/contacts" >
                    Contacts
                </NavLink>
            )}
        </nav>
    )
}