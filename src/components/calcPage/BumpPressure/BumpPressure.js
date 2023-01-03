import React from 'react';
import {useGlobalState} from '../../../state';
import {Grid, Container, Typography, Button, Paper} from '@mui/material';
import './BumpPressure.css';
import SingleBumpPressure from './SingleBumpPressure';
import useBumpPressure from './useBumpPressure';

const BumpPressure = () => {
  const {wellData,setWellData, unitChanger} = useGlobalState()
  const {
        tvd, 
        mudWeight, 
        topOfLeadTvd, 
        topOfTailTvd, 
        topOfFloatTvd, 
        weightOfTailSlurry, 
        weightOfLeadSlurry, 
        weightOfDisplacementFluid,
        presentCsgTvd} = wellData;
  const {handleChange, handleClick, handleVariant} = useBumpPressure() 


  return (
    <Container sx={{textAlign: "center", color: "blue", width: "100vw", margin:"2rem 0rem 0rem 15%",}}>
      <Paper elevation={5} sx={{padding: "1rem 0rem 2rem 0rem", width: "75%",}}>
      <Typography variant="h5" mb={1} sx={{color: "blue"}}>BUMP PRESSURE</Typography>
        <div style={{display: "flex", justifyContent:"center", gap: "1rem", marginBottom:"1rem" }}>
           <Button sx={{width: "10.5rem"}} variant={handleVariant("ft")} onClick={()=> setWellData({...wellData, unit : "ft"})}>FEET</Button>
           <Button sx={{width: "10.5rem"}} variant={handleVariant("m")} onClick={()=> setWellData({...wellData, unit : "m"})}>METER</Button>
        </div>
    <Grid container textAlign="center" justifyContent="center" spacing={1} onChange={handleChange}>
      <SingleBumpPressure label="Mud Weight (ppg)" name="mudWeight" value={mudWeight} onChange={handleChange}/>
      <SingleBumpPressure label="Lead Slurry Weight (ppg)" name="weightOfLeadSlurry" value={weightOfLeadSlurry} onChange={handleChange}/>
      <SingleBumpPressure label="Tail Slurry Weight (ppg)" name="weightOfTailSlurry" value={weightOfTailSlurry} onChange={handleChange}/>
      <SingleBumpPressure label="Displacement Fluid Weight (ppg)" name="weightOfDisplacementFluid" value={weightOfDisplacementFluid} onChange={handleChange}/>

      <SingleBumpPressure label={`Top Of Lead TVD (${unitChanger})`} name="topOfLeadTvd" value={topOfLeadTvd} onChange={handleChange}/>
      <SingleBumpPressure label={`Top Of Tail TVD (${unitChanger})`} name="topOfTailTvd" value={topOfTailTvd} onChange={handleChange}/>
      <SingleBumpPressure label={`Float Collar TVD (${unitChanger})`} name="topOfFloatTvd" value={topOfFloatTvd} onChange={handleChange}/>
      <SingleBumpPressure label={`True Vertical Depth (${unitChanger})`} name="tvd" value={tvd} onChange={handleChange}/>
      <SingleBumpPressure label={`Present Csg Depth TVD (${unitChanger})`} name="presentCsgTvd" value={presentCsgTvd} onChange={handleChange}/>

    </Grid>
    <Button onClick={handleClick} variant="contained" sx={{marginTop:"2rem", width:{md:"18rem", sm:"18rem", xs:"14rem"}}}>VIEW RESULT</Button>
      </Paper>
    </Container>



  )
}

export default BumpPressure;