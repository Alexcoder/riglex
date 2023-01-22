import useSideBar from "./useSideBar"
import "./SideBar.css"

const SideBar = ()=>{
    const { Navigate, handleColor,} = useSideBar()

    return(
        <main className="sidebar">
            <div className="sideBar_container">
                <button 
                className={handleColor("unit-conversion")}
                onClick={()=>Navigate("/select/field-unit-converter", "unit-conversion")}
                > UNIT CONVERSION 
                </button>
                <button 
                className={handleColor("vol_cap")}
                onClick={()=>Navigate("/select/volume-capacity", "vol_cap")}
                > VOLUME AND CAPACITY
                </button>
                <button
                className={handleColor("primary")}
                onClick={()=>Navigate("/select/primary", "primary")}     
                > PRIMARY CEMENTING
                </button>
                <button 
                className={handleColor("1338")}
                onClick={()=>Navigate("/select/primary", "1338")}     
                >13-3/8 INCH CSG CEMENTING
                </button>
                <button 
                className={handleColor("958")}
                onClick={()=>Navigate("/select/primary", "958")}     
                >9-5/8 INCH CSG CEMENTING
                </button>
                <button 
                className={handleColor("7INCH")}
                onClick={()=>Navigate("/select/primary", "7INCH")}     
                >7 INCH CSG CEMENTING
                </button>
                <button 
                className={handleColor("liner")}
                onClick={()=>Navigate("/select/primary", "liner")}     
                >LINER CEMENTING
                </button> 
                <button 
                className={handleColor("PLUG")}
                onClick={()=>Navigate("/select/primary", "PLUG")}     
                >PLUG (REMEDIAL) CEMENTING
                </button>
                <button 
                className={handleColor("bump-pressure")}
                onClick={()=>Navigate("/select/primary", "bump-pressure")}     
                >BUMP PRESSURE</button>
                <button 
                className={handleColor("additive")}
                onClick={()=>Navigate("/select/additive", "additive")}     
                >ADDITIVE CHECK
                </button>
            </div>
        </main>
    )
}

export default SideBar;