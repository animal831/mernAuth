import React from "react";
import { Link } from "react-router-dom";
import SignIn from "../pages/SignIn";

import About from "../pages/About";
import Home from "../pages/Home";

const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to="/">
          <h1>Auth App</h1>
        </Link>

        <ul className="flex gap-10">
          <li>
            <Link to="/">
              <Home />
            </Link>
          </li>

          <li>
            <Link to="/about">
              <About />
            </Link>
          </li>
          <li>
            <Link to="/sign-in">
              <SignIn />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
