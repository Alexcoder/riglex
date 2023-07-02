import {useState} from 'react';
import { useGlobalState } from '../../state/context/Context';
import "./styles.css";

const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const { setCalculator } = useGlobalState();

    const operators = ["+" , "-" , "*" , "/", "."];

    const upDateCalc = value =>{
        if(value===("0") && calc==="") return;
        if(
            (value===("-") && calc==="")
          ) setCalc((prev)=> prev + value)
          if(value==="." && calc.includes(".")) return
        if(
            (operators.includes(value) && calc==="") ||
            (operators.includes(value) && operators.includes(calc.slice(-1)))
        ) return;

        setCalc((prev)=> prev + value)

        if(!operators.includes(value)){
          // eslint-disable-next-line
            setResult(eval(calc + value).toString())
        }
    };

    const digits = []
    const BtnDigits = () =>{
      for(let i=0 ; i < 10; i++){
       digits.push( 
       <button 
        onClick={()=> upDateCalc(i.toString())} key={i}>
        {i}
        </button> 
       )    
      }
  return digits
};

const handleDelete = () =>{
  setCalc((prev)=>{
    const newItem = prev.slice(0, -1)
    setCalc(newItem)
  })
}

const handleClear = () =>{
  setCalc("")
  setResult("")
};


  return (
    <main className="calc-cont">
      <div className="calc-wrapper">

      <div className="display">
        <span className="close" onClick={()=> setCalculator(false)}>exit</span>
         <span>({result || "0"})</span>
         {calc || "0"} &nbsp;
      </div>

      <div className="operators">
        <button style={{fontSize:"1rem"}} onClick={()=> upDateCalc("+")}> + </button>
        <button style={{fontSize:"1rem"}}  onClick={()=> upDateCalc("-")}> - </button>
        <button style={{textAlign:"center", paddingTop:"1rem", fontSize:"1rem"}} onClick={()=> upDateCalc("*")}> * </button>
        <button onClick={()=> upDateCalc("/")}> / </button>
        <button onClick={handleDelete}> DEL </button>
        <button onClick={handleClear}> CLEAR </button>
      </div>

      <div className="digits">
        {BtnDigits()}
        <button style={{fontSize:"1.5rem"}} onClick={()=> upDateCalc(".")}> . </button>
        <button onClick={()=> setCalc(result)}> = </button>
      </div>

      <div className="calc-bracket">
      </div>

      </div>
    </main>
  )
}

export default Calculator;