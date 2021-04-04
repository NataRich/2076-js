import { specialEventChangeCropProduction, specialEventChangeTechFactor } from "./calFunction";
import { addEventCardTransition, removeEventCardTransition } from "./effect"
import { updatePanelData } from "./panel";

const SUBJECTS = ["Fuel Leakage", "Gifts From Future", "Farmer Riots"]

const ACTIONS = [
    {
        type: "Increased", 
        desc: [
            "How cyberpunk! The water nearby was improved after absorbing the fuel!",
            "Amazing! A high-tech machine from future was found by a farmer yesterday in the farm largely increasing the standard of living!",
            "What? Farmers started a riot yesterday but ended up improving our life!"
        ],
        effect: [
            [5, 0.1],
            [8, 0.3],
            [3, 0.1]
        ]
    },
    {
        type: "Decreased",
        desc: [
            "Alert! The only water body nearby was contaminated last night due to the leakage of fuels in famers' bionic arms!",
            "Unfortunate! A scrapped machine was misused by farmers as a high-tech reducing the standard of living!",
            "Such a tragedy! Farmers started a riot yesterday! They damaged everything!"
        ],
        effect: [
            [-5, -0.1],
            [-8, -0.3],
            [-3, -0.1]
        ]
    }
]

const TARGETS = ["Crop Production", "Technology Level"]

function generateEvent() {
    var subjectIndex = Math.floor((Math.random() * 10) % SUBJECTS.length);
    var actionIndex = Math.floor((Math.random() * 10) % ACTIONS.length);
    var targetIndex = Math.floor((Math.random() * 10) % TARGETS.length);

    return {
        subject: SUBJECTS[subjectIndex],
        action: ACTIONS[actionIndex].type,
        desc: ACTIONS[actionIndex].desc[subjectIndex],
        effect: ACTIONS[actionIndex].effect[subjectIndex][targetIndex],
        target: TARGETS[targetIndex]
    }
}

function fillEventText(option) {
    document.getElementsByClassName("subject")[0].innerText = option.subject;
    document.getElementsByClassName("desc")[0].innerText = option.desc;
    document.getElementsByClassName("result")[0].innerText = (option.target + " " + option.action + " by " + option.effect + ".").replace("-", "");
}

export function randomGenerateEventCard() {
    var res = Math.floor(Math.random() * 10);
    if (res === 1 || res === 2) {
        fillEventText(generateEvent());
        addEventCardTransition();
    }
}

export function registerClickListenerForEventButton() {
    var ebtn = document.getElementsByClassName("event-btn")[0];
    ebtn.addEventListener("click", () => {
        var strGroup = document.getElementsByClassName("result")[0].innerText.split(" ");
        var diff = Number.parseFloat(strGroup[strGroup.length - 1]);
        diff = strGroup[strGroup.length - 2] === "Increased" ? diff : -diff;
        if ((diff > 0 && diff < 1) || (diff < 0 && diff > -1)) { // tech level
            specialEventChangeTechFactor(diff);
        } else { // crop production
            specialEventChangeCropProduction(diff);
        }
        removeEventCardTransition();
        updatePanelData();
    }, false);
}