import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="navbar navbar-light">
      <div className="container-fluid" style={{ background: "#0A0A0A" }}>
        <p className="text-light m-2 p-2">
          © 2021 Crada, Inc. All rights reserved
        </p>
        <div className="d-flex flex-row-reverse">
          <a class="p-2 m-2 btn btn-info rounded-pill">
            <BsFacebook />
          </a>
          <a class="p-2 m-2 btn btn-info rounded-pill">
            <BsInstagram />
          </a>
          <a class="p-2 m-2 btn btn-info rounded-pill">
            <BsTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
