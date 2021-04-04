'use strict';

import { getActiveOption, registerClickListenerForOptions, registerMouseEnterListenerForControlButtons, setButtons } from "./js/control";
import { generateEvent, fillEventText, registerClickListenerForEventButton } from './js/event'
import { addEventCardTransition } from './js/effect'
import { changeDataColor } from './js/panel'


function setup() {
    setButtons(getActiveOption());
    registerMouseEnterListenerForControlButtons();

    registerClickListenerForEventButton();
    registerClickListenerForOptions();

    changeDataColor();

    fillEventText(generateEvent()) // DELTE THIS
    addEventCardTransition();
}

setup();

// register listeners


var panel = document.getElementsByClassName("panel")[0];
panel.addEventListener("click", togglePanel, false);


// event handlers
// for data panel
function togglePanel(e) {
    if (e.currentTarget.style.height === "10px") e.currentTarget.style.height = "40%";
    else e.currentTarget.style.height  = "10px";
}