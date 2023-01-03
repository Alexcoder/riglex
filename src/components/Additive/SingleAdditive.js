import React from 'react';
import { Grid, TextField } from '@mui/material';

const SingleAdditive = ({label,value,onChange}) => {

  return (
    <Grid item xs={12} sm={10} md={12}>
      <TextField
      sx={{width: "17rem", height: "3.5rem"}}
      type='number' variant="outlined"
      value={value} 
      label={label} 
      onChange={onChange}
      />
    </Grid>
  )
}

export default SingleAdditive