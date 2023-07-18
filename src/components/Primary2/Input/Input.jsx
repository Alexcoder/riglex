import { useGlobalState } from '../../../state/context/Context';
import "./styles.css";

const InputField = ( { item } ) => {
    const { wellData2, setWellData2 } = useGlobalState();

    const handleChange = (e) =>{
        const { name , value } = e.target;
        setWellData2({ ...wellData2, [name] : value });

    
        
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