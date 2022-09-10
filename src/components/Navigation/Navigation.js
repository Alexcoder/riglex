import React, {useState} from 'react';
import {useHistory } from 'react-router-dom';
import {FormControl, Grid, Select, MenuItem, InputLabel} from '@mui/material';
import './Navigation.css';

const Navigation = () => {
  const history = useHistory();
  const [navMode, setNavMode] = useState("")
  const [isClicked, setIsClicked] = useState(false)


  if(navMode==="unit_conversion" & isClicked) history.push("/select/field-unit-converter")
  else if(navMode==="primary" & isClicked) history.push("/primary");
  else if(navMode==="liner" & isClicked) history.push("/liner");
  else if(navMode==="plug" & isClicked) history.push("/plug");
  else if(navMode==="additive" & isClicked) history.push("/additive");
  // else return


  return (
    <div className="navigation_div_container">

    <Grid container direction="column" justifyContent="center" alignItems="center" textAlign="center"
    columnSpacing={1} rowSpacing={7} p={5} className="grid_container"
    >

      <Grid item xs={12} sm={12} md={8} lg={3} xl={3} className="Xselect_grid">
        <FormControl fullWidth>
        <InputLabel>SELECT</InputLabel>
          {/* <p>SELECT</p> */}
            <Select onChange={(e)=> {setNavMode(e.target.value)}} value={navMode} className="nav_select" >
               <MenuItem value={"unit_conversion"}>UNIT CONVERSION</MenuItem>
               <MenuItem value={"primary"}>PRIMARY CEMENTING</MenuItem>
               <MenuItem value={"liner"}>LINER CEMENTING</MenuItem>
               <MenuItem value={"plug"}>PLUG CEMENTING</MenuItem>
               <MenuItem value={"additive"}>CEMENTING ADDITIVE</MenuItem>
            </Select>
        </FormControl>
        </Grid>
        <button className={!navMode? "nav_button" : "nav_button green"} onClick={()=> {navMode? setIsClicked(true): setIsClicked(false)}}>CONTINUE</button>

      {/* <Grid item xs={12} sm={12} md={8} lg={3} xl={3} className="navigation_link">
      <Link to="/primary-cementing" className="link">PRIMARY CEMENTING</Link>
      </Grid>

      <Grid item xs={12} sm={12} md={8} lg={3} xl={3} className="navigation_link">
      <Link to="/liner-cementing" className="link">LINER CEMENTING</Link>
      </Grid>

      <Grid item xs={12} sm={12} md={8} lg={3} xl={3} className="navigation_link">
      <Link to="/plug-cementing" className="link">PLUG CEMENTING</Link>
      </Grid>

      <Grid item xs={12} sm={12} md={8} lg={3} xl={3} className="navigation_link">
      <Link to="/additive-converter" className="link">CEMENTING ADDITIVE</Link>
      </Grid>

      <Grid item xs={12} sm={12} md={8} lg={3} xl={3} className="navigation_link">
        <Link to="/select/field-unit-converter" className="link">UNIT CONVERSION</Link>
        {/* <a href="https://fieldunitconverter.netlify.app" className="link">UNIT CONVERSION</a> */}
      {/* </Grid> */}

      <Grid item xs={12} sm={10} md={8} lg={3} xl={3} mt={4} >
       <button onClick={()=> history.push('/')} className="nav_button link">BACK</button>
      </Grid> 

    </Grid >

    </div>
  )
}

export default Navigation;