


const useConversion =(factor, modeConversion, setModeConversion )=>{
  
    const bbl_to_cuft = (factor*5.6146).toFixed(2)//Converting from bbl to cuft
    const cuft_to_bbl = (factor/5.6146).toFixed(2)//Converting from cuft to bbl 
    const gal_to_bbl = (factor/42).toFixed(2)//Converting from gal to bbl 
    const bbl_to_gal = (factor*42).toFixed(2)//Converting from bbl to gal 
    const m3_to_bbl = (factor*6.28).toFixed(2)//Converting from m3 to bbl 
    const bbl_to_m3 = (factor/6.28).toFixed(2)//Converting from bbl to m3 
    const cuft_to_m3 = (factor/(5.6146*6.28)).toFixed(2)//Converting from ft3 to m3 
    const m3_to_cuft = (factor*6.28*5.6146).toFixed(2)//Converting from m3 to ft3 
    const ft_to_inch = (factor*12).toFixed(2)//Converting from ft to inches 
    const inch_to_ft = (factor/12).toFixed(2)//Converting from inches to ft 
    const kg_to_lbs = (factor*2.205).toFixed(2)//Converting from kg to pounds 
    const lbs_to_kg = (factor/2.205).toFixed(2)//Converting from pounds to kg 
    const sacks_to_MT = ((factor*94)/2205).toFixed(2) //Converting from sacks to MT
    const MT_to_sacks = ((factor*2205)/94).toFixed(2) //Converting from MT to sacks
    const ft_m = ((factor/3.28)).toFixed(2) //Converting from ft to m
    const m_ft = ((factor*3.28)).toFixed(2) //Converting from m to ft
    const Centigrade_to_Fahrenheit = (((factor)*1.8)+32).toFixed(1) //Converting from Centigrade to Fahrenheit
    const Fahrenheit_to_Centigrade = (((factor)-32)*100/180).toFixed(1) //Converting Fahrenheit to Centigrade
    const ltr_to_gal = ((factor)/3.78541).toFixed(2) //Converting Litre to gallon
    const gal_to_ltr = ((factor) * 3.78541).toFixed(2) //Converting gallon to litre
    const ltr_to_bbl = ((factor)/158.987294928).toFixed(2) //Converting Litre to Barrel
    const bbl_to_ltr = ((factor) * 158.987294928).toFixed(2) //Converting Barrel to litre
  
  
    const ResultChanger= modeConversion==="bbl-cuft"  ?  bbl_to_cuft: 
                         modeConversion==="cuft-bbl"  ?  cuft_to_bbl :
                         modeConversion==="gal-bbl"   ?  gal_to_bbl :
                         modeConversion==="bbl-gal"   ?  bbl_to_gal :
                         modeConversion==="m3-bbl"    ?  m3_to_bbl :
                         modeConversion==="bbl-m3"    ?  bbl_to_m3 :
                         modeConversion==="cuft-m3"   ?  cuft_to_m3 :
                         modeConversion==="m3-cuft"   ?  m3_to_cuft :
                         modeConversion==="ft-inch"   ?  ft_to_inch :
                         modeConversion==="inch-ft"   ?  inch_to_ft :
                         modeConversion==="kg-lbs"    ?  kg_to_lbs :
                         modeConversion==="lbs-kg"    ?  lbs_to_kg :
                         modeConversion==="sacks-MT"  ?  sacks_to_MT :
                         modeConversion==="MT-sacks"  ?  MT_to_sacks : 
                         modeConversion==="ft-m"      ?  ft_m : 
                         modeConversion==="m-ft"      ?  m_ft :
                         modeConversion==="ltr-gal"      ?  ltr_to_gal :
                         modeConversion==="gal-ltr"      ?  gal_to_ltr :
                         modeConversion==="ltr-bbl"      ?  ltr_to_bbl :
                         modeConversion==="bbl-ltr"      ?  bbl_to_ltr :
                         modeConversion==="Centigrade-Fahrenheit"  ? Centigrade_to_Fahrenheit :
                         modeConversion==="Fahrenheit-Centigrade"  ? Fahrenheit_to_Centigrade : null
                        //  
    const baseUnit =     modeConversion==="bbl-cuft"? "bbl" :
                         modeConversion==="sacks-MT" ? "sacks" :
                         modeConversion==="bbl-gal"? "bbl" :
                         modeConversion==="gal-bbl"? "gal" :
                         modeConversion==="cuft-bbl" ? "cuft":
                         modeConversion==="bbl-m3" ? "bbl":
                         modeConversion==="m3-bbl" ? "m3":
                         modeConversion==="cuft-m3" ? "cuft":
                         modeConversion==="m3-cuft" ? "m3":
                         modeConversion==="MT-sacks"? "MT" : 
                         modeConversion==="ft-m"? "ft" : 
                         modeConversion==="ft-inch"? "ft" : 
                         modeConversion==="inch-ft"? "inches" : 
                         modeConversion==="kg-lbs"? "kg" : 
                         modeConversion==="lbs-kg"? "lbs" : 
                         modeConversion==="m-ft"? "meter" :
                         modeConversion==="ltr-gal"? "litre" :
                         modeConversion==="gal-ltr"? "gallon" :
                         modeConversion==="ltr-bbl"? "litre" :
                         modeConversion==="bbl-ltr"? "barrel" :
                         modeConversion==="Centigrade-Fahrenheit"  ? "Celsius" :
                         modeConversion==="Fahrenheit-Centigrade"  ? "Fahrenheit" :
                        null   //NOTE VALUES ARE cuft m bbl sacks mt value={"bbl"} in the options selection
                          //  
   const resultUnit =    modeConversion==="bbl-cuft" ? "cuft": 
                         modeConversion==="cuft-bbl"  ? "bbl":
                         modeConversion==="sacks-MT" ? "MT":  
                         modeConversion==="MT-sacks"  ? "sacks" :
                         modeConversion==="bbl-gal" ? "gal":
                         modeConversion==="gal-bbl" ? "bbl":
                         modeConversion==="bbl-m3" ? "m3":
                         modeConversion==="m3-bbl" ? "bbl":
                         modeConversion==="cuft-m3" ? "m3":
                         modeConversion==="m3-cuft" ? "cuft":
                         modeConversion==="ft-m"  ? "m" : 
                         modeConversion==="ft-inch"  ? "inches" : 
                         modeConversion==="inch-ft"  ? "ft" : 
                         modeConversion==="kg-lbs"  ? "lbs" : 
                         modeConversion==="lbs-kg"  ? "kg" : 
                         modeConversion==="m-ft"  ? "ft" :
                         modeConversion==="ltr-gal"  ? "gal" :
                         modeConversion==="gal-ltr"  ? "ltr" :
                         modeConversion==="ltr-bbl"  ? "bbl" :
                         modeConversion==="bbl-ltr"  ? "ltr" :
                         modeConversion==="Centigrade-Fahrenheit"  ? "Fahrenheit" :
                         modeConversion==="Fahrenheit-Centigrade"  ? "Celsius" : null
                         //  
    const data =         modeConversion==="bbl-cuft"? "Convert From Bbl to Cuft":
                         modeConversion==="cuft-bbl"? "Convert From Cuft to Bbl":
                         modeConversion==="bbl-gal"? "Convert From Bbl to Gal":
                         modeConversion==="gal-bbl"? "Convert From gal to Bbl":
                         modeConversion==="bbl-m3"? "Convert From bbl to m3":
                         modeConversion==="m3-bbl"? "Convert From m3 to Bbl":
                         modeConversion==="cuft-m3"? "Convert From cuft to m3":
                         modeConversion==="m3-cuft"? "Convert From m3 to cuft":
                         modeConversion==="ft-inch"? "Convert From ft to inches":
                         modeConversion==="inch-ft"? "Convert From inches to ft":
                         modeConversion==="kg-lbs"? "Convert From kg to lbs":
                         modeConversion==="lbs-kg"? "Convert From lbs to kg":
                         modeConversion==="sacks-MT"? "Convert From Sacks to MetricTon":
                         modeConversion==="MT-sacks"? "Convert From MetricTon to Sacks": 
                         modeConversion==="ft-m"? "Convert From Feet to Meters": 
                         modeConversion==="m-ft"? "Convert From Meters to Feet": 
                         modeConversion==="ltr-gal"? "Convert From Litre to Gallon": 
                         modeConversion==="gal-ltr"? "Convert From Gallon to Litre": 
                         modeConversion==="ltr-bbl"? "Convert From Litre to Barrel": 
                         modeConversion==="bbl-ltr"? "Convert From Barrel to Litre": 
                         modeConversion==="Centigrade-Fahrenheit"? "Convert From Celsius to Fahrenheit": 
                         modeConversion==="Fahrenheit-Centigrade"? "Convert From Fahrenheit to Celsius": 
                         "Conversion Calculator"

               const Revert =()=>{
                          if(modeConversion==="cuft-bbl")   setModeConversion("bbl-cuft") ;
                           else if(modeConversion==="bbl-cuft")  setModeConversion("cuft-bbl");
                           else if(modeConversion==="bbl-gal")  setModeConversion("gal-bbl");
                           else if(modeConversion==="gal-bbl")  setModeConversion("bbl-gal");
                           else if( modeConversion==="bbl-m3") setModeConversion("m3-bbl");
                           else if( modeConversion==="m3-bbl") setModeConversion("bbl-m3");
                           else if( modeConversion==="m3-cuft")  setModeConversion("cuft-m3") ;
                           else if( modeConversion==="cuft-m3")  setModeConversion("m3-cuft") ;
                           else if(modeConversion==="inch-ft") setModeConversion("ft-inch");
                           else if(modeConversion==="ft-inch") setModeConversion("inch-ft");
                           else if(modeConversion==="lbs-kg") setModeConversion("kg-lbs");
                           else if(modeConversion==="kg-lbs") setModeConversion("lbs-kg");
                           else if(modeConversion==="MT-sacks") setModeConversion("sacks-MT"); 
                           else if(modeConversion==="sacks-MT") setModeConversion("MT-sacks"); 
                           else if(modeConversion==="m-ft") setModeConversion("ft-m");
                           else if(modeConversion==="ft-m") setModeConversion("m-ft");
                           else if(modeConversion==="ltr-gal") setModeConversion("gal-ltr");
                           else if(modeConversion==="gal-ltr") setModeConversion("ltr-gal");
                           else if(modeConversion==="ltr-bbl") setModeConversion("bbl-ltr");
                           else if(modeConversion==="bbl-ltr") setModeConversion("ltr-bbl");
                           else if(modeConversion==="Centigrade-Fahrenheit") setModeConversion("Fahrenheit-Centigrade");
                           else if(modeConversion==="Fahrenheit-Centigrade") setModeConversion("Centigrade-Fahrenheit");
                           else return
                         }
                         

    return {ResultChanger, resultUnit, data, baseUnit, Revert}
        
}

export default useConversion;