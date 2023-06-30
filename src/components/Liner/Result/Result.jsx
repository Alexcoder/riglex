import { useGlobalState } from "../../../state/context/Context";
import useCsgJobAnalyser from "../Hooks/useCsgJobAnalyser";
import "./styles.css"

const Result = (props) => {
    const { setViewResult }= props;
    const {wellData, unit} = useGlobalState();
    const {Lead, Tail, isDisplaced} = useCsgJobAnalyser(wellData, unit);
    function closeResult(){
      setViewResult(false)
    } ;
    
  return (
    <div className="prim-result-cont">
      <div className="prim-result-cont2">
        <div>Volume of Lead Slury {Lead} bbls</div>
        <div>Volume of Tail Slurry {Tail} bbls</div>
        <div>Displacement {isDisplaced} bbls</div>
        <button
        onClick={closeResult }
        >back</button>
      </div>
    </div>
  )
}

export default Result