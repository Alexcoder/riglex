import { useGlobalState
 } from "../../../state/context/Context";
const useWithDrillPipeData = () => {
  const {plug}= useGlobalState()
  
  const InputData = [
    {
      title: "drillPipeID",
      value: plug.drillPipeID,
      className: "plug-input",
      placeHolder: "drillPipeID",
      desc: `DrillPipe ID`,       
    },
    {
      title: "drillPipeOD",
      value: plug.drillPipeOD,
      className: "plug-input",
      placeHolder: "drillPipeOD",
      desc: `DrillPipe OD`,       
    },
    {
      title: "stingerLength",
      value: plug.stingerLength,
      className: "plug-input",
      placeHolder: "stingerLength",
      desc: "Length of Stinger",       
    },
    {
      title: "dpOuterZoneId",
      value: plug.dpOuterZoneId,
      className: "plug-input",
      placeHolder: "dpOuterZoneId",
      desc: "DP OuterZone Id",       
    },
  ];


  return { InputData }
}

export default useWithDrillPipeData