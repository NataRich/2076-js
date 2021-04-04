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