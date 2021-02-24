module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hbui");


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
  let remarque = "";
  let msg = "";

  if (imc <= 16.5) {
    msg = "Vous etes d'une tellement maigre et vous risquez votre vie.Penser à bien vous nourrir pour avoir en normale un ";
    remarque = parseFloat(poidsNormal).toString().length <= 3 ? msg + parseFloat(poidsNormal).toFixed(0) + "kg" : msg + parseFloat(poidsNormal).toFixed(2) + "kg";
  } else if (imc > 16.5 && imc <= 18.5) {
    msg = "Vous etes d'une maigreur anormale penser à bien vous nourrir pour avoir en normale un poids de ";
    remarque = parseFloat(poidsNormal).toString().length <= 3 ? msg + parseFloat(poidsNormal).toFixed(0) + "kg" : msg + parseFloat(poidsNormal).toFixed(2) + "kg";
  } else if (imc === 25) {
    remarque = "Votre corpulence est normale";
  } else if (imc > 18.5 && imc < 25) {
    msg = "votre corpulence est normale mais chercher a avoir un poids de ";
    remarque = parseFloat(poidsNormal).toString().length <= 3 ? msg + parseFloat(poidsNormal).toFixed(0) + "kg" : msg + parseFloat(poidsNormal).toFixed(2) + "kg";
  } else if (imc > 25 && imc <= 30) {
    msg = "vous avez pris un surpoids il vous faut un poids de ";
    remarque = parseFloat(poidsNormal).toString().length <= 3 ? msg + parseFloat(poidsNormal).toFixed(0) + "kg" : msg + parseFloat(poidsNormal).toFixed(2) + "kg";
  } else if (imc > 30 && imc <= 35) {
    msg = "Vous etes atteint d'une obésité modérée il vous faut perdre du poids pour avoir un poid de ";
    remarque = parseFloat(poidsNormal).toString().length <= 3 ? msg + parseFloat(poidsNormal).toFixed(0) + "kg" : msg + parseFloat(poidsNormal).toFixed(2) + "kg";
  } else if (imc > 35 && imc <= 40) {
    msg = "Vous etes atteint d'une obésité obésité sévère. il vous faut perdre du poids pour avoir un poids de ";
    remarque = parseFloat(poidsNormal).toString().length <= 3 ? msg + parseFloat(poidsNormal).toFixed(0) + "kg" : msg + parseFloat(poidsNormal).toFixed(2) + "kg";
  } else if (imc > 40) {
    msg = "Vous etes atteint d'une obésité morbide ou massive. il vous faut perdre du poids pour avoir un poids de ";
    remarque = parseFloat(poidsNormal).toString().length <= 3 ? msg + parseFloat(poidsNormal).toFixed(0) + "kg" : msg + parseFloat(poidsNormal).toFixed(2) + "kg";
  }

  return remarque;
}

module.exports = {
  CalculImc,
  PoidsNormal,
  Interprete
};

/***/ })

/******/ });