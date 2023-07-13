import React from 'react';
import {useNavigate} from 'react-router-dom';
import  HomeIcon  from '@mui/icons-material/Home';
import  MenuIcon  from '@mui/icons-material/Menu';
import {useGlobalState} from "../../state/context/Context";
import './HeaderNav.css';


const HeaderNav = () => {
    const navigate = useNavigate();
    const {setSidebar} = useGlobalState();

    const myRoute = ["/", "/casingJob", "/plug", "/liner", "/unit-converter","/additive"]

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
    <main className="header-cont">
      <div style={{display:"flex", alignItems:"center", gap:"0.3rem"}}>
         <HomeIcon onClick={()=> navigate("/")} sx={{fontSize:"2.5rem"}}/>
         <button onClick={handleClick} style={{marginBottom:"-0.5rem"}}>preview</button>
      </div>
      <div className='header-title'> FIELD APP </div>
      <div><MenuIcon onClick={()=> setSidebar((prev)=> !prev)}/></div>
  </main>
  )
}

export default HeaderNav