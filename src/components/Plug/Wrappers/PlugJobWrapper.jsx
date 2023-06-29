import { useState } from "react";
import Input from "../Input/Input";
import ResultUniformStinger from "../Result/ResultUniformStinger";
import ResultWithDrillPipe from "../Result/ResultWithDrillPipe";
import { useGlobalState } from "../../../state/context/Context";

const PlugJobWrapper = (Component) => {
   
   function Sub (...props){
     const [viewResult, setViewResult]= useState(false);
     const { isUniformStinger  } = useGlobalState()
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
         <button onClick={()=> setViewResult(true)}>View Result</button>
        </div>
     )
  }
  return Sub
}

export default PlugJobWrapper