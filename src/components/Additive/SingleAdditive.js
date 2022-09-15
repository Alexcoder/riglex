import React from 'react';
import { Grid, TextField } from '@mui/material';

const SingleAdditive = ({label,value,onChange}) => {

  return (
      <Grid item xs={10} sm={10} md={4}>
        <TextField
        InputProps={{
            inputProps:{
              style:{ fontSize: "1rem", backgroundColor: "white", height: "" }
          }
        }}
     className="additive_input"
      id="outlined-basic" type='number' variant="outlined"
      value={value} 
      label={label} 
      onChange={onChange}
      />
      </Grid>
  )
}

export default SingleAdditive