import { useState } from "react";
import InputField from "./Input/Input";
import useCsgDobData from "./InputData";
import Preview from "./Preview";
import Result from "./Result/Result";
import "./Input/styles.css";
import { useGlobalState } from "../../state/context/Context";


const Job = () => {
    const [page, setPage] = useState(1);
    const { casingType, setCasingType } = useGlobalState()
    const {InputData1, InputData2, InputData3, InputData4} = useCsgDobData()
    const pageNumber=(goTo)=>{
        setPage((prev)=>
                goTo==="next" && prev < 5  ? prev + 1 :
                goTo==="prev" && prev > 1 ? prev - 1 : 6
                )
    };

    const goTo = (myPage) => {
        if(page > myPage) setPage(myPage);
        return
    }
      
  return (
      <div className="job">

        <div style={{flex: "1 1 100%"}}>Casing Type</div>
        <div className="type">
            <button className={casingType==="13-3/8 inch"? "btn-group" : "btn"} onClick={()=> setCasingType("13-3/8 inch")}>13-3/8 inch</button>
            <button className={casingType==="9-5/8 inch"? "btn-group" : "btn"} onClick={()=> setCasingType("9-5/8 inch")}>9-5/8 inch</button>
            <button className={casingType==="7 inch"? "btn-group" : "btn"} onClick={()=> setCasingType("7 inch")}>7 inch</button>
        </div>
        { page===1 &&
            InputData1.map((item, i)=>
            <div key={i}> <InputField item={item} /> </div> )
        }
        { page===2 &&
            InputData2.map((item, i)=>
            <div key={i}> <InputField item={item}/> </div> )
        }
        { page===3 &&
            InputData3.map((item, i)=>
            <div key={i}> <InputField item={item}/> </div> )
        }
        { page===4 &&
            InputData4.map((item, i)=>
            <div key={i}> <InputField item={item}/> </div> )
        }
       { page===5 && <Preview /> }
       { page===6 && <Result  /> }
        <div style={{display:"flex", gap:"1rem", flexWrap:"nowrap",}}>
            <button onClick={()=> goTo(1)} style={{flex:"1 1 10%",  background: page===1? "green" : "white"}}></button>
            <button onClick={()=> goTo(2)} style={{flex:"1 1 10%",  background: page===2? "green" : "white"}}></button>
            <button onClick={()=> goTo(3)} style={{flex:"1 1 10%",  background: page===3? "green" : "white"}}></button>
            <button onClick={()=> goTo(4)} style={{flex:"1 1 10%",  background: page===4? "green" : "white"}}></button>
            <button onClick={()=> goTo(5)} style={{flex:"1 1 10%",  background: page===5? "green" : "white"}}></button>
            <button onClick={()=> goTo(6)} style={{flex:"1 1 10%",  background: page===6? "green" : "white"}}></button>
        </div>
        <div style={{display:"flex", gap:"1rem" }}>
        { page > 1 &&  <button  style={{flex:"1 1 50%"}}   onClick={()=>pageNumber("prev")} >back</button> }
        {
        page < 6 && <button  style={{flex:"1 1 50%"}}   onClick={()=>pageNumber("next")} >
            {page===4? "Preview" : page===5? "Calculate" : "next"}</button> 
        }

        </div>
    </div>
  )
}

export default Job;
