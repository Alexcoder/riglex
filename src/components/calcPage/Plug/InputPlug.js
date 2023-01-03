import React from 'react';
import './InputPlug.css';
import {Grid, Paper,} from '@mui/material'
import {SingleInputPlug} from '../../../components';
import { useGlobalState } from '../../../state';
import { useHistory } from 'react-router-dom';


const InputPlug = ({LABEL}) => { 

const {wellData, theme, plug, setPlug,drillPipe, setDrillPipe, handleSetModeUnit} =  useGlobalState();
const history = useHistory();
const handleChange=(e)=>{
     setPlug({...plug, [e.target.name]: e.target.value})
}

const handleButtonColor = (value) => {
  if(wellData.unit=== value){
    return theme 
  } else {
    return 
  }
 }

  
  
  function handleViewResult () {
    history.push('/select/result-plug');
  }

  return (
    <div className="plug_input_container">

    <Paper elevation={3} sx={{padding: "1rem"}}>
    <Grid container
     textAlign="center" alignItems="center" justifyContent="center">
     <h1 style={{color: "blue", margin: "-1rem 0rem 0.5rem 0rem"}}>{LABEL}</h1>
     <Grid container textAlign="center" justifyContent="center" >
        <button  style={{marginBottom: "1rem",}} onClick={()=>{handleSetModeUnit("ft")} }
        className={`button_field ${handleButtonColor("ft")}`} value={"ft"} > FEET</button>
        <button style={{marginBottom: "1rem",}} onClick={()=> {handleSetModeUnit("m") }} 
        className={`button_field ${handleButtonColor("m")}`} value={"m"} > METER </button>
       </Grid> 
      <>
      <SingleInputPlug name="length" value= {plug.length} label="Length Of Plug"
      onChange={handleChange}
      />
      <SingleInputPlug name="zoneId" value= {plug.zoneId} label="Plug Zone ID  (inches)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="OHE" value= {plug.OHE} label="Open Hole Excess (%)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="stingerID" value= {plug.stingerID} label="Stinger ID (inches)" 
      onChange={handleChange}
      />
      </>
      <>
      <SingleInputPlug name="stingerOD" value= {plug.stingerOD} label="Stinger OD (inches)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="slurryYield" value= {plug.slurryYield} label="Slurry Yield (cu ft/sk)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="volOfSpacerAhead" value= {plug.volOfSpacerAhead} label="Volume Of Spacer Ahead"
      onChange={handleChange}
      />
      <SingleInputPlug name="bottom" value= {plug.bottom} label="Plug Bottom"       
      onChange={handleChange}
      />
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
      onChange={handleChange}
      />
      <SingleInputPlug name="drillPipeOD" value= {plug.drillPipeOD} label="Drillpipe OD (inches)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="drillPipeMD" value= {plug.drillPipeMD} label="Drillpipe Depth" 
      onChange={handleChange}
      />
      <SingleInputPlug name="dpOuterZoneId" value= {plug.dpOuterZoneId} label="DP Zone ID (inches)" 
      onChange={handleChange}
      />
      </> 
      : null
      }
      <div className="back_andsubmit_button_container">
       <button className="submitButton" onClick={()=> history.push('/select')}>Back</button>
       <button className="submitButton" onClick={handleViewResult}>View Result</button>
      </div>
    </Grid>
    </Paper>
    </div>

  );
}

export default InputPlug;
