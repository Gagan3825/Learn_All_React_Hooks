import React,{useState,useContext} from 'react'
import { User_context } from './User_context'

function Child() {
    // const [counter, setcounter] = useState(1)
    const {counter,setcounter} = useContext(User_context)
  return (
    <div>
         <h1>
            Child class
        </h1>
      <h1>
        The value is: {counter}
      </h1>

      <button onClick={() => setcounter(1)}>Restart</button>
      
      <InnerChild />
    </div>
  )
}

function InnerChild() {
    // const [counter, setcounter] = useState(1)
    const {counter,setcounter} = useContext(User_context)

  return (
    <div>
         <h2>
            Inner class
        </h2>
      <h2>
        The value is: {counter}
      </h2>

      <button onClick={() => setcounter(counter - 1)}>Decrement</button>

      
    </div>
  )
}

export default Child