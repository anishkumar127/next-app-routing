"use client";
import { SampleActions } from "@/actions/SampleActions";
import React, { useState, useTransition } from "react";

const Button = () => {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<any>({});
  const handleClick = async () => {
    console.log("handle click triggering...");

    // server actions function triggering.
    startTransition(async () => {
      const response = await SampleActions("Message for server");
      console.log(response);
      setResponse(response);
    });
  };
  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      <button onClick={handleClick}>Button</button>

      <pre>{JSON.stringify(response, null, 4)}</pre>
    </div>
  );
};

export default Button;
