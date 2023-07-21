import {useNavigate} from 'react-router-dom';
import  HomeIcon  from '@mui/icons-material/Home';
import  MenuIcon  from '@mui/icons-material/Menu';
import {useGlobalState} from "../../state/context/Context";
import './HeaderNav.css';


const HeaderNav = () => {
    const navigate = useNavigate();
    const {setSidebar, setWidth} = useGlobalState();


  return (
    <div className="header">
      <span style={{display:"flex", alignItems:"center", gap:"0.3rem"}}>
        <HomeIcon onClick={()=> navigate("/")} sx={{fontSize:"2.5rem"}}/>
    </span>
    <span className='title'> FIELD APP </span>
   <span style={{float:"right"}}><MenuIcon onClick={()=>{setWidth((prev)=> !prev) ; setSidebar((prev)=> !prev)}}/></span>

  </div>
  )
}

export default HeaderNav