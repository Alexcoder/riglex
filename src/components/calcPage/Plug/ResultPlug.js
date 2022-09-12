import React from 'react';
import { useHistory } from 'react-router-dom';
import './ResultPlug.css'
import { useGlobalState } from '../../../state';
import {Grid} from '@mui/material';

const ResultPlug = ({LABEL}) =>{
  const history = useHistory();
       const {plug, wellData, drillPipe} =  useGlobalState();
       const changer = wellData.unit==="ft"? 1029.4 : 313.8;
       const unitChanger = wellData.unit==="ft"? "ft" : "m";

      //  NO DRILLPIPE ATTACHED TO STINGER CASE 1
      const Excess = (Number(plug.OHE)+100)*0.01;
      const CapacityOfPlugZone = (plug.zoneId*plug.zoneId)/(changer);
      const CapacityOfStinger = (plug.stingerID*plug.stingerID)/(changer);
      const AnnularCapacityOfPlugZoneStinger = ((plug.zoneId*plug.zoneId)-(plug.stingerOD*plug.stingerOD))/(changer);
      const VolOfPlug= (CapacityOfPlugZone*plug.length * Excess);
      const LengthOfCementWithPipeIn =( VolOfPlug/(CapacityOfStinger+AnnularCapacityOfPlugZoneStinger)).toFixed(1);
      const CementQuantityInSacks = (VolOfPlug*5.614)/(plug.slurryYield)
      const LengthOfSpacer = (plug.volOfSpacerAhead/AnnularCapacityOfPlugZoneStinger);
      const CementQuantityInMT = (CementQuantityInSacks*94)/2205;
      const VolumeOfSpacerAhead = plug.volOfSpacerAhead;
      const VolumeOfSpacerBehind = (CapacityOfStinger*LengthOfSpacer).toFixed(2)
      const Displacement = ((plug.bottom-LengthOfCementWithPipeIn-LengthOfSpacer)*CapacityOfStinger).toFixed(1)  

      //--- CONSIDERING DIFFERENT PIPE RIH WITH STINGER--------------------------
      const CapacityOfDrillPipe = (plug.drillPipeID *plug.drillPipeID)/(changer);
      const TopOfCementWithPipeIn = Number(plug.bottom) - Number(LengthOfCementWithPipeIn);
      const TopOfSpacer = Number(TopOfCementWithPipeIn) - Number(LengthOfSpacer);
                             // if the result above is positive it means spacer didnt cross-over
      const LengthOfSpacer_DrillPipeMD_to_TopOfSpacer = Number(TopOfSpacer) - Number(plug.drillPipeMD);
                                 // CHECK IF SPACER ENTERED DRILLPIPE ANNULUS
      const VolumeInStinger_PlugZoneAnnular =AnnularCapacityOfPlugZoneStinger * LengthOfSpacer_DrillPipeMD_to_TopOfSpacer 
      const VolumeInDrillPipe_Annulus = Number(VolumeOfSpacerAhead) - Number(VolumeInStinger_PlugZoneAnnular);
      const AnnCapDrillPipe_OuterZone = ((plug.dpOuterZoneId * plug.dpOuterZoneId) -
                                        (plug.drillPipeOD * plug.drillPipeOD)) /(changer);
      const LengthOfSpacerInDrillPipe_Zone =  (VolumeInDrillPipe_Annulus / AnnCapDrillPipe_OuterZone);
      const TopOfSpacerWithCrossOver = Number(TopOfCementWithPipeIn)-
      Number(LengthOfSpacer_DrillPipeMD_to_TopOfSpacer) +Number(LengthOfSpacerInDrillPipe_Zone)

                                  // -----Spacer behind for case DrillPipe
      const SpacerBehindVolume_In_Stinger = (CapacityOfStinger * LengthOfSpacer_DrillPipeMD_to_TopOfSpacer).toFixed(1);
      const SpacerBehindVolume_In_DrillPipe = (CapacityOfDrillPipe* LengthOfSpacerInDrillPipe_Zone).toFixed(1);
      const TotalSpacerBehind_With_Dp = SpacerBehindVolume_In_Stinger + SpacerBehindVolume_In_DrillPipe;
      const Spacer_Behind_With_Dp_Changer = drillPipe ? TotalSpacerBehind_With_Dp : VolumeOfSpacerBehind;
                                  // Displacement in the case of DrillPipe 
      const Displacement_1 = (Number(CapacityOfDrillPipe*plug.drillPipeMD)
       +Number(CapacityOfStinger*LengthOfSpacer_DrillPipeMD_to_TopOfSpacer )).toFixed(2);
      const Displacement_2 = (CapacityOfDrillPipe*TopOfSpacerWithCrossOver).toFixed(2);
      const Displacement_Changer =TopOfSpacer> plug.drillPipeMD ? Displacement_1:  Displacement_2
      

          return(
            <div className='resultPlugContainer'
              >
            <Grid container direction="column" justifyContent="center" alignItems="center" textAlign="center"
            sx={{width:"", padding: "", color: "black", backgroundColor:"whitesmoke",
              }} className="grid_container_css">
                <Grid item xs={12} sm={12} md={12} >
            <h1 style={{color: "blue",}}>{LABEL}</h1>
            <Grid item xs={12} sm={12} md={9}>
            <h2>Cement Slurry : <span style={{color:"blue"}}>{VolOfPlug.toFixed(1)}</span> bbl </h2>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
            <h2>
             Displacement : <span style={{color: "green"}}> { drillPipe? Displacement_Changer : Displacement} </span>  bbl
            </h2>
            </Grid>
      {drillPipe ? 
            <p>
            <Grid item xs={12} sm={12} md={9}>
            <div>drillpipe cap {CapacityOfDrillPipe.toFixed(4)} bbl/{unitChanger}</div>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
            <div>Top of spacer {TopOfSpacer.toFixed(0)} {unitChanger}</div>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
            <div>Drill Pipe Depth {[plug.drillPipeMD]} {unitChanger}</div>
            </Grid>
            </p> : null
      }
            <Grid item xs={12} sm={12} md={9}>
              
              </Grid><h4>Volume of Spacer Ahead : {VolumeOfSpacerAhead} bbl</h4>
            <Grid item xs={12} sm={12} md={9}>
              <h4>Volume of Spacer Behind : { plug.drillPipe? Spacer_Behind_With_Dp_Changer: VolumeOfSpacerBehind} bbl</h4> 
              </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <h4>Cement Quantity: {CementQuantityInSacks.toFixed(2)} Sacks = {CementQuantityInMT.toFixed(1)} MT</h4>
              </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <h4>Length Of Cement With Pipe In : {LengthOfCementWithPipeIn} {unitChanger}</h4>
              </Grid>
           <Grid item xs={12} sm={12} md={9}>
          <button onClick={()=>{history.push('/select/primary')}}>Back</button>
          </Grid>

          </Grid>
          </Grid>
            </div>  
          )
        }
      
      


export default ResultPlug;
