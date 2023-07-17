import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../state/context/Context";
import "./Navbar.css";

const Navbar = () => {
  const [selected, setSelected] = useState(localStorage.getItem("sel") || 0);
  const { setCalculator } = useGlobalState();
  
  const handleColor = (i) =>{
   if(selected===i) return "green"
   else if(selected!==i)return ""
  };

  useEffect(()=>{
   localStorage.setItem("sel", selected)
  },[selected])

  const navigate = useNavigate();
  const nav = [
    { jobType : "CasingJob", page : "/job",},
    { jobType : "Liner Job", page : "/liner",},
    { jobType : "Plug Job", page : "/plug",},
    { jobType : "Unit Converter", page : "/unit-converter",},
    { jobType : "Additive", page : "/additive",},
    { jobType : "Quiz", page : "/quiz",},
  ];

  const toggleCalculator = () =>{
    setCalculator((prev)=> !prev)
  }

  return (
    <main className= "nav-cont" >
      {
        nav.map((item,i)=>
        <button
          key={i} 
          style={{background : handleColor(i)}}
          onClick={()=> { navigate(item.page); setSelected(i)}}>
          {item.jobType}
        </button>
        )
      }
      <button onClick={toggleCalculator}>Calculator</button>
    </main>
  )
}

export default Navbar