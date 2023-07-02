import { useGlobalState } from '../../../state/context/Context';

const useUniformStingerData = () => {
 const { plug } = useGlobalState()

 const InputData = [
  {
    title: "zoneId",
    value: plug.zoneId,
    className: "plug-input",
    placeHolder: "zoneId",
    desc: "Zone ID",       
  },
  {
    title: "length",
    value: plug.length,
    className: "plug-input",
    placeHolder: "length",
    desc: `Plug Length`,       
  },
  {
    title: "stingerOD",
    value: plug.stingerOD,
    className: "plug-input",
    placeHolder: "stingerOD",
    desc: `Stinger OD`,       
  },
  {
    title: "stingerID",
    value: plug.stingerID,
    className: "plug-input",
    placeHolder: "stingerID",
    desc: `Stinger ID`,       
  },
    {
      title: "OHE",
      value: plug.OHE,
      className: "plug-input",
      placeHolder: "OHE",
      desc: "Open Hole Excess",       
    },
    {
      title: "slurryYield",
      value: plug.slurryYield,
      className: "plug-input",
      placeHolder: "slurryYield",
      desc: "Slurry Yield",       
    },
    {
      title: "volOfSpacerAhead",
      value: plug.volOfSpacerAhead,
      className: "plug-input",
      placeHolder: "volOfSpacerAhead",
      desc: `Spacer Ahead`,       
    },
    {
      title: "bottom",
      value: plug.bottom,
      className: "plug-input",
      placeHolder: "bottom",
      desc: `Plug Bottom`,       
    },
    // {
    //   title: "drillPipeID",
    //   value: plug.drillPipeID,
    //   className: "plug-input",
    //   placeHolder: "drillPipeID",
    //   desc: `DrillPipe ID`,       
    // },
    // {
    //   title: "drillPipeOD",
    //   value: plug.drillPipeOD,
    //   className: "plug-input",
    //   placeHolder: "drillPipeOD",
    //   desc: `DrillPipe OD`,       
    // },
    // {
    //   title: "stingerLength",
    //   value: plug.stingerLength,
    //   className: "plug-input",
    //   placeHolder: "stingerLength",
    //   desc: "Length of Stinger",       
    // },
    // {
    //   title: "dpOuterZoneId",
    //   value: plug.dpOuterZoneId,
    //   className: "plug-input",
    //   placeHolder: "dpOuterZoneId",
    //   desc: "DP OuterZone Id",       
    // },
  ]


  return { InputData }
}

export default useUniformStingerData;
