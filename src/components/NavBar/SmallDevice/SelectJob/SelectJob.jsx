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
     } 
    
  return (
    <div className="select-job">
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
        </div>
    </div>
  )
}

export default SelectJob