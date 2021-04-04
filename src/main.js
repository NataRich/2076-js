'use strict';

import { getActiveOption, registerClickListenerForOptions, registerMouseEnterListenerForControlButtons, registerClickListenerForControlButtons, setButtons } from "./js/control";
import { registerClickListenerForEventButton } from './js/event';
import { updatePanelData } from './js/panel';
import { registerClickListenerForPanelTriggerButton } from './js/panel';
import { registerClickListenerForNextDayButton, registerClickListenerForGameRestart } from './js/lifecycle';

function setup() {
    setButtons(getActiveOption());
    registerMouseEnterListenerForControlButtons();
    registerClickListenerForControlButtons();

    registerClickListenerForEventButton();
    registerClickListenerForOptions();
    registerClickListenerForPanelTriggerButton();
    registerClickListenerForNextDayButton();
    registerClickListenerForGameRestart();

    updatePanelData();
}

setup();