import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Grid} from '@mui/material';
import '../Primary/InputPrimary.css';
import {InputPrimary, InputPlug} from '../../components'

import { useGlobalState } from '../../state/context/Context';
import "./FieldCementing.css";


const FieldCementing = () =>  { 
  const navigate = useNavigate()
  const {theme, mode, setMode, wellData , unitChanger}= useGlobalState();
  const {unit}= wellData
   const handleButtonColor = (value) => {
    if(unit=== value){
      return theme 
    } else {
      return 
    }
   }


   const handleSelect=(e)=>{
    setMode(e.target.value);
   }

   if(mode==="bump-pressure") navigate("/select/bump-pressure")



const handleSubmit =(e)=> {
e.preventDefault()
}

return (
<div className="f_container">
    <div >
  <select className="f_select" type="number" value={mode}
    onChange={handleSelect}>
      <option className={`option_class`} disabled={mode!=="0"}>Select type of cementing</option>
      <option className={mode==="OTHERS"? 'green option_class' : "option_class"} value={"OTHERS"}>Primary Cementing</option>
      <option className={mode==="1338"? 'green option_class' : "option_class"} value={"1338"}>13-3/8 inch Casing Cementing</option>
      <option className={mode==="958"? 'green option_class' : "option_class"} value={"958"}>9-5/8 inch Casing Cementing</option>
      <option className={`option_class ${handleButtonColor("7INCH")}`} value={"7INCH"}>7 inch Casing Cementing</option>
      <option className={`option_class ${handleButtonColor("PLUG")}`} value={"PLUG"}>Balanced Plug</option>
      <option className={`option_class ${handleButtonColor("liner")}`} value={"liner"}>Liner Cementing</option>
      <option className={`option_class ${handleButtonColor("bump-pressure")}`} value={"bump-pressure"}> Bump Pressure</option>

   </select>         
    </div>

  {/* -----------------------------INPUT PAGE CONDITIONAL RENDERING----------------------------- */}
<Grid container textAlign= "center" justifyContent="center" alignItems="center">
  { mode==="OTHERS" || null  ? 
    <InputPrimary 
    LABEL= "PRIMARY CEMENTING DATA" 
    onSubmit={handleSubmit}
    PreviousCsgShoe={`Previous Csg Shoe (${unitChanger})`}
    PreviousCsgOD="Previous Csg OD (inches)"
    PreviousCsgID="Previous Csg ID (inches)"
    CasingOD="Present Csg OD (inches)"
    CasingID= "Present Csg ID (inches)"
    />
     : null
  }
{ mode==="1338" ?
  <InputPrimary
  LABEL= "13-3/8 IN CSG CEMENTING DATA" 
  onSubmit={handleSubmit}
  PreviousCsgShoe={`Conductor Csg SHOE (${unitChanger})`}
  PreviousCsgOD="Conductor Csg OD (inches)"
  PreviousCsgID="Conductor Csg ID (inches)"
  CasingOD="13-3/8 Csg OD (inches)"
  CasingID= "13-3/8 Csg ID (inches)"
  />: 
   null
}
{ mode==="958" ?
 <InputPrimary 
 LABEL= "9-5/8 IN CSG CEMENTING DATA" 
 onSubmit={handleSubmit}
 PreviousCsgShoe={`13-3/8 Csg SHOE (${unitChanger})`}
 PreviousCsgOD="13-3/8 Csg OD (inches)"
 PreviousCsgID="13-3/8 Csg ID (inches)"
 CasingOD="9-5/8 IN Csg OD (inches)"
 CasingID= "9-5/8 IN Csg ID (inches)" 
 />
 :null
}
{/* ------------------------------------------------------------------------------ */}
{ mode==="7INCH" ? 
  <InputPrimary
  LABEL= "7 INCH CEMENTING DATA"
  onSubmit={handleSubmit}
  PreviousCsgShoe={`9-5/8 Csg Shoe (${unitChanger})`} 
  PreviousCsgOD="9-5/8 Csg OD (inches)"
  PreviousCsgID="9-5/8 Csg ID (inches)"
  CasingOD="7 inch Csg OD (inches)"
  CasingID= "7 inch Csg ID (inches)"
  />
  : null
}
{/* ------------------------PLUG RENDERING------------------------------------ */}
{ mode==="PLUG" ? 
  <InputPlug
  LABEL= "BALANCED PLUG DATA" 
  onSubmit={handleSubmit}
  />
  : null
}
{/* ---------------LINER------------------- */}
{ mode==="liner" ? 
    <InputPrimary 
    LABEL= "LINER CEMENTING DATA" 
    onSubmit={handleSubmit}
    PreviousCsgShoe= {`Previous Csg Shoe (${unitChanger})`}
    PreviousCsgOD="Previous Csg OD (inches)"
    PreviousCsgID="Previous Csg ID (inches)"
    CasingOD="Liner Csg OD (inches)"
    CasingID= "Liner Csg ID (inches)"
    />
     : null
  }

   </Grid> 
</div>
)
}

export default FieldCementing;
