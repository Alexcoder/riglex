import React  from 'react';
// {useEffect}
import {useHistory} from 'react-router-dom';
import { Grid} from '@mui/material';
import '../Primary/InputPrimary.css';
import {InputPrimary, InputPlug} from '../../../components'

import { useGlobalState } from '../../../state';


const FieldCementing = () =>  { 
  const history = useHistory()
  const {theme, mode, setMode, wellData , unitChanger}= useGlobalState();
  const {unit}= wellData
  // setWellData
   const handleButtonColor = (value) => {
    if(unit=== value){
      return theme 
    } else {
      return 
    }
   }


   const handleSelect=(e)=>{
    setMode(e.target.value);
    // setMode(localStorage.getItem("mode"));
    // localStorage.setItem('mode', mode) ;
    // localStorage.setItem('mode', e.target.value) ;
   }

   if(mode==="bump-pressure") history.push("/select/bump-pressure")


  //  --------EFFECT HOOK FOR LOCAL STORAGE------------------
  //  useEffect(()=>{
  //   if(mode) localStorage.setItem('mode', mode) ;
  //   if(unit)localStorage.setItem('unitButton', unit) ;
  //   setWellData({...wellData, unit: (localStorage.getItem("unitButton"))  });
  // },[wellData,setWellData, setMode, mode, unit])


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
