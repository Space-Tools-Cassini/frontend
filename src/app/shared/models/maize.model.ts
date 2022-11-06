import { Crop } from "./crop.model";
import { SoilTypes } from "./soil-types.module";

export class Maize extends Crop {
    override readonly ideal_temp:  [number, number] = [18, 25];
    override readonly ideal_ph:    [number, number] = [6, 6.5];
    override readonly ideal_prep:  [number, number] = [4, 11];
    override readonly thresh_temp: [number, number] = [NaN, 40];
    override readonly thresh_ph:   [number, number] = [NaN, NaN];
    override readonly thresh_prep: [number, number] = [NaN, NaN];
    override readonly bad_soil:    SoilTypes[]      = [SoilTypes.SILT, SoilTypes.PEATY, SoilTypes.CHALKY, SoilTypes.LOAMY];
    override readonly max_co2:     number           = 20;
}
