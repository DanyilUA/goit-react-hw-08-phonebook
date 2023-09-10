import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
          register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        );
        form.reset();
    };

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Name
          <input type="name" name="name" variant="filled" />
        </label>
        <label htmlFor="">
          Email
          <input type="email" name="email" variant="filled" />
        </label>
        <label htmlFor="">
          Password
          <input type="password" name="password" variant="filled" />
        </label>
        <button type="submit"></button>
      </form>
    );
}
