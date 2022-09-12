import React, {useEffect} from 'react'
import { CircularProgress, Grid} from '@mui/material'
import '../Primary/InputPrimary.css'
import {InputPrimary, InputPlug} from '../../../components'

import { useGlobalState } from '../../../state';
import {useLocation} from 'react-router-dom'


const FieldCementing = () =>  { 
  const {theme, mode, setMode, wellData ,setWellData}= useGlobalState();
  const path = useLocation().pathname;

   const handleButtonColor = (value) => {
    if(wellData.unit=== value){
      return theme 
    } else {
      return 
    }
   }
   const handleSelect=(e)=>{
    setMode(e.target.value || JSON.parse(localStorage.getItem('mode', mode)));
   }
  //  --------EFFECT HOOK FOR LOCAL STORAGE------------------
   useEffect(()=>{
    if(mode) localStorage.setItem('mode', mode) ;
    setMode(localStorage.getItem('mode', mode));
    if(wellData.unit) localStorage.setItem('unitButton', wellData.unit) ;
    setWellData({...wellData, unit: (localStorage.getItem("unitButton", wellData.unit))  });

  },[mode, setMode, wellData, setWellData, path])

const handleSubmit =(e)=> {
e.preventDefault()
}

return (
<div>
    <div style={{textAlign: "center"}}>
  <select className="select_FieldCementing" type="number" value={mode}
    onChange={handleSelect}>
      <option className={`option_class`} disabled={mode!=="0"}>Select type of cementing</option>
      <option className={mode==="OTHERS"? 'green option_class' : "option_class"} value={"OTHERS"}>Primary Cementing</option>
      <option className={mode==="1338"? 'green option_class' : "option_class"} disabled={mode==="1338"} value={"1338"}>13-3/8 inch Casing Cementing</option>
      <option className={mode==="958"? 'green option_class' : "option_class"} value={"958"}>9-5/8 inch Casing Cementing</option>
      <option className={`option_class ${handleButtonColor("7INCH")}`} value={"7INCH"}>7 inch Casing Cementing</option>
      <option className={`option_class ${handleButtonColor("PLUG")}`} value={"PLUG"}>Plug Cementing</option>
   </select>         
    </div>
   <Grid container textAlign="center" justifyContent="center" sx={{gap:"2rem"}} className="flexUnitButton">
   <button  onClick={()=> setWellData({...wellData, unit: ("ft")} )}
       className={`button_field ${handleButtonColor("ft")}`} value={"ft"} > FEET</button>
    <button onClick={()=> setWellData({...wellData, unit: ("m")}) } 
      className={`button_field ${handleButtonColor("m")}`} value={"m"} > METER </button>
   </Grid> 

  {/* -----------------------------INPUT PAGE CONDITIONAL RENDERING----------------------------- */}
<Grid container textAlign= "center" justifyContent="center" alignItems="center" className="field_container_grid2">
  {mode==="0" ? <h1>CLICK TO SELECT CEMENTING TYPE AND UNIT</h1>: null}
  {
    ( mode!=="1338" & mode!=="958" & mode!=="7INCH" & mode!=="" & mode!=="OTHERS" & mode!=="PLUG") ? <CircularProgress style={{textAlign: "center"}}/> : null
  }
  { mode==="" || mode==="OTHERS" || !mode ? 
    <InputPrimary   wellData={wellData} setWellData={setWellData}
    LABEL= "PRIMARY CEMENTING DATA" 
    onSubmit={handleSubmit}
    PreviousCsgShoe="PREVIOUS CSG SHOE"
    PreviousCsgOD="PREVIOUS CSG OD (inches)"
    PreviousCsgID="PREVIOUS CSG ID (inches)"
    CasingOD="PRESENT CSG OD (inches)"
    CasingID= "PRESENT CSG ID (inches)"
    />
     : null
  }
{ mode==="1338" ?
  <InputPrimary
  LABEL= "13-3/8 IN CSG CEMENTING DATA" 
  onSubmit={handleSubmit}
  PreviousCsgShoe="CONDUCTOR CSG SHOE"
  PreviousCsgOD="CONDUCTOR CSG OD (inches)"
  PreviousCsgID="CONDUCTOR CSG ID (inches)"
  CasingOD="13-3/8 IN CSG OD (inches)"
  CasingID= "13-3/8 IN CSG ID (inches)"
  wellData={wellData} setWellData={setWellData}
  />: 
   null
}
{ mode==="958" ?
 <InputPrimary 
 LABEL= "9-5/8 IN CSG CEMENTING DATA" 
 onSubmit={handleSubmit}
 PreviousCsgShoe="13-3/8 CSG SHOE"
 PreviousCsgOD="13-3/8 CSG OD (inches)"
 PreviousCsgID="13-3/8 CSG ID (inches)"
 CasingOD="9-5/8 IN CSG OD (inches)"
 CasingID= "9-5/8 IN CSG ID (inches)" 
 wellData={wellData} setWellData={setWellData}
 />
 :null
}
{/* ------------------------------------------------------------------------------ */}
{ mode==="7INCH" ? 
  <InputPrimary   wellData={wellData} setWellData={setWellData}
  LABEL= "7 INCH CEMENTING DATA" 
  onSubmit={handleSubmit}
  PreviousCsgShoe="9-5/8 CSG SHOE"
  PreviousCsgOD="9-5/8 CSG OD (inches)"
  PreviousCsgID="9-5/8 CSG ID (inches)"
  CasingOD="7 INCH CSG OD (inches)"
  CasingID= "7 INCH CSG ID (inches)"
  />
  : null
}
{/* ------------------------PLUG RENDERING------------------------------------ */}
{ mode==="PLUG" ? 
  <InputPlug   wellData={wellData} setWellData={setWellData}
  LABEL= "PLUG CEMENTING DATA" 
  onSubmit={handleSubmit}
  />
  : null
}

   </Grid> 
</div>
)
}

export default FieldCementing;
