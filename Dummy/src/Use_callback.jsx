//useCallback is another React Hook that helps to memoize a callback function, 
// preventing unnecessary re-creation of the callback on every render. It is particularly useful when you need to pass a callback to child components, and you want to ensure that the callback reference remains stable across renders.

import React, { useState, useEffect, useCallback } from "react";

function Use_callback() {
  const [counter, setcounter] = useState(1);

  const [input, setinput] = useState("");

  const displayname = useCallback(() => {
    return input;
  }, [input]);
  return (
    <>
      <h1>counter value is: {counter}</h1>
      <hr></hr>
      <button onClick={() => setcounter(counter + 1)}>increment</button>
      <hr></hr>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />

      <Displayname displayname={displayname}></Displayname>
    </>
  );
}

const Displayname = ({ displayname }) => {
  const [value, setvalue] = useState("");
  useEffect(() => {
    setvalue(displayname());
    console.log("component render");
  }, [displayname]);

  return (
    <>
      <p>My name is {value}</p>
    </>
  );
};
export default Use_callback;
