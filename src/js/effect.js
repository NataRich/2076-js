export function addEventCardTransition() {
    var e = document.getElementsByClassName("event-card")[0];
    if (!e.classList.contains("event-card-show"))
        e.classList.add("event-card-show");
}

export function removeEventCardTransition() {
    var e = document.getElementsByClassName("event-card")[0];
    if (e.classList.contains("event-card-show"))
        e.classList.remove("event-card-show");
}

export function addInfoCardTransition() {
    var e = document.getElementsByClassName("info-card")[0];
    if (!e.classList.contains("info-card-show"))
        e.classList.add("info-card-show");
}

export function removeInfoCardTransition() {
    var e = document.getElementsByClassName("info-card")[0];
    if (e.classList.contains("info-card-show"))
        e.classList.remove("info-card-show");
}

export function addPanelTriggerButtonTransition() {
    var e = document.getElementsByClassName("panel-trigger-btn")[0];
    if (!e.classList.contains("panel-trigger-btn-follow"))
        e.classList.add("panel-trigger-btn-follow");
}

export function removePanelTriggerButtonTransition() {
    var e = document.getElementsByClassName("panel-trigger-btn")[0];
    if (e.classList.contains("panel-trigger-btn-follow"))
        e.classList.remove("panel-trigger-btn-follow");
}

export function addPanelTransition() {
    var e = document.getElementsByClassName("panel")[0];
    if (!e.classList.contains("panel-show"))
        e.classList.add("panel-show");
}

export function removePanelTransition() {
    var e = document.getElementsByClassName("panel")[0];
    if (e.classList.contains("panel-show"))
        e.classList.remove("panel-show");
}

export function addGameOverTransition() {
    var e = document.getElementsByClassName("game-over")[0];
    if (!e.classList.contains("game-over-show"))
        e.classList.add("game-over-show");
}

export function removeGameOverTransition() {
    var e = document.getElementsByClassName("game-over")[0];
    if (e.classList.contains("game-over-show"))
        e.classList.remove("game-over-show");
}

export function addControlButtonTransition(type) {
    var es = document.getElementsByClassName(type);
    for (var i = 0; i < es.length; i++) {
        if (!es[i].classList.contains("ctbn-button-disabled"))
            es[i].classList.add("ctbn-button-disabled");
    }
}

export function removeControlButtonTransition(type) {
    var es = document.getElementsByClassName(type);
    for (var i = 0; i < es.length; i++) {
        if (es[i].classList.contains("ctbn-button-disabled"))
            es[i].classList.remove("ctbn-button-disabled");
    }
}