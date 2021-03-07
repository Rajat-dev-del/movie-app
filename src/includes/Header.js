import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-dark py-4 px-3">
      <div className="container">
        <div className="d-flex text-white align-items-center justify-content-between">
          <div className="logo ">
            <Link className="text-dark bg-warning rounded py-2 px-4 d-inline-block" to="/">IMDb</Link>
          </div>
          <nav className="d-flex align-items-center d-none d-lg-block">
            <Link to="/" className="px-3 py-1 text-white text-decoration-none">Home</Link>
            <Link to="/About" className="px-3 py-1 text-white text-decoration-none">about</Link>
            <Link to="/Contact" className="px-3 py-1 text-white text-decoration-none">contac us</Link>
          </nav>
          <div className="menu d-block d-lg-none">menu</div>
        </div>
      </div>
    </header>
  );
}
