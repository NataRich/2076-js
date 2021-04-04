import { addInfoCardTransition, removeInfoCardTransition } from "./effect";

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

const BUTTON_INFO = [
    // Policies
    {
        name: "Education Promotion",
        desc: "Promotes education among farmers and transform them to scientists."
    },
    {
        name: "Long-hour Farming",
        desc: "Enforces farmers to work for extra hours to harvest more crops."
    },
    {
        name: "Military Recruitment",
        desc: "Recruits more soldiers among farmers."
    },
    {
        name: "Military Retirement",
        desc: "Asks some soldiers to retire, so they turn back to farmers."
    },
    {
        name: "Scientist Retirement",
        desc: "Asks some scientists to retire, so they turn back to farmers."
    },

    // Research
    {
        name: "Water",
        desc: "Asks scientists to study how to improve water quality."
    },
    {
        name: "Land",
        desc: "Asks scientists to study how to improve land quality."
    },
    {
        name: "Crops",
        desc: "Asks scientists to study how to increase crop production."
    },
]

function getOption(str) {
    return str === "Policies" ? OPTIONS.policies : OPTIONS.research;

}

export function setButtons(option) {
    var buttons = document.getElementsByClassName("buttons")[0];
    buttons.innerHTML = ""; // clear 
    for (var i = 0; i < option.count; i++) {
        var node = document.createElement("div");
        node.innerText = option.options[i];
        node.className = "cbtn"
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

export function getControlButtonInfo(btn) {
    for (var i = 0; i < BUTTON_INFO.length; i++) {
        if (btn.innerText === BUTTON_INFO[i].name)
            return BUTTON_INFO[i];
    }
    return null;
}

export function fillControlButtonInfo(info) {
    document.getElementsByClassName("info-name")[0].innerText = info.name;
    document.getElementsByClassName("info-desc")[0].innerText = info.desc;
}

export function registerClickListenerForOptions() {
    var opts = document.getElementsByClassName("opt");
    for (var i = 0; i < opts.length; i++) {
        opts[i].addEventListener("click", e => {
            var opts = document.getElementsByClassName("opt");
            for (var i = 0; i < opts.length; i++) {
                opts[i].className = "opt"
            }
            e.currentTarget.className = "opt active"
    
            // set buttons
            setButtons(getActiveOption())

            // register listeners for newly added buttons
            registerMouseEnterListenerForControlButtons();
        }, false);
    }
}

export function registerMouseEnterListenerForControlButtons() {
    var cbtns = document.getElementsByClassName("cbtn");
    for (var i = 0; i < cbtns.length; i++) {
        cbtns[i].addEventListener("mouseenter", e => {
            fillControlButtonInfo(getControlButtonInfo(e.currentTarget));
            addInfoCardTransition();
        }, false);
        
        cbtns[i].addEventListener("mouseleave", e => {
            removeInfoCardTransition();
        }, false)
    }
}