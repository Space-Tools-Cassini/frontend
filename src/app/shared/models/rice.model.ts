import { Crop } from "./crop.model";
import { SoilTypes } from "./soil-types.module";

export class Rice extends Crop {
    override readonly ideal_temp:  [number, number] = [21, 37];
    override readonly ideal_ph:    [number, number] = [6, 6];
    override readonly ideal_prep:  [number, number] = [17.5, 30];
    override readonly thresh_temp: [number, number] = [15, 42];
    override readonly thresh_ph:   [number, number] = [3.5, 8.5];
    override readonly thresh_prep: [number, number] = [11.5, NaN];
    override readonly bad_soil:    SoilTypes[]         = [SoilTypes.SILT, SoilTypes.SAND, SoilTypes.PEATY, SoilTypes.CHALKY];
    override readonly max_co2:     number           = 50;
}
