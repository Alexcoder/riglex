import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import  HomeIcon  from '@mui/icons-material/Home';
import './HeaderNav.css';


const HeaderNav = () => {
    const history = useHistory();
    const path = useLocation().pathname;


    const GoTo =(a)=>{
      history.push(a)
    }
 

  return (
    <div>
      <div className="container_HeaderNav" id="header_nav" >
      <button style={{height: "2.5rem"}}
         className={path==="/select"? "button_head_nav" : "head_nav"}
       onClick={()=> GoTo("/select")}> <HomeIcon/> </button>
       <button 
         className={path==="/select/primary" || path==="/select/bump-pressure"? "button_head_nav" : "head_nav"}
       onClick={()=> GoTo("/select/primary")}>CEMENTING</button>
       <button 
         className={path==="/select/additive"? "button_head_nav" : "head_nav"}
       onClick={()=> GoTo("/select/additive")}>ADDITIVE</button>
       <button 
         className={path==="/select/field-unit-converter" ? "button_head_nav" : "head_nav"}
       onClick={()=> GoTo("/select/field-unit-converter")}>UNIT</button>
  </div>
      <hr/>
  </div>
  )
}

export default HeaderNav