import React, {useState} from 'react';
import './InputPlug.css';
import {Grid, Paper, Container} from '@mui/material'
import {SingleInputPlug} from '../../../components';
import { useGlobalState } from '../../../state';
import { useHistory } from 'react-router-dom';


const InputPlug = ({LABEL}) => { 

const {plug, setPlug,drillPipe, setDrillPipe} =  useGlobalState();
const [isClicked, setIsClicked] = useState(false)
const history = useHistory();
const handleChange=(e)=>{
     setPlug({...plug, [e.target.name]: e.target.value})
}

// if(!plug.length || !plug.zoneId || !plug.OHE || !plug.stingerID || 
//   !plug.stingerOD || !plug.volOfSpacerAhead || !plug.bottom  & isClicked ) alert("Ensure all field are filled")
//   else if(drillPipe & !plug.drillPipeID || !plug.drillPipeOD || !plug.drillPipeMD || !plug.dpOuterZoneId
//     & isClicked ) alert("Fill drillPipe data to continue!")
    
  
  
  
  if(isClicked) history.push('/select/result-plug');

  return (
    <Container  className="container">

    <Paper elevation="5" sx={{padding:"2rem"}}>
    <Grid direction= "column"
     textAlign="center" alignItems="center" justifyContent="center">
      <h1 style={{color: "blue"}}>{LABEL}</h1>
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
       <p style={{border: "1px solid gray"}}>
      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem"}}>
         <button className={drillPipe? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
        border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" }}
         onClick={()=> setDrillPipe((pre)=> !pre)}></button>
         <h2>DrillPipe Data</h2>
      </Grid>
       </p>
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
      <button className="submitButton" onClick={()=>setIsClicked(true) }>View Result</button>
    </Grid>
    </Paper>
    </Container>

  );
}

export default InputPlug;
