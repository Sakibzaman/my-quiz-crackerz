import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="bg-slate-800 py-5 md:flex justify-between ">
      <h3 className="text-orange-500 text-3xl md:px-4">Quiz Master</h3>
      <div className="header-item">
        <div className="text-white text-lg grid md:flex ">
          <Link to="/">Home</Link>
          <Link to="/">Topic</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
