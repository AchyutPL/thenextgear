import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const show = () => {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show");
    let newa = document.querySelector(".new");
    newa.classList.toggle("opacitynew");
  };
  return (
    <>
      <div
        className="navbar"
        style={{
          backgroundImage:
            " linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.8)), url(/bike1.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="logo">
          <a href="/">
            <img src="/logo.jpg" alt="" />
          </a>
        </div>
        <div className="new">
          <div className="rider naya1">
            <Link to="/about">About Us</Link>
          </div>
          <div className="rider naya2">
            <Link to="/">Home</Link>
          </div>
          <div className="rider naya1">
            <Link to="/blogs">Blogs</Link>
          </div>
          <div className="rider naya1">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="burger" onClick={show}>
          <div className=" sameline line1"></div>
          <div className=" sameline line2"></div>
          <div className=" sameline line3"></div>
        </div>
      </div>
    </>
  );
}
