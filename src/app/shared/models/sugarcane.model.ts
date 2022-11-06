import { Crop } from "./crop.model";
import { SoilTypes } from "./soil-types.module";

export class Sugarcane extends Crop {
    static override readonly ideal_temp:  [number, number] = [22, 38];
    static override readonly ideal_ph:    [number, number] = [5, 8.5];
    static override readonly ideal_prep:  [number, number] = [150, 250];
    static override readonly thresh_temp: [number, number] = [15, NaN];
    static override readonly thresh_ph:   [number, number] = [NaN, NaN];
    static override readonly thresh_prep: [number, number] = [NaN, NaN];
    static override readonly bad_soil:    SoilTypes[]         = [SoilTypes.CLAY, SoilTypes.SILT, SoilTypes.PEATY];
    static override readonly max_co2:     number           = 50;
}
