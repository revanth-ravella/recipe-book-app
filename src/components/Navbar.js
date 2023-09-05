import React from "react";
import "./navbar.css";
import curtly from "../assests/cutlery.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="nounder">
        <div className="logo-heading">
          <p>RecipeHub</p>
          <img src={curtly} className="logo" alt="logo-name" />
        </div>
      </Link>
      <div>
        <Link to="/Home">
          <p className="home-link">Home</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
