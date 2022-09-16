import React from 'react';
import { useHistory } from 'react-router-dom';
import './ResultPrimary.css';
import {Grid, Paper} from '@mui/material';
import { useGlobalState } from '../../../state';



const ResultPage1338 = ( ) => { 
  const history = useHistory();
  const {wellData, mode, Liner_Slurry_Volume, unitChanger, SwitchJobUnit} = useGlobalState();

  // topOfTail, casingCap, csgCsgAnn, openHoleCsgAnn,  presentCsgTvd
  const{jobType,unit, volOfLead, volOfTail,displacement,topOfLead, 
        mudWeight, weightOfLeadSlurry, weightOfTailSlurry, weightOfDisplacementFluid,topOfLeadTvd,
        topOfTailTvd, topOfFloatTvd, tvd, } = wellData;
  
  const BumpPressure = (0.052*((mudWeight*topOfLeadTvd) + weightOfLeadSlurry*(topOfTailTvd-topOfLeadTvd)+
                      weightOfTailSlurry*(tvd-topOfTailTvd) + weightOfTailSlurry*(tvd-topOfFloatTvd))
                                    -
                      0.052*(weightOfDisplacementFluid*topOfFloatTvd)).toFixed(0)
  const BumpPressureChanger = unit==="ft" ? BumpPressure : (BumpPressure*3.28).toFixed(0)                                 

  // Liner Displacement
  const  Drill_Pipe_Capacity = (wellData.drillPipeIdLiner**2)/SwitchJobUnit
  const Setting_Tool_Capacity= (wellData.settingToolAssemblyIdLiner**2)/SwitchJobUnit
  const Liner_Capacity = (wellData.presentCsgID**2)/SwitchJobUnit
  const Liner_Displacement_Volume = ((Drill_Pipe_Capacity *(wellData.drillPipeDepthLiner)) +
                                    (Setting_Tool_Capacity*(wellData.topOfLead-wellData.drillPipeDepthLiner))+
                                    (Liner_Capacity*(wellData.topOfFloat-wellData.topOfLead))).toFixed(1)



     return (
       <div  className="xcontainerDiv"  >
        
        <Grid container alignItems="center" justifyContent="center" textAlign="center" mt={4}>
        <Paper elevation={5} sx={{padding: "2rem 2rem 2rem 2rem"}}>
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

        <button className="result_button green" onClick={()=>{history.push('/select/primary')}}>BACK</button>
        <button className="result_button red" onClick={()=>{history.push('/select')}}>EXIT</button>

        </Paper>
        </Grid>   

         </div>               
         ) 
        }            
        

export default ResultPage1338;
