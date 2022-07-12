import LoginNav from '../navbar/LoginNav';
import "./login.css";
import React from "react";

function Login() {
  return (
    <>
      <LoginNav />
      <div className="login-bg" style={{
        backgroundImage: 'url("/images/login-background.jpg")'
      }}>
        <div className="main-body-login">
            <img src="./images/cta-logo-one.svg" alt="" className="cta-one"/>
            <a href="/home" className="singin-btn">
                GET ALL THERE
            </a>
            <p className="login-text">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
            </p>
            <img src="./images/cta-logo-two.png" alt="" className="cta-two"/>
        </div>
      </div>
    </>
  );
}

export default React.memo(Login);
