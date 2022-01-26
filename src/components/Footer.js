import React from "react";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <p className="text-light">© 2021 Crada, Inc. All rights reserved</p>
        <BsFacebook />
        <a className="navbar-brand" href="#">
          <img
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
