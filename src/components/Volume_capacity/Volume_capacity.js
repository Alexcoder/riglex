import React, {useState} from 'react';
import './Volume_capacity.css';


const Volume_Capacity = () => { 
  const InitialState = {
    casingOD: "",
    casingID: "",
    slurryLength: "",
    excess: "",
  }
  const [inputData, setInputData] = useState(InitialState);
  const [stringVolume, setStringVolume] = useState(true);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputData((prev)=> ({...prev, [name] : value }))
  }

  const handleClick = () => {
    setStringVolume((prev)=> !prev)
  }
  
  const {casingOD, casingID, slurryLength, excess } = inputData;
  const myExcess= (Number(excess)+100)/100;
  const capacity = casingID ? ((casingID**2)/1029.4).toFixed(4) : 0;
  const Anncapacity = casingOD && casingID ?
        ( (casingID**2- casingOD**2)/1029.4 ).toFixed(4) : 0;
  const volume =
           stringVolume && slurryLength && casingID?
           (capacity * slurryLength * myExcess).toFixed(2) :
           !stringVolume && casingOD ?
           (Anncapacity * slurryLength * myExcess).toFixed(2) : 0;

   
  const result = {capacity, Anncapacity, volume}

console.log(Anncapacity)
  return (
  <main className= "vol_cap_main">
    <section className= "vol_cap_section1">
      <div className= "vol_cap_input_div">
      <div className="vol_cap_text"> ID (inches)</div>
        <input 
        placeholder = "Internal Diameter"
        name = "casingID"
        type="number"
        value={casingID}
        onChange= {handleChange}
        />
      </div>
      <div className= "vol_cap_input_div"> 
       <div className="vol_cap_text"> OD (inches) </div>
        <input 
        placeholder = "OD of Inner String"
        name = "casingOD"
        type="number"
        value={casingOD}
        onChange= {handleChange}
        />
      </div>
      <div className= "vol_cap_input_div">
      <div className="vol_cap_text"> Slurry Length (ft) </div>
        <input 
        placeholder = "Length of Slurry"
        name = "slurryLength"
        type="number"
        value={slurryLength}
        onChange= {handleChange}
        />
      </div>
      <div className= "vol_cap_input_div">
      <div className="vol_cap_text"> Excess (%) </div>
        <input 
        placeholder = "Excess (%)"
        name = "excess"
        type="number"
        value={excess}
        onChange= {handleChange}
        />
      </div>
      <div style={{marginTop:"1rem"}}>
        <div> Cap {result.capacity} bbl/ft</div>
        <div>Ann Cap {result.Anncapacity} bbl/ft</div>
        <div className="vol_cap_vol_result" >
        <button onClick={handleClick} className="vol_cap_button">{stringVolume ?"String Volume" : "Annular Volume"}</button>
        <div>{result.volume} bbls</div>
       </div>

      </div>
    </section>
  </main>
  )
}

export default Volume_Capacity;
