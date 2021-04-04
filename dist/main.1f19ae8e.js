// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/varibale.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetAll = resetAll;
exports.resetPolicyAndResearchCount = resetPolicyAndResearchCount;
exports.other = exports.foodCost = exports.foodGain = exports.population = void 0;
//Global variable
var defaulPopulation = {
  farmers: 60,
  criminals: 20,
  prisoners: 0,
  scientists: 0,
  soldiers: 0
};
var defaultFoodGain = {
  farmer: 20
};
var defaultFoodCost = {
  farmer: 10,
  criminal: 20,
  prisoner: 10,
  scientist: 10,
  soldier: 15
};
var defaultOther = {
  food: 2000,
  day: 1,
  tf: 1,
  policyCount: 0,
  researchCount: 0
};
var population = {
  farmers: 60,
  criminals: 20,
  prisoners: 0,
  scientists: 0,
  soldiers: 0
};
exports.population = population;
var foodGain = {
  farmer: 20
};
exports.foodGain = foodGain;
var foodCost = {
  farmer: 10,
  criminal: 20,
  prisoner: 10,
  scientist: 10,
  soldier: 15
};
exports.foodCost = foodCost;
var other = {
  food: 2000,
  day: 1,
  tf: 1,
  policyCount: 0,
  researchCount: 0
};
exports.other = other;

function resetAll() {
  population.criminals = defaulPopulation.criminals;
  population.farmers = defaulPopulation.farmers;
  population.prisoners = defaulPopulation.prisoners;
  population.scientists = defaulPopulation.scientists;
  population.soldiers = defaulPopulation.soldiers;
  foodGain.farmer = defaultFoodGain.farmer;
  foodCost.criminals = defaultFoodCost.criminals;
  foodCost.farmers = defaultFoodCost.farmers;
  foodCost.prisoners = defaultFoodCost.prisoners;
  foodCost.scientists = defaultFoodCost.scientists;
  foodCost.soldiers = defaultFoodCost.soldiers;
  other.policyCount = defaultOther.policyCount;
  other.researchCount = defaultOther.researchCount;
  other.day = defaultOther.day;
  other.food = defaultOther.food;
  other.tf = defaultOther.tf;
}

function resetPolicyAndResearchCount() {
  other.policyCount = defaultOther.policyCount;
  other.researchCount = defaultOther.researchCount;
}
},{}],"js/calFunction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFarmersFoodGain = getFarmersFoodGain;
exports.getFarmersFoodCost = getFarmersFoodCost;
exports.getCriminalsFoodCost = getCriminalsFoodCost;
exports.getPrisonersFoodCost = getPrisonersFoodCost;
exports.getScientistsFoodCost = getScientistsFoodCost;
exports.getSoldiersFoodCost = getSoldiersFoodCost;
exports.waterResearch = waterResearch;
exports.landResearch = landResearch;
exports.cropResearch = cropResearch;
exports.canResearch = canResearch;
exports.canEnforcePolicy = canEnforcePolicy;
exports.eduPromotion = eduPromotion;
exports.scientistRetirement = scientistRetirement;
exports.longHourFarming = longHourFarming;
exports.militaryRecruitment = militaryRecruitment;
exports.militaryRetirement = militaryRetirement;
exports.catchIfShould = catchIfShould;
exports.specialEventChangeTechFactor = specialEventChangeTechFactor;
exports.specialEventChangeCropProduction = specialEventChangeCropProduction;
exports.isGameOver = isGameOver;
exports.naturalUpdateVariables = naturalUpdateVariables;

var _varibale = require("./varibale");

//  get food produced by farmers
function getFarmersFoodGain() {
  return _varibale.foodGain.farmer * _varibale.other.tf * _varibale.population.farmers;
} // get food consumed by farmers


function getFarmersFoodCost() {
  return -1 * _varibale.population.farmers * (_varibale.foodCost.farmer + 2 * (_varibale.other.day - 1));
} // get food consumed by criminals


function getCriminalsFoodCost() {
  return -1 * _varibale.population.criminals * (_varibale.foodCost.criminal + 2 * (_varibale.other.day - 1));
} // get food consumed by prisoners


function getPrisonersFoodCost() {
  return -1 * _varibale.population.prisoners * (_varibale.foodCost.prisoner + 2 * (_varibale.other.day - 1));
} // get food consumed by scientists


function getScientistsFoodCost() {
  return -1 * _varibale.population.scientists * (_varibale.foodCost.prisoner + 2 * (_varibale.other.day - 1));
} // get food consumed by soldiers


function getSoldiersFoodCost() {
  return -1 * _varibale.population.soldiers * (_varibale.foodCost.soldier + 2 * (_varibale.other.day - 1));
} // tf gained from waterResearch, tf += 0.5 - 0.8 with 0.2 * mdrf


function waterResearch() {
  var possibility1 = [0.5, 0.55, 0.7, 0.75];
  var successrate = (0.3 * _varibale.population.scientists - 0.006 * _varibale.population.scientists ^ 2) * 0.2;
  _varibale.other.tf += successrate > 1 ? possibility1[Math.floor(Math.random() * 10) % possibility3.length] : 0;
  _varibale.other.researchCount += 1;
} // tf gained from landResearch, tf += 0.3 - 0.5 with 0.4 * mdrf


function landResearch() {
  var possibility2 = [0.25, 0.4, 0.5];
  var successrate = (0.3 * _varibale.population.scientists - 0.006 * _varibale.population.scientists ^ 2) * 0.34;
  _varibale.other.tf += successrate > 1 ? possibility2[Math.floor(Math.random() * 10) % possibility2.length] : 0;
  _varibale.other.researchCount += 1;
} // tf gained from cropResearch, tf += 0.2 - 0.3 with 0.6 * mdrf


function cropResearch() {
  var possibility3 = [0.2, 0.25];
  var successrate = (0.3 * _varibale.population.scientists - 0.006 * _varibale.population.scientists ^ 2) * 0.6;
  _varibale.other.tf += successrate > 1 ? possibility3[Math.floor(Math.random() * 10) % possibility3.length] : 0;
  _varibale.other.researchCount += 1;
}

function canResearch() {
  return _varibale.other.researchCount == 0;
}

function canEnforcePolicy() {
  return _varibale.other.policyCount == 0;
}

function eduPromotion() {
  var diff = Math.floor(_varibale.population.farmers * 0.1);
  _varibale.population.farmers -= diff;
  _varibale.population.scientists += diff;
  _varibale.other.policyCount += 1;
}

function scientistRetirement() {
  var diff = Math.floor(_varibale.population.scientists * 0.1);
  _varibale.population.scientists -= diff;
  _varibale.population.farmers += diff;
  _varibale.other.policyCount += 1;
}

function longHourFarming() {
  _varibale.foodGain.farmer += 5;
  _varibale.other.policyCount += 1;
}

function militaryRecruitment() {
  var diff = Math.floor(_varibale.population.farmers * 0.1);
  _varibale.population.farmers -= diff;
  _varibale.population.soldiers += diff;
  _varibale.other.policyCount += 1;
}

function militaryRetirement() {
  var diff = Math.floor(_varibale.population.soldiers * 0.1);
  _varibale.population.soldiers -= diff;
  _varibale.population.farmers += diff;
  _varibale.other.policyCount += 1;
}

function catchIfShould() {
  if (_varibale.other.day % 2 == 0) {
    _varibale.population.criminals -= 1;
    _varibale.population.prisoners += 1;
  }
}

function specialEventChangeTechFactor(amount) {
  _varibale.other.tf += amount;
}

function specialEventChangeCropProduction(amount) {
  _varibale.foodGain.farmer += amount;
}

function isGameOver() {
  return _varibale.other.food <= 0;
}

function naturalUpdateVariables() {
  _varibale.other.food = _varibale.other.food + getFarmersFoodGain() + getFarmersFoodCost() + getCriminalsFoodCost() + getPrisonersFoodCost() + getSoldiersFoodCost() + getScientistsFoodCost();
  _varibale.other.day++;
}
},{"./varibale":"js/varibale.js"}],"js/effect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEventCardTransition = addEventCardTransition;
exports.removeEventCardTransition = removeEventCardTransition;
exports.addInfoCardTransition = addInfoCardTransition;
exports.removeInfoCardTransition = removeInfoCardTransition;
exports.addPanelTriggerButtonTransition = addPanelTriggerButtonTransition;
exports.removePanelTriggerButtonTransition = removePanelTriggerButtonTransition;
exports.addPanelTransition = addPanelTransition;
exports.removePanelTransition = removePanelTransition;
exports.addGameOverTransition = addGameOverTransition;
exports.removeGameOverTransition = removeGameOverTransition;
exports.addControlButtonTransition = addControlButtonTransition;
exports.removeControlButtonTransition = removeControlButtonTransition;

function addEventCardTransition() {
  var e = document.getElementsByClassName("event-card")[0];
  if (!e.classList.contains("event-card-show")) e.classList.add("event-card-show");
}

function removeEventCardTransition() {
  var e = document.getElementsByClassName("event-card")[0];
  if (e.classList.contains("event-card-show")) e.classList.remove("event-card-show");
}

function addInfoCardTransition() {
  var e = document.getElementsByClassName("info-card")[0];
  if (!e.classList.contains("info-card-show")) e.classList.add("info-card-show");
}

function removeInfoCardTransition() {
  var e = document.getElementsByClassName("info-card")[0];
  if (e.classList.contains("info-card-show")) e.classList.remove("info-card-show");
}

function addPanelTriggerButtonTransition() {
  var e = document.getElementsByClassName("panel-trigger-btn")[0];
  if (!e.classList.contains("panel-trigger-btn-follow")) e.classList.add("panel-trigger-btn-follow");
}

function removePanelTriggerButtonTransition() {
  var e = document.getElementsByClassName("panel-trigger-btn")[0];
  if (e.classList.contains("panel-trigger-btn-follow")) e.classList.remove("panel-trigger-btn-follow");
}

function addPanelTransition() {
  var e = document.getElementsByClassName("panel")[0];
  if (!e.classList.contains("panel-show")) e.classList.add("panel-show");
}

function removePanelTransition() {
  var e = document.getElementsByClassName("panel")[0];
  if (e.classList.contains("panel-show")) e.classList.remove("panel-show");
}

function addGameOverTransition() {
  var e = document.getElementsByClassName("game-over")[0];
  if (!e.classList.contains("game-over-show")) e.classList.add("game-over-show");
}

function removeGameOverTransition() {
  var e = document.getElementsByClassName("game-over")[0];
  if (e.classList.contains("game-over-show")) e.classList.remove("game-over-show");
}

function addControlButtonTransition(type) {
  var es = document.getElementsByClassName(type);

  for (var i = 0; i < es.length; i++) {
    if (!es[i].classList.contains("ctbn-button-disabled")) es[i].classList.add("ctbn-button-disabled");
  }
}

function removeControlButtonTransition(type) {
  var es = document.getElementsByClassName(type);

  for (var i = 0; i < es.length; i++) {
    if (es[i].classList.contains("ctbn-button-disabled")) es[i].classList.remove("ctbn-button-disabled");
  }
}
},{}],"js/panel.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerClickListenerForPanelTriggerButton = registerClickListenerForPanelTriggerButton;
exports.updatePanelData = updatePanelData;

var _effect = require("./effect");

var _varibale = require("./varibale");

var cal = _interopRequireWildcard(require("./calFunction"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function registerClickListenerForPanelTriggerButton() {
  var btn = document.getElementsByClassName("panel-trigger-btn")[0];
  btn.addEventListener("click", function () {
    updatePanelData();

    if (btn.innerText === "Statistics") {
      btn.innerText = "Close";
      (0, _effect.addPanelTriggerButtonTransition)();
      (0, _effect.addPanelTransition)();
    } else {
      btn.innerText = "Statistics";
      (0, _effect.removePanelTriggerButtonTransition)();
      (0, _effect.removePanelTransition)();
    }
  }, false);
}

function parseString(str) {
  var number = Number.parseInt(str, 10);

  if (isNaN(number)) {
    number = Number.parseInt(str.substring(1, str.length - 1).replace("+", ""), 10);
  }

  return isNaN(number) ? 0 : number;
}

function representAsString(num) {
  return num >= 0 ? "+" + num : num;
}

function isNegativeNumber(str) {
  return parseString(str) < 0;
}

function updatePanelDataColor() {
  var data = document.getElementsByClassName("delta");

  for (var i = 0; i < data.length; i++) {
    data[i].style.color = isNegativeNumber(data[i].innerText) ? "red" : "green";
  }
}

function updatePanelData() {
  var var1 = document.getElementsByClassName("farmer-pop-data")[0];
  var1.innerText = _varibale.population.farmers;
  var var2 = document.getElementsByClassName("farmer-pop-change-data")[0];
  var2.innerText = "[" + representAsString(_varibale.population.farmers - parseString(var1.innerText)) + "]";
  var var3 = document.getElementsByClassName("criminal-pop-data")[0];
  var3.innerText = _varibale.population.criminals;
  var var4 = document.getElementsByClassName("criminal-pop-change-data")[0];
  var4.innerText = "[" + representAsString(_varibale.population.criminals - parseString(var3.innerText)) + "]";
  var var5 = document.getElementsByClassName("prisoner-pop-data")[0];
  var5.innerText = _varibale.population.prisoners;
  var var6 = document.getElementsByClassName("prisoner-pop-change-data")[0];
  var6.innerText = "[" + representAsString(_varibale.population.prisoners - parseString(var5.innerText)) + "]";
  var var7 = document.getElementsByClassName("soldier-pop-data")[0];
  var7.innerText = _varibale.population.soldiers;
  var var8 = document.getElementsByClassName("soldier-pop-change-data")[0];
  var8.innerText = "[" + representAsString(_varibale.population.soldiers - parseString(var7.innerText)) + "]";
  var var9 = document.getElementsByClassName("scientist-pop-data")[0];
  var9.innerText = _varibale.population.scientists;
  var var10 = document.getElementsByClassName("scientist-pop-change-data")[0];
  var10.innerText = "[" + representAsString(_varibale.population.scientists - parseString(var9.innerText)) + "]";
  var var101 = document.getElementsByClassName("food-data")[0];
  var101.innerText = _varibale.other.food;
  var var102 = document.getElementsByClassName("tech-fc")[0];
  var102.innerText = _varibale.other.tf;
  var var11 = document.getElementsByClassName("survival-day-data")[0];
  var11.innerText = _varibale.other.day;
  var var111 = document.getElementsByClassName("farmer-food-gain-data")[0];
  var111.innerText = "[" + representAsString(cal.getFarmersFoodGain()) + "]";
  var var12 = document.getElementsByClassName("farmer-food-cost-data")[0];
  var12.innerText = "[" + representAsString(cal.getFarmersFoodCost()) + "]";
  var var13 = document.getElementsByClassName("criminal-food-change-data")[0];
  var13.innerText = "[" + representAsString(cal.getCriminalsFoodCost()) + "]";
  var var14 = document.getElementsByClassName("prisoner-food-change-data")[0];
  var14.innerText = "[" + representAsString(cal.getPrisonersFoodCost()) + "]";
  var var15 = document.getElementsByClassName("soldier-food-change-data")[0];
  var15.innerText = "[" + representAsString(cal.getSoldiersFoodCost()) + "]";
  var var16 = document.getElementsByClassName("scientist-food-change-data")[0];
  var16.innerText = "[" + representAsString(cal.getScientistsFoodCost()) + "]";
  updatePanelDataColor();
}
},{"./effect":"js/effect.js","./varibale":"js/varibale.js","./calFunction":"js/calFunction.js"}],"js/control.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setButtons = setButtons;
exports.getActiveOption = getActiveOption;
exports.getControlButtonInfo = getControlButtonInfo;
exports.fillControlButtonInfo = fillControlButtonInfo;
exports.registerClickListenerForOptions = registerClickListenerForOptions;
exports.registerMouseEnterListenerForControlButtons = registerMouseEnterListenerForControlButtons;
exports.updateControlButtonStyle = updateControlButtonStyle;
exports.registerClickListenerForControlButtons = registerClickListenerForControlButtons;

var _calFunction = require("./calFunction");

var _effect = require("./effect");

var _panel = require("./panel");

var OPTIONS = {
  policies: {
    count: 5,
    options: ["Education Promotion", "Long-hour Farming", "Military Recruitment", "Military Retirement", "Scientist Retirement"]
  },
  research: {
    count: 3,
    options: ["Water", "Land", "Crops"]
  }
};
var BUTTON_INFO = [// Policies
{
  name: "Education Promotion",
  desc: "Promotes education among farmers and transform them to scientists."
}, {
  name: "Long-hour Farming",
  desc: "Enforces farmers to work for extra hours to harvest more crops."
}, {
  name: "Military Recruitment",
  desc: "Recruits more soldiers among farmers."
}, {
  name: "Military Retirement",
  desc: "Asks some soldiers to retire, so they turn back to farmers."
}, {
  name: "Scientist Retirement",
  desc: "Asks some scientists to retire, so they turn back to farmers."
}, // Research
{
  name: "Water",
  desc: "Asks scientists to study how to improve water quality."
}, {
  name: "Land",
  desc: "Asks scientists to study how to improve land quality."
}, {
  name: "Crops",
  desc: "Asks scientists to study how to increase crop production."
}];

function getOption(str) {
  return str === "Policies" ? OPTIONS.policies : OPTIONS.research;
}

function setButtons(option) {
  var buttons = document.getElementsByClassName("buttons")[0];
  buttons.innerHTML = ""; // clear 

  for (var i = 0; i < option.count; i++) {
    var node = document.createElement("div");
    node.innerText = option.options[i];
    node.className = "cbtn " + (OPTIONS.policies.options.includes(option.options[i]) ? "Policies" : "Research");
    buttons.appendChild(node);
  }
}

function getActiveOption() {
  var opts = document.getElementsByClassName("opt");

  for (var i = 0; i < opts.length; i++) {
    if (opts[i].classList.contains("active")) return getOption(opts[i].innerText);
  }

  return null;
}

function getControlButtonInfo(btn) {
  for (var i = 0; i < BUTTON_INFO.length; i++) {
    if (btn.innerText === BUTTON_INFO[i].name) return BUTTON_INFO[i];
  }

  return null;
}

function fillControlButtonInfo(info) {
  document.getElementsByClassName("info-name")[0].innerText = info.name;
  document.getElementsByClassName("info-desc")[0].innerText = info.desc;
}

function registerClickListenerForOptions() {
  var opts = document.getElementsByClassName("opt");

  for (var i = 0; i < opts.length; i++) {
    opts[i].addEventListener("click", function (e) {
      var opts = document.getElementsByClassName("opt");

      for (var i = 0; i < opts.length; i++) {
        opts[i].className = "opt";
      }

      e.currentTarget.className = "opt active "; // set buttons

      setButtons(getActiveOption()); // register listeners for newly added buttons

      registerMouseEnterListenerForControlButtons();
      registerClickListenerForControlButtons();
      updateControlButtonStyle();
    }, false);
  }
}

function registerMouseEnterListenerForControlButtons() {
  var cbtns = document.getElementsByClassName("cbtn");

  for (var i = 0; i < cbtns.length; i++) {
    cbtns[i].addEventListener("mouseenter", function (e) {
      fillControlButtonInfo(getControlButtonInfo(e.currentTarget));
      (0, _effect.addInfoCardTransition)();
    }, false);
    cbtns[i].addEventListener("mouseleave", function (e) {
      (0, _effect.removeInfoCardTransition)();
    }, false);
  }
}

function updateControlButtonStyle() {
  if (!(0, _calFunction.canResearch)()) {
    (0, _effect.addControlButtonTransition)("Research");
  } else {
    (0, _effect.removeControlButtonTransition)("Research");
  }

  if (!(0, _calFunction.canEnforcePolicy)()) {
    (0, _effect.addControlButtonTransition)("Policies");
  } else {
    (0, _effect.removeControlButtonTransition)("Policies");
  }
}

function registerClickListenerForControlButtons() {
  var cbtns = document.getElementsByClassName("cbtn");

  for (var i = 0; i < cbtns.length; i++) {
    cbtns[i].addEventListener("click", function (e) {
      var ele = e.currentTarget;

      if ((0, _calFunction.canResearch)() && ele.classList.contains("Research")) {
        switch (ele.innerText) {
          case "Water":
            (0, _calFunction.waterResearch)();
            break;

          case "Land":
            (0, _calFunction.landResearch)();
            break;

          case "Crops":
            (0, _calFunction.cropResearch)();
            break;

          default:
            console.log("Unknown research.");
            break;
        }
      }

      if ((0, _calFunction.canEnforcePolicy)() && ele.classList.contains("Policies")) {
        switch (ele.innerText) {
          case "Education Promotion":
            (0, _calFunction.eduPromotion)();
            break;

          case "Long-hour Farming":
            (0, _calFunction.longHourFarming)();
            break;

          case "Military Recruitment":
            (0, _calFunction.militaryRecruitment)();
            break;

          case "Military Retirement":
            (0, _calFunction.militaryRetirement)();
            break;

          case "Scientist Retirement":
            (0, _calFunction.scientistRetirement)();
            break;

          default:
            console.log("Unknown policy.");
            break;
        }
      }

      (0, _panel.updatePanelData)();
      updateControlButtonStyle();
    }, false);
  }
}
},{"./calFunction":"js/calFunction.js","./effect":"js/effect.js","./panel":"js/panel.js"}],"js/event.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomGenerateEventCard = randomGenerateEventCard;
exports.registerClickListenerForEventButton = registerClickListenerForEventButton;

var _calFunction = require("./calFunction");

var _effect = require("./effect");

var _panel = require("./panel");

var SUBJECTS = ["Fuel Leakage", "Gifts From Future", "Farmer Riots"];
var ACTIONS = [{
  type: "Increased",
  desc: ["How cyberpunk! The water nearby was improved after absorbing the fuel!", "Amazing! A high-tech machine from future was found by a farmer yesterday in the farm largely increasing the standard of living!", "What? Farmers started a riot yesterday but ended up improving our life!"],
  effect: [[5, 0.1], [8, 0.3], [3, 0.1]]
}, {
  type: "Decreased",
  desc: ["Alert! The only water body nearby was contaminated last night due to the leakage of fuels in famers' bionic arms!", "Unfortunate! A scrapped machine was misused by farmers as a high-tech reducing the standard of living!", "Such a tragedy! Farmers started a riot yesterday! They damaged everything!"],
  effect: [[-5, -0.1], [-8, -0.3], [-3, -0.1]]
}];
var TARGETS = ["Crop Production", "Technology Level"];

function generateEvent() {
  var subjectIndex = Math.floor(Math.random() * 10 % SUBJECTS.length);
  var actionIndex = Math.floor(Math.random() * 10 % ACTIONS.length);
  var targetIndex = Math.floor(Math.random() * 10 % TARGETS.length);
  return {
    subject: SUBJECTS[subjectIndex],
    action: ACTIONS[actionIndex].type,
    desc: ACTIONS[actionIndex].desc[subjectIndex],
    effect: ACTIONS[actionIndex].effect[subjectIndex][targetIndex],
    target: TARGETS[targetIndex]
  };
}

function fillEventText(option) {
  document.getElementsByClassName("subject")[0].innerText = option.subject;
  document.getElementsByClassName("desc")[0].innerText = option.desc;
  document.getElementsByClassName("result")[0].innerText = (option.target + " " + option.action + " by " + option.effect + ".").replace("-", "");
}

function randomGenerateEventCard() {
  var res = Math.floor(Math.random() * 10);

  if (res === 1 || res === 2) {
    fillEventText(generateEvent());
    (0, _effect.addEventCardTransition)();
  }
}

function registerClickListenerForEventButton() {
  var ebtn = document.getElementsByClassName("event-btn")[0];
  ebtn.addEventListener("click", function () {
    var strGroup = document.getElementsByClassName("result")[0].innerText.split(" ");
    var diff = Number.parseFloat(strGroup[strGroup.length - 1]);
    diff = strGroup[strGroup.length - 2] === "Increased" ? diff : -diff;

    if (diff > 0 && diff < 1 || diff < 0 && diff > -1) {
      // tech level
      (0, _calFunction.specialEventChangeTechFactor)(diff);
    } else {
      // crop production
      (0, _calFunction.specialEventChangeCropProduction)(diff);
    }

    (0, _effect.removeEventCardTransition)();
    (0, _panel.updatePanelData)();
  }, false);
}
},{"./calFunction":"js/calFunction.js","./effect":"js/effect.js","./panel":"js/panel.js"}],"js/lifecycle.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerClickListenerForNextDayButton = registerClickListenerForNextDayButton;
exports.registerClickListenerForGameRestart = registerClickListenerForGameRestart;

var _varibale = require("./varibale");

var cal = _interopRequireWildcard(require("./calFunction"));

var _panel = require("./panel");

var _effect = require("./effect");

var _event = require("./event");

var _control = require("./control");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function registerClickListenerForNextDayButton() {
  var e = document.getElementsByClassName("next-day-btn")[0];
  e.addEventListener("click", function () {
    cal.catchIfShould();
    cal.naturalUpdateVariables();
    (0, _varibale.resetPolicyAndResearchCount)();
    (0, _panel.updatePanelData)();
    (0, _control.updateControlButtonStyle)();
    (0, _effect.removeEventCardTransition)();
    (0, _effect.removeInfoCardTransition)();

    if (cal.isGameOver()) {
      (0, _effect.addGameOverTransition)();
    } else {
      (0, _event.randomGenerateEventCard)();
    }
  }, false);
}

function registerClickListenerForGameRestart() {
  var e = document.getElementsByClassName("game-over-btn")[0];
  e.addEventListener("click", function () {
    (0, _varibale.resetAll)();
    (0, _panel.updatePanelData)();
    (0, _effect.removeGameOverTransition)();
  }, false);
}
},{"./varibale":"js/varibale.js","./calFunction":"js/calFunction.js","./panel":"js/panel.js","./effect":"js/effect.js","./event":"js/event.js","./control":"js/control.js"}],"main.js":[function(require,module,exports) {
'use strict';

var _control = require("./js/control");

var _event = require("./js/event");

var _panel = require("./js/panel");

var _lifecycle = require("./js/lifecycle");

function setup() {
  (0, _control.setButtons)((0, _control.getActiveOption)());
  (0, _control.registerMouseEnterListenerForControlButtons)();
  (0, _control.registerClickListenerForControlButtons)();
  (0, _event.registerClickListenerForEventButton)();
  (0, _control.registerClickListenerForOptions)();
  (0, _panel.registerClickListenerForPanelTriggerButton)();
  (0, _lifecycle.registerClickListenerForNextDayButton)();
  (0, _lifecycle.registerClickListenerForGameRestart)();
  (0, _panel.updatePanelData)();
}

setup();
},{"./js/control":"js/control.js","./js/event":"js/event.js","./js/panel":"js/panel.js","./js/lifecycle":"js/lifecycle.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59978" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map