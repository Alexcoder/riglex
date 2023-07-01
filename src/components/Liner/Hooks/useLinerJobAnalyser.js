import { useGlobalState } from "../../../state/context/Context";

const useLinerJobAnalyser = () => {
 const { liner, unit } = useGlobalState();

 const JobUnitSwitch = unit === "ft" ? 1029.4 : 313.8
//  const ExcessLead = (liner.leadExcess * 0.01) + 1;
 const ExcessTail = (liner.tailExcess * 0.01) + 1;
 const RatHole = liner.measuredDepth - liner.linerCsgShoe;

// Capacities of pipes & Open Hole
const DrillPipeCap = (liner.drillPipeID**2) / JobUnitSwitch ; 
const SettingToolCap = (liner.settingToolAssemblyID**2) / JobUnitSwitch ; 
const LinerCsgCap = ( liner.linerCsgID**2 ) / JobUnitSwitch;
const OHCap = ( liner.openHoleID**2 ) / JobUnitSwitch;

// Annular Capacities
const LengthInLinerCsgAnn = liner.previousCsgShoe - liner.topOfSlurry;
const AnnCapLinerAndCsg =
       ( (liner.previousCsgID**2) - (liner.linerCsgOD**2) ) / JobUnitSwitch ;
 const AnnCapLinerAndOH =
    ( (liner.openHoleID**2) - (liner.linerCsgOD**2) ) / JobUnitSwitch ;

//  Volume
 const SlurryVolumeInCsgCsgAnn = AnnCapLinerAndCsg * LengthInLinerCsgAnn;
 const SlurryVolumeInCsgOHAnn = AnnCapLinerAndOH * LengthInLinerCsgAnn * ExcessTail;
 const SlurryVolumeInRatHole = OHCap * RatHole * ExcessTail;
 const SlurryVolumeInShoeTrack = LinerCsgCap * liner.ShoeTrack();
 const TotalSlurryVolume = Number(SlurryVolumeInCsgCsgAnn) +
                           Number(SlurryVolumeInCsgOHAnn)+
                           Number(SlurryVolumeInRatHole) +
                           Number(SlurryVolumeInShoeTrack);

  // Displacement
  const SettingToolHeight = liner.topOfLiner - liner.drillPipeDepth ; 
  const LinerTopToTopOfFloat = liner.topOfFloatCollar - liner.topOfLiner;
  const displacementInDrillPipe = DrillPipeCap * liner.drillPipeDepth ;
  const displacementInSettingTool = SettingToolCap * SettingToolHeight ;
  const displacementInLiner = LinerCsgCap * LinerTopToTopOfFloat; 
  const Displacement = Number(displacementInDrillPipe) +
                       Number(displacementInSettingTool) +
                       Number(displacementInLiner) 

  return { 
    Volume : TotalSlurryVolume,
    Displacement
  }
}

export default useLinerJobAnalyser