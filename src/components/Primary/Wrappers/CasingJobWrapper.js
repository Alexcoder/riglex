import { useState } from "react";
import Input from '../Input/Input';
import Result from '../Result/Result';
import { useGlobalState } from "../../../state/context/Context";
import "./styles.css";

const CasingJobWrapper = (CasingComponent, presentCsg, previousCsg, ) => {
    
  const Sub=(props)=>{
    const { wellData } = useGlobalState();
    const {
      // leadExcess,
      // measuredDepth,
      // openHoleID,
      presentCsgID,
      // presentCsgOD,
      // 
      // presentCsgShoe,
      previousCsgID,
      // previousCsgShoe,
      // tailExcess,
      // topOfFloatCollar,
      // topOfLead,
      // topOfTail,
    } = wellData
    
    const [viewResult, setViewResult] = useState(false);

    // const check = {
    //   leadExcess,
    //   measuredDepth,
    //   openHoleID,
    //   presentCsgID,
    //   presentCsgOD,
    //   // 
    //   presentCsgShoe,
    //   previousCsgID,
    //   previousCsgShoe,
    //   tailExcess,
    //   topOfFloatCollar,
    //   topOfLead,
    //   topOfTail,
    // }


    
    const noEmptyInput =  Object.entries(wellData).every(([key,value]) => { 
      //checks if all input has a value greater than 0 and presentId < previousId
      return (value !=="" && value >"0" && (presentCsgID < previousCsgID))
    })
    const showResult = () =>{
        setViewResult( noEmptyInput ? true : false)
    }

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
          {
           noEmptyInput &&
          <button
           className="csg-wrapper-btn"
           onClick={ showResult }
          >View Result</button>
          }
        </div>
      )
  }
  return Sub
}

export default CasingJobWrapper;