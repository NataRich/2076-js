import { population, foodGain, foodCost, other } from './varibale'

//  get food produced by farmers
export function getFarmersFoodGain(){
    return foodGain.farmer * other.tf * population.farmers;
}

// get food consumed by farmers
export function getFarmersFoodCost() {
    return -1 * population.farmers * (foodCost.farmer + 2 * other.day);
}

// get food consumed by criminals
export function getCriminalsFoodCost(){
    return -1 * population.criminals * (foodCost.criminal + 2 * other.day);
}

// get food consumed by prisoners
export function getPrisonersFoodCost() {
    return -1 * population.prisoners * (foodCost.prisoner + 2 * other.day);
}

// get food consumed by scientists
export function getScientistsFoodCost(){
    return -1 * population.scientists * (foodCost.prisoner + 2 * other.day);
}

// get food consumed by soldiers
export function getSoldiersFoodCost(){
    return -1 * population.soldiers * (foodCost.soldier + 2 * other.day);
}

// tf gained from task1, tf += 0.5 - 0.8 with 0.2 * mdrf
export function task1(){
    let possibility1 = [0.5, 0.6, 0.7, 0.8];
    let successrate = (0.3 * population.scientists - 0.006 * (population.scientists)^2) * 0.2; 
    other.tf += (successrate > 1) ? possibility1[Math.floor(Math.random() * possibility1.length)] : 0;
}

// tf gained from task2, tf += 0.3 - 0.5 with 0.4 * mdrf
export function task2(){
    let possibility2 = [0.3, 0.4, 0.5];
    let successrate = (0.3 * population.scientists - 0.006*(population.scientists)^2) * 0.34; 
    other.tf += (successrate > 1) ? possibility2[Math.floor(Math.random() * possibility2.length)] : 0;
}

// tf gained from task3, tf += 0.2 - 0.3 with 0.6 * mdrf
export function task3(){
    let possibility3 = [0.2, 0.3];
    let successrate = (0.3 * population.scientists - 0.006 * (population.scientists)^2) * 0.6; 
    other.tf += (successrate > 1) ? possibility3[Math.floor(Math.random() * possibility3.length)] : 0;
}

/* return a boolean of a criminal transforming to 
 a underarrest criminal (call this function each day once)*/
export function ifcriminalArrested(){
    let rate = Math.floor(Math.random()*10) % 2; //about 50%
    return (rate == 0)? true: false;
}

/* final step to aggregated all food product and consumption
will return a positive or negative number*/
export function foodleft(){
    let total = initalfood + getFarmerFood() - getCriFood() - getSciFood() - getSolFood();
    return total;
}

export function ifGameContinue(){
    return (foodleft() > 0) ? true : false;
}
