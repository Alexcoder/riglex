import React from 'react';
import { Grid, TextField} from '@mui/material';
import '../calcPage/Primary/InputPrimary.css';


export const SinglePrimary = ({label,value, name, onChange, disabled}) => { 
  return (
        <Grid item xs={12} sm={6} md={3} 
        >
         <TextField  
         sx={{padding: "0.1rem", width: "92%"}}
            disabled={disabled}
            label={label}
            variant="filled"
            color="primary"
            name={name}
            type='number' 
            value={value} 
            onChange={onChange} />
       </Grid>
  )
}

