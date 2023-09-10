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
      <div>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <span>Name</span>
            <input type="name" name="name" variant="filled" placeholder='enter your name' />
          </label>
          <label htmlFor="">
            <span>Email</span>
            <input type="email" name="email" variant="filled" placeholder='enter your email' />
          </label>
          <label htmlFor="">
            <span>Password</span>
            <input type="password" name="password" variant="filled"  placeholder='enter your password' minLength={7}/>
          </label>
          <button type="submit">register</button>
        </form>
      </div>
    );
}
