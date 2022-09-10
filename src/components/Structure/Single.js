import React from 'react';
import {TextField, Grid} from '@mui/material'

export const SingleInputPlug = ({onChange,label,value,name}) => {

  return (
    <Grid item xs={10} md={10} sm={10}>
       <TextField 
                 InputProps={{
                  inputProps:{
                    style:{textAlign: "center" , fontSize: "1.2rem",}
                }
              }}
       className="inputPagePlugIndividualTextField" name={name}
       fullWidth id="outlined-basic" label={label} variant="outlined" type="number" value={value}
       onChange={onChange}
       style={{fontSize: 12}}/>
   </Grid>
  )
}

