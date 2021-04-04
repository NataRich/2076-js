const SUBJECTS = ["Fuel Leakage", "Gifts From Future", "Farmer Riots"]

const ACTIONS = [
    {
        type: "Increased", 
        desc: [
            "How cyberpunk! The water nearby was improved after absorbing the fuel!",
            "Amazing! A high-tech machine from future was found by a farmer yesterday in the farm largely increasing the standard of living!",
            "What? Farmers started a riot yesterday but ended up improving our life!"
        ]
    },
    {
        type: "Decreased",
        desc: [
            "Alert! The only water body nearby was contaminated last night due to the leakage of fuels in famers' bionic arms!",
            "Unfortunate! A scrapped machine was misused by farmers as a high-tech reducing the standard of living!",
            "Such a tragedy! Farmers started a riot yesterday! They damaged everything!"
        ]
    }
]

const TARGETS = ["Crop Production", "Technology Level"]



// generate a event with the following format
// {
//     subject: <subject of event>,
//     action: <action type>,
//     desc: <description of event>,
//     target: <result of event>
// }
export function generateEvent() {
    var subjectIndex = Math.floor((Math.random() * 10) % SUBJECTS.length);
    var actionIndex = Math.floor((Math.random() * 10) % ACTIONS.length);
    var targetIndex = Math.floor((Math.random() * 10) % TARGETS.length);

    return {
        subject: SUBJECTS[subjectIndex],
        action: ACTIONS[actionIndex].type,
        desc: ACTIONS[actionIndex].desc[subjectIndex],
        target: ACTIONS[targetIndex]
    }
}