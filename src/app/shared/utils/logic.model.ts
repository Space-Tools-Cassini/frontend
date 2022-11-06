import { Crop } from "../models/crop.model";
import { SoilTypes } from "../models/soil-types.module";
import { MathModel } from "./math-model.model";

export class Logic {
    static analize(lat: number, lon: number, crop: Crop): number {
        var score: number = 0;

        // Model the variables
        var point_temp: number = MathModel.calc_temp(lat);
        var point_ph: number = MathModel.calc_ph(point_temp);
        var point_prep: number = MathModel.calc_prep(lat);

        // Randomize the Conditionals
        var soil_type: SoilTypes = Math.floor(Math.random() * (6 + 1));
        var co2: number = MathModel.calc_co2(0, 100);

        // Conditionals
        // check soil
        if (crop.bad_soil.includes(soil_type)) {
            return score;
        }
        // check co2
        if (crop.max_co2 <= co2) {
            return score;
        }

        // Apply thresholds.
        // Temperature
        if ((!Number.isNaN(crop.thresh_temp[0]))&&(point_temp < crop.thresh_temp[0])) {
            return score;
        }
        if ((!Number.isNaN(crop.thresh_temp[1]))&&(crop.thresh_temp[1] < point_temp)) {
            return score;
        }
        // PH
        if ((!Number.isNaN(crop.thresh_ph[0]))&&(point_ph < crop.thresh_ph[0])) {
            return score;
        }
        if ((!Number.isNaN(crop.thresh_ph[1]))&&(crop.thresh_ph[1] < point_ph)) {
            return score;
        }
        // Prepicipitation
        if ((!Number.isNaN(crop.thresh_prep[0]))&&(point_prep < crop.thresh_prep[0])) {
            return score;
        }
        if ((!Number.isNaN(crop.thresh_prep[1]))&&(crop.thresh_prep[1] < point_prep)) {
            return score;
        }

        // VECTOR SPACE
        // Get the distance between 2 3D points
        var mean_crop_temp: number = (crop.ideal_temp[1] - crop.ideal_temp[0])/2;
        var mean_crop_prep: number = (crop.ideal_prep[1] - crop.ideal_prep[0])/2;
        var mean_crop_ph: number = (crop.ideal_ph[1] - crop.ideal_ph[0])/2;

        var score = Math.sqrt(
            Math.pow((point_temp - mean_crop_temp), 2) +
            Math.pow((point_prep - mean_crop_prep), 2) +
            Math.pow((point_ph - mean_crop_ph), 2)
        );

        return score;
    }
}
