import { useGlobalState } from '../../../../state/context/Context';
import { useNavigate } from 'react-router-dom';
import "./SelectJob.css";

const SelectJob = () => {
    const { setNavSmallJobSelect } = useGlobalState();
    const navigate = useNavigate();

    const nav = [
        { jobType : "Casing Job", page : "/job",},
        { jobType : "Liner Job", page : "/liner",},
        { jobType : "Plug Job ", page : "/plug",},
        { jobType : "Unit Converter", page : "/unit-converter",},
        { jobType : "Additive", page : "/additive",},
        { jobType : "Quiz", page : "/quiz",},
      ];
     function handleClick(page) {
        navigate(page);
        setNavSmallJobSelect(false)
     } ;
    const myRoute = ["/", "/job", "/plug", "/liner", "/unit-converter","/additive"]

    function browse(arr, i){
      if(i > arr.length){
         return ""
      }
      navigate(arr[i])
        setTimeout(()=>{
            browse(arr, i+1)
          },[3000]) 
    }
  
    function handlePreview(){//a button is assigned this click function
      browse(myRoute, 0);
      setNavSmallJobSelect(false)
    }
  

    
  return (
    <div className="select-job" onClick={()=> setNavSmallJobSelect(false)}>
        <div>
        { 
         nav.map((item,i)=>
         <button
         key={i}
          onClick={()=>handleClick(item.page)}>
          {item.jobType}
         </button>
         )
        }
        <button onClick={handlePreview} style={{marginBottom:""}}>Preview</button>
        <button>About</button>
        </div>
    </div>
  )
}

export default SelectJob