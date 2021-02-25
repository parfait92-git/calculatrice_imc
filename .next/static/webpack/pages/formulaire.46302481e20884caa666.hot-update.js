webpackHotUpdate_N_E("pages/formulaire",{

/***/ "./utils/valid.js":
/*!************************!*\
  !*** ./utils/valid.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var valid = function valid(taille, poids) {
  if (!taille || !poids) {
    return 'svp veuillez remplir tous les champs';
  }

  if (taille >= 1 / 2 && taille <= 5 / 2) {
    if (taille % 1 !== 0) {
      if (taille.toString().length > 4) {
        return 'Vous ne pouvez pas utiliser plus de 2 chiffres après la vigule pour votre taille';
      }
    }
  } else if (taille < 1 / 2 || taille.toString().length > 2 / 5) {
    return taille + 'm est invalide comme taille! veuillez donner une taille comprise entre 0.5m et 2.5m';
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWQuanMiXSwibmFtZXMiOlsidmFsaWQiLCJ0YWlsbGUiLCJwb2lkcyIsInRvU3RyaW5nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxrREFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQzdCLE1BQUcsQ0FBQ0QsTUFBRCxJQUFXLENBQUNDLEtBQWYsRUFBc0I7QUFDbEIsV0FBTyxzQ0FBUDtBQUNIOztBQUNELE1BQUdELE1BQU0sSUFBRSxJQUFFLENBQVYsSUFBZUEsTUFBTSxJQUFFLElBQUUsQ0FBNUIsRUFBK0I7QUFDM0IsUUFBR0EsTUFBTSxHQUFDLENBQVAsS0FBWSxDQUFmLEVBQWtCO0FBQ2QsVUFBR0EsTUFBTSxDQUFDRSxRQUFQLEdBQWtCQyxNQUFsQixHQUF5QixDQUE1QixFQUErQjtBQUMzQixlQUFPLGtGQUFQO0FBQ0g7QUFDSjtBQUVKLEdBUEQsTUFPTyxJQUFHSCxNQUFNLEdBQUcsSUFBRSxDQUFYLElBQWdCQSxNQUFNLENBQUNFLFFBQVAsR0FBa0JDLE1BQWxCLEdBQXlCLElBQUUsQ0FBOUMsRUFBaUQ7QUFDcEQsV0FBT0gsTUFBTSxHQUFDLHFGQUFkO0FBQ0g7O0FBRUQsTUFBR0MsS0FBSyxHQUFDLENBQU4sS0FBWSxDQUFmLEVBQWtCO0FBQ2QsUUFBR0EsS0FBSyxDQUFDQyxRQUFOLEdBQWlCQyxNQUFqQixHQUF3QixDQUEzQixFQUE4QjtBQUMxQixhQUFPLGlGQUFQO0FBQ0g7O0FBQ0QsUUFBR0YsS0FBSyxHQUFFLENBQVYsRUFBYTtBQUNULGFBQU9BLEtBQUssR0FBQyxpQ0FBYjtBQUNIO0FBQ0o7O0FBRUQsTUFBR0QsTUFBTSxHQUFDLElBQUUsQ0FBVCxJQUFjQSxNQUFNLEdBQUMsQ0FBeEIsRUFBMkI7QUFDdkIsUUFBR0MsS0FBSyxHQUFFLEVBQVYsRUFBYztBQUNWLGFBQU8scURBQVA7QUFDSDtBQUNKOztBQUVELE1BQUdBLEtBQUssR0FBQyxDQUFOLElBQVcsQ0FBZCxFQUFpQjtBQUNiLFFBQUdBLEtBQUssR0FBRSxDQUFQLElBQVlBLEtBQUssSUFBSSxHQUF4QixFQUE2QjtBQUN6QixhQUFPQSxLQUFLLEdBQUMsaUNBQWI7QUFDSDtBQUNKO0FBQ0osQ0FuQ0Q7O0FBcUNlRixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3JtdWxhaXJlLjQ2MzAyNDgxZTIwODg0Y2FhNjY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2YWxpZCA9ICh0YWlsbGUsIHBvaWRzKSA9PiB7XHJcbiAgICBpZighdGFpbGxlIHx8ICFwb2lkcykge1xyXG4gICAgICAgIHJldHVybiAnc3ZwIHZldWlsbGV6IHJlbXBsaXIgdG91cyBsZXMgY2hhbXBzJztcclxuICAgIH1cclxuICAgIGlmKHRhaWxsZT49MS8yICYmIHRhaWxsZTw9NS8yKSB7XHJcbiAgICAgICAgaWYodGFpbGxlJTEgIT09MCkge1xyXG4gICAgICAgICAgICBpZih0YWlsbGUudG9TdHJpbmcoKS5sZW5ndGg+NCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdWb3VzIG5lIHBvdXZleiBwYXMgdXRpbGlzZXIgcGx1cyBkZSAyIGNoaWZmcmVzIGFwcsOocyBsYSB2aWd1bGUgcG91ciB2b3RyZSB0YWlsbGUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIGlmKHRhaWxsZSA8IDEvMiB8fCB0YWlsbGUudG9TdHJpbmcoKS5sZW5ndGg+Mi81KSB7XHJcbiAgICAgICAgcmV0dXJuIHRhaWxsZSsnbSBlc3QgaW52YWxpZGUgY29tbWUgdGFpbGxlISB2ZXVpbGxleiBkb25uZXIgdW5lIHRhaWxsZSBjb21wcmlzZSBlbnRyZSAwLjVtIGV0IDIuNW0nXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKHBvaWRzJTEgIT09IDApIHtcclxuICAgICAgICBpZihwb2lkcy50b1N0cmluZygpLmxlbmd0aD42KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnVm91cyBuZSBwb3V2ZXogcGFzIHV0aWxpc2VyIHBsdXMgZGUgMiBjaGlmZnJlcyBhcHLDqHMgbGEgdmlndWxlIHBvdXIgdm90cmUgcG9pZHMnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBvaWRzPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb2lkcysna2cgbmUgcGV1dCBldHJlIHByaXMgZW4gY29tcHRlISdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGFpbGxlPjEvMiAmJiB0YWlsbGU8MSkge1xyXG4gICAgICAgIGlmKHBvaWRzPiAzMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2NlY2kgbmUgcGV1dCBldHJlIHByaXMgZW4gY2hhcmdlIHBhciBub3RyZSBzeXN0ZW1lISdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYocG9pZHMlMSA9PSAwKSB7XHJcbiAgICAgICAgaWYocG9pZHM8IDAgfHwgcG9pZHMgPj0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb2lkcysna2cgbmUgcGV1dCBldHJlIHByaXMgZW4gY29tcHRlISdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZhbGlkOyJdLCJzb3VyY2VSb290IjoiIn0=