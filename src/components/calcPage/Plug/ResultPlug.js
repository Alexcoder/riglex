import React from 'react';
import './ResultPlug.css'
import { useGlobalState } from '../../../state';

const ResultPlug = ({LABEL}) =>{
       const {plug, wellData} =  useGlobalState();
       const changer = wellData.unit==="1"? 1029.4 : 313.8;
       const unitChanger = wellData.unit==="1"? "ft" : "m";

    const renderResult =()=>{
        if(wellData.unit){
          const Excess = (Number(plug.OHE)+100)*0.01;
          const CapacityOfPlugZone = (plug.zoneId*plug.zoneId)/(changer);
          const CapacityOfStinger = (plug.stingerID*plug.stingerID)/(changer);
          const AnnularCapacityOfPlugZoneStinger = ((plug.zoneId*plug.zoneId)-(plug.stingerOD*plug.stingerOD))/(changer);
          const VolOfPlug= (CapacityOfPlugZone*plug.length * Excess);
          const LengthOfCementWithPipeIn =( VolOfPlug/(CapacityOfStinger+AnnularCapacityOfPlugZoneStinger)).toFixed(1);
          const CementQuantityInSacks = (VolOfPlug*5.614)/(plug.slurryYield)
          const CementQuantityInMT = (CementQuantityInSacks*94)/2205;
          const VolumeOfSpacerAhead = (AnnularCapacityOfPlugZoneStinger*plug.lengthOfSpacer).toFixed(1)
          const VolumeOfSpacerBehind = (CapacityOfStinger*plug.lengthOfSpacer).toFixed(2)
          const Displacement = ((plug.bottom-LengthOfCementWithPipeIn-plug.lengthOfSpacer)*CapacityOfStinger).toFixed(1)  
          return(
            <div className='resultPlugContainer'
            style={{
                   }}>
                    <h1 style={{color: "blue",}}>{LABEL}</h1>
            <h2 className=''>{VolOfPlug.toFixed(1)} bbl Of Cement Slurry </h2>
            <h2>{Displacement} bbl of Displacement  </h2>
            <h4>Volume of Spacer Ahead : {VolumeOfSpacerAhead} bbl</h4>
            <h4>Volume of Spacer Behind : {VolumeOfSpacerBehind} bbl</h4> 
            <h4>Cement Quantity: {CementQuantityInSacks.toFixed(2)} Sacks = {CementQuantityInMT.toFixed(1)} MT</h4>
            <h4>Length Of Cement With Pipe In : {LengthOfCementWithPipeIn} {unitChanger}</h4>
            </div>  
          )
        }
      }
      
      
  return (<div>

    <div className='resultPlug'> 
        {renderResult()}
    </div>
    </div>
  );
}


export default ResultPlug;
