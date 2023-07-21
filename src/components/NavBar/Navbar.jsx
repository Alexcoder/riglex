import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../state/context/Context";
import "./Navbar.css";

const Navbar = () => {
  const [selected, setSelected] = useState(localStorage.getItem("sel") || 0);
  const { setCalculator, width, setWidth } = useGlobalState();
  
  const handleColor = (i) =>{
   if(selected===i) return "green"
   else if(selected!==i)return ""
  };

  useEffect(()=>{
   localStorage.setItem("sel", selected)
  },[selected])

  const navigate = useNavigate();
  const nav = [
    { jobType : "Casing Job", page : "/job",},
    { jobType : "Liner Job ", page : "/liner",},
    { jobType : "Plug Job ", page : "/plug",},
    { jobType : "Unit Converter", page : "/unit-converter",},
    { jobType : "Additive", page : "/additive",},
    { jobType : "Quiz", page : "/quiz",},
  ];

  const toggleCalculator = () =>{
    setCalculator((prev)=> !prev);
    setWidth(false)
  };
  const myRoute = ["/", "/job", "/plug", "/liner", "/unit-converter","/additive"]

  function browse(arr, i){
    if(i > arr.length){
       return ""
    }
    navigate(arr[i])
      setTimeout(()=>{
          browse(arr, i+1)
        },[3000]) 
  };

  function handleClick(){//a button is assigned this click function
    browse(myRoute, 0);
    setWidth(false)
  }


  return (
    <main className= "nav-cont" style={{transform: width ? "translateX(0)" : "", }}>
      <button onClick={handleClick} style={{marginBottom:""}}>Preview</button>
      {
        nav.map((item,i)=>
        <button
          key={i} 
          style={{background : handleColor(i), }}
          onClick={()=> { navigate(item.page); setSelected(i); setWidth(false)}}>
          {item.jobType}
        </button>
        )
      }
      <button onClick={toggleCalculator}>Calculator</button>
      <button >About</button>
    </main>
  )
}

export default Navbar