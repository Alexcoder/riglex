import { useGlobalState } from "../../../state/context/Context";
import useLinerJobAnalyser from "../Hooks/useLinerJobAnalyser";
import "./styles.css"

const Result = (props) => {
    const { setViewResult }= props;
    const {wellData, unit} = useGlobalState();
    const {Volume, Displacement} = useLinerJobAnalyser(wellData, unit);
    function closeResult(){
      setViewResult(false)
    } ;
    
  return (
    <div className="prim-result-cont">
      <div className="prim-result-cont2">
        <div>Volume of Liner Slury {Volume.toFixed(1)} bbls</div>
        <div>Displacement {Displacement.toFixed(1)} bbls</div>
        <button
        onClick={closeResult }
        >back</button>
      </div>
    </div>
  )
}

export default Result