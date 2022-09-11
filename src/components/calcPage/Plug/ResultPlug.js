import React from 'react';
import './ResultPlug.css'
import { useGlobalState } from '../../../state';
import {Grid} from '@mui/material';

const ResultPlug = ({LABEL}) =>{
       const {plug, wellData} =  useGlobalState();
       const changer = wellData.unit==="1"? 1029.4 : 313.8;
       const unitChanger = wellData.unit==="1"? "ft" : "m";

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
      const LengthOfSpacer_DrillPipeMD_to_TopOfSpacer = Number(TopOfSpacer) - Number(plug.drillPipeMD);
                                 // CHECK IF SPACER ENTERED DRILLPIPE ANNULUS
      const CrossOver = Number(LengthOfSpacer_DrillPipeMD_to_TopOfSpacer) - Number(LengthOfSpacer);
                       // if the result above is positive it means spacer didnt cross-over
      const VolumeInStinger_PlugZoneAnnular =AnnularCapacityOfPlugZoneStinger * LengthOfSpacer_DrillPipeMD_to_TopOfSpacer 
      const VolumeInDrillPipe_Annulus = Number(VolumeOfSpacerAhead) - Number(VolumeInStinger_PlugZoneAnnular);
      const AnnCapDrillPipe_OuterZone = ((plug.dpOuterZoneId * plug.dpOuterZoneId) -
                                        (plug.drillPipeOD * plug.drillPipeOD)) /(changer);
      const LengthOfSpacerInDrillPipe_Zone =  (VolumeInDrillPipe_Annulus / AnnCapDrillPipe_OuterZone);
      const TopOfSpacerWithCrossOver = Number(LengthOfSpacer_DrillPipeMD_to_TopOfSpacer) +Number(LengthOfSpacerInDrillPipe_Zone)

                                  // -----Spacer behind for case DrillPipe
      const SpacerBehindVolume_In_Stinger = (CapacityOfStinger * LengthOfSpacer_DrillPipeMD_to_TopOfSpacer).toFixed(1);
      const SpacerBehindVolume_In_DrillPipe = (CapacityOfDrillPipe* LengthOfSpacerInDrillPipe_Zone).toFixed(1);
      const TotalSpacerBehind_With_Dp = SpacerBehindVolume_In_Stinger + SpacerBehindVolume_In_DrillPipe;
      const Spacer_Behind_With_Dp_Changer = CrossOver < 0? TotalSpacerBehind_With_Dp : VolumeOfSpacerAhead;
                                  // Displacement in the case of DrillPipe 
      const Displacement_1 = Number(CapacityOfDrillPipe*plug.drillPipeMD)+Number(CapacityOfStinger*TopOfSpacer);
      const Displacement_2 = CapacityOfDrillPipe*TopOfSpacerWithCrossOver;
      const Displacement_Changer = CrossOver > 0 ? Displacement_1 : Displacement_2; 
      

          return(
            <div className='resultPlugContainer'
              >
            <Grid container direction="column" justifyContent="center" alignItems="center" textAlign="center"
            sx={{width:"35rem", padding: "1rem", color: "black", backgroundColor:"whitesmoke",
              }}>
            <h1 style={{color: "blue",}}>{LABEL}</h1>
            <h2 className=''>{VolOfPlug.toFixed(1)} bbl Of Cement Slurry </h2>
            <h2>
             Displacement : { plug.drillPipe? Displacement_Changer : Displacement } bbl
            </h2>
            <h4>Volume of Spacer Ahead : {VolumeOfSpacerAhead} bbl</h4>
            <h4>Volume of Spacer Behind : { plug.drillPipe? Spacer_Behind_With_Dp_Changer: VolumeOfSpacerBehind} bbl</h4> 
            <h4>Cement Quantity: {CementQuantityInSacks.toFixed(2)} Sacks = {CementQuantityInMT.toFixed(1)} MT</h4>
            <h4>Length Of Cement With Pipe In : {LengthOfCementWithPipeIn} {unitChanger}</h4>
          </Grid>
            </div>  
          )
        }
      
      


export default ResultPlug;
