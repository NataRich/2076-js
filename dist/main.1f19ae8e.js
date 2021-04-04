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
})({"js/effect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEventCardTransition = addEventCardTransition;
exports.removeEventCardTransition = removeEventCardTransition;
exports.addInfoCardTransition = addInfoCardTransition;
exports.removeInfoCardTransition = removeInfoCardTransition;

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
},{}],"js/control.js":[function(require,module,exports) {
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

var _effect = require("./effect");

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
    node.className = "cbtn";
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

      e.currentTarget.className = "opt active"; // set buttons

      setButtons(getActiveOption()); // register listeners for newly added buttons

      registerMouseEnterListenerForControlButtons();
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
},{"./effect":"js/effect.js"}],"js/event.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateEvent = generateEvent;
exports.fillEventText = fillEventText;
exports.registerClickListenerForEventButton = registerClickListenerForEventButton;

var _effect = require("./effect");

var SUBJECTS = ["Fuel Leakage", "Gifts From Future", "Farmer Riots"];
var ACTIONS = [{
  type: "Increased",
  desc: ["How cyberpunk! The water nearby was improved after absorbing the fuel!", "Amazing! A high-tech machine from future was found by a farmer yesterday in the farm largely increasing the standard of living!", "What? Farmers started a riot yesterday but ended up improving our life!"]
}, {
  type: "Decreased",
  desc: ["Alert! The only water body nearby was contaminated last night due to the leakage of fuels in famers' bionic arms!", "Unfortunate! A scrapped machine was misused by farmers as a high-tech reducing the standard of living!", "Such a tragedy! Farmers started a riot yesterday! They damaged everything!"]
}];
var TARGETS = ["Crop Production", "Technology Level"]; // generate a event with the following format
// {
//     subject: <subject of event>,
//     action: <action type>,
//     desc: <description of event>,
//     target: <result of event>
// }

function generateEvent() {
  var subjectIndex = Math.floor(Math.random() * 10 % SUBJECTS.length);
  var actionIndex = Math.floor(Math.random() * 10 % ACTIONS.length);
  var targetIndex = Math.floor(Math.random() * 10 % TARGETS.length);
  return {
    subject: SUBJECTS[subjectIndex],
    action: ACTIONS[actionIndex].type,
    desc: ACTIONS[actionIndex].desc[subjectIndex],
    target: TARGETS[targetIndex]
  };
}

function fillEventText(option) {
  document.getElementsByClassName("subject")[0].innerText = option.subject;
  document.getElementsByClassName("desc")[0].innerText = option.desc;
  document.getElementsByClassName("result")[0].innerText = option.subject + " " + option.action + " " + option.target + ".";
}

function registerClickListenerForEventButton() {
  var ebtn = document.getElementsByClassName("event-btn")[0];
  ebtn.addEventListener("click", function () {
    return (0, _effect.removeEventCardTransition)();
  }, false);
}
},{"./effect":"js/effect.js"}],"main.js":[function(require,module,exports) {
'use strict';

var _control = require("./js/control");

var _event = require("./js/event");

var _effect = require("./js/effect");

function setup() {
  (0, _control.setButtons)((0, _control.getActiveOption)());
  (0, _control.registerMouseEnterListenerForControlButtons)();
  (0, _event.registerClickListenerForEventButton)();
  (0, _control.registerClickListenerForOptions)();
  (0, _event.fillEventText)((0, _event.generateEvent)()); // DELTE THIS

  (0, _effect.addEventCardTransition)();
}

setup(); // register listeners

var panel = document.getElementsByClassName("panel")[0];
panel.addEventListener("click", togglePanel, false); // event handlers
// for data panel

function togglePanel(e) {
  if (e.currentTarget.style.height === "10px") e.currentTarget.style.height = "40%";else e.currentTarget.style.height = "10px";
}
},{"./js/control":"js/control.js","./js/event":"js/event.js","./js/effect":"js/effect.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49805" + '/');

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