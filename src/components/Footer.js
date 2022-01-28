import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="navbar navbar-light">
      <div className="container-fluid d-flex justify-content-between">
        <p className="text-light m-2 p-2">
          © 2021 Crada, Inc. All rights reserved
        </p>
        <div className="d-flex flex-row-reverse">
          <a className="p-3 btn-outline-danger rounded-circle">
            <BsFacebook />
          </a>
          <a className="p-3 btn-outline-danger rounded-circle">
            <BsInstagram />
          </a>
          <a className="p-3 btn-outline-danger rounded-circle">
            <BsTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
