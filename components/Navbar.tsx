import Link from "next/link";
import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-info">
      <div className="container">
        <Link className="navbar-brand" href={"/"}>
          ToT
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/productList"} className="nav-link">
                List
              </Link>
            </li>
          </ul>
          <Search title="Search" placeholder="Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
