import { useState } from "react";
import Input from '../Input/Input';
import Result from '../Result/Result';
import "./styles.css";

const CasingJobWrapper = (CasingComponent, presentCsg, previousCsg, ) => {
    
  const Sub=(props)=>{
    const [viewResult, setViewResult] = useState(false)
  
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
           onClick={()=> setViewResult((prev)=> !prev)}
          >View Result</button>
        </div>
      )
  }
  return Sub
}

export default CasingJobWrapper;