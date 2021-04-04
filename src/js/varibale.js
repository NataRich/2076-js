//Global variable

const defaulPopulation = {
    farmers : 60,
    criminals : 20,
    prisoners : 0,
    scientists : 0,
    soldiers : 0
}

const defaultFoodGain = {
    farmer: 20
}

const defaultFoodCost = {
    farmer: 10,
    criminal: 20,
    prisoner: 10,
    scientist: 10,
    soldier: 15
}

const defaultOther = {
    food: 2000,
    day: 1,
    tf: 1,
    policyCount: 0,
    researchCount: 0
}


export var population = {
    farmers : 60,
    criminals : 20,
    prisoners : 0,
    scientists : 0,
    soldiers : 0
}

export var foodGain = {
    farmer: 20
}

export var foodCost = {
    farmer: 10,
    criminal: 20,
    prisoner: 10,
    scientist: 10,
    soldier: 15
}

export var other = {
    food: 2000,
    day: 1,
    tf: 1,
    policyCount: 0,
    researchCount: 0
}

export function resetAll() {
    population.criminals = defaulPopulation.criminals;
    population.farmers = defaulPopulation.farmers;
    population.prisoners = defaulPopulation.prisoners;
    population.scientists = defaulPopulation.scientists;
    population.soldiers = defaulPopulation.soldiers;

    foodGain.farmer = defaultFoodGain.farmer;

    foodCost.criminals = defaultFoodCost.criminals;
    foodCost.farmers = defaultFoodCost.farmers;
    foodCost.prisoners = defaultFoodCost.prisoners;
    foodCost.scientists = defaultFoodCost.scientists;
    foodCost.soldiers = defaultFoodCost.soldiers;

    other.policyCount = defaultOther.policyCount;
    other.researchCount = defaultOther.researchCount;
    other.day = defaultOther.day;
    other.food = defaultOther.food;
    other.tf = defaultOther.tf;
}

export function resetPolicyAndResearchCount() {
    other.policyCount = defaultOther.policyCount;
    other.researchCount = defaultOther.researchCount;
}