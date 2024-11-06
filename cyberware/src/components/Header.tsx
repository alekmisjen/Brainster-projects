import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <header className="fixed-top header nav-bg">
      {/* <!-- top header --> */}
      <div className="top-header py-2 bg-white">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4 text-center text-lg-left">
              <Link href="/" className="navbar-brand">
                <img src="/images/cyberware-logo.png" alt="logo" />
              </Link>
              <ul className="list-inline d-inline">
                <li className="list-inline-item mx-0">
                  <Link className="d-inline-block p-2 text-color" href="#">
                    Emergency Response Plan
                  </Link>
                </li>
                <li className="list-inline-item mx-0">
                  <Link className="d-inline-block p-2 text-color" href="#">
                    Support
                  </Link>
                </li>

                <li className="list-inline-item mx-0">
                  <Link
                    className="d-inline-block p-2 text-color"
                    href="#"
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- navbar --> */}
      {/* <div className="navigation w-100">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <Link href="/" className="navbar-brand">
              <img src="/images/logo.png" alt="logo" />
            </Link>
            <button
              className="navbar-toggler rounded-0"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navigation">
              <ul className="navbar-nav ml-auto text-center">
                <li className={`nav-item ${asPath === "/" ? "active" : ""}`}>
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li
                  className={`nav-item ${asPath === "/about" ? "active" : ""}`}
                >
                  <Link href="/about">About</Link>
                </li>
                <li
                  className={`nav-item ${
                    asPath === "/courses" ? "active" : ""
                  }`}
                >
                  <Link href="/courses" className="nav-link">
                    COURSES
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    asPath === "/contact" ? "active" : ""
                  }`}
                >
                  <Link href="/contact" className="nav-link"></Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
