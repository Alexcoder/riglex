import React from 'react';
import "./styles.css";
import useWithDrillPipeAnalyser from "../Hooks/useWithDrillPipeAnalyser";
import { useGlobalState } from '../../../state/context/Context';
import "./styles.css";

const ResultWithDrillPipe = ({setViewResult}) => {
    const { plug } = useGlobalState();
    const { volume, spacerAheadVol, spacerBehindVol, displacement, isSpacerInDrillPipe, displacement2, displacement3, lengthWithPipeIn } = useWithDrillPipeAnalyser();

  return (
    <div className='plug-result-cont'>
     <div className='plug-result-cont2'>
       <div>{isSpacerInDrillPipe >0 ? "SPACER IN DRILLPIPE" : "SPACER NOT IN DRILL PIPE"}</div>
       <div>Volume Of Slurry { volume || 0 } bbl</div>
       <div>Spacer Ahead { spacerAheadVol || 0 } bbl</div>
       <div>Spacer Behind { spacerBehindVol() || 0 } bbl</div>
       <div>Displacement { displacement() || 0 } bbl</div>
       <div>Displacement "2" { displacement2 || 0 } bbl</div>
       <div>Displacement "3" { displacement3 || 0 } bbl</div>
       <div>Slurry Length with Pipe Inside { lengthWithPipeIn || 0 } {plug.unit}</div>
       <button onClick={()=> setViewResult(false)}>Back</button>
     </div>
    </div>
  )
}

export default ResultWithDrillPipe;
