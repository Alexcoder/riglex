import useSideBar from "./useSideBar";
import { useNavigate } from "react-router-dom";
import "./SideBar.css"

const SideBar = ()=>{
    const { handleColor,} = useSideBar();
    const navigate = useNavigate();

    return(
        <main className="sidebar">
            <div className="sideBar_container">
                <button 
                className={handleColor("unit-conversion")}
                onClick={()=>navigate("/select/field-unit-converter", "unit-conversion")}
                > UNIT CONVERSION 
                </button>
                <button 
                className={handleColor("vol_cap")}
                onClick={()=>navigate("/select/volume-capacity", "vol_cap")}
                > VOLUME AND CAPACITY
                </button>
                <button
                className={handleColor("primary")}
                onClick={()=>navigate("/select/primary", "primary")}     
                > PRIMARY CEMENTING
                </button>
                <button 
                className={handleColor("1338")}
                onClick={()=>navigate("/select/primary", "1338")}     
                >13-3/8 INCH CSG CEMENTING
                </button>
                <button 
                className={handleColor("958")}
                onClick={()=>navigate("/select/primary", "958")}     
                >9-5/8 INCH CSG CEMENTING
                </button>
                <button 
                className={handleColor("7INCH")}
                onClick={()=>navigate("/select/primary", "7INCH")}     
                >7 INCH CSG CEMENTING
                </button>
                <button 
                className={handleColor("liner")}
                onClick={()=>navigate("/select/primary", "liner")}     
                >LINER CEMENTING
                </button> 
                <button 
                className={handleColor("PLUG")}
                onClick={()=>navigate("/select/primary", "PLUG")}     
                >PLUG (REMEDIAL) CEMENTING
                </button>
                <button 
                className={handleColor("bump-pressure")}
                onClick={()=>navigate("/select/primary", "bump-pressure")}     
                >BUMP PRESSURE</button>
                <button 
                className={handleColor("additive")}
                onClick={()=>navigate("/select/additive", "additive")}     
                >ADDITIVE CHECK
                </button>
            </div>
        </main>
    )
}

export default SideBar;