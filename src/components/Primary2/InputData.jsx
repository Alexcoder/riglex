import { useGlobalState } from "../../state/context/Context";

function useCsgDobData(){
    const { wellData2, casingType } = useGlobalState();

    const previousCsg = casingType==="13-3/8 inch"? "Previous  " :
    casingType==="9-5/8 inch" ? "13-3/8 inch  " :
    casingType==="7 inch" ? "9-5/8 inch  " : "";  
    
    const InputData1 = [//Casing ID
       {
               title: "casingOD",
               value: wellData2.casingOD(casingType),
               placeholder: "",
               desc : `${casingType} csg OD`,
               disabled : casingType!=="" ? true : false  ,    
            },
            {
                title: "casingID",
                value: wellData2.casingID,
                placeholder: "0",
                desc : `${casingType} csg ID`,
                disabled : false  ,    
            },
            {
                title: "previousCsgID",
                value: wellData2.previousCsgID,
                placeholder: "0",
                desc: `${previousCsg} Csg ID`,       
                disabled : false  ,    
            },
        ];
        const InputData2 = [
            {
                title: "openHole",
                value: wellData2.openHole(casingType),
                className: "primary-input",
                placeholder: "0",
                desc: "Open Hole", 
                disabled : casingType!=="" ? true : false  ,    
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
          title: "casingShoe",
          value: wellData2.casingShoe,
          className: "primary-input",
          placeholder: "0",
          desc: `${casingType} Casing Shoe @`,       
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

