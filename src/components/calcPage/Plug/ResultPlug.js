// import usePlug from "./usePlug"
import './ResultPlug.css';
import { useGlobalState } from "../../../state"


const ResultPlug = () => { 
  const { plug, wellData, drillPipe} = useGlobalState();

     const { unit, } = wellData;
     const { zoneId, stingerID, stingerOD,stingerLength, length, OHE, volOfSpacerAhead, bottom,
         drillPipeID,drillPipeOD,dpOuterZoneId, } = plug;

     const DrillPipeMD = bottom - Number(stingerLength);

     const changer = (unit === "ft") ? 1029.4 : 313.8;
     const unitChanger = (unit === "ft") ? "ft" : "m";
     const Excess = (Number(OHE) + 100) * 0.01;
     const CapacityOfStinger = (stingerID**2) / (changer);
     const CapacityOfDP = (drillPipeID**2) / (changer);
     const CapacityOfPlugZone = (zoneId**2) / (changer);
     const VolOfPlug1 = (CapacityOfPlugZone * length * Excess);
     const AnnularCapacityStinger = (zoneId**2 - stingerOD ** 2) / (changer);
     const LengthOfSpacer = (volOfSpacerAhead / AnnularCapacityStinger);
     const LengthOfCementWithPipeIn = (VolOfPlug1 / (CapacityOfStinger + AnnularCapacityStinger)).toFixed(1);
     const TopOfCementWithPipeIn = Number(bottom) - Number(LengthOfCementWithPipeIn);
     const TopOfSpacer = (Number(TopOfCementWithPipeIn) - Number(LengthOfSpacer)).toFixed(0);
     const VolumeOfSpacerAhead = volOfSpacerAhead;
     const Volume = VolOfPlug1.toFixed(1);

     const DisplacementA = (DrillPipeMD * CapacityOfDP) ;
     const DisplacementB = (TopOfSpacer-DrillPipeMD) * CapacityOfStinger; 
     const Displacement2 = (Number(DisplacementA) + Number(DisplacementB)).toFixed(1) ;

     const Displacement1 = ((bottom - LengthOfCementWithPipeIn - LengthOfSpacer) * CapacityOfStinger).toFixed(1);

 
     const UniformStinger = () => {
      const VolumeOfSpacerBehind = (CapacityOfStinger * LengthOfSpacer).toFixed(2);

      return (
             <main>
                 <div style={{background: ""}}>Volume = {Volume} bbl</div>
                 <div>Spacer Ahead = {VolumeOfSpacerAhead} bbl</div>
                 <div>Spacer Behind = {VolumeOfSpacerBehind} bbl</div>
             </main>
         )
     }

     const DrillPipeMD_to_TopCement = TopOfCementWithPipeIn - DrillPipeMD; //length
     const VolSpacerAheadA = DrillPipeMD_to_TopCement * AnnularCapacityStinger;
     const RemainingVolume = volOfSpacerAhead - VolSpacerAheadA;
     const AnnularDrillPipe = (dpOuterZoneId**2-drillPipeOD**2)/(changer);
     const LengthSpacerAhead1 = DrillPipeMD_to_TopCement;
     const LengthSpacerAhead2 = RemainingVolume / AnnularDrillPipe;
     const TopOfSpacer3 = (DrillPipeMD -  LengthSpacerAhead2).toFixed(0)
     const Displacement3 = (CapacityOfDP * TopOfSpacer3).toFixed(1);
    
     const VolSpacerBehind1 = LengthSpacerAhead1 * CapacityOfStinger ;
     const VolSpacerBehind2 = LengthSpacerAhead2 * CapacityOfDP ;
     const VolumeOfSpacerBehind3 = (Number(VolSpacerBehind1)+ Number(VolSpacerBehind2)).toFixed(1)
 
     const StingerDrillPipe = () => {
         //When DrillPipe Depth is Greater Than Top Of Spacer (Spacer In DrillPipe)
         return (
             <div>
                 <div>Volume = {Volume} bbl</div>
                 <div>Spacer Ahead  = {VolumeOfSpacerAhead} bbl</div>
                 <div>Spacer Behind*** = {VolumeOfSpacerBehind3} bbl</div>
             </div>
         )
     }
 
     const Check = DrillPipeMD - TopOfSpacer //CHECK SPACER CROSSOVER
 

  return (
    <div className="resultPlugContainer">
      <div>
      <div>
        <div>{(drillPipe && (Check<0)) && "STAGE2" }</div>
        <div>{(drillPipe && (Check>0)) && "STAGE3 OVERFLOW SPACER IN DRILLPIPE" }</div>
        <div>{!drillPipe  && "UNIFORM STINGER" }</div>
      {
       (!drillPipe || (drillPipe &&(Check<0)))? 
        UniformStinger()
        : (drillPipe && (Check>0))?
        StingerDrillPipe()
        : null
      }
      </div>
      <div> { 
          (drillPipe&&(Check>0))
          ? "Top Of Spacer***"
          : "Top Of Spacer"
          } = { 
          (drillPipe &&(Check>0))
          ? `${TopOfSpacer3>0 ? `${TopOfSpacer3} ${unitChanger}` : "Wrong Input"}` 
          : `${TopOfSpacer>0 ? `${TopOfSpacer} ${unitChanger}` : "Wrong Input"}`
          } 
        
      </div>
      {drillPipe ? <div> Drill Pipe Length = { DrillPipeMD } {unitChanger}</div>: null}
      {drillPipe ? <div> Stinger Length= { stingerLength } {unitChanger}</div>: null}
      {!drillPipe ? <div> Stinger Length = { DrillPipeMD+Number(stingerLength) } {unitChanger}</div>: null}
      {(!drillPipe) ? <div> Displacement* = {Displacement1>0? `${Displacement1} bbl`: "Wrong Data"}</div>: null}
      {(drillPipe && (Check < 0) )? <div> Displacement** = {Displacement2>0? `${Displacement2} bbl` : "Wrong Data"}</div>: null}
      {(drillPipe && (Check > 0 ))? <div> Displacement*** = {Displacement3>0? `${Displacement3} bbl`: "Wrong Data"}</div>: null}
    </div>
  </div> 
  )
}




export default ResultPlug;
