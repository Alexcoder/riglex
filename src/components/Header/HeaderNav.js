import React from 'react';
import {useNavigate} from 'react-router-dom';
import  HomeIcon  from '@mui/icons-material/Home';
import  MenuIcon  from '@mui/icons-material/Menu';
import {useGlobalState} from "../../state/context/Context";
import './HeaderNav.css';


const HeaderNav = () => {
    const navigate = useNavigate();
    const {setSidebar} = useGlobalState();

    const myRoute = ["/", "/job", "/plug", "/liner", "/unit-converter","/additive"]

    function browse(arr, i){
      if(i > arr.length){
         return ""
      }
      navigate(arr[i])
        setTimeout(()=>{
            browse(arr, i+1)
          },[3000]) 
    }
  
    function handleClick(){//a button is assigned this click function
      browse(myRoute, 0)
    }
  

  return (
    <div className="header">
      <span style={{display:"flex", alignItems:"center", gap:"0.3rem"}}>
        <HomeIcon onClick={()=> navigate("/")} sx={{fontSize:"2.5rem"}}/>
        <button onClick={handleClick} style={{marginBottom:""}}>prev</button>
    </span>
    <span className='title'> FIELD APP </span>
   <span style={{float:"right"}}><MenuIcon onClick={()=> setSidebar((prev)=> !prev)}/></span>

  </div>
  )
}

export default HeaderNav