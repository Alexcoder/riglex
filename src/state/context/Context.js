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
  const [wellData2, setWellData2] = useState({
    casingOD(size){
      if(size==="13-3/8 inch") return 13.375
      else if(size==="9-5/8 inch") return 9.625
      else if(size==="7 inch") return 7
      else return ""
    },
    openHole(size){
      if(size==="13-3/8 inch") return 16
      else if(size==="9-5/8 inch") return 12.25
      else if(size==="7 inch") return 8.5
      else return ""
    },
  });
  const [plug, setPlug] = useState(inputDataPlug);
  const [liner, setLiner] = useState(inputDataLiner);
  const [isUniformStinger, setIsUniformStinger]= useState(true);
  const [unit, setUnit] = useState("ft");

  const [calculator, setCalculator] = useState(false);

  // const [mode , setMode] = useState("OTHERS");
  const [theme, setTheme] = useState("greenColor");
  // const [sidebar, setSidebar] = useState(false)


  const Liner_Slurry_Volume =(Number(wellData.volOfLead) + Number(wellData.volOfTail)).toFixed(1)


  return (
    <StateContext.Provider
    value={{
     unit, setUnit,
     setTheme, wellData, setWellData,
     isUniformStinger, setIsUniformStinger,
     liner, setLiner, calculator, setCalculator,
     wellData2, setWellData2,

      // mode , setMode, 
      theme, 
     plug,
     setPlug,  Liner_Slurry_Volume, 
     
    }}
    >
        {children}
    </StateContext.Provider>
  )
}

export const useGlobalState =() => useContext (StateContext);

