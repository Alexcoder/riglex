import { useGlobalState } from '../../state/context/Context'

const Calculate = ( ) => {
    const { wellData2 , casingType  } = useGlobalState();
    const csg_cap = (wellData2.casingID**2)/1029.4
    const csg_csg_ann_cap = (wellData2.previousCsgID**2 - wellData2.casingOD(casingType)**2)/1029.4
    const csg_openHole_ann_cap =(wellData2.openHole(casingType)**2 - wellData2.casingOD(casingType)**2)/1029.4
    const openHole_cap = (wellData2.openHole(casingType)**2)/1029.4
    let LeadExcess = (wellData2.leadExcess/100) + 1;
    let TailExcess = (wellData2.tailExcess/100) + 1;

    function Lead(){
        let volume_1 = csg_csg_ann_cap * (wellData2.previousCsgShoe - wellData2.topOfLead) ;
        console.log(volume_1);
        let volume_2 = csg_openHole_ann_cap * (wellData2.topOfTail - wellData2.previousCsgShoe) * LeadExcess //*Lead Excess
        console.log(volume_2);
        let total = ( Number(volume_1) + Number(volume_2) ).toFixed(1)
        return total
    }
    function Tail(){
        let volume_A = csg_openHole_ann_cap * (wellData2.casingShoe - wellData2.topOfTail) * TailExcess//* Tail Excess 
        console.log(volume_A);
        let volume_B = openHole_cap * (wellData2.measuredDepth - wellData2.casingShoe) * TailExcess //*Tail Excess
        console.log(volume_B);
        let volume_C = csg_cap * (wellData2.measuredDepth - wellData2.topOfFloatCollar)
        console.log(volume_C);
        let total = ( Number(volume_A) + Number(volume_B) + Number(volume_C ) ).toFixed(1)
        return total

    }
    function Displacement(){
      let disp = csg_cap * (wellData2.topOfFloatCollar) 
       return disp.toFixed(1)
    }
        
    
  return { 
    Lead, 
    Tail, 
    Displacement,
    csg_cap,
    csg_csg_ann_cap,
    csg_openHole_ann_cap,
    openHole_cap,
 }
}

export default Calculate