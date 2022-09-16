import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { Grid} from '@mui/material';
import '../Primary/InputPrimary.css';
import {InputPrimary, InputPlug} from '../../../components'

import { useGlobalState } from '../../../state';


const FieldCementing = () =>  { 
  const history = useHistory()
  const {theme, mode, setMode, wellData ,setWellData, unitChanger}= useGlobalState();

   const handleButtonColor = (value) => {
    if(wellData.unit=== value){
      return theme 
    } else {
      return 
    }
   }


   const handleSelect=(e)=>{
    setMode(e.target.value);
    localStorage.setItem('mode', mode) ;
   }

   if(mode==="bump-pressure") history.push("/select/bump-pressure")


  //  --------EFFECT HOOK FOR LOCAL STORAGE------------------
   useEffect(()=>{
    if(mode) localStorage.setItem('mode', mode) ;
    if(wellData.unit) localStorage.setItem('unitButton', wellData.unit) ;
    setMode(localStorage.getItem('mode', mode));
    setWellData({...wellData, unit: (localStorage.getItem("unitButton", wellData.unit))  });
  },[wellData,setWellData, setMode, mode])


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
      <option className={mode==="1338"? 'green option_class' : "option_class"} value={"1338"}>13-3/8 inch Casing Cementing</option>
      <option className={mode==="958"? 'green option_class' : "option_class"} value={"958"}>9-5/8 inch Casing Cementing</option>
      <option className={`option_class ${handleButtonColor("7INCH")}`} value={"7INCH"}>7 inch Casing Cementing</option>
      <option className={`option_class ${handleButtonColor("PLUG")}`} value={"PLUG"}>Plug Cementing</option>
      <option className={`option_class ${handleButtonColor("liner")}`} value={"liner"}>Liner Cementing</option>
      <option className={`option_class ${handleButtonColor("bump-pressure")}`} value={"bump-pressure"}> Bump Pressure</option>

   </select>         
    </div>
    {/* --USED TO CONTAIN BUTTON GRID */}

  {/* -----------------------------INPUT PAGE CONDITIONAL RENDERING----------------------------- */}
<Grid container textAlign= "center" justifyContent="center" alignItems="center">
  { mode==="OTHERS"  ? 
    <InputPrimary 
    LABEL= "PRIMARY CEMENTING DATA" 
    onSubmit={handleSubmit}
    PreviousCsgShoe={`PREVIOUS CSG SHOE (${unitChanger})`}
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
  PreviousCsgShoe={`CONDUCTOR CSG SHOE (${unitChanger})`}
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
 PreviousCsgShoe={`13-3/8 CSG SHOE (${unitChanger})`}
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
  <InputPrimary
  LABEL= "7 INCH CEMENTING DATA"
  onSubmit={handleSubmit}
  PreviousCsgShoe={`"9-5/8 CSG SHOE" ${unitChanger})`} 
  PreviousCsgOD="9-5/8 CSG OD (inches)"
  PreviousCsgID="9-5/8 CSG ID (inches)"
  CasingOD="7 INCH CSG OD (inches)"
  CasingID= "7 INCH CSG ID (inches)"
  />
  : null
}
{/* ------------------------PLUG RENDERING------------------------------------ */}
{ mode==="PLUG" ? 
  <InputPlug
  LABEL= "PLUG CEMENTING DATA" 
  onSubmit={handleSubmit}
  />
  : null
}
{/* ---------------LINER------------------- */}
{ mode==="liner" ? 
    <InputPrimary 
    LABEL= "LINER CEMENTING DATA" 
    onSubmit={handleSubmit}
    PreviousCsgShoe= {`PREVIOUS CSG SHOE (${unitChanger})`}
    PreviousCsgOD="PREVIOUS CSG OD (inches)"
    PreviousCsgID="PREVIOUS CSG ID (inches)"
    CasingOD="LINER CSG OD (inches)"
    CasingID= "LINER CSG ID (inches)"
    />
     : null
  }

{/* ---------------BUMP PRESSURE----------- */}
  {/* {mode==="bump-pressure"?
    <BumpPressure/>
      : null
  }
 */}

   </Grid> 
</div>
)
}

export default FieldCementing;
