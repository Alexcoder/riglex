import { useGlobalState } from '../../../state/context/Context';
import PlugJobWrapper from "../Wrappers/PlugJobWrapper";
import "../Input/Input.css"

const WithDrillPipe = () => {
  const { plug, setPlug } = useGlobalState();

  const InputData = [
      {
        title: "drillPipeID",
        value: plug.drillPipeID,
        className: "plug-input",
        placeHolder: "drillPipeID",
        desc: `DrillPipe ID`,       
      },
      {
        title: "drillPipeOD",
        value: plug.drillPipeOD,
        className: "plug-input",
        placeHolder: "drillPipeOD",
        desc: `DrillPipe OD`,       
      },
      {
        title: "stingerLength",
        value: plug.stingerLength,
        className: "plug-input",
        placeHolder: "stingerLength",
        desc: "Length of Stinger",       
      },
      {
        title: "dpOuterZoneId",
        value: plug.dpOuterZoneId,
        className: "plug-input",
        placeHolder: "dpOuterZoneId",
        desc: "DP OuterZone Id",       
      },
    ];

    
    const handleChange=(e)=>{
      setPlug({...plug, [e.target.name]: e.target.value})
    };
    
  
  return (
    <main style={{marginTop:"-4rem", padding:"2rem 4rem"}}>
      <h2>DRILL PIPE DATA</h2>
    {/* <hr/> */}
    <section className='plug-sub'>
    { InputData.map((item, i)=>(
      <div key={i} className='plug-map'>
          <div>{item.desc}</div>
          <input
           className={item.className}
           name={item.title}
           value={(item.value)}
           onChange={handleChange}
           type="number"            
          />
      </div>
    ))}
    </section>
    <hr/>
  </main>

  )
}

export default PlugJobWrapper(WithDrillPipe)