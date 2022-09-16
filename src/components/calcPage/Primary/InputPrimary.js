import React from 'react';
import './InputPrimary.css';
import { Grid, Paper} from '@mui/material';

import { useGlobalState } from '../../../state';

import {SinglePrimary} from '../..';
import { useHistory } from 'react-router-dom';


const InputPrimary = ({ PreviousCsgShoe, PreviousCsgID,CasingOD, CasingID ,LABEL}) =>{ 

      const {wellData, setWellData, theme, mode, ChangerPresentCsgOD, unitChanger} = useGlobalState();

      const history = useHistory();
      const handleChange=(e)=>{
         setWellData({...wellData, [e.target.name]: e.target.value})
      }

      const handleButtonColor = (value) => {
        if(wellData.unit=== value){
          return theme 
        } else {
          return 
        }
       }

       const handleButton=(clicked)=>{
        localStorage.setItem('unitButton', wellData.unit);
        if(clicked==="ft") {setWellData({...wellData, unit: "ft"} ) ; }
        else if(clicked==="m") {setWellData({...wellData, unit: "m"} ) ; }
        else return 
       }
    
    

const handleViewResult=()=>{
  // if( 
  //   !wellData.openHoleID ||
  //   !wellData.lengthOfTailAboveShoe ||
  //   !wellData.unit||
  //   !wellData.shoeTrack ||
  //   !wellData.measuredDepth ||
  //   !wellData.ratHole ||
  //   !wellData.leadExcess ||
  //   !wellData.tailExcess ||
  //   !wellData.previousCsgShoe ||
  //   !wellData.presentCsgOD ||
  //   !wellData.presentCsgID ||
  //   !wellData.previousCsgID ||
  //   !wellData.topOfLead ||
  //   !wellData.presentCsgShoe
  // ) 
  // alert("Empty input not allowed")
  // else  
   history.push("/select/result-primary");

}

  return (
    <div>
      <div style={{padding: "1rem 2rem 1rem 2rem"}}>
      
      {/* ----------------------------INPUT FOR START ----------------------------------------------------- */}
     <Paper elevation={5} sx={{padding: "1rem 0rem 2rem 0rem"}}>
     <h3 style={{color: "blue", marginTop: "-0.6rem"}}>{LABEL}</h3>

     <Grid container textAlign="center" justifyContent="center" sx={{gap:"2rem"}} className="flexUnitButton">
   <button  onClick={()=>{handleButton("ft")} }
       className={`button_field ${handleButtonColor("ft")}`} value={"ft"} > FEET</button>
    <button onClick={()=> {handleButton("m") }} 
      className={`button_field ${handleButtonColor("m")}`} value={"m"} > METER </button>
   </Grid> 


      <Grid container justifyContent="center" textAlign="center"
      className="input_primary_grid_container">

      { mode==="liner"? null :
      <SinglePrimary label="LEAD SLURRY OHE (%)" name="leadExcess" value={wellData.leadExcess} onChange={handleChange} />
      }
      <SinglePrimary label={mode==="liner"? "SLURRY OHE (%)":"TAIL SLURRY OHE (%)"} name="tailExcess" value={wellData.tailExcess} onChange={handleChange}/>
      <SinglePrimary label={`SHOE TRACK (${unitChanger})`} name="shoeTrack" value={wellData.shoeTrack} onChange={handleChange}/> 
      <SinglePrimary label={`RAT HOLE (${unitChanger})`} name="ratHole" value={wellData.ratHole} onChange={handleChange}/> 

      <SinglePrimary label={PreviousCsgID} name="previousCsgID" value={wellData.previousCsgID} onChange={handleChange}/>
      <SinglePrimary label={PreviousCsgShoe} name="previousCsgShoe" value={wellData.previousCsgShoe} onChange={handleChange} /> 
      <SinglePrimary disabled={mode==="1338" || mode==="958" || mode==="7INCH"} label={CasingOD} name="presentCsgOD" 
       value={mode==="OTHERS" ? wellData.presentCsgOD : ChangerPresentCsgOD} onChange={handleChange}/>
      <SinglePrimary label="OPEN HOLE SIZE (inches)" name="openHoleID"  value={wellData.openHoleID} onChange={handleChange}/>
      {mode ==="liner" ? null : 
      <SinglePrimary disabled={mode==="liner"} label={mode==="liner"? `SLURRY LENGHT ABOVE SHOE (${unitChanger})`  : `LENGTH OF TAIL ABOVE CSG SHOE (${unitChanger})`}
         name="lengthOfTailAboveShoe" value={wellData.lengthOfTailAboveShoe} onChange={handleChange}/> 
      } 
      <SinglePrimary label={CasingID} name="presentCsgID"  value={wellData.presentCsgID} onChange={handleChange}/>
      <SinglePrimary label={mode==="liner"? `TOP OF LINER SLURRY (${unitChanger})` : `TOP OF LEAD SLURRY (${unitChanger})`} name="topOfLead" value={wellData.topOfLead} onChange={handleChange}/> 
      <SinglePrimary label={`MEASURED DEPTH (${unitChanger})`} name="measuredDepth"  value={wellData.measuredDepth} onChange={handleChange}/>
      
      {
      mode==="liner"? 
      <SinglePrimary label="DRILLPIPE ID (inch)" name="drillPipeIdLiner"  value={wellData.drillPipeIdLiner} onChange={handleChange}/>: null }
      {
        mode==="liner"? 
      <SinglePrimary label={`DRILLPIPE DEPTH (${unitChanger})`} name="drillPipeDepthLiner"  value={wellData.drillPipeDepthLiner} onChange={handleChange}/>: null}
      {
      mode==="liner"? 
      <SinglePrimary label="SETTING ASSEMBLY ID (inch)" name="settingToolAssemblyIdLiner"  value={wellData.settingToolAssemblyIdLiner} onChange={handleChange}/>: null}
      </Grid> 

      <button className={theme? `${theme} input_primary_BackButton` :"input_primary_BackButton" } 
      style={{boxShadow: "0.2rem 0.2rem 0.3rem 0rem gray", }} onClick={()=> history.push("/select/bump-pressure")}> BUMP PRESSURE </button>
      <button className={theme? `${theme} input_primary_BackButton` :"input_primary_BackButton" } 
      style={{boxShadow: "0.2rem 0.2rem 0.3rem 0rem gray", }} 
      onClick={handleViewResult}> VIEW RESULT </button>
    </Paper>    

      </div>

    </div>
  )
}

export default InputPrimary