import React from "react";

const LoginButton = ({ category }) => {
  console.log("🚀 category:", category);
  // logic
  // category: 'login', 'socialLogin'

  // view
  // TODO: type props로 받아서 할당
  return (
    <button
      type={category === "login" ? "submit" : "button"}
      className={`p-5 ${
        category === "login" ? "bg-white text-gray-600 w-full rounded-xl" : ""
      }`}
    >
      {category === "socialLogin" && (
        <img src="./images/google.svg" alt="google로고" />
      )}
      {category === "login" ? "Login" : "Continue with Google"}
    </button>
  );
};

export default LoginButton;
