import React from "react";

const TextLink = (props) => {
  const { label, use, OnClick, chosen } = props;

  return (
    <>
      {use === "primary" && (
        <a
          style={{ cursor: "pointer" }}
          className={`text-link text-yellow-${chosen ? "100" : "500"}`}
          onClick={OnClick}
        >
          {label}
        </a>
      )}
      {use === "secondary" && (
        <div
          style={{ cursor: "pointer" }}
          className={`text-link text-${chosen ? "white" : "black"} `}
          onClick={OnClick}
        >
          {label}
        </div>
      )}
    </>
  );
};

export default TextLink;
