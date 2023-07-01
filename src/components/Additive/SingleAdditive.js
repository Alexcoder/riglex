import React from 'react';
import { Grid, Typography } from '@mui/material';

const SingleAdditive = ({label,value,onChange}) => {

  return (
    <Grid 
      sx={{
           display:"flex", 
           background:"white",
           justifyContent:"space-between",
           alignItems: "center",
           padding:"0.5rem 1rem",
           border:"0.1px solid lightgray",
         }}>
      <Typography 
         sx={{
             textAlign:"start"
             }}>
              {label}
      </Typography>
      <input
           style={{
            width: "25%", 
            border:"1px solid lightgray", 
            padding:"0.3rem",
            borderRadius:"0.2rem",
            boxShadow:"0 0 2px 0 gray"
          }}
           type='number' 
           variant="outlined"
           value={value} 
           onChange={onChange}
      />
    </Grid>
  )
}

export default SingleAdditive