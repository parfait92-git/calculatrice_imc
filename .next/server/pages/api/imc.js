module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("kuEX");


/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "hbui":
/***/ (function(module, exports) {

function CalculImc(taille, poids) {
  const careeTaille = taille * taille;
  const res = poids / careeTaille;
  const poidsNormal = PoidsNormal(taille);
  const ineterpretation = Interprete(res, poidsNormal);
  const obj = {
    imc: res,
    taille: taille,
    poids: poids,
    remarque: ineterpretation
  };
  return obj;
}

function PoidsNormal(taille) {
  const careeTaille = taille * taille;
  const poids_normal = 25 * careeTaille;
  return poids_normal;
}

function Interprete(imc, poidsNormal) {
  let msg = message(imc);
  let remarque = parseFloat(poidsNormal).toString().length <= 3 ? msg + parseFloat(poidsNormal).toFixed(0) + "kg" : msg + parseFloat(poidsNormal).toFixed(2) + "kg";

  if (imc <= 16.5) {
    return remarque;
  } else if (imc <= 18.5) {
    return remarque;
  } else if (imc === 25) {} else if (imc < 25) {
    return remarque;
  } else if (imc <= 30) {
    return remarque;
  } else if (imc <= 35) {
    return remarque;
  } else if (imc <= 40) {
    return remarque;
  } else if (imc > 40) {
    return remarque;
  }

  function message(imc) {
    if (imc <= 16.5) {
      return "Vous etes d'une tellement maigre et vous risquez votre vie.Penser à bien vous nourrir pour avoir en normale un ";
    } else if (imc <= 18.5) {
      return "Vous etes d'une maigreur anormale penser à bien vous nourrir pour avoir en normale un poids de ";
    } else if (imc === 25) {
      return "Votre corpulence est normale";
    } else if (imc < 25) {
      return "votre corpulence est normale mais chercher a avoir un poids de ";
    } else if (imc <= 30) {
      return "vous avez pris un surpoids il vous faut un poids de ";
    } else if (imc <= 35) {
      return "Vous etes atteint d'une obésité modérée il vous faut perdre du poids pour avoir un poid de ";
    } else if (imc <= 40) {
      return "Vous etes atteint d'une obésité obésité sévère. il vous faut perdre du poids pour avoir un poids de ";
    } else if (imc > 40) {
      return "Vous etes atteint d'une obésité morbide ou massive. il vous faut perdre du poids pour avoir un poids de ";
    }
  }
}

module.exports = {
  CalculImc,
  PoidsNormal,
  Interprete
};

/***/ }),

/***/ "kuEX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ handler; });

// EXTERNAL MODULE: ./pages/api/services/imc.service.js
var imc_service = __webpack_require__("hbui");

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__("FiKB");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);

// CONCATENATED MODULE: ./utils/connectDB.js


const connectDB = () => {
  if (external_mongoose_default.a.connections[0].readyState) {
    console.log('vous etes deja connecté');
    return;
  }

  external_mongoose_default.a.connect("mongodb+srv://dbUser:parfait92@cluster0.trio2.mongodb.net/calcul_imc?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log("Vous vene de vous connecter a mongoDB");
  });
};

/* harmony default export */ var utils_connectDB = (connectDB);
// CONCATENATED MODULE: ./pages/api/imc.js


utils_connectDB();
async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req);
    const poids = req.body.poids;
    const taille = req.body.taille;
    const imc = imc_service["CalculImc"](taille, poids);
    res.status(200).json(imc);
  }
}

/***/ })

/******/ });