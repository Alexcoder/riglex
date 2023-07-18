import React from 'react'
import Calculate from './Calculate'
import { useGlobalState } from '../../state/context/Context'

const Preview = () => {
  const { wellData2, casingType } = useGlobalState()
  const res = Calculate()
  return (
    <div>
        {/* <div>Previous Casing {wellData2.previousCsg} inch</div> */}
        <div>Casing ID {wellData2.casingID} inch</div>
        <div>Open Hole {wellData2.openHole(casingType)} inch</div>
        <div>Top Of Lead {wellData2.topOfLead} ft</div>
        <div>Top Of Tail Slurry @ {wellData2.topOfTail} ft</div>
        <div>Float Collar @ {wellData2.topOfFloatCollar} ft</div>
        <div>Caing Shoe @ {wellData2.casingShoe} ft</div>
        <div>Measured depth @ {wellData2.measuredDepth} ft</div>

        <div>Casing-OpenHole Ann Capacity {res.csg_openHole_ann_cap.toFixed(4)} bbl/ft</div>
        <div>Casing-Casing Ann Capacity {res.csg_csg_ann_cap.toFixed(4)} bbl/ft</div>
        <div>Casing Capacity {res.csg_cap.toFixed(4)} bbl/ft</div>
        <div>Open Hole Capacity {res.openHole_cap.toFixed(4)} bbl/ft</div>
        <div>Open Hole Excess for Lead Slurry {wellData2.leadExcess} %</div>
        <div>Open Hole Excess for Tail Slurry {wellData2.tailExcess} %</div>
    </div>
  )
}

export default Preview