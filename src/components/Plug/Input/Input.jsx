import { useGlobalState } from '../../../state/context/Context';
import useUniformStingerData from '../Hooks/useUniformStingerData';
import "./Input.css";

const Input = () => {
  const { plug, setPlug, isUniformStinger } = useGlobalState();
  const {InputData}= useUniformStingerData();
  
  const handleChange=(e)=>{
    setPlug({...plug, [e.target.name]: e.target.value})
  };

  const isSmallDevice = window.innerWidth <= 720;
 
  return (
    <main style={{marginTop: isSmallDevice? "-1rem" :" 0rem", padding:"2rem 4rem"}}>
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
     { isUniformStinger && <hr/> }
    </main>
  )
}

export default Input