import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="masthead" style={{ height: "25rem" }}>
      <div className="container">
        <h1>Recommend your favorite movie</h1>
        <Link
          className="btn btn-danger btn-xl text-uppercase js-scroll-trigger"
          to="/form"
        >
          Add Movie
        </Link>
      </div>
    </header>
  );
};

export default Hero;
