import React from "react";
import logo from "../assets/images/galogo.png";

export const NavBar = () => {
  return (
    <>
    <header className="header">
      <div className="logo__container">
        <img src={logo} alt="" className="logo" />
        <p className="name">Santiago Bestoso</p>
      </div>

      <div className="notifications__container" style={{
        marginTop: "5px"
      }}>
        <i className="bx bx-bell"></i>
      </div>
    </header>
    <div className="separation" />
    </>
  );
};
