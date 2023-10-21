import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar  bg-base-300 xl:px-64">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Hacker News
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://avatars.githubusercontent.com/u/72511886?v=4" />
              </div>
            </label>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
