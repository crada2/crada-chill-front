import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="container" style={{ height: "7rem" }}>
      <div className="container2">
        <Link className="navbar-R" href="#" to="/">
          {/* <img
            src={require("../assets/img/logoCradaChill.png")}
            alt=""
            width="520"
          /> */}
        </Link>
        <Link className="navbar-R" href="#" to="/">
          <img
            src={require("../assets/img/palomitass.png")}
            alt=""
            width="80"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
