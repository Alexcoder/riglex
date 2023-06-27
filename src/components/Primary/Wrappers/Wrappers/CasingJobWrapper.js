
import React from 'react';
import { useGlobalState } from "../../../../state/context/Context";

const CasingJobWrapper = (CasingComponent) => {
    
  return(props)=>{
    const {wellData, mode} = useGlobalState();
    const{
        leadExcess, 
        tailExcess,
        lengthOfTailAboveShoe,
        presentCsgShoe,
        topOfTail,
        unit,
        presentCsgOD,
        volOfLead,
        volOfTail,
        openHoleID,
        presentCsgID,
        ratHole,
        measuredDepth,
        openHoleCsgAnn,
        previousCsgID,
        openHoleCap,
        csgCsgAnn,
        casingCap,
        topOfFloat,
        previousCsgShoe,
        shoeTrack,
        topOfLead,
        displacement,
        }= wellData
    const ExcessLead = (Number(leadExcess) +100)*0.01;
    const ExcessTail = (Number(tailExcess) +100)*0.01;
    const SwitchJobUnit = unit==="m"? 313.8 : 1029.4;
    const ExcessLeadChanger = mode==="liner" ? ExcessTail : ExcessLead;
    const unitChanger = unit==="m"? "m" : "ft"
    const ChangerPresentCsgOD = mode==="1338" ? 13.375 : mode==="958"? 9.625: mode==="7INCH"? 7 : presentCsgOD
    const Length_Of_Tail__Above_Shoe_Changer = mode==="liner" ? Liner_csg_csg_gap : lengthOfTailAboveShoe;
    const Liner_csg_csg_gap = Number(presentCsgShoe)-Number(previousCsgShoe);


  // -------------------PRIMARY CEMENTING CALCULATION------------------------------
  openHoleCap = ((openHoleID **2)/(SwitchJobUnit) ).toFixed(4);
  csgCsgAnn=(((previousCsgID **2) - (ChangerPresentCsgOD **2)) /(SwitchJobUnit) ).toFixed(4);
  openHoleCsgAnn=(((openHoleID **2) - (ChangerPresentCsgOD **2)) /(SwitchJobUnit)).toFixed(4);
  casingCap=((presentCsgID **2) /(SwitchJobUnit)).toFixed(4) ;
  presentCsgShoe= (measuredDepth - ratHole);  
  topOfFloat= (presentCsgShoe-shoeTrack)   ; 
  const TopOfTail= (presentCsgShoe - Length_Of_Tail__Above_Shoe_Changer) ; 

  //-------------- RESULT COMPUTATION--------------------------------
  volOfLead = mode==="liner"? (previousCsgShoe-topOfLead * csgCsgAnn).toFixed(1)
  : (( previousCsgShoe-topOfLead * csgCsgAnn ) +((openHoleCsgAnn) * 
     (TopOfTail-previousCsgShoe) * (ExcessLeadChanger))).toFixed(1)

//--------------- TAIL-------------------------------
volOfTail = (( (presentCsgShoe-TopOfTail)*(openHoleCsgAnn)*(ExcessTail)  +
  (openHoleCap * ratHole * ExcessTail)   +(casingCap * shoeTrack)  )).toFixed(1)
//--------------- DISPLACEMENT -----------------------
displacement =(casingCap*topOfFloat).toFixed(1) ; 
// ---------------------------PRIMARY CALCULATION CONPLETED--------------------------------------------


  
  
      return(
          <div>
          <CasingComponent 
          {...props} 
          ExcessLead={ExcessLead}
          ExcessTail={ExcessTail}
          />
        </div>
      )
  }
}

export default CasingJobWrapper