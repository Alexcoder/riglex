
import useConversion from "./useConversion";

import '../Conversion.css';


const Result =({factor, modeConversion, setModeConversion })=>{
    const {ResultChanger, resultUnit, baseUnit,}= useConversion(factor, modeConversion, setModeConversion )


    return(
        <div style={{marginTop:"1rem"}}>
            {
            !factor & !modeConversion ?
            <div className='text'> Select To Continue !</div>
            : 
            !factor ?
            <div className='text'>
                Input 
                <span style={{color: "red"}}> {baseUnit} </span> 
                 Value To Continue !
             </div>
            :
            factor<0 ?  
            <div 
              style={{color: "red",fontStyle:"italics", marginTop:"2rem"}}
              className='div'>
                 Error: Negative Input !
             </div>
            :
            <div className='text' > 
               {factor}
             <span style={{color:"red"}}> {baseUnit}
            </span> equals  {ResultChanger} <span style={{color: "blue"}}>{resultUnit}</span>
          </div>
                 
            }

        </div>
    
    )


}

export default Result;