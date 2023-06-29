import React, {createContext, useState ,useContext } from 'react';
// import {inputDataPrimary} from '../../object'
import {inputDataPlug} from '../../object'


export const StateContext = createContext();

export const DataPrimary = {
  openHoleID: "",
  presentCsgID: "",
  presentCsgOD(casing){
    if(casing==="13-3/8 inch") return Number(13.375)
    else if(casing==="9-5/8 inch") return Number(9.625)
    else if(casing==="7 inch") return Number(7)
    else return ""
  },
  previousCsgID: "",
  lengthOfTailAboveShoe: "",
  measuredDepth: "",
  leadExcess: "",
  tailExcess: "",
  previousCsgShoe: "",
  presentCsgShoe:"",
  topOfLead:"",
  topOfTail:"",
  topOfFloatCollar:"",
}


export const ContextProvider = ({children}) => {
  const [wellData, setWellData] = useState(DataPrimary);
  const [plug, setPlug] = useState(inputDataPlug);
  const [isUniformStinger, setIsUniformStinger]= useState(false);
  const [unit, setUnit] = useState("ft");

  const [activeNav, setActiveNav] = useState("home");
  const [mode , setMode] = useState("OTHERS");
  const [theme, setTheme] = useState("greenColor");
  const [sidebar, setSidebar] = useState(false)

  const handleSetModeUnit=(anything)=>{
    setWellData({...wellData, unit: anything} )
    localStorage.setItem('unitButton', anything);
  }


  const SwitchJobUnit = wellData.unit==="m"? 313.8 : 1029.4
  const ChangerPresentCsgOD = mode==="1338" ? 13.375 : mode==="958"? 9.625: mode==="7INCH"? 7 : wellData.presentCsgOD
 const Liner_Slurry_Volume =(Number(wellData.volOfLead) + Number(wellData.volOfTail)).toFixed(1)

 


  return (
    <StateContext.Provider
    value={{
     unit, setUnit,
     setTheme, wellData, setWellData,
     isUniformStinger, setIsUniformStinger,

      mode , setMode, theme, 
     activeNav, setActiveNav, plug,
     setPlug,  Liner_Slurry_Volume, ChangerPresentCsgOD,
     
    //  unitChanger, 
     SwitchJobUnit, handleSetModeUnit, sidebar, setSidebar, 
    }}
    >
        {children}
    </StateContext.Provider>
  )
}

export const useGlobalState =() => useContext (StateContext);

