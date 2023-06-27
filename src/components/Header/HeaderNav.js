import React from 'react';
import {useNavigate} from 'react-router-dom';
import  HomeIcon  from '@mui/icons-material/Home';
import  MenuIcon  from '@mui/icons-material/Menu';
import {useGlobalState} from "../../state/context/Context";
import './HeaderNav.css';


const HeaderNav = () => {
    const navigate = useNavigate();
    const {setSidebar} = useGlobalState();
 

  return (
    <main className="header-cont">
      <div><HomeIcon onClick={()=> navigate("/")}/></div>
      <div className='header-title'> FIELD APP </div>
      <div><MenuIcon onClick={()=> setSidebar((prev)=> !prev)}/></div>
  </main>
  )
}

export default HeaderNav