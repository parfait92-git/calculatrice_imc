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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/imc.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/Imc.js":
/*!***********************!*\
  !*** ./models/Imc.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ImcSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  taille: {
    type: Number,
    required: [true, 's\'il vous plait veuillez renseigner votre taille!'],
    trim: true,
    maxLength: [3, 'ne peut depasser 3 caractères!']
  },
  poids: {
    type: Number,
    required: [true, 's\'il vous plait veuillez renseigner votre poids!'],
    trim: true,
    maxLength: [4, 'ne peut depasser 4 caractères!']
  },
  imc: {
    type: Number
  },
  remarque: {
    type: String
  }
}, {
  timestamps: true
});
let DataSet = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.indices || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('indices', ImcSchema);
/* harmony default export */ __webpack_exports__["default"] = (DataSet);

/***/ }),

/***/ "./pages/api/imc.js":
/*!**************************!*\
  !*** ./pages/api/imc.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _services_imc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/imc.service */ "./pages/api/services/imc.service.js");
/* harmony import */ var _services_imc_service__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_services_imc_service__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Imc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Imc */ "./models/Imc.js");
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _utils_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/valid */ "./utils/valid.js");




Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_2__["default"])();
async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req);
    const poids = req.body.poids;
    const taille = req.body.taille;
    const imc = _services_imc_service__WEBPACK_IMPORTED_MODULE_0__["CalculImc"](taille, poids);
    res.status(200).json(imc);
  }
}

/***/ }),

/***/ "./pages/api/services/imc.service.js":
/*!*******************************************!*\
  !*** ./pages/api/services/imc.service.js ***!
  \*******************************************/
/*! no static exports found */
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

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connectDB = () => {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) {
    console.log('vous etes deja connecté');
    return;
  }

  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://dbUser:parfait92@cluster0.trio2.mongodb.net/calcul_imc?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log("Vous vene de vous connecter a mongoDB");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (connectDB);

/***/ }),

/***/ "./utils/valid.js":
/*!************************!*\
  !*** ./utils/valid.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const valid = (taille, poids) => {
  if (!taille || !poids) {
    return 'svp veuillez remplir tous les champs';
  }

  if (taille >= 1 / 2 && taille <= 5 / 2) {
    if (taille % 1 !== 0) {
      if (taille.toString().length > 4) {
        return 'Vous ne pouvez pas utiliser plus de 2 chiffres après la vigule pour votre taille';
      }
    }
  } else if (taille < 1 || taille.toString().length > 2 / 5) {
    return taille + 'm est invalide comme taille! veuillez donner une taille comprise entre 1m et 2.5m';
  }

  if (poids % 1 !== 0) {
    if (poids.toString().length > 6) {
      return 'Vous ne pouvez pas utiliser plus de 2 chiffres après la vigule pour votre poids';
    }

    if (poids < 0) {
      return poids + 'kg ne peut etre pris en compte!';
    }
  }

  if (taille > 1 / 2 && taille < 1) {
    if (poids > 30) {
      return 'ceci ne peut etre pris en charge par notre systeme!';
    }
  }

  if (poids % 1 == 0) {
    if (poids < 0 || poids >= 200) {
      return poids + 'kg ne peut etre pris en compte!';
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (valid);

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL0ltYy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaW1jLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9zZXJ2aWNlcy9pbWMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmFsaWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJJbWNTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsInRhaWxsZSIsInR5cGUiLCJOdW1iZXIiLCJyZXF1aXJlZCIsInRyaW0iLCJtYXhMZW5ndGgiLCJwb2lkcyIsImltYyIsInJlbWFycXVlIiwiU3RyaW5nIiwidGltZXN0YW1wcyIsIkRhdGFTZXQiLCJtb2RlbHMiLCJpbmRpY2VzIiwibW9kZWwiLCJjb25uZWN0REIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJpbWNTdmMiLCJzdGF0dXMiLCJqc29uIiwiQ2FsY3VsSW1jIiwiY2FyZWVUYWlsbGUiLCJwb2lkc05vcm1hbCIsIlBvaWRzTm9ybWFsIiwiaW5ldGVycHJldGF0aW9uIiwiSW50ZXJwcmV0ZSIsIm9iaiIsInBvaWRzX25vcm1hbCIsIm1zZyIsInBhcnNlRmxvYXQiLCJ0b1N0cmluZyIsImxlbmd0aCIsInRvRml4ZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJlcnIiLCJ2YWxpZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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Y0EsTUFBTSxDQUFDb0MsUUFBUCxHQUFrQkMsTUFBbEIsR0FBeUIsSUFBRSxDQUE1QyxFQUErQztBQUNsRCxXQUFPckMsTUFBTSxHQUFDLG1GQUFkO0FBQ0g7O0FBRUQsTUFBR00sS0FBSyxHQUFDLENBQU4sS0FBWSxDQUFmLEVBQWtCO0FBQ2QsUUFBR0EsS0FBSyxDQUFDOEIsUUFBTixHQUFpQkMsTUFBakIsR0FBd0IsQ0FBM0IsRUFBOEI7QUFDMUIsYUFBTyxpRkFBUDtBQUNIOztBQUNELFFBQUcvQixLQUFLLEdBQUUsQ0FBVixFQUFhO0FBQ1QsYUFBT0EsS0FBSyxHQUFDLGlDQUFiO0FBQ0g7QUFDSjs7QUFFRCxNQUFHTixNQUFNLEdBQUMsSUFBRSxDQUFULElBQWNBLE1BQU0sR0FBQyxDQUF4QixFQUEyQjtBQUN2QixRQUFHTSxLQUFLLEdBQUUsRUFBVixFQUFjO0FBQ1YsYUFBTyxxREFBUDtBQUNIO0FBQ0o7O0FBRUQsTUFBR0EsS0FBSyxHQUFDLENBQU4sSUFBVyxDQUFkLEVBQWlCO0FBQ2IsUUFBR0EsS0FBSyxHQUFFLENBQVAsSUFBWUEsS0FBSyxJQUFJLEdBQXhCLEVBQTZCO0FBQ3pCLGFBQU9BLEtBQUssR0FBQyxpQ0FBYjtBQUNIO0FBQ0o7QUFDSixDQW5DRDs7QUFxQ2U0QyxvRUFBZixFOzs7Ozs7Ozs7OztBQ3JDQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvaW1jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvaW1jLmpzXCIpO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IEltY1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdGFpbGxlOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ3NcXCdpbCB2b3VzIHBsYWl0IHZldWlsbGV6IHJlbnNlaWduZXIgdm90cmUgdGFpbGxlISddLFxyXG4gICAgICAgIHRyaW06IHRydWUsXHJcbiAgICAgICAgbWF4TGVuZ3RoOiBbMywgJ25lIHBldXQgZGVwYXNzZXIgMyBjYXJhY3TDqHJlcyEnXVxyXG4gICAgfSxcclxuICAgIHBvaWRzOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ3NcXCdpbCB2b3VzIHBsYWl0IHZldWlsbGV6IHJlbnNlaWduZXIgdm90cmUgcG9pZHMhJ10sXHJcbiAgICAgICAgdHJpbTogdHJ1ZSxcclxuICAgICAgICBtYXhMZW5ndGg6IFs0LCAnbmUgcGV1dCBkZXBhc3NlciA0IGNhcmFjdMOocmVzISddXHJcbiAgICB9LFxyXG4gICAgaW1jOiAge1xyXG4gICAgICAgIHR5cGU6IE51bWJlclxyXG4gICAgfSxcclxuICAgIHJlbWFycXVlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9XHJcbn0sIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWVcclxufSk7XHJcblxyXG5sZXQgRGF0YVNldCA9IG1vbmdvb3NlLm1vZGVscy5pbmRpY2VzIHx8IG1vbmdvb3NlLm1vZGVsKCdpbmRpY2VzJywgSW1jU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFTZXQ7IiwiaW1wb3J0ICogYXMgaW1jU3ZjIGZyb20gJy4vc2VydmljZXMvaW1jLnNlcnZpY2UnO1xyXG5pbXBvcnQgSW1jU2NoZW1hIGZyb20gJy4uLy4uL21vZGVscy9JbWMnO1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uL3V0aWxzL2Nvbm5lY3REQic7XHJcbmltcG9ydCB2YWxpZCBmcm9tICcuLi8uLi91dGlscy92YWxpZCc7XHJcblxyXG5jb25uZWN0REIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZihyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnNvbGUubG9nKHJlcSk7XHJcbiAgICBjb25zdCBwb2lkcyA9IHJlcS5ib2R5LnBvaWRzO1xyXG4gICAgY29uc3QgdGFpbGxlID0gcmVxLmJvZHkudGFpbGxlO1xyXG4gICAgY29uc3QgaW1jID0gaW1jU3ZjLkNhbGN1bEltYyh0YWlsbGUsIHBvaWRzKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGltYylcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcblxyXG4iLCJmdW5jdGlvbiBDYWxjdWxJbWModGFpbGxlLCBwb2lkcykge1xyXG4gICAgY29uc3QgY2FyZWVUYWlsbGUgPSB0YWlsbGUqdGFpbGxlO1xyXG4gICAgY29uc3QgcmVzID0gcG9pZHMvY2FyZWVUYWlsbGU7XHJcbiAgICBjb25zdCBwb2lkc05vcm1hbCA9IFBvaWRzTm9ybWFsKHRhaWxsZSk7XHJcbiAgICBjb25zdCBpbmV0ZXJwcmV0YXRpb24gPSBJbnRlcnByZXRlKHJlcywgcG9pZHNOb3JtYWwpO1xyXG4gICAgY29uc3Qgb2JqID0ge2ltYzogcmVzLCB0YWlsbGU6dGFpbGxlLCBwb2lkczogcG9pZHMsIHJlbWFycXVlOiBpbmV0ZXJwcmV0YXRpb24gfTtcclxuICAgIHJldHVybiBvYmpcclxufVxyXG5cclxuZnVuY3Rpb24gUG9pZHNOb3JtYWwodGFpbGxlKSB7XHJcbiAgICBjb25zdCBjYXJlZVRhaWxsZSA9IHRhaWxsZSp0YWlsbGU7XHJcbiAgICBjb25zdCBwb2lkc19ub3JtYWwgPSAyNSpjYXJlZVRhaWxsZTtcclxuICAgIHJldHVybiBwb2lkc19ub3JtYWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEludGVycHJldGUoaW1jLCBwb2lkc05vcm1hbCkgeyBcclxuICAgIGxldCByZW1hcnF1ZSA9IFwiXCI7XHJcbiAgICBsZXQgbXNnID0gXCJcIjtcclxuICAgIGlmKGltYyA8PSAxNi41KSB7XHJcbiAgICAgICAgbXNnID0gXCJWb3VzIGV0ZXMgZCd1bmUgdGVsbGVtZW50IG1haWdyZSBldCB2b3VzIHJpc3F1ZXogdm90cmUgdmllLlBlbnNlciDDoCBiaWVuIHZvdXMgbm91cnJpciBwb3VyIGF2b2lyIGVuIG5vcm1hbGUgdW4gXCI7XHJcbiAgICAgICAgcmVtYXJxdWUgPSBwYXJzZUZsb2F0KHBvaWRzTm9ybWFsKS50b1N0cmluZygpLmxlbmd0aDw9Mz9tc2crIHBhcnNlRmxvYXQocG9pZHNOb3JtYWwpLnRvRml4ZWQoMCkrIFwia2dcIjptc2crIHBhcnNlRmxvYXQocG9pZHNOb3JtYWwpLnRvRml4ZWQoMikrIFwia2dcIjtcclxuICAgIH0gZWxzZSBpZihpbWMgPiAxNi41ICYmIGltYzw9MTguNSkge1xyXG4gICAgICAgIG1zZyA9IFwiVm91cyBldGVzIGQndW5lIG1haWdyZXVyIGFub3JtYWxlIHBlbnNlciDDoCBiaWVuIHZvdXMgbm91cnJpciBwb3VyIGF2b2lyIGVuIG5vcm1hbGUgdW4gcG9pZHMgZGUgXCI7XHJcbiAgICAgICAgcmVtYXJxdWUgPSBwYXJzZUZsb2F0KHBvaWRzTm9ybWFsKS50b1N0cmluZygpLmxlbmd0aDw9Mz9tc2crIHBhcnNlRmxvYXQocG9pZHNOb3JtYWwpLnRvRml4ZWQoMCkrIFwia2dcIjptc2crIHBhcnNlRmxvYXQocG9pZHNOb3JtYWwpLnRvRml4ZWQoMikrIFwia2dcIjtcclxuICAgIH0gZWxzZSBpZihpbWM9PT0yNSkge1xyXG4gICAgICAgIHJlbWFycXVlID0gXCJWb3RyZSBjb3JwdWxlbmNlIGVzdCBub3JtYWxlXCI7XHJcbiAgICB9IGVsc2UgaWYoaW1jID4gMTguNSAmJiBpbWM8MjUpIHtcclxuICAgICAgICBtc2cgPSBcInZvdHJlIGNvcnB1bGVuY2UgZXN0IG5vcm1hbGUgbWFpcyBjaGVyY2hlciBhIGF2b2lyIHVuIHBvaWRzIGRlIFwiO1xyXG4gICAgICAgIHJlbWFycXVlID0gcGFyc2VGbG9hdChwb2lkc05vcm1hbCkudG9TdHJpbmcoKS5sZW5ndGg8PTM/bXNnKyBwYXJzZUZsb2F0KHBvaWRzTm9ybWFsKS50b0ZpeGVkKDApKyBcImtnXCI6bXNnKyBwYXJzZUZsb2F0KHBvaWRzTm9ybWFsKS50b0ZpeGVkKDIpKyBcImtnXCI7XHJcbiAgICB9IGVsc2UgaWYoaW1jID4gMjUgJiYgaW1jPD0zMCkge1xyXG4gICAgICAgIG1zZyA9IFwidm91cyBhdmV6IHByaXMgdW4gc3VycG9pZHMgaWwgdm91cyBmYXV0IHVuIHBvaWRzIGRlIFwiO1xyXG4gICAgICAgIHJlbWFycXVlID0gcGFyc2VGbG9hdChwb2lkc05vcm1hbCkudG9TdHJpbmcoKS5sZW5ndGg8PTM/bXNnICsgcGFyc2VGbG9hdChwb2lkc05vcm1hbCkudG9GaXhlZCgwKSsgXCJrZ1wiOm1zZysgcGFyc2VGbG9hdChwb2lkc05vcm1hbCkudG9GaXhlZCgyKSsgXCJrZ1wiO1xyXG4gICAgfSBlbHNlIGlmKGltYyA+IDMwICYmIGltYzw9MzUpIHtcclxuICAgICAgICBtc2cgPSBcIlZvdXMgZXRlcyBhdHRlaW50IGQndW5lIG9iw6lzaXTDqSBtb2TDqXLDqWUgaWwgdm91cyBmYXV0IHBlcmRyZSBkdSBwb2lkcyBwb3VyIGF2b2lyIHVuIHBvaWQgZGUgXCI7XHJcbiAgICAgICAgcmVtYXJxdWUgPSBwYXJzZUZsb2F0KHBvaWRzTm9ybWFsKS50b1N0cmluZygpLmxlbmd0aDw9Mz9tc2crIHBhcnNlRmxvYXQocG9pZHNOb3JtYWwpLnRvRml4ZWQoMCkrIFwia2dcIjptc2crIHBhcnNlRmxvYXQocG9pZHNOb3JtYWwpLnRvRml4ZWQoMikrIFwia2dcIjtcclxuICAgIH0gZWxzZSBpZihpbWMgPiAzNSAmJiBpbWM8PTQwKSB7XHJcbiAgICAgICAgbXNnID1cIlZvdXMgZXRlcyBhdHRlaW50IGQndW5lIG9iw6lzaXTDqSBvYsOpc2l0w6kgc8OpdsOocmUuIGlsIHZvdXMgZmF1dCBwZXJkcmUgZHUgcG9pZHMgcG91ciBhdm9pciB1biBwb2lkcyBkZSBcIjtcclxuICAgICAgICByZW1hcnF1ZSA9IHBhcnNlRmxvYXQocG9pZHNOb3JtYWwpLnRvU3RyaW5nKCkubGVuZ3RoPD0zP21zZysgcGFyc2VGbG9hdChwb2lkc05vcm1hbCkudG9GaXhlZCgwKSsgXCJrZ1wiOm1zZysgcGFyc2VGbG9hdChwb2lkc05vcm1hbCkudG9GaXhlZCgyKSsgXCJrZ1wiO1xyXG4gICAgfSBlbHNlIGlmKGltYyA+IDQwKSB7XHJcbiAgICAgICAgbXNnID1cIlZvdXMgZXRlcyBhdHRlaW50IGQndW5lIG9iw6lzaXTDqSBtb3JiaWRlIG91IG1hc3NpdmUuIGlsIHZvdXMgZmF1dCBwZXJkcmUgZHUgcG9pZHMgcG91ciBhdm9pciB1biBwb2lkcyBkZSBcIjtcclxuICAgICAgICByZW1hcnF1ZSA9IHBhcnNlRmxvYXQocG9pZHNOb3JtYWwpLnRvU3RyaW5nKCkubGVuZ3RoPD0zP21zZyArIHBhcnNlRmxvYXQocG9pZHNOb3JtYWwpLnRvRml4ZWQoMCkrIFwia2dcIjptc2crIHBhcnNlRmxvYXQocG9pZHNOb3JtYWwpLnRvRml4ZWQoMikrIFwia2dcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVtYXJxdWU7XHJcbiB9XHJcblxyXG4gbW9kdWxlLmV4cG9ydHMgPSB7IENhbGN1bEltYywgUG9pZHNOb3JtYWwsIEludGVycHJldGUgfSIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0REIgPSAoKSA9PiB7XHJcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZvdXMgZXRlcyBkZWphIGNvbm5lY3TDqScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLCB7XHJcbiAgICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJWb3VzIHZlbmUgZGUgdm91cyBjb25uZWN0ZXIgYSBtb25nb0RCXCIpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCOyIsImNvbnN0IHZhbGlkID0gKHRhaWxsZSwgcG9pZHMpID0+IHtcclxuICAgIGlmKCF0YWlsbGUgfHwgIXBvaWRzKSB7XHJcbiAgICAgICAgcmV0dXJuICdzdnAgdmV1aWxsZXogcmVtcGxpciB0b3VzIGxlcyBjaGFtcHMnO1xyXG4gICAgfVxyXG4gICAgaWYodGFpbGxlPj0xLzIgJiYgdGFpbGxlPD01LzIpIHtcclxuICAgICAgICBpZih0YWlsbGUlMSAhPT0wKSB7XHJcbiAgICAgICAgICAgIGlmKHRhaWxsZS50b1N0cmluZygpLmxlbmd0aD40KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1ZvdXMgbmUgcG91dmV6IHBhcyB1dGlsaXNlciBwbHVzIGRlIDIgY2hpZmZyZXMgYXByw6hzIGxhIHZpZ3VsZSBwb3VyIHZvdHJlIHRhaWxsZSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICB9IGVsc2UgaWYodGFpbGxlIDwgMSB8fCB0YWlsbGUudG9TdHJpbmcoKS5sZW5ndGg+Mi81KSB7XHJcbiAgICAgICAgcmV0dXJuIHRhaWxsZSsnbSBlc3QgaW52YWxpZGUgY29tbWUgdGFpbGxlISB2ZXVpbGxleiBkb25uZXIgdW5lIHRhaWxsZSBjb21wcmlzZSBlbnRyZSAxbSBldCAyLjVtJ1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZihwb2lkcyUxICE9PSAwKSB7XHJcbiAgICAgICAgaWYocG9pZHMudG9TdHJpbmcoKS5sZW5ndGg+Nikge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1ZvdXMgbmUgcG91dmV6IHBhcyB1dGlsaXNlciBwbHVzIGRlIDIgY2hpZmZyZXMgYXByw6hzIGxhIHZpZ3VsZSBwb3VyIHZvdHJlIHBvaWRzJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwb2lkczwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9pZHMrJ2tnIG5lIHBldXQgZXRyZSBwcmlzIGVuIGNvbXB0ZSEnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRhaWxsZT4xLzIgJiYgdGFpbGxlPDEpIHtcclxuICAgICAgICBpZihwb2lkcz4gMzApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdjZWNpIG5lIHBldXQgZXRyZSBwcmlzIGVuIGNoYXJnZSBwYXIgbm90cmUgc3lzdGVtZSEnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHBvaWRzJTEgPT0gMCkge1xyXG4gICAgICAgIGlmKHBvaWRzPCAwIHx8IHBvaWRzID49IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9pZHMrJ2tnIG5lIHBldXQgZXRyZSBwcmlzIGVuIGNvbXB0ZSEnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2YWxpZDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9