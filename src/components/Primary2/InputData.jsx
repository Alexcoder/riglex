import { useGlobalState } from "../../state/context/Context";

function useCsgDobData(casing, previousCsg){
    const { wellData2 } = useGlobalState();

    
    const InputData1 = [//Casing ID
       {
               title: "casingOD",
               value: wellData2.casingOD(casing),
               placeholder: "Casing OD",
               desc : `${casing} csg OD`,
               disabled : casing!=="" ? true : false  ,    
            },
            {
                title: "casingID",
                value: wellData2.casingID,
                placeholder: "casingID",
                desc : `${casing} csg ID`,
                disabled : false  ,    
            },
            {
                title: "previousCsgID",
                value: wellData2.previousCsgID,
                placeholder: "previousCsgID",
                desc: `${previousCsg} ID`,       
                disabled : false  ,    
            },
        ];
        const InputData2 = [
            {
                title: "openHole",
                value: wellData2.openHole(casing),
                className: "primary-input",
                placeholder: "openHole",
                desc: "Open Hole ID", 
                disabled : casing!=="" ? true : false  ,    
            },
        {
          title: "leadExcess",
          value: wellData2.leadExcess,
          className: "primary-input",
          placeholder: "leadExcess",
          desc: "Lead Excess",       
          disabled : false  ,    
        },
        {
            title: "tailExcess",
          value: wellData2.tailExcess,
          className: "primary-input",
          placeholder: "tailExcess",
          desc: "Tail Excess",       
          disabled : false  ,    
        },
    ]
    
    
 const InputData3 = [ //Depth 
    {
        title: "previousCsgShoe",
        value: wellData2.previousCsgShoe,
        className: "primary-input",
        placeholder: "previousCsgShoe",
        desc: `${previousCsg} Casing Shoe`,       
        disabled : false ,     
    },
    {
        title: "topOfFloatCollar",
        value: wellData2.topOfFloatCollar,
        className: "primary-input",
        placeholder: "topOfFloatCollar",
        desc: "Float Collar depth",       
        disabled : false  ,    
    },
    {
          title: "presentCsgShoe",
          value: wellData2.presentCsgShoe,
          className: "primary-input",
          placeholder: "presentCsgShoe",
          desc: `${casing} Casing Shoe`,       
          disabled : false  ,    
        },
        {
            title: "measuredDepth",
            value: wellData2.measuredDepth,
            className: "primary-input",
            placeholder: "measuredDepth",
            desc: "Measured Depth",       
            disabled : false  ,    
        },
    ]
    const InputData4 = [
        {
            title: "topOfLead",
          value: wellData2.topOfLead,
          className: "primary-input",
          placeholder: "topOfLead",
          desc: "Top of Lead",       
          disabled : false  ,    
        },
        {
            title: "topOfTail",
            value: wellData2.topOfTail,
            className: "primary-input",
            placeholder: "topOfTail",
            desc: "Top Of Tail Slurry",       
            disabled : false  ,    
        },

    ]

    return { InputData1, InputData2, InputData3, InputData4}
};

export default useCsgDobData;

