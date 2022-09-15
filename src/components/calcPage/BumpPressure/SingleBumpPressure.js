import React from 'react';
import {TextField, Grid} from '@mui/material';

const SingleBumpPressure =({label, onChange, value, name})=>{
    return(

        <Grid item xs={12} sm={12} md={4}>
            <TextField variant="filled" type="number" label={label} onChange={onChange} value={value} name={name}
            sx={{width: "22rem"}}/>
        </Grid>
    )
}

export default SingleBumpPressure;