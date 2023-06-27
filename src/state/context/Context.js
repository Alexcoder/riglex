import React, {createContext, useState ,useContext } from 'react';
import {inputDataPrimary} from '../../object'
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
  const [unit, setUnit] = useState("ft");

  const [activeNav, setActiveNav] = useState("home");
  const [mode , setMode] = useState("OTHERS");
  const [theme, setTheme] = useState("greenColor");
  const [jobMode, setJobMode] = useState();
  const [drillPipe, setDrillPipe] = useState(false)
  const [navMode, setNavMode] = useState("")
  const [sidebar, setSidebar] = useState(false)
  const [showPlugResult, setShowPlugResult] = useState(false)
  const [showPrimaryResult, setShowPrimaryResult] = useState(false)

  const handleSetModeUnit=(anything)=>{
    setWellData({...wellData, unit: anything} )
    localStorage.setItem('unitButton', anything);
  }


  // const ExcessLead = (Number(wellData.leadExcess) +100)*0.01
  // const ExcessTail = (Number(wellData.tailExcess) +100)*0.01
  const SwitchJobUnit = wellData.unit==="m"? 313.8 : 1029.4
  // const unitChanger = wellData.unit==="m"? "m" : "ft"
  const ChangerPresentCsgOD = mode==="1338" ? 13.375 : mode==="958"? 9.625: mode==="7INCH"? 7 : wellData.presentCsgOD
  // const ExcessLeadChanger = mode==="liner" ? ExcessTail : ExcessLead;
  // const Liner_csg_csg_gap = Number(wellData.presentCsgShoe)-Number(wellData.previousCsgShoe);
//  const Length_Of_Tail__Above_Shoe_Changer = mode==="liner" ? Liner_csg_csg_gap : wellData.lengthOfTailAboveShoe;
 const Liner_Slurry_Volume =(Number(wellData.volOfLead) + Number(wellData.volOfTail)).toFixed(1)

 

  // -------------------PRIMARY CEMENTING CALCULATION------------------------------
  // const TopOfTail= (wellData.presentCsgShoe - Length_Of_Tail__Above_Shoe_Changer) ; 


  return (
    <StateContext.Provider
    value={{
     unit, setUnit, mode , setMode, theme, setTheme, wellData, setWellData,
     activeNav, setActiveNav, jobMode, setJobMode, plug,
     setPlug, drillPipe, setDrillPipe, navMode, setNavMode, Liner_Slurry_Volume, ChangerPresentCsgOD,
     
    //  unitChanger, 
     SwitchJobUnit, handleSetModeUnit, sidebar, setSidebar,showPlugResult, 
     setShowPlugResult,


     showPrimaryResult, setShowPrimaryResult,
    }}
    >
        {children}
    </StateContext.Provider>
  )
}

export const useGlobalState =() => useContext (StateContext);

