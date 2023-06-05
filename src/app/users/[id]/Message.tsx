"use client";
import React, { useEffect } from "react";

const Message = ({ children }) => {
  console.log("this is client components");
  useEffect(() => {
    console.log("Components Mount");
  }, []);
  return <div>{children}</div>;
};

export default Message;
