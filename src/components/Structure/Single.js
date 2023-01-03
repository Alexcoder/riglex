import React from 'react';
import {TextField, Grid} from '@mui/material'

export const SingleInputPlug = ({onChange,label,value,name}) => {

  return (
    <Grid item xs={12} sm={12} md={3}>
       <TextField 
         sx={{width:{md:"11.5rem", sm: "15rem", xs: "16rem"}}}
         name={name}
        id="outlined-basic" label={label} variant="filled" type="number" value={value}
       onChange={onChange}
       />
   </Grid>
  )
}

