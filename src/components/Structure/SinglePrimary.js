import React from 'react';
import { Grid, TextField} from '@mui/material';
import '../calcPage/Primary/InputPrimary.css';


export const SinglePrimary = ({label,value, name, onChange}) => { 
  return (
        <Grid item xs={12} sm={12} md={6} 
        className ="input1338_textField_grid"
        >
         <TextField  
          InputProps={{
              inputProps:{
                style:{fontSize: "1.2rem", width: "18rem" }
            }
          }}
         style={{padding: "0.45rem"}}
            id="outlined-basic" 
            label={label}
            variant="outlined"
            name={name}
            type='number' 
            value={value} 
            onChange={onChange} />
       </Grid>
  )
}
