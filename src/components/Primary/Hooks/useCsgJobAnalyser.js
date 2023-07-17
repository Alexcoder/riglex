import { useGlobalState } from "../../../state/context/Context"
const useCsgJobAnalyser = (wellDataxxx, unit) => {
  const { wellData } = useGlobalState();

  const {
    openHoleID,
    measuredDepth,
    leadExcess,
    tailExcess,
    previousCsgShoe,
    presentCsgShoe,
    presentCsgOD,
    presentCsgID,
    previousCsgID,
    topOfLead,
    topOfTail,
    topOfFloatCollar,
  } = wellData;
   
   const UnitSwitch = unit==="ft" ? 1029.4 : 313.8 ;
   const OHCapacity = (Math.pow(openHoleID,2))/ UnitSwitch;
   const CsgCapacity = (Math.pow(presentCsgID,2))/ UnitSwitch;
   const AnnularCapCsgOH = (Math.pow(openHoleID,2) - Math.pow(presentCsgOD(),2))/UnitSwitch ;
   const AnnularCapCsgToCsg = (Math.pow(previousCsgID,2) - Math.pow(presentCsgOD(),2))/UnitSwitch;
   const LeadExcess = (Number(leadExcess) + 100)/100;
   const TailExcess = (Number(tailExcess) + 100)/100;
   const RatHole = measuredDepth - presentCsgShoe;
   const LengthOfTailAboveShoe = presentCsgShoe - topOfTail;
   const ShoeTrack = presentCsgShoe - topOfFloatCollar;
  //  Lead Slurry
   const SlurryLengthInOHCsgAnn = topOfTail - previousCsgShoe;
   const VolumeInOpenHoleToCasingAnnulus = AnnularCapCsgOH * SlurryLengthInOHCsgAnn * LeadExcess;
   const VolumeInCsgToCsgAnnulus = AnnularCapCsgToCsg * previousCsgShoe-topOfLead;
   const VolumeOfLead = (Number(VolumeInOpenHoleToCasingAnnulus) + Number(VolumeInCsgToCsgAnnulus)).toFixed(2)
  //  Tail Slurry
   const VolumeInShoeTrack = CsgCapacity * ShoeTrack;
   const VolumeInRatHole = OHCapacity * RatHole * TailExcess;
   const VolumeInAnnulus = AnnularCapCsgOH * LengthOfTailAboveShoe * TailExcess;
   const VolumeOfTail = (Number(VolumeInShoeTrack) + Number(VolumeInRatHole) + Number(VolumeInAnnulus)).toFixed(2);
  //   Displacement
   const Displacement = (CsgCapacity * topOfFloatCollar).toFixed(2);

   const Lead = VolumeOfLead==="NaN"? 0 : VolumeOfLead;
   const Tail = VolumeOfTail==="NaN"? 0 : VolumeOfTail;
   const isDisplaced = Displacement==="NaN"? 0 : Displacement;


  return {
    Lead, Tail, isDisplaced
  }
}

export default useCsgJobAnalyser;