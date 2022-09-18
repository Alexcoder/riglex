import React, {createContext, useState ,useContext } from 'react';
import {inputDataPrimary} from '../../object'
import {inputDataPlug} from '../../object'


export const StateContext = createContext();

export const ContextProvider = ({children}) => {
  const [wellData, setWellData] = useState(inputDataPrimary);
  const [activeNav, setActiveNav] = useState("home");
  const [mode , setMode] = useState("");
  const [theme, setTheme] = useState("green");
  const [jobMode, setJobMode] = useState();
  const [plug, setPlug] = useState(inputDataPlug)
  const [drillPipe, setDrillPipe] = useState(false)
  const [navMode, setNavMode] = useState("")

  const handleSetModeUnit=(unit)=>{
    localStorage.setItem('unitButton', wellData.unit);
    setWellData({...wellData, unit: unit} )
  }

  wellData.lengthOfTailAboveShoe = wellData.presentCsgShoe - wellData.topOfTail

  const ExcessLead = (Number(wellData.leadExcess) +100)*0.01
  const ExcessTail = (Number(wellData.tailExcess) +100)*0.01
  const SwitchJobUnit = wellData.unit==="m"? 313.8 : 1029.4
  const unitChanger = wellData.unit==="m"? "m" : "ft"
  const ChangerPresentCsgOD = mode==="1338" ? 13.375 : mode==="958"? 9.625: mode==="7INCH"? 7 : wellData.presentCsgOD
  const ExcessLeadChanger = mode==="liner" ? ExcessTail : ExcessLead;
  const Liner_csg_csg_gap = Number(wellData.presentCsgShoe)-Number(wellData.previousCsgShoe);
 const Length_Of_Tail__Above_Shoe_Changer = mode==="liner" ? Liner_csg_csg_gap : wellData.lengthOfTailAboveShoe;
 const Liner_Slurry_Volume =(Number(wellData.volOfLead) + Number(wellData.volOfTail)).toFixed(1)

 

  // -------------------PRIMARY CEMENTING CALCULATION------------------------------
  wellData.openHoleCap = ((wellData.openHoleID **2)/(SwitchJobUnit) ).toFixed(4);
  wellData.csgCsgAnn=(((wellData.previousCsgID **2) - (ChangerPresentCsgOD **2)) /(SwitchJobUnit) ).toFixed(4);
  wellData.openHoleCsgAnn=(((wellData.openHoleID **2) - (ChangerPresentCsgOD **2)) /(SwitchJobUnit)).toFixed(4);
  wellData.casingCap=((wellData.presentCsgID **2) /(SwitchJobUnit)).toFixed(4) ;
  wellData.presentCsgShoe= (wellData.measuredDepth - wellData.ratHole);  
  wellData.topOfFloat= (wellData.presentCsgShoe-wellData.shoeTrack)   ; 
  const TopOfTail= (wellData.presentCsgShoe - Length_Of_Tail__Above_Shoe_Changer) ; 

//-------------- RESULT COMPUTATION--------------------------------
  wellData.volOfLead = mode==="liner"? ( 
                     ( (wellData.previousCsgShoe-wellData.topOfLead)
                      * (wellData.csgCsgAnn ))).toFixed(1)
                   :             
                     (
                     ( (wellData.previousCsgShoe-wellData.topOfLead)
                     * (wellData.csgCsgAnn )  ) +
                     (  (wellData.openHoleCsgAnn) * 
                      (TopOfTail-wellData.previousCsgShoe) * (ExcessLeadChanger))
                     ).toFixed(1)


//--------------- TAIL-------------------------------
  wellData.volOfTail = (
        ( (wellData.presentCsgShoe-TopOfTail)
        *(wellData.openHoleCsgAnn) *
         (ExcessTail)  
           +
       (wellData.openHoleCap * wellData.ratHole * ExcessTail)   +
       (wellData.casingCap * wellData.shoeTrack)  )
       ).toFixed(1)
//--------------- DISPLACEMENT -----------------------
  wellData.displacement =(wellData.casingCap*wellData.topOfFloat).toFixed(1) ; 
// ---------------------------PRIMARY CALCULATION CONPLETED--------------------------------------------

  return (
    <StateContext.Provider
    value={{
     mode , setMode, theme, setTheme, wellData, setWellData,
     activeNav, setActiveNav, jobMode, setJobMode, plug,
     setPlug, drillPipe, setDrillPipe, navMode, setNavMode, Liner_Slurry_Volume, ChangerPresentCsgOD,
     unitChanger, SwitchJobUnit, handleSetModeUnit,
    }}
    >
        {children}
    </StateContext.Provider>
  )
}

export const useGlobalState =() => useContext (StateContext);

