import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';


export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return (
    <nav>
      { location.pathname !== '/' && (
        <NavLink className="asd" to="/">
          Home
        </NavLink>
      )}

      {isLoggedIn && location.pathname !== '/contacts' && (
        <NavLink className="asd" to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};