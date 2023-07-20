import UniformStinger from "../../components/Plug/UniformStinger/UniformStinger";
import WithDrillPipe from "../../components/Plug/WithDrillPipe/WithDrillPipe"
import { useGlobalState } from "../../state/context/Context";
import "./Plug.css";

const Plug = () => {
  const {isUniformStinger, setIsUniformStinger } = useGlobalState();
   const handleUniform = async( )=> {
    try{
       setIsUniformStinger(true)
    }catch(err){
      console.log(err);
    }
   }
   const handleNotUniform = async( )=> {
    try{
       setIsUniformStinger(false)
    }catch(err){
      console.log(err);
    }
   }

  console.log(isUniformStinger);

  return (
    <main className="plug-cont">
      <div className="plug-btn-cont">
        <button onClick={handleUniform} className={isUniformStinger ? "plug-btn-background" : ""}>Uniform Stinger</button>
        <button onClick={handleNotUniform} className={isUniformStinger ? "" : "plug-btn-background"}>Stinger With DrillPipe</button>
      </div>
      <div>{ isUniformStinger && <UniformStinger /> } </div>
      <div> { !isUniformStinger && <WithDrillPipe/> } </div>
    </main>
  )
}

export default Plug;
