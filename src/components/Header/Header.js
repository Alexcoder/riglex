import React from 'react';
import {useGlobalState} from "../../state/context/Context.js";
import { Container, AppBar, Typography, ButtonBase } from '@mui/material';

const Header = () => {
const {setSidebar}= useGlobalState();



  return (
    <Container  sx={{ marginBottom: "2rem"}}>
      <ButtonBase onClick={()=> {setSidebar((prev)=> !prev)}}>
            <AppBar>
            <Typography elevation={5} variant="h3" sx={{color: "white", textAlign:"center"}}>FIELD APP</Typography>
          </AppBar>
      </ButtonBase>
    </Container>
  )
}

export default Header