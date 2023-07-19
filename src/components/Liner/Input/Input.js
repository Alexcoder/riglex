import React from 'react';
import { useGlobalState } from '../../../state/context/Context';
import useLinerJobData from "../Hooks/useLinerJobData";

import "./Input.css";

const Input = () => {
  const { liner, setLiner } = useGlobalState();
  const {InputData}= useLinerJobData();
  
  const handleChange=(e)=>{
    const { name , value } = e.target;
    setLiner({...liner, [name]: value})
  };

 
  return (
    <main style={{marginTop:"-2rem", padding:"1rem 0rem"}}>
      <hr/>
      <section className='primary-sub'>
      { InputData.map((item, i)=>(
        <div key={i} className='primary-map'>
            <div style={{textAlign:"start"}}>{item.desc}</div>
            <input
             className={item.className}
             name={item.title}
             value={(item.value)}
             onChange={handleChange}
             type="number"            
            />
        </div>
      ))}
      </section>
      <hr/>
    </main>
  )
}

export default Input