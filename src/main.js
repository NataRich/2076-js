'use strict';

// below for demonstration only

// register listeners
var opts = document.getElementsByClassName("opt");
for (var i = 0; i < opts.length; i++) {
    opts[i].addEventListener("click", chooseOption, false);
}

var panel = document.getElementsByClassName("panel")[0];
panel.addEventListener("click", togglePanel, false);

// event handlers
function togglePanel(e) {
    if (e.currentTarget.style.height === "10px") e.currentTarget.style.height = "40%";
    else e.currentTarget.style.height  = "10px";
}

function chooseOption(e) {
    // choose an option
    var opts = document.getElementsByClassName("opt");
    for (var i = 0; i < opts.length; i++) {
        opts[i].className = "opt"
    }
    e.currentTarget.className = "opt active"
    
    // set buttons
    var n = e.currentTarget.innerText === "Policies" ? 5 : 3;
    var buttons = document.getElementsByClassName("buttons")[0];
    buttons.innerHTML = ""; // clear 
    for (var i = 0; i < n; i++) {
        var node = document.createElement("div");
        node.innerText = "Button";
        node.className = "btn"
        buttons.appendChild(node);
    }
}
