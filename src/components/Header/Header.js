import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import { Container, AppBar, Typography, ButtonBase } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
const history = useHistory()
const path= useLocation().pathname;



const GoTo =(a)=>{
  history.push(a)
}



  return (
    <Container  sx={{ marginBottom: "3.5rem"}}>
      <ButtonBase onClick={()=> history.push('/select')}>
        <AppBar>
            <Typography elevation={5} variant="h3" sx={{color: "white", textAlign:"center",}}>FIELD APP</Typography>
            <AppBar>
            {/* <div className="container_HeaderNav" id="header_nav" >
              <button 
                className={path==="/select"? "button_head_nav" : "head_nav"}
                onClick={()=> GoTo("/select")}> <HomeIcon/> </button>
              <button 
                className={path==="/select/primary"? "button_head_nav" : "head_nav"}
                onClick={()=> GoTo("/select/primary")}>CEMENTING</button>
              <button 
                className={path==="/select/additive"? "button_head_nav" : "head_nav"}
                onClick={()=> GoTo("/select/additive")}>ADDITIVE</button>
              <button 
                className={path==="/select/field-unit-converter"? "button_head_nav" : "head_nav"}
                onClick={()=> GoTo("/select/field-unit-converter")}>CONVERSION</button>
             </div> */}

          </AppBar>
      <hr/>

        </AppBar>
      </ButtonBase>

    </Container>
  )
}

export default Header