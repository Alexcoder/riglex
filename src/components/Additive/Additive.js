import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import SingleAdditive from './SingleAdditive';
import { Grid,  } from '@mui/material';
import './Additive.css';

const Additive = () => {
  const [slurryVolume, setSlurryVolume] = useState("")
  const [mixFluidConc, setMixFluidConc] = useState("")
  const [slurryYield, setSlurryYield] = useState("")
  const [sacksOfCement, setSacksOfCement] = useState("")
  const [deadVolume, setDeadVolume] = useState("")
  const [additiveConcentration, setAdditiveConcentration] = useState("")

  const ComputedSacks = ((slurryVolume*5.6146)/slurryYield).toFixed(2);
  const CementSacksChanger = sacksOfCement? sacksOfCement : ComputedSacks;
  const TotalMixFluid = (mixFluidConc * CementSacksChanger/42).toFixed(1);
  const DeadVolume_Factor =  ((Number(TotalMixFluid)+Number(deadVolume))/TotalMixFluid ).toFixed(2);
  const TotalMixFluid_With_DeadVolume =(TotalMixFluid * DeadVolume_Factor).toFixed(1);
  const Additive = (additiveConcentration * CementSacksChanger * DeadVolume_Factor).toFixed(2);
  
  const MixFluid_With_DeadVolume_Changer = !slurryYield & !sacksOfCement ? "No Empty Field Allowed" 
                        : !slurryVolume || !mixFluidConc || !deadVolume || !additiveConcentration ?
                        "No Empty Field Allowed"
                        : sacksOfCement>"0" & mixFluidConc>"0" & deadVolume>="0" & additiveConcentration>"0"?
                          (TotalMixFluid_With_DeadVolume + "bbl of mixfluid")
                        : (TotalMixFluid_With_DeadVolume + "bbl of mixfluid")



  const clear =()=>{
    setSlurryVolume("");
    setMixFluidConc("");
    setSlurryYield("");
    setSacksOfCement("");
    setDeadVolume("");
    setAdditiveConcentration("");
  }



  return (
  <div>
     <Grid container justifyContent="center" alignItems="center" textAlign="center"
     rowSpacing={5}
      > 
      <Grid item xs={10} sm={10} md={10}>
      <h2 style={{color: "blue", textAlign: "center", marginBottom: "-1rem"}}> Additive Check </h2>
      </Grid>

      { sacksOfCement ? null :
      <>
      <SingleAdditive value={slurryVolume} label={`SLURRY VOLUME (bbl)`} 
      onChange={(e)=> setSlurryVolume(e.target.value)}
      />
       <SingleAdditive value={slurryYield} label={`SLURRY YIELD (ft3/sk)`} 
       onChange={(e)=> {setSlurryYield(e.target.value)}}/>
      </>
      }

      {      //CONDITIONAL RENDERING */}
       slurryYield || slurryVolume? null :
       <SingleAdditive value={sacksOfCement} label={`SACKS OF CEMENT`} 
       onChange={(e)=> {setSacksOfCement(e.target.value)}}
       /> 
       }

       <SingleAdditive value={mixFluidConc} label={`MIXFLUID CONCENTRATION (gal/sk)`} 
        onChange={(e)=> {setMixFluidConc(e.target.value)}} 
        />
       <SingleAdditive value={deadVolume} label={`TANK DEAD VOLUME (bbl)`} 
       onChange={(e)=> {setDeadVolume(e.target.value)}}
       />
       <SingleAdditive value={additiveConcentration} label={`ADDITIVE CONCENTRATION (gal/sk)`} 
       onChange={(e)=> {setAdditiveConcentration(e.target.value)}} 
       />

       {/* -----------RESULT-------------- */}

       {
        slurryVolume>"0" & slurryYield>"0" & mixFluidConc>="0" & deadVolume>="0" & additiveConcentration>"0" ?
        <Grid item xs={10} sm={10} md={10}>
        <h3 style={{textAlign: "center", color: "blue",}}>Additive 
       <span style={{color: "red"}}> {Additive} </span>  
        gallon</h3>
        </Grid>
        :sacksOfCement>"0" & mixFluidConc>="0" & deadVolume>="0" & additiveConcentration>"0" ?
        <Grid item xs={10} sm={10} md={10}>
        <h3 style={{textAlign: "center", color: "blue",}}>Additive 
        <span style={{color: "red"}}> {Additive} </span>  
         gallon</h3>
         </Grid>
         : null
       }
       <Grid item xs={10} sm={10} md={10}>
       <h3 style={{textAlign: "center", color: "red",}}>{MixFluid_With_DeadVolume_Changer}</h3>
       </Grid>
      
      <Grid item xs={10} sm={10} md={10}>
       <button className= "button red" onClick={clear}>CLEAR</button>
       </Grid>

       <Grid item xs={10} sm={10} md={10}>
       <Link to="/select" className="exit_button">Exit</Link>
       </Grid>

      <Grid item xs={10} sm={10} md={10}>
      <div className="lexwares" >Lexwares @2022</div>
      </Grid>

    </Grid>
  </div>
  )
}

export default Additive;
