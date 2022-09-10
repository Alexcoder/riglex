import React from 'react';
import './ResultPrimary.css'

import { useGlobalState } from '../../../state';



const ResultPage1338 = ( ) => { 
   const {wellData} = useGlobalState()

// echo "# cementing" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Alexcoder/cementing.git
// git push -u origin main

// git remote add origin https://github.com/Alexcoder/cementing.git
// git branch -M main
// git push -u origin main


    const unitChanger = wellData.unit==="2"? 'm' : 'ft';

     return (
       <div  className="containerDiv"  >
          <h1 style={{textAlign: "center", color: "blue", marginTop: "0.5rem"}}>RESULT</h1>   
        <div className ="resultContainerSub">
          <div className='vol_result'  style={{marginLeft: "0rem"}}>
            <h4>{wellData.jobType} </h4> 
            <h4><span style={{color: "red"}}>{wellData.volOfLead}</span> bbl of Lead Slurry</h4> 
            <h4><span style={{color: "red"}}>{wellData.volOfTail}</span> bbl of Tail Slurry</h4> 
            <h4><span style={{color: "blue"}}>{wellData.displacement}</span> bbl Displacement </h4> 
            {/* <h4>Top Of Lead : {wellData.topOfLead} {unitChanger}</h4> 
            <h4>Top Of Tail : {wellData.topOfTail} {unitChanger}</h4>  */}
            <h4>Casing Capacity {wellData.casingCap} bbl/{unitChanger} </h4>
            <h4>Csg/csg annular capacity {wellData.csgCsgAnn} bbl/{unitChanger} </h4>
            <h4>OpenHole/csg annular capacity {wellData.openHoleCsgAnn} bbl/{unitChanger} </h4>
        </div>
        </div>   

         </div>               
         ) 
        }            
        

export default ResultPage1338;
