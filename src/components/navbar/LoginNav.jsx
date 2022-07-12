import "./login-nav.css";
import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
function LoginNav() {
  const provider = new GoogleAuthProvider();
  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  const navigate = useNavigate();
  
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem('userDisney',JSON.stringify(user))
        navigate('/home')
      })
      .catch(() => {
        alert('login not success')
      });
  };

  return (
    <header className="header-login">
      <div className="logo-login-body">
        <img src="./images/logo.svg" alt="" className="logo-login" />
      </div>
      <div className="login-btn-body">
        <button className="login-btn" onClick={handleLogin}>LOGIN</button>
      </div>
    </header>
  );
}

export default React.memo(LoginNav);
