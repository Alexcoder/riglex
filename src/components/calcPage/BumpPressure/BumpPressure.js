import React from 'react';
import {useHistory} from 'react-router-dom';
import {useGlobalState} from '../../../state';
import {Grid, Container, Typography, Button} from '@mui/material';
import './BumpPressure.css';
import SingleBumpPressure from './SingleBumpPressure';

const BumpPressure = () => {
  const {wellData,setWellData} = useGlobalState()
  const {mudWeight, weightOfLeadSlurry, weightOfTailSlurry, 
        weightOfDisplacementFluid,topOfLeadTvd, topOfTailTvd, topOfFloatTvd, tvd, presentCsgTvd} = wellData;

  const history = useHistory();

  function handleChange(e){
    setWellData({...wellData, [e.target.name]: e.target.value})
  }
  function handleClick(){
    if(mudWeight>="0" & weightOfLeadSlurry>="0" & weightOfTailSlurry>="0" & weightOfDisplacementFluid>="0" 
      & topOfLeadTvd>="0" & topOfTailTvd>="0"  & topOfFloatTvd>="0" & tvd>="0" & presentCsgTvd>="0") history.push("/select/result-primary")
      else alert("Empty field not allowed")
  }

  return (
    <Container sx={{textAlign: "center", color: "blue", }}>
      <Typography variant="h5" mb={2} >BUMP PRESSURE</Typography>
    <Grid container textAlign="center" justifyContent="center" spacing={1} onChange={handleChange}>
      <SingleBumpPressure label="MUD WEIGHT (ppg)" name="mudWeight" value={mudWeight} onChange={handleChange}/>
      <SingleBumpPressure label="LEAD SLURRY WEIGHT (ppg)" name="weightOfLeadSlurry" value={weightOfLeadSlurry} onChange={handleChange}/>
      <SingleBumpPressure label="TAIL SLURRY WEIGHT (ppg)" name="weightOfTailSlurry" value={weightOfTailSlurry} onChange={handleChange}/>
      <SingleBumpPressure label="DISPLACEMENT FLUID WEIGHT (ppg)" name="weightOfDisplacementFluid" value={weightOfDisplacementFluid} onChange={handleChange}/>

      <SingleBumpPressure label="TOP OF LEAD TVD (ft)" name="topOfLeadTvd" value={topOfLeadTvd} onChange={handleChange}/>
      <SingleBumpPressure label="TOP OF TAIL TVD (ft)" name="topOfTailTvd" value={topOfTailTvd} onChange={handleChange}/>
      <SingleBumpPressure label="FLOAT COLLAR TVD (ft)" name="topOfFloatTvd" value={topOfFloatTvd} onChange={handleChange}/>
      <SingleBumpPressure label="TRUE VERTICAL DEPTH (ft)" name="tvd" value={tvd} onChange={handleChange}/>
      <SingleBumpPressure label="PRESENT CSG DEPTH TVD DEPTH (ft)" name="presentCsgTvd" value={presentCsgTvd} onChange={handleChange}/>

    </Grid>
    <Button onClick={handleClick} variant="contained" sx={{marginTop:"2rem", width: "22rem"}}>VIEW RESULT</Button>
    </Container>



  )
}

export default BumpPressure;