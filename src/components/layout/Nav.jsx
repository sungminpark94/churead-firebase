import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  // logic

  // view
  return (
    <div className="flex justify-center fixed bottom-0 bg-churead-gray-800 w-full">
      <Link to="/" className="p-6">
        <img src="./images/icon-home.svg" alt="Home으로 가기" />
      </Link>
      <Link to="/post" className="p-6">
        <img src="./images/icon-home.svg" alt="Home으로 가기" />
      </Link>
      <Link to="/profile" className="p-6">
        <img src="./images/icon-home.svg" alt="Home으로 가기" />
      </Link>
    </div>
  );
};

export default Nav;
