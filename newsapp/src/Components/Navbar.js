import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div className="container-fluid p-2">
        <Link className="navbar-brand  fw-bold fs-4" to="/laptop">
          E Commerce
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link
                className="nav-link text-white hover-bg-light rounded px-3 py-2 transition-all"
                to="/appliances"
              >
                Appliances
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link text-white hover-bg-light rounded px-3 py-2 transition-all"
                to="/mobile"
              >
                Mobiles
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link text-white hover-bg-light rounded px-3 py-2 transition-all"
                to="/laptop"
              >
                Laptops
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link text-white hover-bg-light rounded px-3 py-2 transition-all"
                to="/tv"
              >
                Television
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link text-white hover-bg-light rounded px-3 py-2 transition-all"
                to="/gaming"
              >
                Gaming
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link text-white hover-bg-light rounded px-3 py-2 transition-all"
                to="/audio"
              >
                Audio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
