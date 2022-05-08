import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Login: React.FC = () => {
  const [mail, setMail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  return (
    <>
      <Header />
      <div className="contenidoCentral">
        <h1 className="titleLogin">Log in</h1>
        <form className="formLogin ">
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={mail}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setMail(e.currentTarget.value)
              }
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={pass}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setPass(e.currentTarget.value)
              }
            />
          </div>
          <button type="submit" className="buttonLogin btn btn-primary mb-4">
            Log In
          </button>
          <small> Forgot your password?</small>
          <small className="form-text text-muted">
            Already have an account? Sign up
          </small>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
