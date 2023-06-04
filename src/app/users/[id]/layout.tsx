import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <h1>User By Id Header</h1>
      {children}
      <h1>User By Id Footer</h1>
    </div>
  );
}
