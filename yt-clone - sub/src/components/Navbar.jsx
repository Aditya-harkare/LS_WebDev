import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const watchLater = JSON.parse(sessionStorage.getItem("watchLater") || "[]");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger bg-gradient px-4">
      <Link className="navbar-brand fs-2 fw-bold " to="/">▶️ MyTube</Link>
      <div className="ms-auto d-flex align-items-center">
        <input type="text" className="form-control me-3" placeholder="Search videos..." />
        <Link to="/watch-later" className="btn btn-outline-light bg-light text-dark w-100 fw-bolder">
          Watch Later <span className="badge bg-dark text-dark">{watchLater.length}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;