import React from 'react';
import './InputPlug.css';
import {Grid} from '@mui/material'
import {SingleInputPlug} from '../../../components';
import { useGlobalState } from '../../../state';


const InputPlug = ({LABEL}) => {

const {plug, setPlug} =  useGlobalState();

const handleChange=(e)=>{
     setPlug({...plug, [e.target.name]: e.target.value})
}
const handleSubmit =(e) => {
   // e.preventDefault();
}

  return (
   <div >
    <div style={{padding: "2rem"}} >
      <form onSubmit={handleSubmit} className="form">
      <h1 style={{color: "blue", textAlign: "center"}}>{LABEL}</h1>

   <Grid className="inputPagePlugGridContainer"
   >
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
      <SingleInputPlug name="stingerOD" value= {plug.stingerOD} label="STINGER OD (inches)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="slurryYield" value= {plug.slurryYield} label="SLURRY YIELD (cu ft/sk)" 
      onChange={handleChange}
      />
      <SingleInputPlug name="lengthOfSpacer" value= {plug.lengthOfSpacer} label="LENGTH OF SPACER"
      onChange={handleChange}
      />
      <SingleInputPlug name="bottom" value= {plug.bottom} label="PLUG BOTTOM"       
      onChange={handleChange}
      />
      <button type='submit' className="submitButton" style={{}}>SUBMIT</button>
    </Grid>
  </form>
</div>
   </div>
  );
}

export default InputPlug;
