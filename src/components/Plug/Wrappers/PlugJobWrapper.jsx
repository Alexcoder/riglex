import { useState } from "react";
import Input from "../Input/Input";
import ResultUniformStinger from "../Result/ResultUniformStinger";
import ResultWithDrillPipe from "../Result/ResultWithDrillPipe";
import { useGlobalState } from "../../../state/context/Context";

const PlugJobWrapper = (Component) => {
   
   function Sub (...props){
     const [viewResult, setViewResult]= useState(false);
     const { isUniformStinger, plug  } = useGlobalState();
     const {
      zoneId,
      length,
      stingerOD,
      // OHE,
      stingerID,
      stingerLength,
      // slurryYield,
      volOfSpacerAhead,
      bottom,  
      drillPipeID,
      drillPipeOD,
      dpOuterZoneId,     
     } = plug ;

     const  plugSwitch = () =>{
      if(isUniformStinger){
         return {
            zoneId,
            length,
            stingerOD,
            // OHE,
            stingerID,
            // slurryYield,
            volOfSpacerAhead,
            bottom,  
         }
      }
      else {
         return {
            zoneId,
            length,
            stingerOD,
            // OHE,
            stingerID,
            stingerLength,
            // slurryYield,
            volOfSpacerAhead,
            bottom,  
            drillPipeID,
            drillPipeOD,
            dpOuterZoneId,     
         }
      }
     };
     
     const view = ()=>{
       const isEmptyInput = Object.values(plugSwitch()).some(value=> value==="");
       setViewResult(!isEmptyInput ? true : false)
     }
     console.log(plugSwitch());

     return(
        <div style={{marginTop:"0rem"}}>
         { 
          (isUniformStinger && viewResult)  ?
         <ResultUniformStinger 
         setViewResult={setViewResult}
         /> : null
         }
         { 
          (!isUniformStinger && viewResult)  ?
         <ResultWithDrillPipe 
         setViewResult={setViewResult}
         /> : null
         }
         <Input />
         <Component {...props} />
         <div style={{textAlign:"center"}} >
         <button onClick={view}>View Result</button>
         </div>
        </div>
     )
  }
  return Sub
}

export default PlugJobWrapper