'use strict'

export const HELLO = 1;


function isNegativeNumber(str) {
    var number = Number.parseInt(str, 10);
    if (isNaN(number)) {
        number = Number.parseInt(str.substring(1, str.length - 1).replace("+", ""), 10);
    }

    return number < 0;
}

export function changeDataColor() {
    var data = document.getElementsByClassName("delta");
    for (var i = 0; i < data.length; i++) {
        data[i].style.color = isNegativeNumber(data[i].innerText) ? "red" : "green";
    }
}