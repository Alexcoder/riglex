import { useGlobalState } from '../../../state/context/Context';

const useCsgJobData = (presentCsg, previousCsg) => {
    const {wellData}= useGlobalState();

    const InputData = [
        {
          title: "openHoleID",
          value: wellData.openHoleID,
          className: "primary-input",
          placeHolder: "openHoleID",
          desc: "Open Hole ID",       
        },
        {
          title: "previousCsgShoe",
          value: wellData.previousCsgShoe,
          className: "primary-input",
          placeHolder: "previousCsgShoe",
          desc: `${previousCsg} Casing Shoe`,       
        },
        {
          title: "presentCsgShoe",
          value: wellData.presentCsgShoe,
          className: "primary-input",
          placeHolder: "presentCsgShoe",
          desc: `${presentCsg} Casing Shoe`,       
        },
          {
            title: "leadExcess",
            value: wellData.leadExcess,
            className: "primary-input",
            placeHolder: "leadExcess",
            desc: "Lead Excess",       
          },
          {
            title: "tailExcess",
            value: wellData.tailExcess,
            className: "primary-input",
            placeHolder: "tailExcess",
            desc: "Tail Excess",       
          },
          {
            title: "presentCsgOD",
            value: wellData.presentCsgOD(presentCsg),
            className: "primary-input",
            placeHolder: "presentCsgOD",
            desc: `${presentCsg} csg 0D`,       
          },
          {
            title: "presentCsgID",
            value: wellData.presentCsgID,
            className: "primary-input",
            placeHolder: "presentCsgID",
            desc: `${presentCsg} csg ID`,       
          },
          {
            title: "previousCsgID",
            value: wellData.previousCsgID,
            className: "primary-input",
            placeHolder: "previousCsgID",
            desc: `${previousCsg} csg ID`,       
          },
          {
            title: "topOfLead",
            value: wellData.topOfLead,
            className: "primary-input",
            placeHolder: "topOfLead",
            desc: "Top of Lead",       
          },
          {
            title: "topOfTail",
            value: wellData.topOfTail,
            className: "primary-input",
            placeHolder: "topOfTail",
            desc: "Top Of Tail Slurry",       
          },
          {
            title: "topOfFloatCollar",
            value: wellData.topOfFloatCollar,
            className: "primary-input",
            placeHolder: "topOfFloatCollar",
            desc: "Float Collar depth",       
          },
          {
            title: "measuredDepth",
            value: wellData.measuredDepth,
            className: "primary-input",
            placeHolder: "measuredDepth",
            desc: "Measured Depth",       
          },
        ]
    
  return {InputData, }
}

export default useCsgJobData