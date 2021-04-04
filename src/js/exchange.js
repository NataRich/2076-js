import { population } from  './variables.js'
import { other } from  './variables.js'

export function exchangeFarmer(){
    if (other.count <= 3){
        population.farmers--;
        population.soldiers++;
        other.count++;
        console.log(population.farmers) // *delete if needed 
        console.log(population.soldiers) //*delete if needed
    }
}

function soldierstoFarmer(){
    if (other.count <= 3){
        population.farmers++;
        population.soldiers--;
        other.countt++;
        console.log(population.farmer) // *delete if needed 
        console.log(population.soldiers) //*delete if needed
    }
}

console.log(exchangeFarmer()) //*delete if needed
console.log(soldierstoFarmer()) //*delete if needed