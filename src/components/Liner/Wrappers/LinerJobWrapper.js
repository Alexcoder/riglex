import { useState } from "react";
import Input from '../Input/Input';
import Result from '../Result/Result';
import "./styles.css";

const LinerJobWrapper = ( CasingComponent ) => {
    
  const Sub=(props)=>{
    const [viewResult, setViewResult] = useState(false)
  
      return(
          <div className="liner">
          <h3 className="wrapper-title">LINER CASING CEMENTING</h3>
          {
           viewResult &&
          <Result 
           setViewResult={setViewResult}
          />
          }
          <Input />
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

export default LinerJobWrapper;