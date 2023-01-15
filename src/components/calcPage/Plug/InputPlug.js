import React from 'react';
import './InputPlug.css';
import {Grid, Paper,} from '@mui/material'
import {SingleInputPlug} from '../../../components';
import { useGlobalState } from '../../../state';


const InputPlug = ({LABEL}) => { 

  const {
    wellData, 
    theme, 
    plug, 
    setPlug,
    drillPipe, 
    setDrillPipe, 
    handleSetModeUnit, 
    showPlugResult, setShowPlugResult
    } =  useGlobalState();


const handleChange=(e)=>{
    const {name, value}= e.target;
    setPlug({...plug, [name]: value})
}

const handleButtonColor = (value) => {
  if(wellData.unit=== value){
    return theme 
  } else {
    return 
  }
 }
  
  const handleViewResult =()=> {
    setShowPlugResult(true)
  }

  console.log(showPlugResult)
  return (
    <div className="plug_input_container">

    <Paper elevation={3} sx={{padding: "1rem"}}>
    <Grid container
     textAlign="center" alignItems="center" justifyContent="center">
     <h1 style={{color: "blue", margin: "-1rem 0rem 0.5rem 0rem"}}>{LABEL}</h1>
     <Grid container textAlign="center" justifyContent="center" >
        <button  onClick={()=>{handleSetModeUnit("ft")} }
        className={`plug_unit_button ${handleButtonColor("ft")}`} value={"ft"} > FEET</button>
        <button onClick={()=> {handleSetModeUnit("m") }} 
        className={`plug_unit_button ${handleButtonColor("m")}`} value={"m"} > METER </button>
       </Grid> 
      <>
      <SingleInputPlug name="length" value= {plug.length} label="Length Of Plug"
      onChange={handleChange}/>
      <SingleInputPlug name="zoneId" value= {plug.zoneId} label="Plug Zone ID  (inches)" 
      onChange={handleChange}/>
      <SingleInputPlug name="OHE" value= {plug.OHE} label="Open Hole Excess (%)" 
      onChange={handleChange}/>
      <SingleInputPlug name="stingerID" value= {plug.stingerID} label="Stinger ID (inches)" 
      onChange={handleChange}/>
      </>
      <>
      <SingleInputPlug name="stingerOD" value= {plug.stingerOD} label="Stinger OD (inches)" 
      onChange={handleChange}/>
      <SingleInputPlug name="slurryYield" value= {plug.slurryYield} label="Slurry Yield (cu ft/sk)" 
      onChange={handleChange}/>
      <SingleInputPlug name="volOfSpacerAhead" value= {plug.volOfSpacerAhead} label="Volume Of Spacer Ahead"
      onChange={handleChange}/>
      <SingleInputPlug name="bottom" value= {plug.bottom} label="Plug Bottom"       
      onChange={handleChange}/>
      </>
      <div className="drillpipe_data_container">
        <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem"}}>
         <button 
         className={`plug_button ${drillPipe && "green"} `}
         onClick={()=> setDrillPipe((pre)=> !pre)}></button>
         <button 
          className={`drillpipe_data `}
          onClick={()=> setDrillPipe((pre)=> !pre)} 
         >DrillPipe Data</button>
      </Grid>
       </div>
      {
        drillPipe?
      <>
      <SingleInputPlug name="drillPipeID" value= {plug.drillPipeID} label="Drillpipe ID (inches)" 
      onChange={handleChange}/>
      <SingleInputPlug name="drillPipeOD" value= {plug.drillPipeOD} label="Drillpipe OD (inches)" 
      onChange={handleChange}/>
      <SingleInputPlug name="drillPipeMD" value= {plug.drillPipeMD} label="Drillpipe Depth" 
      onChange={handleChange}/>
      <SingleInputPlug name="dpOuterZoneId" value= {plug.dpOuterZoneId} label="DP Zone ID (inches)" 
      onChange={handleChange}/>
      </> 
      : null
      }
      <div className="inputPlugContainer">
       <button className="submitButton" onClick={()=>handleViewResult()}>View Result</button>
      </div>
    </Grid>
    </Paper>
    </div>

  );
}

export default InputPlug;
