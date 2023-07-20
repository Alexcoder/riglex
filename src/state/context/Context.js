import React, {createContext, useState ,useContext } from 'react';
// import {inputDataPrimary} from '../../object'
import {inputDataPlug} from '../../object'


export const StateContext = createContext();

const DataPrimary = {
  openHoleID: "",
  presentCsgID: "",
  presentCsgOD(casing){
    if(casing==="13-3/8 inch") return Number(13.375)
    else if(casing==="9-5/8 inch") return Number(9.625)
    else if(casing==="7 inch") return Number(7)
    else return ""
  },
  previousCsgID: "",
  // lengthOfTailAboveShoe: "",
  measuredDepth: "",
  leadExcess: "",
  tailExcess: "",
  previousCsgShoe: "",
  presentCsgShoe:"",
  topOfLead:"",
  topOfTail:"",
  topOfFloatCollar:"",
};
// LINER INITIAL STATE
const inputDataLiner = {
  openHoleID: "",
  linerCsgID: "",
  linerCsgOD: "",
  linerCsgShoe:"",
  previousCsgID: "",
  lengthOfTailAboveShoe: "",
  measuredDepth: "",
  leadExcess: "",
  tailExcess: "",
  previousCsgShoe: "",
  topOfSlurry:"",
  topOfFloatCollar:"",
  topOfLiner:"",
  
  drillPipeID:"",
  drillPipeDepth:"",
  settingToolAssemblyID: "",

  ShoeTrack(){
    return (this.measuredDepth - this.linerCsgShoe)
  },
  TopOfTail(){
    return (this.linerCsgShoe - this.lengthOfTailAboveShoe)
  },
}



export const ContextProvider = ({children}) => {
  const [wellData, setWellData] = useState(DataPrimary);
  const [casingType, setCasingType] = useState("13-3/8 inch");
  const [width, setWidth] = useState(false)
  const [navSmallJobSelect, setNavSmallJobSelect] = useState(false)
  const [wellData2, setWellData2] = useState({
    casingOD(casingType){
      if(casingType==="13-3/8 inch") return "13.375"
      else if(casingType==="9-5/8 inch") return "9.625"
      else if(casingType==="7 inch") return "7"
    },
    openHole(casingType){
      if(casingType==="13-3/8 inch") return "16"
      else if(casingType==="9-5/8 inch") return "12.25"
      else if(casingType==="7 inch") return "8.5"
      else return "" 
    },
    casingID : "",
    casingShoe : "",
    topOfLead: "",
    topOfTail : "",
    topOfFloatCollar: "",
    previousCsgShoe: "",
    previousCsgID: "",
    leadExcess:"",
    tailExcess: "",
    measuredDepth:"",
  });
  const [plug, setPlug] = useState(inputDataPlug);
  const [liner, setLiner] = useState(inputDataLiner);
  const [isUniformStinger, setIsUniformStinger]= useState(true);
  const [unit, setUnit] = useState("ft");

  const [calculator, setCalculator] = useState(false);


  const Liner_Slurry_Volume =(Number(wellData.volOfLead) + Number(wellData.volOfTail)).toFixed(1)


  return (
    <StateContext.Provider
    value={{
     unit, setUnit,
     wellData, setWellData,
     isUniformStinger, setIsUniformStinger,
     liner, setLiner, calculator, setCalculator,
     wellData2, setWellData2, casingType, setCasingType,
     navSmallJobSelect, setNavSmallJobSelect,
     width, setWidth,

      // mode , setMode, 
     plug,
     setPlug,  Liner_Slurry_Volume, 
     
    }}
    >
        {children}
    </StateContext.Provider>
  )
}

export const useGlobalState =() => useContext (StateContext);

