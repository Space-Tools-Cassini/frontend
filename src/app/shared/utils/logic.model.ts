import { Crop } from "../models/crop.model";
import { SoilTypes } from "../models/soil-types.module";
import { MathModel } from "./math-model.model";

function soilTypesChanceIncreased(bad_soils: SoilTypes[]){
    
    var random1 : number = Math.floor(Math.random() * (6));
    console.log("random 1: "+random1)
    console.log("bad soils: "+bad_soils)
    if (bad_soils.includes(random1)){
        var random2 : number = Math.floor(Math.random() * (6));
        console.log("random 2: "+random2)
        if (bad_soils.includes(random2)){
            var random3 : number = Math.floor(Math.random() * (6));
            console.log("random 3: "+random3)
            if (bad_soils.includes(random3)){
                return 0;
            }
            else return 1;

        }
        else return 1;
    }
    else return 1;
}

export class Logic {
    static analize(lat: number, lon: number, crop: Crop): number {
        var score: number = 0;

        // Model the variables
        var point_temp: number = MathModel.calc_temp(lat);
        var point_ph: number = MathModel.calc_ph(point_temp);
        var point_prep: number = MathModel.calc_prep(lat);

        // Randomize the Conditionals
        
        console.log
        var co2: number = MathModel.calc_co2(0, 100);

        // Conditionals
        // check soil
        if (soilTypesChanceIncreased(crop.bad_soil)==0) {
            console.log("El suelo es malo")
            return score;
        }
        
        // check co2
        if (crop.max_co2 <= co2) {
            console.log("El co2 es malo")
            return score;
        }

        // Apply thresholds.
        // Temperature
        if ((!Number.isNaN(crop.thresh_temp[0]))&&(point_temp < crop.thresh_temp[0])) {
            console.log("La temperatura es demasiado baja. point_temp: " + point_temp + " crop_threshold: " + crop.thresh_temp[0])
            return score;
        }
        if ((!Number.isNaN(crop.thresh_temp[1]))&&(crop.thresh_temp[1] < point_temp)) {
            console.log("La temperatura es demasiado alta")
            return score;
        }
        // PH
        if ((!Number.isNaN(crop.thresh_ph[0]))&&(point_ph < crop.thresh_ph[0])) {
            console.log("El PH es demasiado bajo")
            return score;
        }
        if ((!Number.isNaN(crop.thresh_ph[1]))&&(crop.thresh_ph[1] < point_ph)) {
            console.log("El PH es demasiado alto")
            return score;
        }
        // Prepicipitation
        if ((!Number.isNaN(crop.thresh_prep[0]))&&(point_prep < crop.thresh_prep[0])) {
            console.log("Las preciptaciones son muy bajas")
            return score;
        }
        if ((!Number.isNaN(crop.thresh_prep[1]))&&(crop.thresh_prep[1] < point_prep)) {
            console.log("Las preciptaciones son muy altas")
            return score;
        }

        // VECTOR SPACE
        // Get the distance between 2 3D points
        var mean_crop_temp: number = (crop.ideal_temp[1] - crop.ideal_temp[0])/2;
        var mean_crop_prep: number = (crop.ideal_prep[1] - crop.ideal_prep[0])/2;
        var mean_crop_ph: number = (crop.ideal_ph[1] - crop.ideal_ph[0])/2;
        score = Math.sqrt(
            Math.pow((point_temp - mean_crop_temp), 2) +
            Math.pow((point_prep - mean_crop_prep), 2) +
            Math.pow((point_ph - mean_crop_ph), 2)
        );

        score = Math.max(0, 100-score);

        return score;
    }
   
   
}
