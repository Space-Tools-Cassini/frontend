import { Crop } from "./crop.model";
import { SoilTypes } from "./soil-types.module";

export class Maize extends Crop {
    static override readonly ideal_temp:  [number, number] = [18, 25];
    static override readonly ideal_ph:    [number, number] = [6, 6.5];
    static override readonly ideal_prep:  [number, number] = [40, 110];
    static override readonly thresh_temp: [number, number] = [NaN, 40];
    static override readonly thresh_ph:   [number, number] = [NaN, NaN];
    static override readonly thresh_prep: [number, number] = [NaN, NaN];
    static override readonly bad_soil:    SoilTypes[]      = [SoilTypes.SILT, SoilTypes.PEATY, SoilTypes.CHALKY, SoilTypes.LOAMY];
    static override readonly max_co2:     number           = 20;
}
