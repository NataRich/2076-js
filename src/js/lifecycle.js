'use strict'

import { resetAll, resetPolicyAndResearchCount } from './varibale'
import * as cal from './calFunction';
import { updatePanelData } from './panel';
import { addGameOverTransition, removeEventCardTransition, removeGameOverTransition, removeInfoCardTransition, removePanelTransition, removePanelTriggerButtonTransition } from './effect'
import { randomGenerateEventCard } from './event';
import { updateControlButtonStyle } from './control';

export function registerClickListenerForNextDayButton() {
    var e = document.getElementsByClassName("next-day-btn")[0];
    e.addEventListener("click", () => {
        cal.catchIfShould();
        cal.naturalUpdateVariables();
        resetPolicyAndResearchCount();
        updatePanelData();
        updateControlButtonStyle();
        removeEventCardTransition();
        removeInfoCardTransition();
        if (cal.isGameOver()) {
            addGameOverTransition();
        } else {
            randomGenerateEventCard();
        }
    }, false);
}


export function registerClickListenerForGameRestart() {
    var e = document.getElementsByClassName("game-over-btn")[0];
    e.addEventListener("click", () => {
        resetAll();
        updatePanelData();
        removeGameOverTransition();
    }, false);
}