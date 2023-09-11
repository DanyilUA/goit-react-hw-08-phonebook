import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";



export const LogInForm = () => {

    const dispatach = useDispatch();    
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatach(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));
        form.reset();
    };

    return (
      <div>
        <h1>Login Page</h1>
        <form
          action=""
          autoComplete="off"
          className="form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="">
            <span>Email</span>
            <input
              type="email"
              name="email"
              variant="filled"
              placeholder="enter your email"
            />
          </label>
          <label htmlFor="">
            <span>Password</span>
            <input
              type="password"
              name="password"
              variant="filled"
              placeholder="enter your password"
              minLength={7}
            />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
};