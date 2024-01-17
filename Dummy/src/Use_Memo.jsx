//optimise expensive computational tasks
//useMemo is a React Hook that memoizes the result of a function 
// so that the result is cached and only recomputed when the dependencies change
import React from 'react'
import { useState,useMemo } from 'react'

function Use_Memo() {
  const [counter, setcounter] = useState(1)
  const result=useMemo(()=>{
    return factorial(counter)
  },[counter]);
  const [input, setinput] = useState("")
  return (
    <>
        <h1 >Factorial value of {counter}is:<span>{result}</span></h1>
        <hr></hr>
        <button onClick={()=>setcounter(counter+1)}>increment</button>
        <hr></hr>
        <input
        type='text'
        value={input}
        onChange={(e)=>setinput(e.target.value)}
        />

        <p>this is {input}</p>
    </>
  )
}

function factorial(n){
    let i=0;
    while(i<20000000)i++;
   if(n===1)return 1;

   return n*factorial(n-1);
}

export default Use_Memo