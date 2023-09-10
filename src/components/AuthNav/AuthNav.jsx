import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
    return (
        <div>
            <NavLink className='asd' to="/register">
                Register
            </NavLink>
            <NavLink className='asd' to="/login">
                Log In
            </NavLink>
        </div>
    )
}