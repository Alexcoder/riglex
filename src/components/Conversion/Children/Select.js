import '../Conversion.css';


const Select =(props)=>{
    const {modeConversion, setModeConversion}= props;

    return(
        <div>
        <div className="label_select">SELECT</div >
       <select   value={modeConversion} onChange={(e)=> setModeConversion(e.target.value)}
        className="select"> 
            <option disabled={modeConversion}>SELECT</option>
            <option className={modeConversion==="bbl-cuft"?  "green" : null} value={"bbl-cuft"}>Barrel To CubicFt</option>
            <option className={modeConversion==="cuft-bbl"?  "green" : null} value={"cuft-bbl"}>CubicFt To Barrel</option>
            <option className={modeConversion==="bbl-gal"?  "green" : null} value={"bbl-gal"}>Barrel To Gallon</option>
            <option className={modeConversion==="gal-bbl"?   "green" : null} value={"gal-bbl"}>Gallons To Barrel</option>
            <option className={modeConversion==="bbl-m3"? "green" : null} value={"bbl-m3"}>Barrel To CubicMeter</option>
            <option className={modeConversion==="m3-bbl"?    "green" : null} value={"m3-bbl"}>CubicMeter To Barrel</option>
            <option className={modeConversion==="cuft-m3"?   "green" : null} value={"cuft-m3"}>CubicFt To CubicMeter</option>
            <option className={modeConversion==="m3-cuft"? "green" : null} value={"m3-cuft"}>CubicMeter To CubicFt</option>
            <option className={modeConversion==="ft-inch" ? "green" : null} value={"ft-inch"}>Feet To Inches</option>
            <option className={modeConversion==="inch-ft" ? "green" : null} value={"inch-ft"}>Inches To Feet</option>
            <option className={modeConversion==="lbs-kg"? "green": null} value={"lbs-kg"}>Pounds To Kilogram</option>
            <option className={modeConversion==="kg-lbs"?    "green" : null} value={"kg-lbs"}>Kilogram To Pounds</option>
            <option className={modeConversion==="sacks-MT" ?   "green" : null} value={"sacks-MT"}>Cement Sacks To MetricTon</option>
            <option className={modeConversion==="MT-sacks"    ?   "green" : null} value={"MT-sacks"}>Cement MetricTon To Sacks</option>
            <option className={modeConversion==="ft-m"    ?   "green" : null} value={"ft-m"}>Feet To Meter</option>
            <option className={modeConversion==="m-ft"     ?   "green" : null} value={"m-ft"}>Meter To Feet</option>
            <option className={modeConversion==="Centigrade-Fahrenheit" ?   "green" : null} value={"Centigrade-Fahrenheit"}>Celsius To Fahrenheit</option>
            <option className={modeConversion==="Fahrenheit-Centigrade" ?   "green" : null} value={"Fahrenheit-Centigrade"}>Fahrenheit To Celsius</option>
            </select>
            </div>
   

    )


}

export default Select;