"use client";
import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log("handle click triggering...");
  };
  return <button onClick={handleClick}>Button</button>;
};

export default Button;
