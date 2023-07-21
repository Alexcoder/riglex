import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const LandingPage = () => {
    const navigate = useNavigate();
    const [font, setFont] = useState("25px")

    useEffect(()=>{
       const timeout = setTimeout(()=>{
         navigate("/unit-converter")
       },5000)
       return ()=> clearTimeout(timeout)
    },[navigate]);

    useEffect(()=>{
       const timeout = setTimeout(()=>{
         setFont("31px")
       },100)
       return ()=> clearInterval(timeout)
    },[font]);

  return (
    <main className="landing-cont">
        <div className="wrapper">
          <div style={{fontSize: font, transition:"1s ease-in-out"}}>DINO CEMENTING HUB</div>
        </div>
    </main>
  )
}

export default LandingPage;