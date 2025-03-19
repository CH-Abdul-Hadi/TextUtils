import React from "react";

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} p-3 shadow-sm`}> {/* Added subtle shadow */}
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/"> {/* Bold brand for emphasis */}
          {props.tittle}
        </a>
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
          <div className="ms-auto"> {/* Align switch to right */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "light" ? "Dark Mode" : "Light Mode"} {/* Simplified label */}
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;