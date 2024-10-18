import React from "react";
const Button = (props) => {
  const { onClick, type, label } = props;
  return (
    <>
      {type === "primary" && (
        <button
          className="w-full h-10 pr-10 rounded-lg pl-10 text-white bg-yellow-300"
          onClick={onClick}
        >
          {label}
        </button>
      )}
      {type === "secondary" && (
        <button
          onClick={onClick}
          className="w-full h-10 pr-10 pl-10 rounded-lg outline-yellow-300 text-yellow-300 bg-white"
        >
          {label}
        </button>
      )}
    </>
  );
};
export default Button;
