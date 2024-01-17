// 1.Dom reference
// 2. useRef for storing the previous state
// 3. hold mutable value prevent re-render Of component
import React, { useRef, useState, useEffect } from "react";

function Use_Ref() {
  const [count, setcount] = useState(0);
  const previousstate = useRef("");

  useEffect(() => {
    previousstate.current = count;
  }, [count]);

  const Restart=()=>{
    setcount(0);
    previousstate.current=0
  }
  return (
    <div>
      <h1>Generate random value :{count}</h1>
      {typeof previousstate.current !== "undefined" && (
        <h2>Store previous value:{previousstate.current}</h2>
      )}
      <button onClick={() => setcount(Math.ceil(Math.random() * 100))}>
        Generate
      </button>
      <button onClick={Restart}>
        Restart
      </button>
    </div>
  );
}

export default Use_Ref;
