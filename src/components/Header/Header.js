import React from 'react'
import { Container, AppBar, Typography } from '@mui/material';

const Header = () => {

  return (
    <Container justifyContent="center" sx={{ marginBottom: "2.9rem"}}>
        <AppBar>
            <Typography elevation={5} variant="h3" sx={{color: "white", textAlign:"center",}}>FIELD APP</Typography>
        </AppBar>
    </Container>
  )
}

export default Header