import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@mui/material';
import MySelect from "./Children/Select";
import MyInput from "./Children/Input";
import MyResult from "./Children/Result";
import './Conversion.css';


const ConversionPage = () => { 
  const history= useHistory();
  const [factor, setFactor] = useState("")
  const [modeConversion, setModeConversion] = useState("")
  

useEffect(()=>{
if(modeConversion) localStorage.setItem('modeConversion',modeConversion) ;
setModeConversion((localStorage.getItem('modeConversion', modeConversion)))
},[modeConversion])


const handleClear =()=> {
  setFactor(""); 
  localStorage.setItem('factor', null); 
  setModeConversion(modeConversion)
};
const handleBack =()=> history.push("/select");



  return (
  <div  style={{backgroundColor: "", height: "25rem", textAlign:"center", justfyContent:"center", width: "100vw"}}>

    <MySelect
    modeConversion={modeConversion}
    setModeConversion={setModeConversion}
    />

    <div className="main_container">
    <Grid item xs={10} md={10} sm={10} sx={{borderColor: "none"}}> 
      <MyInput
        modeConversion={modeConversion}
        setModeConversion={setModeConversion}
        factor={factor}
        setFactor={setFactor}
        />
      <MyResult
        factor={factor}
        modeConversion={modeConversion}
        setModeConversion={setModeConversion}
        />
      
      <div className="button_container">
       <button 
        className= "button_clear" 
        onClick={handleClear}>
          CLEAR
        </button>
        <button 
          className="button_back"
          onClick={handleBack} >
            BACK
        </button>
      </div>

    <div className="lexwares">Lexwares @2022</div>
    </Grid>
    </div>
  </div>
  )
}

export default ConversionPage;
