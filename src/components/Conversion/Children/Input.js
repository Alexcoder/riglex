import {TextField } from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import useConversion from "./useConversion";

import '../Conversion.css';


const Input =(props)=>{
    const {factor, setFactor, modeConversion, setModeConversion}= props;
    const {baseUnit, data, Revert}= useConversion(factor, modeConversion, setModeConversion);


    return(
        <div className='input-cont'>
            <h2 className="h1_data"> {data} </h2>
             <div className="textField_cont">
              <TextField 
                 type='number' 
                //  variant="outlined"
                 value={factor} 
                 label={`${baseUnit}`} 
                 sx={{fontWeight:"500", border: "1px solid none"}}
                 onChange={(e)=> {modeConversion && setFactor(e.target.value)}}
                />
              <div style={{height:""}} onClick={Revert}><SyncAltIcon sx={{marginTop:"1rem"}}/></div>
          </div>
          </div>
    
    )


}

export default Input;