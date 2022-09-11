import React from 'react';
import './InputPlug.css';
import {Grid, Paper, Container} from '@mui/material'
import {SingleInputPlug} from '../../../components';
import { useGlobalState } from '../../../state';
import { useHistory } from 'react-router-dom';


const InputPlug = ({LABEL}) => { 

const {plug, setPlug,} =  useGlobalState();
const history = useHistory();
const handleChange=(e)=>{
     setPlug({...plug, [e.target.name]: e.target.value})
}
const handleSubmit =(e) => {
   // e.preventDefault();
}

  return (
    <Container sx={{}} className="container">

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
      
      {
        plug.drillPipe?
      <>
      <h2>DRILLPIPE DATA</h2>
      <SingleInputPlug name="drillPipeID" value= {plug.drillPipeID} label="DRILLPIPE ID (inches)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="drillPipeOD" value= {plug.drillPipeOD} label="DRILLPIPE OD (inches)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="drillPipeMD" value= {plug.drillPipeMD} label="DRILLPIPE DEPTH (inches)" 
      onChange={handleChange}
      />
            <SingleInputPlug name="dpOuterZoneId" value= {plug.dpOuterZoneId} label="DP ZONE ID (inches)" 
      onChange={handleChange}
      />
      </> : null
      }

      <button className="submitButton" onClick={()=> history.push('/select/result-plug')}>View Result</button>
      <button className="submitButton" onClick={()=> history.push('/select')}>Back</button>
    </Grid>
    </Paper>
    </Container>

  );
}

export default InputPlug;
