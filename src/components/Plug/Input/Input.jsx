import { useGlobalState } from '../../../state/context/Context';
import useUniformStingerData from '../Hooks/useUniformStingerData';
import "./Input.css";

const Input = () => {
  const { plug, setPlug } = useGlobalState();
  const {InputData}= useUniformStingerData();
  
  const handleChange=(e)=>{
    setPlug({...plug, [e.target.name]: e.target.value})
  };

 
  return (
    <main style={{marginTop:"0rem", padding:"2rem 4rem"}}>
      <hr/>
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

export default Input