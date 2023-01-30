import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';

const SingleAdditive = ({label,value,onChange}) => {

  return (
    <Grid 
      sx={{
           display:"flex", 
           background:"white",
           justifyContent:"space-between",
           padding:"0.5rem 2rem",
           border:"0.1px solid lightgray",
         }}>
      <Typography 
         sx={{
             marginTop:"1rem", 
             textAlign:"start"
             }}>
              {label}
      </Typography>
      <TextField
           sx={{width: "30%",}}
           type='number' 
           variant="outlined"
           value={value} 
           onChange={onChange}
      />
    </Grid>
  )
}

export default SingleAdditive