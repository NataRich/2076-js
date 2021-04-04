import { population, foodGain, foodCost, other } from './varibale';

//  get food produced by farmers
export function getFarmersFoodGain(){
    return foodGain.farmer * other.tf * population.farmers;
}

// get food consumed by farmers
export function getFarmersFoodCost() {
    return -1 * population.farmers * (foodCost.farmer + 2 * (other.day - 1));
}

// get food consumed by criminals
export function getCriminalsFoodCost(){
    return -1 * population.criminals * (foodCost.criminal + 2 * (other.day - 1));
}

// get food consumed by prisoners
export function getPrisonersFoodCost() {
    return -1 * population.prisoners * (foodCost.prisoner + 2 * (other.day - 1));
}

// get food consumed by scientists
export function getScientistsFoodCost(){
    return -1 * population.scientists * (foodCost.prisoner + 2 * (other.day - 1));
}

// get food consumed by soldiers
export function getSoldiersFoodCost(){
    return -1 * population.soldiers * (foodCost.soldier + 2 * (other.day - 1));
}

// tf gained from waterResearch, tf += 0.5 - 0.8 with 0.2 * mdrf
export function waterResearch(){
    let possibility1 = [0.5, 0.6, 0.7, 0.8];
    let successrate = (0.3 * population.scientists - 0.006 * (population.scientists)^2) * 0.2; 
    other.tf += (successrate > 1) ? possibility1[Math.floor(Math.random() * possibility1.length)] : 0;
    other.researchCount += 1;
}

// tf gained from landResearch, tf += 0.3 - 0.5 with 0.4 * mdrf
export function landResearch(){
    let possibility2 = [0.3, 0.4, 0.5];
    let successrate = (0.3 * population.scientists - 0.006*(population.scientists)^2) * 0.34; 
    other.tf += (successrate > 1) ? possibility2[Math.floor(Math.random() * possibility2.length)] : 0;
    other.researchCount += 1;
}

// tf gained from cropResearch, tf += 0.2 - 0.3 with 0.6 * mdrf
export function cropResearch(){
    let possibility3 = [0.2, 0.3];
    let successrate = (0.3 * population.scientists - 0.006 * (population.scientists)^2) * 0.6; 
    other.tf += (successrate > 1) ? possibility3[Math.floor(Math.random() * possibility3.length)] : 0;
    other.researchCount += 1;
}

export function canResearch() {
    return other.researchCount == 0;
}

export function canEnforcePolicy() {
    return other.policyCount == 0;
}

export function eduPromotion() {
    var diff = Math.floor(population.farmers * 0.1);
    population.farmers -= diff;
    population.scientists += diff;
    other.policyCount += 1;
}

export function scientistRetirement() {
    var diff = Math.floor(population.scientists * 0.1);
    population.scientists -= diff;
    population.farmers += diff;
    other.policyCount += 1;
}

export function longHourFarming() {
    foodGain.farmer += 5;
    other.policyCount += 1;
}

export function militaryRecruitment() {
    var diff = Math.floor(population.farmers * 0.1);
    population.farmers -= diff;
    population.soldiers += diff;
    other.policyCount += 1;
}

export function militaryRetirement() {
    var diff = Math.floor(population.soldiers * 0.1);
    population.soldiers -= diff;
    population.farmers += diff;
    other.policyCount += 1;
}

export function catchIfShould() {
    if (other.day % 2 == 0) {
        population.criminals -= 1;
        population.prisoners += 1;
    }
}

export function isGameOver(){
    return other.food <= 0;
}

export function naturalUpdateVariables() {
    other.food = other.food + getFarmersFoodGain() + getFarmersFoodCost() + getCriminalsFoodCost() + getPrisonersFoodCost() + getSoldiersFoodCost() + getScientistsFoodCost();
    other.day++;
}