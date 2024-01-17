import React from "react";
import { useState } from "react";
import Child from "./Child";
import { User_context } from "./User_context";

function Parent() {
  const [counter, setcounter] = useState(1);
  return (
    <div>
        <h1>
            Parent class
        </h1>
      <h1>
        The value is: {counter}
      </h1>
       
      <button onClick={() => setcounter(counter + 1)}>increment</button>
      <hr></hr>
      <User_context.Provider value={{counter,setcounter}}>
      <Child />

      </User_context.Provider>
    </div>
  );
}

export default Parent;
