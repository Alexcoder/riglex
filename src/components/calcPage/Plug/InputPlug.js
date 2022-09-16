import React from 'react';
import './InputPlug.css';
import {Grid, Paper, Container} from '@mui/material'
import {SingleInputPlug} from '../../../components';
import { useGlobalState } from '../../../state';
import { useHistory } from 'react-router-dom';


const InputPlug = ({LABEL}) => { 

const {wellData, setWellData, theme, plug, setPlug,drillPipe, setDrillPipe} =  useGlobalState();
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

 const handleButton=(clicked)=>{
  localStorage.setItem('unitButton', wellData.unit);
  if(clicked==="ft") {setWellData({...wellData, unit: "ft"} ) ; }
  else if(clicked==="m") {setWellData({...wellData, unit: "m"} ) ; }
  else return 
 }

  
  
  function handleViewResult () {
    history.push('/select/result-plug');
  }

  return (
    <Container >

    <Paper elevation={3} sx={{padding:"2rem"}}>
    <Grid container direction= "column"
     textAlign="center" alignItems="center" justifyContent="center">
     <h1 style={{color: "blue", margin: "-1rem 0rem 0.5rem 0rem"}}>{LABEL}</h1>
     <Grid container textAlign="center" justifyContent="center" sx={{gap:"1rem"}} className="flexUnitButton">
        <button  style={{marginBottom: "1rem",}} onClick={()=>{handleButton("ft")} }
        className={`button_field ${handleButtonColor("ft")}`} value={"ft"} > FEET</button>
        <button style={{marginBottom: "1rem",}} onClick={()=> {handleButton("m") }} 
        className={`button_field ${handleButtonColor("m")}`} value={"m"} > METER </button>
       </Grid> 
      <>
      <SingleInputPlug name="length" value= {plug.length} label="LENGTH OF PLUG"
      onChange={handleChange}
      />
      <SingleInputPlug name="zoneId" value= {plug.zoneId} label="PLUG ZONE ID  (inches)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="OHE" value= {plug.OHE} label="OPEN HOLE EXCESS (%)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="stingerID" value= {plug.stingerID} label="STINGER ID (inches)" 
      onChange={handleChange}
      />
      </>
      <>
      <SingleInputPlug name="stingerOD" value= {plug.stingerOD} label="STINGER OD (inches)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="slurryYield" value= {plug.slurryYield} label="SLURRY YIELD (cu ft/sk)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="volOfSpacerAhead" value= {plug.volOfSpacerAhead} label="VOLUME OF SPACER AHEAD"
      onChange={handleChange}
      />
      <SingleInputPlug name="bottom" value= {plug.bottom} label="PLUG BOTTOM"       
      onChange={handleChange}
      />
      </>
       <div style={{border: "1px solid gray", width: "18rem", marginTop: "0.5rem", marginBottom: "0.5rem"}}>
      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem"}}>
         <button className={drillPipe? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
        border: "2px solid gray", padding:"1rem", marginTop: "1rem", marginLeft: "1rem", marginBottom: "1rem" }}
         onClick={()=> setDrillPipe((pre)=> !pre)}></button>
         <button onClick={()=> setDrillPipe((pre)=> !pre)} 
         style={{border: "none", backgroundColor: "inherit",fontSize: "1.7rem", width: "18rem", paddin: "1rem",}}
         >DrillPipe Data</button>
      </Grid>
       </div>
      {
        drillPipe?
      <>
      <SingleInputPlug name="drillPipeID" value= {plug.drillPipeID} label="DRILLPIPE ID (inches)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="drillPipeOD" value= {plug.drillPipeOD} label="DRILLPIPE OD (inches)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="drillPipeMD" value= {plug.drillPipeMD} label="DRILLPIPE DEPTH" 
      onChange={handleChange}
      />
            <SingleInputPlug name="dpOuterZoneId" value= {plug.dpOuterZoneId} label="DP ZONE ID (inches)" 
      onChange={handleChange}
      />
      </> 
      : null
      }

      <button className="submitButton" onClick={()=> history.push('/select')}>Back</button>
      <button className="submitButton" onClick={handleViewResult}>View Result</button>
    </Grid>
    </Paper>
    </Container>

  );
}

export default InputPlug;
