import { useGlobalState } from "../../state/context/Context";

function useCsgDobData(casing, previousCsg){
    const { wellData2 } = useGlobalState();

    
    const InputData1 = [//Casing ID
       {
               title: "casingOD",
               value: wellData2.casingOD(casing),
               placeholder: "",
               desc : `${casing} csg OD`,
               disabled : casing!=="" ? true : false  ,    
            },
            {
                title: "casingID",
                value: wellData2.casingID,
                placeholder: "0",
                desc : `${casing} csg ID`,
                disabled : false  ,    
            },
            {
                title: "previousCsgID",
                value: wellData2.previousCsgID,
                placeholder: "0",
                desc: `${previousCsg} ID`,       
                disabled : false  ,    
            },
        ];
        const InputData2 = [
            {
                title: "openHole",
                value: wellData2.openHole(casing),
                className: "primary-input",
                placeholder: "0",
                desc: "Open Hole ID", 
                disabled : casing!=="" ? true : false  ,    
            },
        {
          title: "leadExcess",
          value: wellData2.leadExcess,
          className: "primary-input",
          placeholder: "excess value eg 10",
          desc: "Lead Excess",       
          disabled : false  ,    
        },
        {
            title: "tailExcess",
          value: wellData2.tailExcess,
          className: "primary-input",
          placeholder: "excess value eg 15",
          desc: "Tail Excess",       
          disabled : false  ,    
        },
    ]
    
    
 const InputData3 = [ //Depth 
    {
        title: "previousCsgShoe",
        value: wellData2.previousCsgShoe,
        className: "primary-input",
        placeholder: "0",
        desc: `${previousCsg} Casing Shoe @`,       
        disabled : false ,     
    },
    {
        title: "topOfFloatCollar",
        value: wellData2.topOfFloatCollar,
        className: "primary-input",
        placeholder: "0",
        desc: "Float Collar depth @",       
        disabled : false  ,    
    },
    {
          title: "presentCsgShoe",
          value: wellData2.presentCsgShoe,
          className: "primary-input",
          placeholder: "0",
          desc: `${casing} Casing Shoe @`,       
          disabled : false  ,    
        },
        {
            title: "measuredDepth",
            value: wellData2.measuredDepth,
            className: "primary-input",
            placeholder: "0",
            desc: "Open Hole Measured Depth @",       
            disabled : false  ,    
        },
    ]
    const InputData4 = [
        {
            title: "topOfLead",
          value: wellData2.topOfLead,
          className: "primary-input",
          placeholder: "0",
          desc: "Top of Lead Slurry @",       
          disabled : false  ,    
        },
        {
            title: "topOfTail",
            value: wellData2.topOfTail,
            className: "primary-input",
            placeholder: "0",
            desc: "Top Of Tail Slurry @",       
            disabled : false  ,    
        },

    ]

    return { InputData1, InputData2, InputData3, InputData4}
};

export default useCsgDobData;

