import React, {useState} from 'react';
import {useHistory } from 'react-router-dom';
import {Grid} from '@mui/material';
import './Navigation.css';
import { useGlobalState } from '../../state';

const Navigation = () => { 
  const {setMode,} =  useGlobalState();
  const history = useHistory();
  const [navMode, setNavMode] = useState("")
  const [isClicked, setIsClicked] = useState(false)


  if(navMode==="unit_conversion" & isClicked) history.push("/select/field-unit-converter")
  else if(navMode==="primary" & isClicked) history.push("/select/primary")
  else if(navMode==="1338" & isClicked) {setMode("1338"); history.push("/select/primary")}
  else if(navMode==="958" & isClicked) {setMode("958"); history.push("/select/primary")}
  else if(navMode==="7INCH" & isClicked) {setMode("7INCH"); history.push("/select/primary")}
  else if(navMode==="PLUG" & isClicked) {setMode("PLUG"); history.push("/select/primary")}
  else if(navMode==="additive" & isClicked) history.push("/additive");
  // else return


  return (
    <div className="navigation_div_container">

    <Grid container direction="column" justifyContent="center" alignItems="center" textAlign="center"
    columnSpacing={1} rowSpacing={7} p={5} className="grid_container"
    >

      {/* <Grid item xs={12} sm={12} md={8} lg={3} xl={3} className="Xselect_grid">
        <FormControl fullWidth>
        <InputLabel>SELECT</InputLabel>
            <Select onChange={(e)=> {setNavMode(e.target.value)}} value={navMode} className="nav_select" >
               <MenuItem value={"unit_conversion"}>UNIT CONVERSION</MenuItem>
               <MenuItem value={"primary"}>PRIMARY CEMENTING</MenuItem>
               <MenuItem value={"1338"}>13-3/8" CSG CEMENTING</MenuItem>
               <MenuItem value={"958"}>9-5/8" CEMENTING</MenuItem>
               <MenuItem value={"7INCH"}>7INCH CEMENTING</MenuItem>
               <MenuItem value={"liner"}>LINER CEMENTING</MenuItem>
               <MenuItem value={"PLUG"}>PLUG CEMENTING</MenuItem>
               <MenuItem value={"additive"}>CEMENTING ADDITIVE</MenuItem>
            </Select>
        </FormControl>
        </Grid> */}

        <p style={{border: "1px solid gray", width: "20rem", marginBotton: "-8rem"}} className="tag_p">
      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginBottom: "-2rem"}}>
         <button className={navMode==="unit_conversion"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
        border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
         onClick={()=> setNavMode("unit_conversion")}></button>
         <h2>Unit Conversion</h2>
         </Grid>

    <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "-2rem"}}>
         <button className={navMode==="primary"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
        border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
         onClick={()=> setNavMode("primary")}></button>
         <h2>Primary Cementing</h2>
      </Grid>

      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "-2rem",}}>
         <button className={navMode==="1338"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
        border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
         onClick={()=> setNavMode("1338")}></button>
         <h2>13-3/8" Cementing</h2>
      </Grid>

      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "-2rem",}}>
         <button className={navMode==="958"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
        border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
         onClick={()=> setNavMode("958")}></button>
         <h2>9-5/8"Cementing</h2>
      </Grid>

      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "-2rem",}}>
         <button className={navMode==="7INCH"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
        border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
         onClick={()=> setNavMode("7INCH")}></button>
         <h2>7 inch Cementing</h2>
      </Grid>

      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "-2rem",}}>
         <button className={navMode==="PLUG"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
        border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
         onClick={()=> setNavMode("PLUG")}></button>
         <h2>Plug Cementing</h2>
      </Grid>

      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "-2rem",}}>
         <button className={navMode==="liner"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
        border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
         onClick={()=> setNavMode("liner")}></button>
         <h2>Liner Cementing</h2>
      </Grid>


      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "1rem",}}>
         <button className={navMode==="additive"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
        border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
         onClick={()=> setNavMode("additive")}></button>
         <h2>Additive</h2>
      </Grid>

       </p>

       <Grid item xs={12} sm={10} md={8} lg={3} xl={3} mt={4} >
       <button className={!navMode? "nav_button" : "nav_button green"} onClick={()=> {navMode? setIsClicked(true): setIsClicked(false)}}>CONTINUE</button>
       </Grid> 
      <Grid item xs={12} sm={10} md={8} lg={3} xl={3} mt={4} >
       <button onClick={()=> history.push('/')} className="nav_button link">BACK</button>
      </Grid>


    </Grid >

    </div>
  )
}

export default Navigation;
