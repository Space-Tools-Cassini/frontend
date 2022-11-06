import { Crop } from "./crop.model";
import { SoilTypes } from "./soil-types.module";

export class Sugarcane extends Crop {
    override readonly ideal_temp:  [number, number] = [22, 38];
    override readonly ideal_ph:    [number, number] = [5, 8.5];
    override readonly ideal_prep:  [number, number] = [150, 250];
    override readonly thresh_temp: [number, number] = [15, NaN];
    override readonly thresh_ph:   [number, number] = [NaN, NaN];
    override readonly thresh_prep: [number, number] = [NaN, NaN];
    override readonly bad_soil:    SoilTypes[]         = [SoilTypes.CLAY, SoilTypes.SILT, SoilTypes.PEATY];
    override readonly max_co2:     number           = 50;
}
