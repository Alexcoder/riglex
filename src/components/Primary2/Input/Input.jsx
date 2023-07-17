import { useGlobalState } from '../../../state/context/Context';
import "./styles.css";

const InputField = ( { item } ) => {
    const { wellData, setWellData } = useGlobalState();

    const handleChange = (e) =>{
        const { name , value } = e.target;
        setWellData({ ...wellData, [name] : value });

    
        
    } 
  return (
    <div className='prim2' >
        <div>{item.desc}</div>
        <input
        name={item.title}
        value={item.value}
        placeholder={item.placeholder}
        disabled={item.disabled}
        onChange={handleChange}
        type="number"
        min={0}
        />
    </div>
  )
}

export default InputField