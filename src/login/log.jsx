import { useEffect } from "react";
import "./login.css";
import { useNavigate } from 'react-router-dom';
import { TEMP_USERS } from '../Data/temp_data';
const Login = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.user !== null) {
      navigate('/');
    }
  }, [props.user]);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = TEMP_USERS.find((user) => user.email === email && user.password === password);

    if (user) {
      if(user.role==="admin")
      {
        props.onLogin(user);
      navigate('/admin', { replace: true });
      }
      else
      {
        props.onLogin(user);
      navigate('/', { replace: true });
      }
      
    } else {
      alert("I don't know you, Go Away");
    }
  }


  return (
    <div className="LoginContainer">

    
    <div className="login-form">
    <div className="logo"><img src="images/logo.png" alt=""/></div>


    <div className="sign">
        <h6>

     Sign in with an Epic Game Account
        </h6>
    </div>

    <form  onSubmit={handleLogin}
    
    >
      <div className="textbox">
        <input name="email" type="text" placeholder="Email Address"/>
        <span className="check-message hidden">Required</span>
      </div>

      <div className="textbox">
        <input name="password" type="password" placeholder="Password"/>
        <span className="check-message hidden">Required</span>
      </div>

      <div className="options">
        <label className="remember-me">
          <span className="checkbox">
            <input type="checkbox"/>
            <span className="checked"></span>
          </span>
          Remember me
        </label>

        <a href="#">Forgot Your Password</a>
      </div>

      <input type="submit" value="Log In Now" className="login-btn" />
      <div className="privacy-link">
        <a href="#">Privacy Policy</a>
      </div>
    </form>

    <div className="dont-have-account">
      Don't have an Epic Games account?
      <a href="#">Sign Up</a>
    </div>
  </div>
  </div>
  );
};
export default Login;
