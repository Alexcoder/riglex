import React from 'react';
import { useGlobalState } from '../../../state/context/Context';
import useCsgJobData from "../Hooks/useCsgJobData";
// import {P1338} from "./utils";

import "./Input.css";

const Input = ({presentCsg, previousCsg}) => {
  const { wellData, setWellData } = useGlobalState();
  const {InputData}= useCsgJobData(presentCsg, previousCsg);
  
  const handleChange=(e)=>{
    setWellData({...wellData, [e.target.name]: e.target.value})
  };

 
  return (
    <main style={{marginTop:"-2rem", padding:"2rem 4rem"}}>
      <hr/>
      <section className='primary-sub'>
      { InputData.map((item, i)=>(
        <div key={i} className='primary-map'>
            <div>{item.desc}</div>
            <input
            disabled={item.name==="presentCsgOD" && presentCsg!=="Present"}
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