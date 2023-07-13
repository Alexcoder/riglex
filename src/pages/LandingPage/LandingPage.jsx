import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(()=>{
       const timeout = setTimeout(()=>{
         navigate("/unit-converter")
       },5000)
       return ()=> clearTimeout(timeout)
    },[navigate]);

  return (
    <main className="landing-cont">
        <div className="wrapper">
          <div>DINO CEMENTING HUB</div>
        </div>
    </main>
  )
}

export default LandingPage;