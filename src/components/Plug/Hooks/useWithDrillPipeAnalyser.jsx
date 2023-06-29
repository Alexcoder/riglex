import { useGlobalState } from "../../../state/context/Context";

const useWithDrillPipeAnalyser = () => {
  const { plug } = useGlobalState();

  console.log(plug);

  const DrillPipeDepth = 
        (Number(plug.bottom) - Number(plug.stingerLength));

  const TopOfCementWithPipeIn = 
        (Number(plug.bottom) - Number(plug.lengthOfCementWithPipeInside()));

  const CapacityOfDrillPipe =
        (Math.pow(plug.drillPipeID, 2) )/ plug.unitSwitch();

  const AnnularCapacityOfPlugZoneAndDrillPipe =
        (Math.pow(plug.dpOuterZoneId, 2) - Math.pow(plug.drillPipeOD, 2) )/ plug.unitSwitch();

  const TopOfSpacer =
        Number(plug.bottom)-
        (Number(plug.lengthOfCementWithPipeInside()) + Number(plug.spacerLength())) ;

  const isSpacerInDrillPipe = 
        Number(DrillPipeDepth) - Number(TopOfSpacer);
              
  const DisplacementIfSpacerIsNotInDrillPipe = 
        (Number(CapacityOfDrillPipe) *  Number(DrillPipeDepth)) +
        (Number(plug.stingerCap()) *  Number(TopOfSpacer - DrillPipeDepth)) 
        
        // SCENARIO IF SPACER ENTERS DRILLPIPE
        const SpacerAheadVolumeFromTopOfCementToDrillPipeDepth = 
              (Number(plug.annCap()) *  Number(TopOfCementWithPipeIn - DrillPipeDepth));

        const SpacerAheadVolumeInDrillPipeZone = 
               Number(plug.volOfSpacerAhead) - Number(SpacerAheadVolumeFromTopOfCementToDrillPipeDepth) ;

        const SpacerLengthInDrillPipeAnnulus = 
               Number(SpacerAheadVolumeInDrillPipeZone) / Number(AnnularCapacityOfPlugZoneAndDrillPipe) ;

        const TopOfSpacerInDrillPipeZone = 
               Number(DrillPipeDepth) - Number(SpacerLengthInDrillPipeAnnulus) ;

        const SpacerBehindVolumeFromTopOfCementToDrillPipeDepth = 
              (Number(plug.stingerCap()) *  Number(TopOfCementWithPipeIn - DrillPipeDepth));  

        const SpacerBehindVolumeInDrillPipe = 
              (Number(CapacityOfDrillPipe) *  Number(SpacerLengthInDrillPipeAnnulus));      

        const TotalSpacerVolumeIfSpacerIsInDrillPipe = 
              (Number(SpacerBehindVolumeFromTopOfCementToDrillPipeDepth) + 
               Number(SpacerBehindVolumeInDrillPipe));      

        const DisplacementIfSpacerInDrillPipeZone = 
               Number(CapacityOfDrillPipe) * Number(TopOfSpacerInDrillPipeZone) ;

  return {
    volume : plug.volume(),
    spacerAheadVol : plug.volOfSpacerAhead,
    spacerBehindVol(){
      if(isSpacerInDrillPipe > 0) return TotalSpacerVolumeIfSpacerIsInDrillPipe.toFixed(1)
      else return plug.volOfSpacerBehind().toFixed(1)                    
    },
    displacement(){
      if(isSpacerInDrillPipe > 0) return DisplacementIfSpacerInDrillPipeZone.toFixed(1)
      else return DisplacementIfSpacerIsNotInDrillPipe.toFixed(1)
    },
    isSpacerInDrillPipe : isSpacerInDrillPipe.toFixed(1) ,
    displacement2 : DisplacementIfSpacerIsNotInDrillPipe.toFixed(1),
    displacement3 : DisplacementIfSpacerInDrillPipeZone.toFixed(1),
    lengthWithPipeIn : plug.lengthOfCementWithPipeInside().toFixed(1)

  }
}

export default useWithDrillPipeAnalyser;