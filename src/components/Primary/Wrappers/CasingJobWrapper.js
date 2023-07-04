import { useState } from "react";
import Input from '../Input/Input';
import Result from '../Result/Result';
import { useGlobalState } from "../../../state/context/Context";
import "./styles.css";

const CasingJobWrapper = (CasingComponent, presentCsg, previousCsg, ) => {
    
  const Sub=(props)=>{
    const { wellData } = useGlobalState();
    const {
      leadExcess,
      measuredDepth,
      openHoleID,
      presentCsgID,
      presentCsgOD,
      // 
      presentCsgShoe,
      previousCsgID,
      previousCsgShoe,
      tailExcess,
      topOfFloatCollar,
      topOfLead,
      topOfTail,
    } = wellData
    
    const [viewResult, setViewResult] = useState(false);

    const check = {
      leadExcess,
      measuredDepth,
      openHoleID,
      presentCsgID,
      presentCsgOD,
      // 
      presentCsgShoe,
      previousCsgID,
      previousCsgShoe,
      tailExcess,
      topOfFloatCollar,
      topOfLead,
      topOfTail,
    }


    
    const isEmptyInput =  Object.values(wellData).some(value => value==="")
    const showResult = () =>{
        setViewResult(!isEmptyInput ? true : false)
    }

    function hasNonZeroElement(){
      for (const key in check){
        if(check.hasOwnProperty(key) && check[key]>=40){
          return true
        }
      }
      return false
    }
    console.log("hasNonZeroElement",hasNonZeroElement());

      return(
          <div style={{marginTop:"1rem", textAlign:"center", background:"white",}}>
          <h3 className="wrapper-title">{presentCsg} CASING CEMENTING</h3>
          {
           viewResult &&
          <Result 
           setViewResult={setViewResult}
          />
          }
          <Input
           presentCsg={presentCsg}
           previousCsg={previousCsg}  
          />
          <CasingComponent 
          {...props } 
          />
          <button
           className="csg-wrapper-btn"
           onClick={ showResult }
          >View Result</button>
        </div>
      )
  }
  return Sub
}

export default CasingJobWrapper;