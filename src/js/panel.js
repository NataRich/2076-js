'use strict'

import { addPanelTransition, removePanelTransition, addPanelTriggerButtonTransition, removePanelTriggerButtonTransition } from './effect'
import { population, other } from './varibale';
import * as cal from './calFunction';

export function registerClickListenerForPanelTriggerButton() {
    var btn = document.getElementsByClassName("panel-trigger-btn")[0];
    btn.addEventListener("click", () => {
        updatePanelData();
        if (btn.innerText === "Statistics") {
            btn.innerText = "Close";
            addPanelTriggerButtonTransition();
            addPanelTransition();
        } else {
            btn.innerText = "Statistics";
            removePanelTriggerButtonTransition();
            removePanelTransition();
        }
    }, false);
}

function parseString(str) {
    var number = Number.parseInt(str, 10);
    if (isNaN(number)) {
        number = Number.parseInt(str.substring(1, str.length - 1).replace("+", ""), 10);
    }
    return isNaN(number) ? 0 : number;
}

function representAsString(num) {
    return num >= 0 ? "+" + num : num;
}

function isNegativeNumber(str) {
    return parseString(str) < 0;
}

function updatePanelDataColor() {
    var data = document.getElementsByClassName("delta");
    for (var i = 0; i < data.length; i++) {
        data[i].style.color = isNegativeNumber(data[i].innerText) ? "red" : "green";
    }
}

export function updatePanelData() {
    var var1 = document.getElementsByClassName("farmer-pop-data")[0];
    var1.innerText = population.farmers;
    var var2 = document.getElementsByClassName("farmer-pop-change-data")[0];
    var2.innerText = "[" + representAsString(population.farmers - parseString(var1.innerText)) + "]";

    var var3 = document.getElementsByClassName("criminal-pop-data")[0];
    var3.innerText = population.criminals;
    var var4 = document.getElementsByClassName("criminal-pop-change-data")[0];
    var4.innerText = "[" + representAsString(population.criminals - parseString(var3.innerText)) + "]";

    var var5 = document.getElementsByClassName("prisoner-pop-data")[0];
    var5.innerText = population.prisoners;
    var var6 = document.getElementsByClassName("prisoner-pop-change-data")[0];
    var6.innerText = "[" + representAsString(population.prisoners - parseString(var5.innerText)) + "]";

    var var7 = document.getElementsByClassName("soldier-pop-data")[0];
    var7.innerText = population.soldiers;
    var var8 = document.getElementsByClassName("soldier-pop-change-data")[0];
    var8.innerText = "[" + representAsString(population.soldiers - parseString(var7.innerText)) + "]";

    var var9 = document.getElementsByClassName("scientist-pop-data")[0];
    var9.innerText = population.scientists;
    var var10 = document.getElementsByClassName("scientist-pop-change-data")[0];
    var10.innerText = "[" + representAsString(population.scientists - parseString(var9.innerText)) + "]";



    var var101 = document.getElementsByClassName("food-data")[0];
    var101.innerText = other.food;

    var var102 = document.getElementsByClassName("tech-fc")[0];
    var102.innerText = Math.floor(other.tf * 10) / 10;

    var var11 = document.getElementsByClassName("survival-day-data")[0];
    var11.innerText = other.day;



    var var111 = document.getElementsByClassName("farmer-food-gain-data")[0];
    var111.innerText = "[" + representAsString(cal.getFarmersFoodGain()) + "]";

    var var12 = document.getElementsByClassName("farmer-food-cost-data")[0];
    var12.innerText = "[" + representAsString(cal.getFarmersFoodCost()) + "]";

    var var13 = document.getElementsByClassName("criminal-food-change-data")[0];
    var13.innerText = "[" + representAsString(cal.getCriminalsFoodCost()) + "]";

    var var14 = document.getElementsByClassName("prisoner-food-change-data")[0];
    var14.innerText = "[" + representAsString(cal.getPrisonersFoodCost()) + "]";

    var var15 = document.getElementsByClassName("soldier-food-change-data")[0];
    var15.innerText = "[" + representAsString(cal.getSoldiersFoodCost()) + "]";

    var var16 = document.getElementsByClassName("scientist-food-change-data")[0];
    var16.innerText = "[" + representAsString(cal.getScientistsFoodCost()) + "]";

    updatePanelDataColor();
}