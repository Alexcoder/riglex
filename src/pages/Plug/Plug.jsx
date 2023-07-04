import UniformStinger from "../../components/Plug/UniformStinger/UniformStinger";
import WithDrillPipe from "../../components/Plug/WithDrillPipe/WithDrillPipe"
import { useGlobalState } from "../../state/context/Context";
import "./Plug.css";

const Plug = () => {
  const {isUniformStinger, setIsUniformStinger } = useGlobalState();

  const handleClick =(type)=>{
    if(type==="uniform") {setIsUniformStinger(true)}
    else {setIsUniformStinger(false)}
  }
  console.log(isUniformStinger);

  return (
    <main className="plug-cont">
      <div className="plug-btn-cont">
        <button onClick={()=>handleClick("uniform")} className={isUniformStinger ? "plug-btn-background" : ""}>Uniform Stinger</button>
        <button onClick={()=>handleClick()} className={!isUniformStinger ? "plug-btn-background" : ""}>Stinger With DrillPipe</button>
      </div>
      <div>
      { isUniformStinger && <UniformStinger /> }
      { !isUniformStinger && <WithDrillPipe/> }
      </div>
    </main>
  )
}

export default Plug;
