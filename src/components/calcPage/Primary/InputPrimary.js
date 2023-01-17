import React from 'react';
import { Grid, Paper} from '@mui/material';

import { useGlobalState } from '../../../state';

import {SinglePrimary} from '../..';
import { useHistory } from 'react-router-dom';
import './InputPrimary.css';


const InputPrimary = ({ PreviousCsgShoe, PreviousCsgID,CasingOD, CasingID ,LABEL}) =>{ 

      const {wellData, setWellData, theme, mode, ChangerPresentCsgOD, unitChanger, handleSetModeUnit, setShowPrimaryResult} = useGlobalState();

      const history = useHistory();
      const handleChange=(e)=>{
         setWellData({...wellData, [e.target.name]: e.target.value})
      }

      const handleButtonColor = (value) => {
        if(wellData.unit===value){
          return theme 
        } else {
          return 
        }
       }
    
    

const handleViewResult=()=>{
   setShowPrimaryResult(true);
}

  return (
    <div style={{textAlign: "center", justifyContent: "center"}}>
      <div className="input_primary_container">
      
      {/* ----------------------------INPUT FOR START ----------------------------------------------------- */}
     <Paper elevation={5} sx={{padding: "1rem 0rem 2rem 0rem"}}>
     <h3 style={{color: "blue", marginTop: "-0.6rem"}}>{LABEL}</h3>

     <Grid container textAlign="center" justifyContent="center" sx={{gap:"2rem"}} className="flexUnitButton">
   <button  onClick={()=>{handleSetModeUnit("ft")} }
       className={`primary_unit_button ${handleButtonColor("ft")}`} value={"ft"} > FEET</button>
    <button onClick={()=> {handleSetModeUnit("m") }} 
      className={`primary_unit_button ${handleButtonColor("m")}`} value={"m"} > METER </button>
   </Grid> 


      <Grid container justifyContent="center" textAlign="center"
      className="input_primary_grid_container">

      { mode==="liner"? null :
      <SinglePrimary label="Lead Slurry OHE (%)" name="leadExcess" value={wellData.leadExcess} onChange={handleChange} />
      }
      <SinglePrimary label={mode==="liner"? "Slurry OHE (%)":"Tail Slurry OHE (%)"} name="tailExcess" value={wellData.tailExcess} onChange={handleChange}/>
      <SinglePrimary label={`Shoe Track (${unitChanger})`} name="shoeTrack" value={wellData.shoeTrack} onChange={handleChange}/> 
      <SinglePrimary label={`Rat Hole (${unitChanger})`} name="ratHole" value={wellData.ratHole} onChange={handleChange}/> 

      <SinglePrimary label={PreviousCsgID} name="previousCsgID" value={wellData.previousCsgID} onChange={handleChange}/>
      <SinglePrimary label={PreviousCsgShoe} name="previousCsgShoe" value={wellData.previousCsgShoe} onChange={handleChange} /> 
      <SinglePrimary disabled={mode==="1338" || mode==="958" || mode==="7INCH"} label={CasingOD} name="presentCsgOD" 
       value={mode==="OTHERS" ? wellData.presentCsgOD : ChangerPresentCsgOD} onChange={handleChange}/>
      <SinglePrimary label="Open Hole Size (inches)" name="openHoleID"  value={wellData.openHoleID} onChange={handleChange}/>
      {mode ==="liner" ? null : 
      <SinglePrimary label={`Top Of Tail Slurry (${unitChanger})`} name="topOfTail" value={wellData.topOfTail} onChange={handleChange}/> 
      } 
      <SinglePrimary label={CasingID} name="presentCsgID"  value={wellData.presentCsgID} onChange={handleChange}/>
      <SinglePrimary label={mode==="liner"? `Top Of Liner Slurry (${unitChanger})` : `Top Of Lead Slurry (${unitChanger})`} name="topOfLead" value={wellData.topOfLead} onChange={handleChange}/> 
      <SinglePrimary label={`Measured Depth (${unitChanger})`} name="measuredDepth"  value={wellData.measuredDepth} onChange={handleChange}/>
      
      {
      mode==="liner"? 
      <SinglePrimary label="Drillpipe ID (inch)" name="drillPipeIdLiner"  value={wellData.drillPipeIdLiner} onChange={handleChange}/>: null }
      {
        mode==="liner"? 
      <SinglePrimary label={`Drillpipe Depth (${unitChanger})`} name="drillPipeDepthLiner"  value={wellData.drillPipeDepthLiner} onChange={handleChange}/>: null}
      {
      mode==="liner"? 
      <SinglePrimary label="Setting Assembly ID (inch)" name="settingToolAssemblyIdLiner"  value={wellData.settingToolAssemblyIdLiner} onChange={handleChange}/>: null}
      </Grid> 

      <button className={theme? `${theme} input_primary_BackButton` :"input_primary_BackButton" } 
      style={{borderRadius: "5%", width: "13rem" }} onClick={()=> history.push("/select/bump-pressure")}> BUMP PRESSURE </button>
      <button className={theme? `${theme} input_primary_BackButton` :"input_primary_BackButton" } 
      style={{borderRadius: "5%", width: "13rem" }} 
      onClick={handleViewResult}> VIEW RESULT </button>
    </Paper>    

      </div>

    </div>
  )
}

export default InputPrimary