import React from 'react'
import { useEffect,useState } from 'react'
import './Fetch.css'


function Fetch_api() {
    const [first, setfirst] = useState(null);

    const fetchMethod=async()=>{
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            console.log("response", data);
            setfirst(data); // Assuming you want to use the first photo
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
      fetchMethod();
    
     
    }, [0])
    
  return (
    <>
      <div className='container'>

         {first && <img src={first.message} alt="Dog" className='image' />}
      </div>
        {/* <h1> {first && first.map((ele, index) => (
                    <div key={index}>{ele.alt_description}</div>
                ))}</h1> */}
                <div className="buttonclass">

              <button onClick={()=>fetchMethod()} className='button'>
                Refresh
              </button>
                </div>
    </>
  )
}

export default Fetch_api