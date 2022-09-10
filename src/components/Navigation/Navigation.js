import React from 'react';
import { Link } from 'react-router-dom';
import {Grid} from '@mui/material';
import './Navigation.css';

const Navigation = () => {

  return (
    <div className="navigation_div_container">

    <Grid container direction="column" justifyContent="center" alignItems="center" textAlign="center"
    columnSpacing={1} rowSpacing={7} p={5} className="grid_container"
    >
      <Grid item xs={12} sm={12} md={8} lg={3} xl={3} className="navigation_link">
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
      </Grid>

      <Grid item xs={12} sm={10} md={8} lg={3} xl={3} mt={4} className="navigation_link">
       <Link to='/' className="link_back">Back</Link>
      </Grid>

    </Grid >

    </div>
  )
}

export default Navigation;