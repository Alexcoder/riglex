

export const inputDataPrimary = {
    openHoleID: "",
    presentCsgID: "",
    presentCsgOD(casing){
      if(casing==="13-3/8 inch") return Number(13.375)
      else if(casing==="9-5/8 inch") return Number(9.625)
      else if(casing==="7 inch") return Number(7)
      else return ""
    },
    previousCsgID: "",
    lengthOfTailAboveShoe: "",
    measuredDepth: "",
    leadExcess: "",
    tailExcess: "",
    previousCsgShoe: "",
    presentCsgShoe:"",
    topOfLead:"",
    topOfTail:"",
    topOfFloatCollar:"",
// }
//     

    //LINER
    drillPipeIdLiner:"",
    drillPipeDepthLiner:"",
    settingToolAssemblyIdLiner: "",


// BUMP PRESSURE
   mudWeight: "",
   weightOfLeadSlurry:"",
   weighOfTailSlurry: "",
   weightOfDisplacementFluid:"",
   topOfLeadTvd:"",
   topOfTailTvd:"",
   topOfFloatTvd:"",
   presentCsgTvd: "",
   tvd:"",
  }

//   export const inputDataPlug = {
//       zoneId: "6.25",
//       length: "1000",
//       stingerOD: "2.875",
//       OHE: "",
//       stingerID: "2.441",
//       slurryYield: "",
//       volOfSpacerAhead: "50",
//       bottom: "9600",
//       drillPipeID: "3.35",
//       drillPipeOD: "4",
//       stingerLength: "1200",
//       dpOuterZoneId:"6.25",
//       unit: "",
//       //Volume = 37.9bbl, Spacer Behind=23.1bbl, TopOfSpacer=6351ft, DP Depth=8400ft, displacement=69.2, Stage3
//   }

  export const inputDataPlug = {
      zoneId: "",
      length: "",
      stingerOD: "",
      OHE: "",
      stingerID: "",
      stingerLength:"",
      slurryYield: "",
      volOfSpacerAhead: "",
      bottom: "",
      drillPipeID: "",
      drillPipeOD: "",
      dpOuterZoneId:"",
      unit: "ft",

      excess(){
       const excess = (Number(this.OHE) + 100)/100;
       return excess
      },
      unitSwitch(){
        const toggle = this.unit==="ft" ? 1024.8 : 313.8 ;
        return toggle
      },
      stingerCap(){
       const res = (Math.pow(this.stingerID,2) )/ this.unitSwitch() ;
       return res
      },
      annCap(){
       const res = (Math.pow(this.zoneId, 2) - Math.pow(this.stingerOD,2) )/ this.unitSwitch()
       return res
      },
      zoneIdCap(){
       const res = (Math.pow((this.zoneId), 2) / this.unitSwitch());
       return res
      },
      volume(){
       const res = ( this.zoneIdCap() * this.length * this.excess() ).toFixed(2)
       return res
      },
      spacerLength(){
       const res = ((this.volOfSpacerAhead) / (this.annCap())); 
       return res
      },
      volOfSpacerBehind(){
       const res =  (this.spacerLength() * this.stingerCap()); 
       return res
      },
      lengthOfCementWithPipeInside(){
       const sum = (Number(this.annCap()) + Number(this.stingerCap()));
       const res = this.volume() /  sum ;
       return res
      },
      displacement(){
       const length = this.bottom - this.lengthOfCementWithPipeInside() - this.spacerLength();     
       const res = this.stingerCap() * length;
       console.log("Top Of Spacer", length)
       return res
      },
      // isSpacerInDrillPiPe : ""
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







