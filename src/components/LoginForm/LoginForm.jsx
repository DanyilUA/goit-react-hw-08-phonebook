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
        <form
          action=""
          autoComplete="off"
          className="form"
          onSubmit={handleSubmit}
        >
          <label className="labelInput">
            Email
            <input type="email" name="email" variant="filled" />
          </label>
          <label className="labelInput">
            Password
            <input type="password" name="password" variant="filled" />
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
    );
};