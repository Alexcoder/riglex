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
          disabled : false  ,    
        },
        {
          title: "previousCsgShoe",
          value: wellData.previousCsgShoe,
          className: "primary-input",
          placeHolder: "previousCsgShoe",
          desc: `${previousCsg} Casing Shoe`,       
          disabled : false ,     
        },
        {
          title: "presentCsgShoe",
          value: wellData.presentCsgShoe,
          className: "primary-input",
          placeHolder: "presentCsgShoe",
          desc: `${presentCsg} Casing Shoe`,       
          disabled : false  ,    
        },
        {
          title: "leadExcess",
          value: wellData.leadExcess,
          className: "primary-input",
          placeHolder: "leadExcess",
          desc: "Lead Excess",       
          disabled : false  ,    
        },
        {
          title: "tailExcess",
          value: wellData.tailExcess,
          className: "primary-input",
          placeHolder: "tailExcess",
          desc: "Tail Excess",       
          disabled : false  ,    
        },
        {
          title: "presentCsgOD",
          value: wellData.presentCsgOD(presentCsg),
          className: "primary-input",
          placeHolder: "presentCsgOD",
          desc: `${presentCsg} csg 0D`,       
          disabled : presentCsg ==="13-3/8 inch" || presentCsg==="9-5/8 inch" || presentCsg==="7 inch" ? true : false  ,    
        },
        {
          title: "presentCsgID",
          value: wellData.presentCsgID,
          className: "primary-input",
          placeHolder: "presentCsgID",
          desc: `${presentCsg} csg ID`,       
          disabled : false  ,    
        },
        {
          title: "previousCsgID",
          value: wellData.previousCsgID,
          className: "primary-input",
          placeHolder: "previousCsgID",
          desc: `${previousCsg} csg ID`,       
          disabled : false  ,    
        },
        {
          title: "topOfLead",
          value: wellData.topOfLead,
          className: "primary-input",
          placeHolder: "topOfLead",
          desc: "Top of Lead",       
          disabled : false  ,    
        },
        {
          title: "topOfTail",
          value: wellData.topOfTail,
          className: "primary-input",
          placeHolder: "topOfTail",
          desc: "Top Of Tail Slurry",       
          disabled : false  ,    
        },
        {
          title: "topOfFloatCollar",
          value: wellData.topOfFloatCollar,
          className: "primary-input",
          placeHolder: "topOfFloatCollar",
          desc: "Float Collar depth",       
          disabled : false  ,    
        },
        {
          title: "measuredDepth",
          value: wellData.measuredDepth,
          className: "primary-input",
          placeHolder: "measuredDepth",
          desc: "Measured Depth",       
          disabled : false  ,    
        },
      ]
      
      return {InputData, }
}

export default useCsgJobData