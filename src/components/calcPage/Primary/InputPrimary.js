import React from 'react';
import './InputPrimary.css';
import { Grid} from '@mui/material';

import { useGlobalState } from '../../../state';

import {SinglePrimary} from '../..';
import { useHistory } from 'react-router-dom';


const InputPrimary = ({ 
      onSubmit, PreviousCsgShoe,PreviousCsgOD,
      PreviousCsgID,CasingOD, CasingID ,LABEL}) => { 

      const {wellData, setWellData, theme, mode} = useGlobalState();
      const history = useHistory();
      const handleChange=(e)=>{
         setWellData({...wellData, [e.target.name]: e.target.value})
      }



  return (
    <div>
      <div style={{padding: "1.8rem" ,}}>
          {/* ----------------------------INPUT FOR START ----------------------------------------------------- */}
    <form  onSubmit={onSubmit} className="form" style={{boxShadow: "2px 2px 1rem 0rem black"}}>
    <h3 style={{color: "blue", marginTop: "-1rem"}}>{LABEL}</h3>

     <Grid Container >
      <div className='inputContainer1338'>

      <div>
      <SinglePrimary label="LEAD SLURRY OHE (%)" name="leadExcess" value={wellData.leadExcess} onChange={handleChange} />
      <SinglePrimary label="TAIL SLURRY OHE (%)" name="tailExcess" value={wellData.tailExcess} onChange={handleChange}/>
      <SinglePrimary label="SHOE TRACK" name="shoeTrack" value={wellData.shoeTrack} onChange={handleChange}/> 
      <SinglePrimary label="RAT HOLE" name="ratHole" value={wellData.ratHole} onChange={handleChange}/> 
      </div>

      <div>
      <SinglePrimary label={PreviousCsgID} name="previousCsgID" value={wellData.previousCsgID} onChange={handleChange}/>
      <SinglePrimary label={PreviousCsgShoe} name="previousCsgShoe" value={wellData.previousCsgShoe} onChange={handleChange} /> 
          { mode !=="OTHERS" ? null :
      <SinglePrimary label={CasingOD} name="presentCsgOD"  value={wellData.presentCsgOD} onChange={handleChange}/> 
          } 
      <SinglePrimary label="OPEN HOLE (inches)" name="openHoleID"  value={wellData.openHoleID} onChange={handleChange}/> 
      <SinglePrimary label="LENGTH OF TAIL ABOVE CSG SHOE" name="lengthOfTailAboveShoe" value={wellData.lengthOfTailAboveShoe} onChange={handleChange}/> 
      </div>
      
      <div>
      <SinglePrimary label={CasingID} name="presentCsgID"  value={wellData.presentCsgID} onChange={handleChange}/>
      <SinglePrimary label="TOP OF LEAD SLURRY" name="topOfLead" value={wellData.topOfLead} onChange={handleChange}/> 
      <SinglePrimary label="MEASURED DEPTH" name="measuredDepth"  value={wellData.measuredDepth} onChange={handleChange}/>
      <button className={theme? `${theme} input1338BackButton` :"input1338BackButton" } 
      style={{boxShadow: "0.2rem 0.2rem 0.3rem 0rem black", }} onClick={()=> history.push("/select")}> BACK </button>
      </div>

      </div>
   </Grid> 
   </form> 
      </div>

    </div>
  )
}

export default InputPrimary