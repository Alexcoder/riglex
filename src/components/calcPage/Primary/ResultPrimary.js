import React from 'react';
import {Grid, Paper} from '@mui/material';
import useResultPrimary from './useResultPrimary';
import './ResultPrimary.css';



const ResultPage1338 = ( ) => { 
  const { 
         BumpPressureChanger, 
         Liner_Displacement_Volume,
         wellData, 
         mode, 
         Liner_Slurry_Volume, 
         unitChanger,
         Navigate,
        } 
         = useResultPrimary();
  const{ jobType, volOfLead, volOfTail,displacement,topOfLead, } = wellData;
  

     return (
       <div  className="xcontainerDiv"  >
        
        <Grid container alignItems="center" justifyContent="center" textAlign="center" mt={4}>
        <Paper elevation={2} 
         sx={{
          padding: "2rem 2rem 2rem 2rem", 
          height:{xs: "45rem",sm:"30rem", md: "30rem"} 
        }}>
          <h1 style={{ color: "blue", marginTop: "0.5rem"}}>RESULT</h1>   
          <div className='vol_result'  style={{marginLeft: "0rem"}}>
            <h4>{jobType} </h4> 
            {mode==="liner"?
              <>
              <h4><span style={{color: "red"}}>{Liner_Slurry_Volume}</span> bbl of Slurry</h4>
              <h4>Top Of Slurry : {topOfLead} {unitChanger}</h4>
              <h4>Displacement {Liner_Displacement_Volume} bbl</h4> 
              </>
              :<>
              <h4><span style={{color: "red"}}>{volOfLead}</span> bbl of Lead Slurry</h4> 
              <h4><span style={{color: "red"}}>{volOfTail}</span> bbl of Tail Slurry</h4>
             <h4><span style={{color: "blue"}}>{displacement}</span> bbl Displacement </h4> 
             <h4>Top Of Lead : {topOfLead} {unitChanger}</h4> 
              </>
            }
              <h4> <span style={{color: "red"}}>{BumpPressureChanger}</span> psi Pressure to Bump Plug</h4> :
        </div>

        <button className="result_button green" onClick={()=> Navigate('/select/primary')}>BACK</button>
        <button className="result_button red" onClick={()=> Navigate('/select')}>EXIT</button>

        </Paper>
        </Grid>   

         </div>               
         ) 
        }            
        

export default ResultPage1338;
