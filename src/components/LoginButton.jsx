import React from "react";

const LoginButton = ({ category }) => {
  // logic
  // category: 'login', 'socialLogin'

  // view
  return (
    <button
      type={category === "login" ? "submit" : "button"}
      className={`p-5 ${
        category === "login"
          ? "bg-white text-gray-600 w-full rounded-xl"
          : "w-full border border-gray-600 rounded-2xl flex items-center justify-center gap-4"
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
