import React, {createContext, useState ,useContext} from 'react';
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

  const ExcessLead = (Number(wellData.leadExcess) +100)*0.01
  const ExcessTail = (Number(wellData.tailExcess) +100)*0.01
  const switchJobUnit = wellData.unit==="2"? 313.8 : 1029.4
  const changerPresentCsgOD = mode==="1338" ? 13.375 : mode==="958"? 9.625: mode==="7INCH"? 7 : wellData.presentCsgOD

  // -------------------PRIMARY CEMENTING CALCULATION------------------------------
  wellData.openHoleCap = (
        (wellData.openHoleID * wellData.openHoleID)/(switchJobUnit) 
        );
  wellData.csgCsgAnn=(
         (  (wellData.previousCsgID*wellData.previousCsgID)-
         (changerPresentCsgOD*changerPresentCsgOD)  )/
         (switchJobUnit) 
          ).toFixed(4);
  wellData.openHoleCsgAnn=(
         (  (wellData.openHoleID*wellData.openHoleID)-
         (changerPresentCsgOD*changerPresentCsgOD)  )/
         (switchJobUnit)  
          ).toFixed(4);
  wellData.casingCap=(
        (wellData.presentCsgID*wellData.presentCsgID)
        /(switchJobUnit)
        ).toFixed(4) ;
  wellData.presentCsgShoe=
       (wellData.measuredDepth - wellData.ratHole);  
  wellData.topOfFloat=
        (wellData.presentCsgShoe-wellData.shoeTrack)   ; 
  wellData.topOfTail=
        (wellData.presentCsgShoe-wellData.lengthOfTailAboveShoe) ;  
  // wellData.topOfLead= (wellData.previousCsgShoe-wellData.overlap);  
//-------------- RESULT COMPUTATION--------------------------------
  wellData.volOfLead = ( 
        ( (wellData.previousCsgShoe-wellData.topOfLead)
         * (wellData.csgCsgAnn )  ) +
        (  (wellData.openHoleCsgAnn) * 
          (wellData.topOfTail-wellData.previousCsgShoe) * (ExcessLead))
        ).toFixed(1)
//--------------- TAIL-------------------------------
  wellData.volOfTail = (
        ( (wellData.presentCsgShoe-wellData.topOfTail)
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
     setPlug, drillPipe, setDrillPipe,
    }}
    >
        {children}
    </StateContext.Provider>
  )
}

export const useGlobalState =() => useContext (StateContext);

