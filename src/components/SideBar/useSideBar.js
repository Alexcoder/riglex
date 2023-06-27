import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../../state';


const useSideBar = () =>{
    const navigate = useNavigate();
    const {navMode, setNavMode, setMode, setSidebar} =  useGlobalState();

    const handleColor = (clicked) =>{
        if(navMode===clicked){
            return "sideBar_green"
        } else{ return "sideBar_button"}
    };

    const Navigate = (page, clicked) =>{
        setNavMode(clicked);
        setMode(()=> clicked==="primary" ? "OTHERS" : clicked);
        navigate(page);
        setSidebar(false);
    }

    useEffect(() => {
        if(navMode) localStorage.setItem('navMode', navMode)
        setNavMode(localStorage.getItem('navMode'))
      }, [navMode, setNavMode])
     
    return{ Navigate, handleColor }
}

export default useSideBar;