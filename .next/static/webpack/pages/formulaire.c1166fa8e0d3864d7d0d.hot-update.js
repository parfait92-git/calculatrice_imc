webpackHotUpdate_N_E("pages/formulaire",{

/***/ "./utils/fetchData.js":
/*!****************************!*\
  !*** ./utils/fetchData.js ***!
  \****************************/
/*! exports provided: postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony import */ var E_nextjs_imc_and_ecommerce_calculatrice_imc_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_nextjs_imc_and_ecommerce_calculatrice_imc_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_nextjs_imc_and_ecommerce_calculatrice_imc_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_nextjs_imc_and_ecommerce_calculatrice_imc_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


var baseURL = "https://cameroonnitech.vercel.app";
var postData = /*#__PURE__*/function () {
  var _ref = Object(E_nextjs_imc_and_ecommerce_calculatrice_imc_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/E_nextjs_imc_and_ecommerce_calculatrice_imc_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, payload, token) {
    var res, data;
    return E_nextjs_imc_and_ecommerce_calculatrice_imc_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(baseURL, "/api/").concat(url), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token
              },
              body: JSON.stringify(payload)
            })["catch"](function (err) {
              console.error('erreur coté serveur:', err);
            });

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            console.log('mes donneees', data.imc);
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postData(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2hEYXRhLmpzIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJwb3N0RGF0YSIsInVybCIsInBheWxvYWQiLCJ0b2tlbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVzIiwianNvbiIsImRhdGEiLCJsb2ciLCJpbWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHLG1DQUFoQjtBQUVPLElBQU1DLFFBQVE7QUFBQSw4U0FBRyxpQkFBT0MsR0FBUCxFQUFZQyxPQUFaLEVBQXFCQyxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNGQyxLQUFLLFdBQUlMLE9BQUosa0JBQW1CRSxHQUFuQixHQUEwQjtBQUM3Q0ksb0JBQU0sRUFBRSxNQURxQztBQUU3Q0MscUJBQU8sRUFBRTtBQUNMLGdDQUFnQixrQkFEWDtBQUVMLGlDQUFpQkg7QUFGWixlQUZvQztBQU03Q0ksa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLE9BQWY7QUFOdUMsYUFBMUIsQ0FBTCxVQU9ULFVBQUFRLEdBQUcsRUFBSTtBQUNaQyxxQkFBTyxDQUFDQyxLQUFSLENBQWMsc0JBQWQsRUFBcUNGLEdBQXJDO0FBQ0gsYUFUaUIsQ0FERTs7QUFBQTtBQUNkRyxlQURjO0FBQUE7QUFBQSxtQkFXREEsR0FBRyxDQUFDQyxJQUFKLEVBWEM7O0FBQUE7QUFXZEMsZ0JBWGM7QUFZcEJKLG1CQUFPLENBQUNLLEdBQVIsQ0FBWSxjQUFaLEVBQTJCRCxJQUFJLENBQUNFLEdBQWhDO0FBWm9CLDZDQWFiRixJQWJhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVJmLFFBQVE7QUFBQTtBQUFBO0FBQUEsR0FBZCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3JtdWxhaXJlLmMxMTY2ZmE4ZTBkMzg2NGQ3ZDBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlVVJMID0gXCJodHRwczovL2NhbWVyb29ubml0ZWNoLnZlcmNlbC5hcHBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0RGF0YSA9IGFzeW5jICh1cmwsIHBheWxvYWQsIHRva2VuKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfS9hcGkvJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZXJyZXVyIGNvdMOpIHNlcnZldXI6JyxlcnIpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coJ21lcyBkb25uZWVlcycsZGF0YS5pbWMpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==