import React from 'react';
// import { useNavigate } from 'react-router-dom';
import "./styles.css"
import { useGlobalState } from '../../../state/context/Context';

const SmallDevice = () => {
    const { setCalculator, setNavSmallJobSelect } = useGlobalState()
    function toCalc(){
        setCalculator((prev)=> !prev)
    }
  return (
    <div className="small">
        <button onClick={()=> setNavSmallJobSelect((prev)=> !prev)}>Job Type</button>
        <button onClick={toCalc}>Calculator</button>
    </div>
  )
}

export default SmallDevice