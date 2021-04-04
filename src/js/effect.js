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
    if (!e.classList.contains("panel-trigger-btn-hide"))
        e.classList.add("panel-trigger-btn-hide");
}

export function removePanelTriggerButtonTransition() {
    var e = document.getElementsByClassName("panel-trigger-btn")[0];
    if (e.classList.contains("panel-trigger-btn-hide"))
        e.classList.remove("panel-trigger-btn-hide");
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