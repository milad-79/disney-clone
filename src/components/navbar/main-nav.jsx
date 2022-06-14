import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./main-nav.css";
import MobileNav from "./mobile-nav";

function MainNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  window.addEventListener("resize", () => {
    setOpen(false);
  });

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userDisney");
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <>
      <header className="main-header">
        <div
          className="main-header-left"
          style={{
            gap: "20px",
          }}
        >
          <div className="main-logo-body">
            <img src="/images/logo.svg" alt="" className="logo-main" />

            <button className="menu-btn" onClick={() => setOpen(!open)}>
              <img src="/images/menu.png" alt="" className="menu-icon" />
            </button>
          </div>
          <div className="links">
            <ul className="ul-links">
              <Link to="/home">
                <li className="link">
                  <img
                    className="icon-link"
                    src="/images/home-icon.svg"
                    alt=""
                  />
                  <span className="text-link">HOME</span>
                </li>
              </Link>

              <li className="link">
                <img
                  className="icon-link"
                  src="/images/search-icon.svg"
                  alt=""
                />
                <span className="text-link">SEARCH</span>
              </li>

              <li className="link">
                <img
                  className="icon-link"
                  src="/images/watchlist-icon.svg"
                  alt=""
                />
                <span className="text-link">WATCHLIST</span>
              </li>

              <li className="link">
                <img
                  className="icon-link"
                  src="/images/orIginal-icon.svg"
                  alt=""
                />
                <span className="text-link">ORIGINALS</span>
              </li>

              <li className="link">
                <img
                  className="icon-link"
                  src="/images/movie-icon.svg"
                  alt=""
                />
                <span className="text-link">MOVIES</span>
              </li>

              <li className="link">
                <img
                  className="icon-link"
                  src="/images/series-icon.svg"
                  alt=""
                />
                <span className="text-link">SERIES</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-header-right">
          <div className="user-icon" onClick={handleSingOut}>
            <img
              src="https://randomuser.me/api/portraits/women/50.jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </header>
      {open ? <MobileNav /> : null}
    </>
  );
}

export default React.memo(MainNav);
