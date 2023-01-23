import React from 'react';
import { Grid, TextField, Typography} from '@mui/material';
// import '../calcPage/Primary/InputPrimary.css';


export const SingleInputPlug = ({label,value, name, onChange}) => { 
  return (
        <Grid item xs={12} sm={6} md={3} 
          sx={{padding:"1rem 0.5rem 1rem 0.5rem",display:"flex", justifyContent:"center", textAlign:"start",alignItems:"center", width:"100%", border:"0.5px solid lightgray"}}
        >    
         <div style={{width:"100%", }}>
          <Typography sx={{width:"100%"}}>{label}</Typography>
          </div>
             <TextField  
              sx={{padding: "0.1rem", width:"50%", height:"3rem"}}
                variant="outlined"
                color="primary"
                name={name}
                type='number' 
                value={value} 
                onChange={onChange} />
       </Grid>
  )
}


