"use client";
import React, { useEffect } from "react";

const Button = ({ children }) => {
  useEffect(() => {
    console.log("Button Mounted");
  }, []);
  return <div>{children}</div>;
};

export default Button;
