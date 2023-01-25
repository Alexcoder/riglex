import React from 'react';
import {useGlobalState} from "../../state/context/Context.js";
// import {MenuIcon} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"


const Header = () => {
const {setSidebar}= useGlobalState();



  return (
    <main className="header-container" >
            <div onClick={()=> {setSidebar((prev)=> !prev)}} >
              <div>
              <MenuIcon sx={{justifyContent: "flexStart", color:"white", margin: "0rem 0rem 0rem 2rem", fontSize:"3rem"}}/>
              </div>
              <div style={{color: "white", fontSize:"2rem",alignItems:"center", fontWeight: 600,}}>FIELD APP</div>
          </div>
    </main>
  )
}

export default Header