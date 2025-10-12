import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="row justify-content-end rest">
        <div className="col-lg-8 rest">
          <ul className="navbar-nav main-bg d-flex justify-content-end">
            <li className="nav-item">
              <a href="#0" data-scroll-nav="2">
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#0" data-scroll-nav="3">
                <span>Releases</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#0" data-scroll-nav="4">
                <span>Demo Submission</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#0" data-scroll-nav="5">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
