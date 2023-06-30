import { useGlobalState } from '../../../state/context/Context';

const useLinerJobData = ( ) => {
    const { liner, setLiner }= useGlobalState();

    const InputData = [
        {
          title: "openHoleID",
          value: liner.openHoleID,
          className: "primary-input",
          placeHolder: "openHoleID",
          desc: "Open Hole ID",       
        },
        {
          title: "linerCsgID",
          value: liner.linerCsgID,
          className: "primary-input",
          placeHolder: "linerCsgID",
          desc: `Liner csg ID`,       
        },
        {
          title: "linerCsgOD",
          value: liner.linerCsgOD,
          className: "primary-input",
          placeHolder: "linerCsgOD",
          desc: `Liner csg OD`,       
        },
        {
          title: "previousCsgID",
          value: liner.previousCsgID,
          className: "primary-input",
          placeHolder: "previousCsgID",
          desc: `previousCsg csg ID`,       
        },
        {
          title: "measuredDepth",
          value: liner.measuredDepth,
          className: "primary-input",
          placeHolder: "measuredDepth",
          desc: "Measured Depth",       
        },
        {
          title: "previousCsgShoe",
          value: liner.previousCsgShoe,
          className: "primary-input",
          placeHolder: "previousCsgShoe",
          desc: `Previous Casing Shoe`,       
        },
        {
          title: "Tail Slurry Length Above Shoe",
          value: liner.lengthOfTailAboveShoe,
          className: "primary-input",
          placeHolder: "Tail Slurry Length Above Shoe",
          desc: `Tail Slurry Length Above Shoe`,       
        },
        {
          title: "leadExcess",
          value: liner.leadExcess,
          className: "primary-input",
          placeHolder: "leadExcess",
          desc: "Lead Excess",       
        },
        {
          title: "tailExcess",
          value: liner.tailExcess,
          className: "primary-input",
          placeHolder: "tailExcess",
          desc: "Tail Excess",       
        },
        {
          title: "linerCsgShoe",
          value: liner.linerCsgShoe,
          className: "primary-input",
          placeHolder: "liner csg shoe",
          desc: `Liner Csg Shoe @`,       
        },
        {
          title: "topOfLead",
          value: liner.topOfLead,
          className: "primary-input",
          placeHolder: "topOfLead",
          desc: "Top of Lead @",       
        },
        {
          title: "topOfFloatCollar",
          value: liner.topOfFloatCollar,
          className: "primary-input",
          placeHolder: "topOfFloatCollar",
          desc: "Float Collar @",       
        },
        {
          title: "drillPipeId",
          value: liner.drillPipeId,
          className: "primary-input",
          placeHolder: "drillPipeId",
          desc: "DrillPipe ID",       
        },
        {
          title: "drillPipeDepth",
          value: liner.drillPipeDepth,
          className: "primary-input",
          placeHolder: "drillPipeDepth",
          desc: "DrillPipe Dept",       
        },
        {
          title: "settingToolAssemblyId",
          value: liner.settingToolAssemblyId,
          className: "primary-input",
          placeHolder: "settingToolAssemblyId",
          desc: "Setting Tool Assembly ID",       
        },
        ]
    
  return {InputData, }
}

export default useLinerJobData ;