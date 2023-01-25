import {useGlobalState} from '../../../state';
import { useHistory } from 'react-router-dom';



const useResultPrimary =()=>{
    const history = useHistory();
  const {
        wellData, 
        SwitchJobUnit,
        mode, 
        Liner_Slurry_Volume, 
        unitChanger,
        setShowPrimaryResult
    } 
    = useGlobalState();
  const{
        tvd,
        unit, 
        mudWeight, 
        weightOfLeadSlurry, 
        weightOfTailSlurry, 
        weightOfDisplacementFluid,
        topOfLeadTvd,
        topOfTailTvd, 
        topOfFloatTvd, 
        }
         = wellData;


  const BumpPressure = (0.052*((mudWeight*topOfLeadTvd) + weightOfLeadSlurry*(topOfTailTvd-topOfLeadTvd)+
                       weightOfTailSlurry*(tvd-topOfTailTvd) + weightOfTailSlurry*(tvd-topOfFloatTvd))
                                 -
                       0.052*(weightOfDisplacementFluid*topOfFloatTvd)).toFixed(0)
 const BumpPressureChanger =BumpPressure==="NaN"? "0": (unit==="ft") ? BumpPressure : (BumpPressure*3.28).toFixed(0)                                 

// Liner Displacement
  const  Drill_Pipe_Capacity = (wellData.drillPipeIdLiner**2)/SwitchJobUnit
  const Setting_Tool_Capacity= (wellData.settingToolAssemblyIdLiner**2)/SwitchJobUnit
  const Liner_Capacity = (wellData.presentCsgID**2)/SwitchJobUnit;
  const Drill_Pipe_Volume = (Drill_Pipe_Capacity * wellData.drillPipeDepthLiner) ;
  const Setting_Tool_Volume = (Setting_Tool_Capacity* (wellData.topOfLead-wellData.drillPipeDepthLiner) );
  const Liner_Volume =  (Liner_Capacity*(wellData.topOfFloat-wellData.topOfLead))

  const Liner_Displacement_Volume = (Drill_Pipe_Volume  + Setting_Tool_Volume + Liner_Volume).toFixed(1);
                                   
const Navigate = (page) => {
    history.push(page)
}                                  

    return {
        BumpPressureChanger, 
        Liner_Displacement_Volume,
        wellData, 
        mode, 
        Liner_Slurry_Volume, 
        unitChanger,
        Navigate,
        setShowPrimaryResult
}
        
}

export default useResultPrimary;