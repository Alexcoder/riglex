

export const inputDataPrimary = {
    jobMode: "OTHERS",
    openHoleID: "16",
    overlap: "0",
    lengthOfTailAboveShoe: "298.5",
    unit: "",
    shoeTrack: "24.31",
    measuredDepth: "1600",
    ratHole: "1.5",
    leadExcess: "150",
    tailExcess: "150",
    previousCsgShoe: "116.428",
    presentCsgOD: "",
    presentCsgID: "12.43",
    previousCsgID: "18.25",
    topOfLead:"0",
//     
    presentCsgShoe:"1598.5",
    csgCsgAnn: "",
    openHoleCsgAnn: "",
    casingCap: "",
    topOfFloat: "",
    //RESULT
    topOfTail: "",
    volOfLead:"",
    volOfTail: "",
    displacement:"",
    //RESULT FINISH
  }

  export const inputDataPlug = {
      zoneId: "12.25",
      length: "160",
      stingerOD: "3.5",
      OHE: "30",
      stingerID: "2.992",
      slurryYield: "1.57",
      volOfSpacerAhead: "30",
      bottom: "3179",
      drillPipeID: "4.276",
      drillPipeOD: "5",
      drillPipeMD: "2837",
      dpOuterZoneId: "12.43",
      unit: "",
      // drillPipe: false,
  }


  export const PlugMeasurementUnit =[
        {unit : "Feet" ,  value: 1},
        {unit : "Meter" , value: 2}
  ]

  export const HomeJobModeSelect =[
      {type : "PRIMARY CEMENTING" ,  value: 1},
      {type : "PLUG CASING CEMENTATION" ,  value: 4}
]

  export const HomeJobUnitSelect =[
      {type: "SELECT JOB UNIT" },
      {type : "FEET" ,  value: 1},
      {type : "METER" ,  value: 2},
]


export const PlugZoneSelect =[
      {zone : "OPEN HOLE" ,          value: 1},
      {zone : "13-3/8 INCH CASING" , value: 2},
      {zone : "9-5/8 INCH CASING" ,  value: 3},
      {zone : "7 INCH CASING" ,      value: 4},
      {zone : "OTHER CASING TYPE" ,  value: 5}
]

export const CasingType1338 =[
      {weight: "72 lbs/ft" ,   size: 8.35, id:1},
      {weight: "69 lbs/ft" ,   size: 7.35, id:2}
]

export const CasingType958 =[
      {weight: "47 lbs/ft" ,   size: "8.35", id:1},
      {weight: "39 lbs/ft" ,   size: "7.35", id: 2}
]

export const CasingType7in =[
      {weight: "72 lbs/ft" ,   size: 8.35, id:1},
      {weight: "69lbs/ft" ,   size: 7.35, id:2},
]

export const Conversion =[
      {id:1 , type: "Barrel to CubicFt" ,  value: "bbl"},
      {id:2, type: "CubicFt to Barrel" , value: "cuft"},
      {id:3 , type: "Cement Sacks to MetricTon", value: "sacks"},
      {id:4, type: "Cement MetricTon to Sacks", value: "MT"},
      {id:5 , type: "Feet to Meters" ,    value: "ft"},
      {id:7 , type: "Meters to Feet" ,    value: "m"},
      {id:8 , type: "Feet To Inches" ,    value: "ftt"},
      {id:9 , type: "Gallons To Barrel" ,    value: "gal"},
      {id:10 , type: "CubicMeter To CubicFt" ,    value: "cuMeter"},
      {id:11 , type: "Barrel To Gallons" ,    value: "bbls"},
      {id:12 , type: "Barrel To CubicMeter" ,    value: "bblss"},
      {id:13 , type: "CubicFt To CubicMeter" ,    value: "ft3"},
      {id:14 , type: "CubicMeter To Barrel" ,    value: "m3"},
      {id:15 , type: "Inches To Feet" ,    value: "inches"},
]







