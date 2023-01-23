// import usePlug from "./usePlug"
import './ResultPlug.css';
import { useGlobalState } from "../../../state"


const ResultPlug = () => { 
  const { plug, wellData, drillPipe} = useGlobalState();

     const { unit, } = wellData;
     const { zoneId, stingerID, stingerOD, length, OHE, volOfSpacerAhead, bottom,
         drillPipeID,drillPipeOD, drillPipeMD,dpOuterZoneId} = plug;
 
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

     const DisplacementA = (drillPipeMD * CapacityOfDP) ;
     const DisplacementB = (TopOfSpacer-drillPipeMD) * CapacityOfStinger; 
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

     const DrillPipeMD_to_TopCement = TopOfCementWithPipeIn - drillPipeMD; //length
     const VolSpacerAheadA = DrillPipeMD_to_TopCement * AnnularCapacityStinger;
     const RemainingVolume = volOfSpacerAhead - VolSpacerAheadA;
     const LengthSpacerAhead1 = DrillPipeMD_to_TopCement;
     const LengthSpacerAhead2 = RemainingVolume / AnnularCapacityStinger;
    //  const SpacerTotalLength = Number(LengthSpacerAhead1) + Number(LengthSpacerAhead2) ;
    //  const TopOfSpacer3 = (bottom-LengthOfCementWithPipeIn - SpacerTotalLength).toFixed(0)
     const TopOfSpacer3 = (drillPipeMD -  LengthSpacerAhead2).toFixed(0)
     const Displacement3 = (CapacityOfDP * TopOfSpacer3).toFixed(1);
     const AnnularDrillPipe = (dpOuterZoneId**2-drillPipeOD**2)/(changer);
     const VolSpacerBehind1 = LengthSpacerAhead1 * AnnularCapacityStinger ;
     const VolSpacerBehind2 = LengthSpacerAhead2 * AnnularDrillPipe ;
     const VolumeOfSpacerBehind3 = (Number(VolSpacerBehind1)+ Number(VolSpacerBehind2)).toFixed(1)
 
     const StingerDrillPipe = () => {
         //When DrillPipe Depth is Greater Than Top Of Spacer (Spacer In DrillPipe)
         return (
             <div>
                 <div>Volume = {Volume} bbl</div>
                 <div>Spacer Ahead  = {VolumeOfSpacerAhead} bbl</div>
                 <div>Spacer Behind 3 = {VolumeOfSpacerBehind3} bbl</div>
             </div>
         )
     }
 
     const Check = drillPipeMD - TopOfSpacer //CHECK SPACER CROSSOVER
 

  return (
    <div className="resultPlugContainer">
      <div>
      <div>
        <div>{(drillPipe && (Check<0)) && "Stage2" }</div>
        <div>{(drillPipe && (Check>0)) && "Stage3 OverFlow" }</div>
        <div>{!drillPipe  && "UniForm Stinger" }</div>
      {
       (!drillPipe || (drillPipe &&(Check<0)))? 
        UniformStinger()
        : (drillPipe && (Check>0))?
        StingerDrillPipe()
        : null
      }
      </div>
      <div> { (drillPipe&&(Check>0))? "Top Of Spacer3": "Top Of Spacer"} = { (drillPipe &&(Check>0))? TopOfSpacer3 : TopOfSpacer} {unitChanger}</div>
      <div> DrillPipe Depth = {drillPipeMD} {unitChanger}</div>
      {(!drillPipe) ? <div> Displacement1 = {Displacement1} bbl</div>: null}
      {(drillPipe && (Check < 0) )? <div> Displacement2 = {Displacement2} bbl</div>: null}
      {(drillPipe && (Check > 0 ))? <div> Displacement3 = {Displacement3} bbl</div>: null}
    </div>
  </div> 
  )
}




export default ResultPlug;
