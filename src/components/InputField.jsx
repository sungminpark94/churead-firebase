import React from "react";

const InputField = ({ type, field }) => {
  return (
    <input
      type={type}
      name={field}
      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
      className="block rounded-xl border border-gray-800 w-full bg-churead-gray-800 text-white placeholder-churead-gray-600 p-5"
    />
  );
};

export default InputField;
