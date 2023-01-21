import React from 'react';
import {useGlobalState} from "../../state/context/Context.js";
import { Container, AppBar, Typography, ButtonBase } from '@mui/material';
// import {MenuIcon} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
const {setSidebar}= useGlobalState();



  return (
    <Container  sx={{ marginBottom: "2rem"}}>
      <ButtonBase onClick={()=> {setSidebar((prev)=> !prev)}}>
            <AppBar sx={{display:"flex"}}>
              <MenuIcon sx={{justifyContent: "flexStart"}}/>
            <Typography elevation={5} variant="h4" sx={{color: "white", textAlign:"center"}}>FIELD APP</Typography>
          </AppBar>
      </ButtonBase>
    </Container>
  )
}

export default Header