import React from 'react';
import './InputPrimary.css';
import { Grid, Paper} from '@mui/material';

import { useGlobalState } from '../../../state';

import {SinglePrimary} from '../..';
import { useHistory } from 'react-router-dom';


const InputPrimary = ({ PreviousCsgShoe, PreviousCsgID,CasingOD, CasingID ,LABEL}) =>{ 

      const {wellData, setWellData, theme, mode} = useGlobalState();
      const history = useHistory();
      const handleChange=(e)=>{
         setWellData({...wellData, [e.target.name]: e.target.value})
      }



  return (
    <div>
      <div style={{padding: "1rem 2rem 1rem 2rem"}}>
      
          {/* ----------------------------INPUT FOR START ----------------------------------------------------- */}
     <Paper elevation="5"  ></Paper>    
    <h3 style={{color: "blue", marginTop: "-1rem"}}>{LABEL}</h3>

      <Grid container direction=""  alignItem="center" justifyContent="center" textAlign="center"
      className="input_primary_grid_container">

 { mode==="liner"? null :
      <SinglePrimary label="LEAD SLURRY OHE (%)" name="leadExcess" value={wellData.leadExcess} onChange={handleChange} />
 }
      <SinglePrimary label={mode==="liner"? "SLURRY OHE (%)":"TAIL SLURRY OHE (%)"} name="tailExcess" value={wellData.tailExcess} onChange={handleChange}/>
      <SinglePrimary label="SHOE TRACK" name="shoeTrack" value={wellData.shoeTrack} onChange={handleChange}/> 
      <SinglePrimary label="RAT HOLE" name="ratHole" value={wellData.ratHole} onChange={handleChange}/> 

      <SinglePrimary label={PreviousCsgID} name="previousCsgID" value={wellData.previousCsgID} onChange={handleChange}/>
      <SinglePrimary label={PreviousCsgShoe} name="previousCsgShoe" value={wellData.previousCsgShoe} onChange={handleChange} /> 
  { mode ==="OTHERS" || mode==="" || mode ==="liner" ? 
      <SinglePrimary label={CasingOD} name="presentCsgOD"  value={wellData.presentCsgOD} onChange={handleChange}/>
      :null 
  } 
      <SinglePrimary label="OPEN HOLE SIZE (inches)" name="openHoleID"  value={wellData.openHoleID} onChange={handleChange}/>
  {mode ==="liner" ? null : 
      <SinglePrimary disabled={mode==="liner"} label={mode==="liner"? "SLURRY LENGHT ABOVE SHOE  ":"LENGTH OF TAIL ABOVE CSG SHOE"}
         name="lengthOfTailAboveShoe" value={wellData.lengthOfTailAboveShoe} onChange={handleChange}/> 
  } 
      <SinglePrimary label={CasingID} name="presentCsgID"  value={wellData.presentCsgID} onChange={handleChange}/>
      <SinglePrimary label={mode==="liner"? "TOP OF LINER SLURRY": "TOP OF LEAD SLURRY"} name="topOfLead" value={wellData.topOfLead} onChange={handleChange}/> 
      <SinglePrimary label="MEASURED DEPTH" name="measuredDepth"  value={wellData.measuredDepth} onChange={handleChange}/>
      </Grid> 

      <button className={theme? `${theme} input_primary_BackButton` :"input_primary_BackButton" } 
      style={{boxShadow: "0.2rem 0.2rem 0.3rem 0rem gray", }} onClick={()=> history.push("/select")}> BACK </button>
      <button className={theme? `${theme} input_primary_BackButton` :"input_primary_BackButton" } 
      style={{boxShadow: "0.2rem 0.2rem 0.3rem 0rem gray", }} 
      onClick={()=> history.push("/select/result-primary")}> VIEW RESULT </button>


      </div>

    </div>
  )
}

export default InputPrimary