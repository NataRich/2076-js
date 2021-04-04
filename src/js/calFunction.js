//inital food when games starts
var initalfood = 2000;

class population{
    constructor(){
        //population of each
        this.farmerPop = 60;
        this.criminalPop = 20;
        this.soldierPop = 5;
        this.scientistPop = 5;
        this.underpop =5; // **this is speical condition**
    }
}

class foodCost{
    constructor(){
        //food cost  abs. fc
        this.farmer_fc = 10;
        this.criminal_fc = 20;
        this.soldier_fc = 15;
        this.scientist_fc = 10;
        this.underarrestCri = 10; // **this is speical condition**
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

// *net* output of farmers' food in total
function getFarmerFood(){
    return (10 * o.tf *samplePop.farmerPop - 2 * o.day);
}

// get food consumed by criminals & underarrest criminals
function getCriFood(){
    return (samplePop.criminalPop*sampleFC.criminal_fc + samplePop.underpop*sampleFC.underarrestCri +2 * o.day);
}

// get food consumed by scientists
function getSciFood(){
    return (samplePop.scientistPop * sampleFC.scientist_fc);
}

// get food consumed by soldiers
function getSolFood(){
    return (samplePop.soldierPop * sampleFC.soldier_fc);
}

// tf gained from task1, tf += 0.5 - 0.8 with 0.2 * mdrf
function task1(){
    let successrate = Math.random(10)/10 * 0.2; 
    return (successrate > 1) ? Math.random() : 0;
}

// tf gained from task2, tf += 0.3 - 0.5 with 0.4 * mdrf
function task2(){
    let successrate = Math.random(10)/10 * 0.4; 
    return (successrate > 1) ? Math.random() : 0;
}

// tf gained from task3, tf += 0.2 - 0.3 with 0.6 * mdrf
function task3(){
    let successrate = Math.random(10)/10 * 0.6; 
    return (successrate > 1) ? Math.random() : 0;
}

/* return the rate of a criminal transforming to 
 a underarrest criminal (call this function each day once)*/
function soldierRate(){
    let rate = Math.random(10)/10 * 0.8;
    return rate;
}

/* final step to aggregated all food product and consumption
will return a positive or negative number*/
function foodleft(){
    let total = initalfood + getFarmerFood() - getCriFood() - getSciFood() - getSolFood();
    return total;
}


console.log(getFarmerFood())
console.log(getCriFood())
console.log(getSciFood())
console.log(getSolFood())
console.log(task1())
console.log(task2())
console.log(task3())
console.log(foodleft())