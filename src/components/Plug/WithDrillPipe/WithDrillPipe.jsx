import { useGlobalState } from '../../../state/context/Context';
import PlugJobWrapper from "../Wrappers/PlugJobWrapper";
import useWithDrillPipeData from '../Hooks/useWithDrillPipeData';
import "../Input/Input.css"

const WithDrillPipe = () => {
  const { plug, setPlug } = useGlobalState();
  const { InputData} = useWithDrillPipeData();
  const handleChange=(e)=>{
      setPlug({...plug, [e.target.name]: e.target.value})
    };
     
  return (
    <main style={{marginTop:"-4rem", padding:"2rem 4rem"}}>
      <h4 style={{textAlign:"center"}}>DRILL PIPE DATA</h4>
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