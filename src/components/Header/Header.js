import React from 'react';
import {useHistory} from 'react-router-dom';
import { Container, AppBar, Typography, ButtonBase } from '@mui/material';

const Header = () => {
const history = useHistory()



  return (
    <Container  sx={{ marginBottom: "3.5rem"}}>
      <ButtonBase onClick={()=> history.push('/select')}>
            <AppBar>
            <Typography elevation={5} variant="h3" sx={{color: "white", textAlign:"center"}}>FIELD APP</Typography>
          </AppBar>
      </ButtonBase>
    </Container>
  )
}

export default Header