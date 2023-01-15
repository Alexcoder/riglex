import { useGlobalState } from "../../../state"



const useResultPlug = () => {
    const { plug, wellData, drillPipe } = useGlobalState();

    const { unit, } = wellData;
    const { zoneId, stingerID, stingerOD, length, OHE, volOfSpacerAhead, bottom,
        drillPipeID, drillPipeMD, } = plug;

    const changer = unit === "ft" ? 1029.4 : 313.8;
    // const unitChanger = unit === "ft" ? "ft" : "m";
    const Excess = (Number(OHE) + 100) * 0.01;
    const CapacityOfStinger = (stingerID**2) / (changer);
    const CapacityOfDP = (drillPipeID**2) / (changer);
    const CapacityOfPlugZone = (zoneId**2) / (changer);
    const VolOfPlug1 = (CapacityOfPlugZone * length * Excess);
    const AnnularCapacityStinger = (zoneId**2 - stingerOD ** 2) / (changer);
    const LengthOfSpacer = (volOfSpacerAhead / AnnularCapacityStinger);
    const LengthOfCementWithPipeIn = (VolOfPlug1 / (CapacityOfStinger + AnnularCapacityStinger)).toFixed(1);
    const TopOfCementWithPipeIn = Number(bottom) - Number(LengthOfCementWithPipeIn);
    const TopOfSpacer = Number(TopOfCementWithPipeIn) - Number(LengthOfSpacer);
    const VolumeOfSpacerAhead = volOfSpacerAhead;
    const Volume = VolOfPlug1;


    const UniformStinger = () => {
        const VolumeOfSpacerBehind = (CapacityOfStinger * LengthOfSpacer).toFixed(2)
        const Displacement1 = ((bottom - LengthOfCementWithPipeIn - LengthOfSpacer) * CapacityOfStinger).toFixed(1)

        return (
            <main>
                <div style={{background: "blue"}}>Volume = {Volume} bbl</div>
                <div>Spacer Ahead = {VolumeOfSpacerAhead} bbl</div>
                <div>Spacer Behind = {VolumeOfSpacerBehind} bbl</div>
                <div>Displacement = {Displacement1} bbl</div>
            </main>
        )
    }

    const StingerDrillPipe = () => {
        //When DrillPipe Depth is Greater Than Top Of Spacer
        const DrillPipeMD_to_TopCement = drillPipeMD - TopOfCementWithPipeIn; //length
        const VolSpacerAhead1 = DrillPipeMD_to_TopCement * AnnularCapacityStinger;
        const RemainingVolume = volOfSpacerAhead - VolSpacerAhead1;
        const LengthSpacerAhead1 = DrillPipeMD_to_TopCement;
        const LengthSpacerAhead2 = RemainingVolume / AnnularCapacityStinger;
        const SpacerTotalLength = Number(LengthSpacerAhead1) + Number(LengthSpacerAhead2) ;
        const Displacement3 = CapacityOfDP * SpacerTotalLength;
        
        return (
            <div>
                <div>Volume = {Volume} bbl</div>
                <div>Spacer Ahead = {VolumeOfSpacerAhead} bbl</div>
                <div>Spacer Behind = {"VolumeOfSpacerBehind3"} bbl</div>
                <div>Displacement = {Displacement3} bbl</div>
            </div>
        )
    }




    return {
            drillPipe,
            UniformStinger,
            StingerDrillPipe,
            // Compare: drillPipeMD <= TopOfSpacer ? "NO CrossOver" : "YES CrossOver",
            Volume,
            volOfSpacerAhead,
    }

}

export default useResultPlug;