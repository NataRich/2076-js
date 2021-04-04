'use strict';

import { getActiveOption, registerClickListenerForOptions, registerMouseEnterListenerForControlButtons, setButtons } from "./js/control";
import { generateEvent, fillEventText, registerClickListenerForEventButton } from './js/event';
import { addEventCardTransition } from './js/effect';
import { updatePanelData } from './js/panel';
import { registerClickListenerForPanelTriggerButton } from './js/panel';
import { registerClickListenerForNextDayButton } from './js/lifecycle'

function setup() {
    setButtons(getActiveOption());
    registerMouseEnterListenerForControlButtons();

    registerClickListenerForEventButton();
    registerClickListenerForOptions();
    registerClickListenerForPanelTriggerButton();
    registerClickListenerForNextDayButton();

    updatePanelData();

    fillEventText(generateEvent()) // DELTE THIS
    addEventCardTransition();
}

setup();