import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import {Grid, Typography} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
  return (
    <div className="home_container_div" >
    <Grid container direction="column" justifyContent="center" alignItems="center" textAlign="center"
    columnSpacing={1} rowSpacing={5} p={2} mt={2} className="grid_container"
    >
        <Grid item xs={12} sm={10} md={8} lg={3} xl={3}>
           <Typography variant="h3"> <span style={{color: "brown",}}>Welcome !</span> </Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={5} lg={3} xl={3} mt={4}>
            <Typography wrap  variant="h5">
              This application is designed to<br/> provide solution to basic oil field<br/> cementation problems.<br/>
              From laboratory preparation to <br/>job execution at the field,<br/> cementing mobile app is a go.
            </Typography >
        </Grid>
        <Grid item xs={12} sm={10} md={5} lg={3} xl={3} mt={8} >
            <div style={{height:"7rem"}}>
            <Link to="/select" className="home_link" >Continue<ArrowForwardIosIcon color="primary" fontSize="small"/></Link>
            </div>
        </Grid>

    </Grid >
    </div>
  )
}

export default Home