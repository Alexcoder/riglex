import {TextField } from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import useConversion from "./useConversion";

import '../Conversion.css';


const Input =(props)=>{
    const {factor, setFactor, modeConversion, setModeConversion}= props;
    const {baseUnit, data, Revert}= useConversion(factor, modeConversion, setModeConversion);


    return(
        <div>
            <h1 className="h1_data"> {data} </h1>
             <div className="textField_toggle">
              <TextField 
                 type='number' 
                 variant="outlined"
                 value={factor} 
                 label={`${baseUnit}`} 
                 sx={{fontWeight:"600"}}
                 onChange={(e)=> {modeConversion && setFactor(e.target.value)}}
                />
              <button style={{height:"3.57rem"}} onClick={Revert}><SyncAltIcon/></button>
          </div>
          </div>
    
    )


}

export default Input;