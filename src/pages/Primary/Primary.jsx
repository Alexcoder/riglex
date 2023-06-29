import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import P1338 from "../../components/Primary/1338/1338"; 
import P958 from "../../components/Primary/958/958";
import P7inch from "../../components/Primary/7inch/7inch";
import "./styles.css";

const Primary = () => {
  const [type, setType] = useState("13-3/8");
  const navigate = useNavigate();
  const location = useLocation()

  const useQuery =()=>{
    return new URLSearchParams(location.state)
  };

  const query = useQuery();

  const csg = query.get("csg");
  console.log(csg);

  const handleClick =(type)=>{
   setType(type);
   navigate(`/casingJob?csg=${`${type}inch`}`)
  };

  return (
    <main className="prim-cont">
      <div className='prim-btn-cont'>
        <button className={(csg==="13-3/8inch" || type==="13-3/8" ) ? "prim-btn" : ""} onClick={()=> handleClick("13-3/8")}>13-3/8 inch Csg</button>
        <button className={csg==="9-5/8inch" ? "prim-btn" : ""} onClick={()=> handleClick("9-5/8")}>9-5/8 inch Csg</button>
        <button className={csg==="7inch" ? "prim-btn" : ""} onClick={()=> handleClick("7")}>7 inch Csg</button>
      </div>
      <div>
       { type==="13-3/8" && <P1338 /> }
       { type==="9-5/8" && <P958 /> }
       { type==="7" && <P7inch /> }
      </div>
    </main>
  )
}

export default Primary