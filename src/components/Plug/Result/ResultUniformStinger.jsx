import React from 'react';
import {useGlobalState} from "../../../state/context/Context";
import "./styles.css";


const ResultUniformStinger = ({setViewResult}) => {
  const { plug } = useGlobalState();

  return (
    <div className='plug-result-cont'
    //  style={{display:"grid", gridTemplateColumns:"Repeat(2, 1fr)", gap:"1rem", placeContent:"center", placeItems:"",}}
     >
    <div className='plug-result-cont2'>
     <span style={{textAlign:"center", marginBottom:"0rem"}}>Uniform Stinger</span>
     <div> Slurry Volume {plug.volume() || 0} bbl </div> 
     <div> Spacer Ahead {plug.volOfSpacerAhead} bbl </div>
     <div> Spacer Behind {plug.volOfSpacerBehind().toFixed(1) || 0} bbl</div>
     <div> Spacer Length {plug.spacerLength().toFixed(1) || 0} {plug.unit}</div>
     <div> Stinger Cap {(plug.stingerCap().toFixed(4))} bbl/{plug.unit}</div>
     <div> Annular Cap {(plug.annCap().toFixed(4))} bbl/{plug.unit}</div>
     <div> LengthOfCementWithPipeInside {(plug.lengthOfCementWithPipeInside()).toFixed(1) || 0} {plug.unit}</div>
     <div> Displacement { plug.displacement().toFixed(1) || 0} bbl</div>
     <button onClick={()=> setViewResult(false)}>Back</button>
    </div>
   </div>

  )
}

export default ResultUniformStinger