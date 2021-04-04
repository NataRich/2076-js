const OPTIONS = {
    policies: {
        count: 5,
        options: ["Education Promotion", "Long-hour Farming", "Military Recruitment", "Military Retirement", "Scientist Retirement"]
    },
    research: {
        count: 3,
        options: ["Water", "Land", "Crops"]
    }
}

function getOption(str) {
    return str === "Policies" ? OPTIONS.policies : OPTIONS.research;

}


export function setButtons(option) {
    var buttons = document.getElementsByClassName("buttons")[0];
    buttons.innerHTML = ""; // clear 
    for (var i = 0; i < option.count; i++) {
        var node = document.createElement("div");
        node.innerText = option.options[i];
        node.className = "btn"
        buttons.appendChild(node);
    }
}

export function getActiveOption() {
    var opts = document.getElementsByClassName("opt");
    for (var i = 0; i < opts.length; i++) {
        if (opts[i].classList.contains("active"))
            return getOption(opts[i].innerText);
    }
    return null;
}