'use strict'

import { population, other } from './varibale';
import { updatePanelData } from './panel';

export function registerClickListenerForNextDayButton() {
    var e = document.getElementsByClassName("next-day-btn")[0];
    e.addEventListener("click", () => {
        other.day += 1;
        updatePanelData();
    }, false);
}