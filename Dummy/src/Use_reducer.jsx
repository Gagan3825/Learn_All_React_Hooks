// The useReducer hook is a state management hook in React that is used to manage more complex state logic in your application. It's an alternative to the more commonly used useState hook,
//  especially when dealing with state that involves multiple sub-values or has complex update logic.

import React,{useReducer,useState} from 'react'

const initalstate=[{
    name:"Gagan",
    email:"12456@gmail.com"
}]

const userReducer=(state,action)=>{
    switch (action.type) {
        case 'add':
            return [...state,action.payload]
        case 'delete':
            return state.filter((contact)=>{
                return contact.id!==action.payload.id;
            })            
    
        default:
            return state;
    }
}

function Use_reducer() {

    

    const [state, dispatch] = useReducer(userReducer,initalstate)
    const [text, settext] = useState('')
    const [texte, settexte] = useState('')

    const handlebutton=(e)=>{
        e.preventDefault();
        const contact={
            name:text,
            email:texte,
        }
        settext("");
        settexte("");
        dispatch({type:"add",payload:contact})

    }
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <form >
            <label>
            <input
            type='text'
            placeholder='Enter your name'
            name={text}
            onChange={(e)=>settext(e.target.value)}
            />
            </label><br/>
           <label >
           <input
            type='email'
            placeholder='Enter your email'
            name={texte}
            onChange={(e)=>settexte(e.target.value)}
            />
           </label><br/>
            <button onClick={handlebutton}>Submit</button>
           
            <div>
            <p>USER INFO</p>
            <ul>
                {state.map((e)=>{
                    return <li key={e.id}>
                        <h2>{e.name}</h2>
                        <h2>{e.email}</h2>
                        <button onClick={(contact)=>dispatch({type:"delete",payload:{id:contact.id}})}>Delete</button>

                    </li>
                })}
            </ul>

        </div>
           
        </form>
        
    </div>
  )
}

export default Use_reducer