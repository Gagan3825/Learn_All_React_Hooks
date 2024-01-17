import React from 'react'
import { useState } from 'react'



function Home() {
   const [count, setCount]= useState(0);

   const handleClick=() => {
   
   count? setCount(1): this.setState(0);
   }
   
   return (
   
   <div>
   
   <button onClick={handleClick}>
   
   {count? 'Click Me': 'Clicked'}
   
   </button>
   
   </div>
)   
}

export default Home