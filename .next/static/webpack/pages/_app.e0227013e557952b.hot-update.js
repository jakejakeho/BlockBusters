"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/NavBar/Discover/Discover.jsx":
/*!*************************************************!*\
  !*** ./components/NavBar/Discover/Discover.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Discover_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Discover.module.css */ \"./components/NavBar/Discover/Discover.module.css\");\n/* harmony import */ var _Discover_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Discover_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n//INTERNAL IMPORT\n\nconst Discover = ()=>{\n    //--------DISCOVER NAVIGATION MENU\n    const discover = [\n        {\n            name: \"Collection\",\n            link: \"collection\"\n        },\n        {\n            name: \"Search\",\n            link: \"searchPage\"\n        },\n        {\n            name: \"Author Profile\",\n            link: \"author\"\n        },\n        {\n            name: \"Blockchain Details\",\n            link: \"Blockchain-details\"\n        },\n        {\n            name: \"Account Setting\",\n            link: \"account\"\n        },\n        {\n            name: \"Upload Game Assets\",\n            link: \"uploadGame Assets\"\n        },\n        {\n            name: \"Connect Wallet\",\n            link: \"connectWallet\"\n        },\n        {\n            name: \"Blog\",\n            link: \"blog\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: discover.map((el, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Discover_module_css__WEBPACK_IMPORTED_MODULE_3___default().discover),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: {\n                        pathname: \"\".concat(el.link)\n                    },\n                    children: el.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\TOSHIBA\\\\Documents\\\\Github\\\\blockbuster_marketplace\\\\components\\\\NavBar\\\\Discover\\\\Discover.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined)\n            }, i + 1, false, {\n                fileName: \"C:\\\\Users\\\\TOSHIBA\\\\Documents\\\\Github\\\\blockbuster_marketplace\\\\components\\\\NavBar\\\\Discover\\\\Discover.jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\TOSHIBA\\\\Documents\\\\Github\\\\blockbuster_marketplace\\\\components\\\\NavBar\\\\Discover\\\\Discover.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Discover;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Discover);\nvar _c;\n$RefreshReg$(_c, \"Discover\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci9EaXNjb3Zlci9EaXNjb3Zlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBRTdCLGlCQUFpQjtBQUN5QjtBQUUxQyxNQUFNRyxXQUFXLElBQU07SUFDckIsa0NBQWtDO0lBQ2xDLE1BQU1DLFdBQVc7UUFDZjtZQUNFQyxNQUFNO1lBQ05DLE1BQU07UUFDUjtRQUNBO1lBQ0VELE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxNQUFNO1lBQ05DLE1BQU07UUFDUjtRQUNBO1lBQ0VELE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxNQUFNO1lBQ05DLE1BQU07UUFDUjtRQUNBO1lBQ0VELE1BQU07WUFDTkMsTUFBTTtRQUNSO0tBQ0Q7SUFDRCxxQkFDRSw4REFBQ0M7a0JBQ0VILFNBQVNJLEdBQUcsQ0FBQyxDQUFDQyxJQUFJQyxrQkFDakIsOERBQUNIO2dCQUFnQkksV0FBV1Qsc0VBQWM7MEJBQ3hDLDRFQUFDRCxrREFBSUE7b0JBQUNXLE1BQU07d0JBQUVDLFVBQVUsR0FBVyxPQUFSSixHQUFHSCxJQUFJO29CQUFHOzhCQUFJRyxHQUFHSixJQUFJOzs7Ozs7ZUFEeENLLElBQUk7Ozs7Ozs7Ozs7QUFNdEI7S0E3Q01QO0FBK0NOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyL0Rpc2NvdmVyL0Rpc2NvdmVyLmpzeD81MTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuLy9JTlRFUk5BTCBJTVBPUlRcclxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL0Rpc2NvdmVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IERpc2NvdmVyID0gKCkgPT4ge1xyXG4gIC8vLS0tLS0tLS1ESVNDT1ZFUiBOQVZJR0FUSU9OIE1FTlVcclxuICBjb25zdCBkaXNjb3ZlciA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDb2xsZWN0aW9uXCIsXHJcbiAgICAgIGxpbms6IFwiY29sbGVjdGlvblwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTZWFyY2hcIixcclxuICAgICAgbGluazogXCJzZWFyY2hQYWdlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkF1dGhvciBQcm9maWxlXCIsXHJcbiAgICAgIGxpbms6IFwiYXV0aG9yXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkJsb2NrY2hhaW4gRGV0YWlsc1wiLFxyXG4gICAgICBsaW5rOiBcIkJsb2NrY2hhaW4tZGV0YWlsc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBY2NvdW50IFNldHRpbmdcIixcclxuICAgICAgbGluazogXCJhY2NvdW50XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlVwbG9hZCBHYW1lIEFzc2V0c1wiLFxyXG4gICAgICBsaW5rOiBcInVwbG9hZEdhbWUgQXNzZXRzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNvbm5lY3QgV2FsbGV0XCIsXHJcbiAgICAgIGxpbms6IFwiY29ubmVjdFdhbGxldFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCbG9nXCIsXHJcbiAgICAgIGxpbms6IFwiYmxvZ1wiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7ZGlzY292ZXIubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpICsgMX0gY2xhc3NOYW1lPXtTdHlsZS5kaXNjb3Zlcn0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgJHtlbC5saW5rfWAgfX0+e2VsLm5hbWV9PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNjb3ZlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlN0eWxlIiwiRGlzY292ZXIiLCJkaXNjb3ZlciIsIm5hbWUiLCJsaW5rIiwiZGl2IiwibWFwIiwiZWwiLCJpIiwiY2xhc3NOYW1lIiwiaHJlZiIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar/Discover/Discover.jsx\n"));

/***/ })

});