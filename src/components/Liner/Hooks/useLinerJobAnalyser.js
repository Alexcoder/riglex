import React from 'react'
import { useGlobalState } from "../../../state/context/Context";

const useLinerJobAnalyser = () => {
 const { liner, unit } = useGlobalState();

 const JobUnitSwitch = unit === "ft" ? 1029.4 : 313.8
 const ExcessLead = (liner.leadExcess * 0.01) + 1;
 const ExcessTail = (liner.tailExcess * 0.01) + 1;
 const LengthInLinerCsgAnn = liner.previousCsgShoe - liner.topOfSlurry;
 const AnnCapLinerAndCsg =
        ( (liner.previousCsgID**2) - (liner.linerCsgOD**2) ) / JobUnitSwitch ;
 const AnnCapLinerAndOH =
    ( (liner.openHoleID**2) - (liner.linerCsgOD**2) ) / JobUnitSwitch ;
 const OHCap = ( liner.openHoleID**2 ) / JobUnitSwitch;
 const LinerCsgCap = ( liner.linerCsgID**2 ) / JobUnitSwitch;
 const RatHole = liner.measuredDepth - liner.linerCsgShoe;
 const SlurryVolumeInCsgCsgAnn = AnnCapLinerAndCsg * LengthInLinerCsgAnn;
 const SlurryVolumeInCsgOHAnn = AnnCapLinerAndOH * LengthInLinerCsgAnn * ExcessTail;
 const SlurryVolumeInRatHole = OHCap * RatHole * tailExcess;
 const SlurryVolumeInShoeTrack = LinerCsgCap * liner.ShoeTrack();
 const TotalSlurryVolume = 
     Number(SlurryVolumeInCsgCsgAnn) +
     Number(SlurryVolumeInCsgOHAnn)+
     Number(SlurryVolumeInRatHole) +
     Number(SlurryVolumeInShoeTrack)

  return { 
    Volume : TotalSlurryVolume
  }
}

export default useLinerJobAnalyser