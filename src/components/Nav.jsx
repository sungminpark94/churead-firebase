import React from "react";

const Nav = () => {
  // logic

  // view
  return (
    <div className="flex justify-center fixed bottom-0 bg-churead-gray-800 w-full">
      <button type="button" className="p-6 active:bg-churead-blue">
        <img src="./images/icon-home.svg" alt="Home으로 가기" />
      </button>
      <button type="button" className="p-6 active:bg-churead-blue">
        <img src="./images/icon-home.svg" alt="Home으로 가기" />
      </button>
      <button type="button" className="p-6 active:bg-churead-blue">
        <img src="./images/icon-home.svg" alt="Home으로 가기" />
      </button>
    </div>
  );
};

export default Nav;
