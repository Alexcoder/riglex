import { useGlobalState } from "../../../state/context/Context";
import useCsgJobAnalyser from "../Hooks/useCsgJobAnalyser";

const Result = () => {
    const {wellData, unit} = useGlobalState();
    const {Lead, Tail, isDisplaced} = useCsgJobAnalyser(wellData, unit);

  return (
    <div style={{marginTop:"1rem"}}>
        <div>Volume of Lead Slury {Lead} bbls</div>
        <div>Volume of Tail Slurry {Tail} bbls</div>
        <div>Displacement {isDisplaced} bbls</div>
    </div>
  )
}

export default Result