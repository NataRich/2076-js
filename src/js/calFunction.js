class population{
    constructor(){
        //population of each
        this.farmerPop = 60;
        this.criminalPop = 20;
        this.soldierPop = 20;
        this.scientistPop = 20;
    }
}

class foodCost{
    constructor(){
        //food cost  abs. fc
        this.farmer_fc = 10;
        this.criminal_fc = 20;
        this.soldier_fc = 20;
        this.scientist_fc = 20;
    }
}

class other{
    constructor(){
        //day, tf,
        this.day = 0;
        this.tf = 1;
    }
}

const samplePop = new population();
const sampleFC = new foodCost();
const o = new other();

// net output of farmers' food in total
function getFarmerFood(){
    return (10 * o.tf *samplePop.farmerPop - 2 * o.day);
}

const farmerFood = getFarmerFood();

console.log(farmerFood)