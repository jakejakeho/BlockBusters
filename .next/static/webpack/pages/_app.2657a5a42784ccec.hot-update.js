/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./components/NavBar/NavBar.module.css":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./components/NavBar/NavBar.module.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n.NavBar_navbar__Bstg3{\\r\\n    width: 100%;\\r\\n    padding-block: 1.5rem;\\r\\n    position: relative;\\r\\n    z-index: 111111111;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container__BjO6p{\\r\\n    width: 80%;\\r\\n    margin:  0 auto;\\r\\n\\r\\n    display:  grid;\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    grid-gap: 1rem;\\r\\n    gap: 1rem;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_left__2MWYz{\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 2fr;\\r\\n    align-items:  center;\\r\\n}\\r\\n\\r\\n.NavBar_logo__787js{\\r\\n  color: var(--icons-color);\\r\\n  font-size: 4rem;\\r\\n \\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_left_box_input_box__GzTk_{\\r\\n    width: 60%;\\r\\n    border: 1px solid var(--icons-color);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding: .5rem;\\r\\n    border-radius: 2rem;\\r\\n    margin-left: 50px; \\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_left_box_input_box__GzTk_ input{\\r\\n    width: 90%;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    background-color:  transparent;\\r\\n}\\r\\n\\r\\n.NavBar_search_icon__IRkqD{\\r\\n    cursor: pointer;\\r\\n    font-size: 1.4rem;\\r\\n    \\r\\n}\\r\\n\\r\\n/* //-------RIGHT */\\r\\n\\r\\n.NavBar_navbar_container_right__qLj_0{\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr .5fr 1fr .3fr;\\r\\n    grid-gap: 1rem;\\r\\n    gap: 1rem;\\r\\n    align-items: center;\\r\\n    /* align-self: flex-end; */\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_discover__po_Gx{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.NavBar_navbar_container_right_help__2PyMU{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_discover_box__vQwzX,\\r\\n.NavBar_navbar_container_right_help_box___lXZx{\\r\\n    position: absolute;\\r\\n    padding: 1rem .5rem;\\r\\n    box-shadow: var(--box-shadow);\\r\\n    font-size: 1rem;\\r\\n    width: 15rem;\\r\\n    border-radius: 1rem;\\r\\n    background-color: var(--main-bg-color);\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_notify__ERp4L{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.NavBar_notify__3_YyQ{\\r\\n    font-size: 2rem;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_button__zBpLh{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_profile_box__U_K1R{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_profile__OU68y{\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_menuBtn__KEjgz{\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.NavBar_menuIcon__uhdOV{\\r\\n    font-size: 2.5rem;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n/* /////------SIDEBAR */\\r\\n\\r\\n.NavBar_sideBar__Od0jR{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    width: 24rem;\\r\\n    background-color: var(--main-bg-color);\\r\\n    box-shadow: var(--box-shadow);\\r\\n    height: 100vh;\\r\\n    overflow-y: auto;\\r\\n    display: none;\\r\\n    z-index: 11111;\\r\\n}\\r\\n\\r\\n.NavBar_sideBar__Od0jR::-webkit-scrollbar{\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n@media screen and (min-device-width: 320px) and (max-device-width: 768px) {\\r\\n    .NavBar_navbar_container__BjO6p{\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n    }\\r\\n\\r\\n    .NavBar_navbar_container_left__2MWYz{\\r\\n        grid-template-columns: 1fr;\\r\\n    }\\r\\n\\r\\n    .NavBar_navbar_container_right__qLj_0{\\r\\n        grid-template-columns: repeat(3, 1fr);\\r\\n    }\\r\\n\\r\\n    .NavBar_navbar_container_right_menuBtn__KEjgz{\\r\\n        display: block;\\r\\n    }\\r\\n\\r\\n    .NavBar_navbar_container_left_box_input_box__GzTk_{\\r\\n        display: none;\\r\\n    }\\r\\n    .NavBar_navbar_container_right_discover__po_Gx{\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .NavBar_navbar_container_right_help__2PyMU{\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .NavBar_navbar_container_right_button__zBpLh{\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .NavBar_sideBar__Od0jR{\\r\\n        display: block;\\r\\n    }\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/NavBar/NavBar.module.css\"],\"names\":[],\"mappings\":\";AACA;IACI,WAAW;IACX,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,eAAe;;IAEf,cAAc;IACd,qCAAqC;IACrC,mBAAmB;IACnB,8BAA8B;IAC9B,cAAS;IAAT,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA;EACE,yBAAyB;EACzB,eAAe;;AAEjB;;AAEA;IACI,UAAU;IACV,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,iBAAiB;;AAErB;;AAEA,mBAAmB;;AAEnB;IACI,aAAa;IACb,4CAA4C;IAC5C,cAAS;IAAT,SAAS;IACT,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,kBAAkB;IAClB,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA,uBAAuB;;AAEvB;IACI,eAAe;IACf,MAAM;IACN,YAAY;IACZ,sCAAsC;IACtC,6BAA6B;IAC7B,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;QACI,8BAA8B;IAClC;;IAEA;QACI,0BAA0B;IAC9B;;IAEA;QACI,qCAAqC;IACzC;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,cAAc;IAClB;AACJ\",\"sourcesContent\":[\"\\r\\n.navbar{\\r\\n    width: 100%;\\r\\n    padding-block: 1.5rem;\\r\\n    position: relative;\\r\\n    z-index: 111111111;\\r\\n}\\r\\n\\r\\n.navbar_container{\\r\\n    width: 80%;\\r\\n    margin:  0 auto;\\r\\n\\r\\n    display:  grid;\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    gap: 1rem;\\r\\n}\\r\\n\\r\\n.navbar_container_left{\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 2fr;\\r\\n    align-items:  center;\\r\\n}\\r\\n\\r\\n.logo{\\r\\n  color: var(--icons-color);\\r\\n  font-size: 4rem;\\r\\n \\r\\n}\\r\\n\\r\\n.navbar_container_left_box_input_box{\\r\\n    width: 60%;\\r\\n    border: 1px solid var(--icons-color);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding: .5rem;\\r\\n    border-radius: 2rem;\\r\\n    margin-left: 50px; \\r\\n}\\r\\n\\r\\n.navbar_container_left_box_input_box input{\\r\\n    width: 90%;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    background-color:  transparent;\\r\\n}\\r\\n\\r\\n.search_icon{\\r\\n    cursor: pointer;\\r\\n    font-size: 1.4rem;\\r\\n    \\r\\n}\\r\\n\\r\\n/* //-------RIGHT */\\r\\n\\r\\n.navbar_container_right{\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr .5fr 1fr .3fr;\\r\\n    gap: 1rem;\\r\\n    align-items: center;\\r\\n    /* align-self: flex-end; */\\r\\n}\\r\\n\\r\\n.navbar_container_right_discover{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.navbar_container_right_help{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.navbar_container_right_discover_box,\\r\\n.navbar_container_right_help_box{\\r\\n    position: absolute;\\r\\n    padding: 1rem .5rem;\\r\\n    box-shadow: var(--box-shadow);\\r\\n    font-size: 1rem;\\r\\n    width: 15rem;\\r\\n    border-radius: 1rem;\\r\\n    background-color: var(--main-bg-color);\\r\\n}\\r\\n\\r\\n.navbar_container_right_notify{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.notify{\\r\\n    font-size: 2rem;\\r\\n}\\r\\n\\r\\n.navbar_container_right_button{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.navbar_container_right_profile_box{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.navbar_container_right_profile{\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\n.navbar_container_right_menuBtn{\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.menuIcon{\\r\\n    font-size: 2.5rem;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n/* /////------SIDEBAR */\\r\\n\\r\\n.sideBar{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    width: 24rem;\\r\\n    background-color: var(--main-bg-color);\\r\\n    box-shadow: var(--box-shadow);\\r\\n    height: 100vh;\\r\\n    overflow-y: auto;\\r\\n    display: none;\\r\\n    z-index: 11111;\\r\\n}\\r\\n\\r\\n.sideBar::-webkit-scrollbar{\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n@media screen and (min-device-width: 320px) and (max-device-width: 768px) {\\r\\n    .navbar_container{\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n    }\\r\\n\\r\\n    .navbar_container_left{\\r\\n        grid-template-columns: 1fr;\\r\\n    }\\r\\n\\r\\n    .navbar_container_right{\\r\\n        grid-template-columns: repeat(3, 1fr);\\r\\n    }\\r\\n\\r\\n    .navbar_container_right_menuBtn{\\r\\n        display: block;\\r\\n    }\\r\\n\\r\\n    .navbar_container_left_box_input_box{\\r\\n        display: none;\\r\\n    }\\r\\n    .navbar_container_right_discover{\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .navbar_container_right_help{\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .navbar_container_right_button{\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .sideBar{\\r\\n        display: block;\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"navbar\": \"NavBar_navbar__Bstg3\",\n\t\"navbar_container\": \"NavBar_navbar_container__BjO6p\",\n\t\"navbar_container_left\": \"NavBar_navbar_container_left__2MWYz\",\n\t\"logo\": \"NavBar_logo__787js\",\n\t\"navbar_container_left_box_input_box\": \"NavBar_navbar_container_left_box_input_box__GzTk_\",\n\t\"search_icon\": \"NavBar_search_icon__IRkqD\",\n\t\"navbar_container_right\": \"NavBar_navbar_container_right__qLj_0\",\n\t\"navbar_container_right_discover\": \"NavBar_navbar_container_right_discover__po_Gx\",\n\t\"navbar_container_right_help\": \"NavBar_navbar_container_right_help__2PyMU\",\n\t\"navbar_container_right_discover_box\": \"NavBar_navbar_container_right_discover_box__vQwzX\",\n\t\"navbar_container_right_help_box\": \"NavBar_navbar_container_right_help_box___lXZx\",\n\t\"navbar_container_right_notify\": \"NavBar_navbar_container_right_notify__ERp4L\",\n\t\"notify\": \"NavBar_notify__3_YyQ\",\n\t\"navbar_container_right_button\": \"NavBar_navbar_container_right_button__zBpLh\",\n\t\"navbar_container_right_profile_box\": \"NavBar_navbar_container_right_profile_box__U_K1R\",\n\t\"navbar_container_right_profile\": \"NavBar_navbar_container_right_profile__OU68y\",\n\t\"navbar_container_right_menuBtn\": \"NavBar_navbar_container_right_menuBtn__KEjgz\",\n\t\"menuIcon\": \"NavBar_menuIcon__uhdOV\",\n\t\"sideBar\": \"NavBar_sideBar__Od0jR\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUg7QUFDQTtBQUNBLG9FQUFvRSxvQkFBb0IsOEJBQThCLDJCQUEyQiwyQkFBMkIsS0FBSyx3Q0FBd0MsbUJBQW1CLHdCQUF3QiwyQkFBMkIsOENBQThDLDRCQUE0Qix1Q0FBdUMsdUJBQXVCLGtCQUFrQixLQUFLLDZDQUE2QyxzQkFBc0IsdUNBQXVDLDZCQUE2QixLQUFLLDRCQUE0QixnQ0FBZ0Msc0JBQXNCLFVBQVUsMkRBQTJELG1CQUFtQiw2Q0FBNkMsc0JBQXNCLDRCQUE0Qix1QkFBdUIsNEJBQTRCLDJCQUEyQixLQUFLLGlFQUFpRSxtQkFBbUIscUJBQXFCLHNCQUFzQix1Q0FBdUMsS0FBSyxtQ0FBbUMsd0JBQXdCLDBCQUEwQixhQUFhLDBFQUEwRSxzQkFBc0IscURBQXFELHVCQUF1QixrQkFBa0IsNEJBQTRCLGlDQUFpQyxPQUFPLHVEQUF1RCwyQkFBMkIsd0JBQXdCLEtBQUssK0NBQStDLDJCQUEyQix3QkFBd0IsS0FBSyw4R0FBOEcsMkJBQTJCLDRCQUE0QixzQ0FBc0Msd0JBQXdCLHFCQUFxQiw0QkFBNEIsK0NBQStDLEtBQUsscURBQXFELDJCQUEyQix3QkFBd0IsS0FBSyw4QkFBOEIsd0JBQXdCLEtBQUsscURBQXFELDJCQUEyQix3QkFBd0IsS0FBSywwREFBMEQsMkJBQTJCLHdCQUF3QixL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RCxTQUFTLDRDQUE0QywyQkFBMkIsU0FBUyxpREFBaUQsMEJBQTBCLFNBQVMseUNBQXlDLDBCQUEwQixTQUFTLHlDQUF5QywwQkFBMEIsU0FBUywyQ0FBMkMsMEJBQTBCLFNBQVMscUJBQXFCLDJCQUEyQixTQUFTLEtBQUssbUJBQW1CO0FBQ3JsUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5tb2R1bGUuY3NzP2FjMmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi5OYXZCYXJfbmF2YmFyX19Cc3RnM3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDEuNXJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxMTExMTExMTE7XFxyXFxufVxcclxcblxcclxcbi5OYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9fQmpPNnB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1hcmdpbjogIDAgYXV0bztcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogIGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX2xlZnRfXzJNV1l6e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiAgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2QmFyX2xvZ29fXzc4N2pze1xcclxcbiAgY29sb3I6IHZhcigtLWljb25zLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gXFxyXFxufVxcclxcblxcclxcbi5OYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9sZWZ0X2JveF9pbnB1dF9ib3hfX0d6VGtfe1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pY29ucy1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDsgXFxyXFxufVxcclxcblxcclxcbi5OYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9sZWZ0X2JveF9pbnB1dF9ib3hfX0d6VGtfIGlucHV0e1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLk5hdkJhcl9zZWFyY2hfaWNvbl9fSVJrcUR7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy0tLS0tLS1SSUdIVCAqL1xcclxcblxcclxcbi5OYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9fcUxqXzB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAuNWZyIDFmciAuM2ZyO1xcclxcbiAgICBncmlkLWdhcDogMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAvKiBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2Rpc2NvdmVyX19wb19HeHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5OYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9oZWxwX18yUHlNVXtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5OYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9kaXNjb3Zlcl9ib3hfX3ZRd3pYLFxcclxcbi5OYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9oZWxwX2JveF9fX2xYWnh7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X25vdGlmeV9fRVJwNEx7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2QmFyX25vdGlmeV9fM19ZeVF7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2J1dHRvbl9fekJwTGh7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfcHJvZmlsZV9ib3hfX1VfSzFSe1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X3Byb2ZpbGVfX09VNjh5e1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5OYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9tZW51QnRuX19LRWpnentcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLk5hdkJhcl9tZW51SWNvbl9fdWhkT1Z7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIC8vLy8vLS0tLS0tU0lERUJBUiAqL1xcclxcblxcclxcbi5OYXZCYXJfc2lkZUJhcl9fT2QwalJ7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMjRyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgei1pbmRleDogMTExMTE7XFxyXFxufVxcclxcblxcclxcbi5OYXZCYXJfc2lkZUJhcl9fT2QwalI6Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX19Cak82cHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuTmF2QmFyX25hdmJhcl9jb250YWluZXJfbGVmdF9fMk1XWXp7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfX3FMal8we1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfbWVudUJ0bl9fS0VqZ3p7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuTmF2QmFyX25hdmJhcl9jb250YWluZXJfbGVmdF9ib3hfaW5wdXRfYm94X19HelRrX3tcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2Rpc2NvdmVyX19wb19HeHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2hlbHBfXzJQeU1Ve1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfYnV0dG9uX196QnBMaHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLk5hdkJhcl9zaWRlQmFyX19PZDBqUntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL05hdkJhci9OYXZCYXIubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTs7SUFFZixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsY0FBUztJQUFULFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsb0JBQW9CO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7O0FBRWpCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsY0FBUztJQUFULFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUEsdUJBQXVCOztBQUV2QjtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sWUFBWTtJQUNaLHNDQUFzQztJQUN0Qyw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLHFDQUFxQztJQUN6Qzs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLm5hdmJhcntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDEuNXJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxMTExMTExMTE7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfY29udGFpbmVye1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW46ICAwIGF1dG87XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6ICBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9jb250YWluZXJfbGVmdHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcclxcbiAgICBhbGlnbi1pdGVtczogIGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ297XFxyXFxuICBjb2xvcjogdmFyKC0taWNvbnMtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9jb250YWluZXJfbGVmdF9ib3hfaW5wdXRfYm94e1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pY29ucy1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDsgXFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfY29udGFpbmVyX2xlZnRfYm94X2lucHV0X2JveCBpbnB1dHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hfaWNvbntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi8qIC8vLS0tLS0tLVJJR0hUICovXFxyXFxuXFxyXFxuLm5hdmJhcl9jb250YWluZXJfcmlnaHR7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAuNWZyIDFmciAuM2ZyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC8qIGFsaWduLXNlbGY6IGZsZXgtZW5kOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX2NvbnRhaW5lcl9yaWdodF9kaXNjb3ZlcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2hlbHB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX2NvbnRhaW5lcl9yaWdodF9kaXNjb3Zlcl9ib3gsXFxyXFxuLm5hdmJhcl9jb250YWluZXJfcmlnaHRfaGVscF9ib3h7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9jb250YWluZXJfcmlnaHRfbm90aWZ5e1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGlmeXtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX2NvbnRhaW5lcl9yaWdodF9idXR0b257XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX2NvbnRhaW5lcl9yaWdodF9wcm9maWxlX2JveHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfY29udGFpbmVyX3JpZ2h0X3Byb2ZpbGV7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9jb250YWluZXJfcmlnaHRfbWVudUJ0bntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJY29ue1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy0tLS0tLVNJREVCQVIgKi9cXHJcXG5cXHJcXG4uc2lkZUJhcntcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAyNHJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB6LWluZGV4OiAxMTExMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVCYXI6Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLm5hdmJhcl9jb250YWluZXJ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmJhcl9jb250YWluZXJfbGVmdHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZiYXJfY29udGFpbmVyX3JpZ2h0e1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2YmFyX2NvbnRhaW5lcl9yaWdodF9tZW51QnRue1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmJhcl9jb250YWluZXJfbGVmdF9ib3hfaW5wdXRfYm94e1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyX2NvbnRhaW5lcl9yaWdodF9kaXNjb3ZlcntcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmJhcl9jb250YWluZXJfcmlnaHRfaGVscHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmJhcl9jb250YWluZXJfcmlnaHRfYnV0dG9ue1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lkZUJhcntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm5hdmJhclwiOiBcIk5hdkJhcl9uYXZiYXJfX0JzdGczXCIsXG5cdFwibmF2YmFyX2NvbnRhaW5lclwiOiBcIk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX19Cak82cFwiLFxuXHRcIm5hdmJhcl9jb250YWluZXJfbGVmdFwiOiBcIk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX2xlZnRfXzJNV1l6XCIsXG5cdFwibG9nb1wiOiBcIk5hdkJhcl9sb2dvX183ODdqc1wiLFxuXHRcIm5hdmJhcl9jb250YWluZXJfbGVmdF9ib3hfaW5wdXRfYm94XCI6IFwiTmF2QmFyX25hdmJhcl9jb250YWluZXJfbGVmdF9ib3hfaW5wdXRfYm94X19HelRrX1wiLFxuXHRcInNlYXJjaF9pY29uXCI6IFwiTmF2QmFyX3NlYXJjaF9pY29uX19JUmtxRFwiLFxuXHRcIm5hdmJhcl9jb250YWluZXJfcmlnaHRcIjogXCJOYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9fcUxqXzBcIixcblx0XCJuYXZiYXJfY29udGFpbmVyX3JpZ2h0X2Rpc2NvdmVyXCI6IFwiTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfZGlzY292ZXJfX3BvX0d4XCIsXG5cdFwibmF2YmFyX2NvbnRhaW5lcl9yaWdodF9oZWxwXCI6IFwiTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfaGVscF9fMlB5TVVcIixcblx0XCJuYXZiYXJfY29udGFpbmVyX3JpZ2h0X2Rpc2NvdmVyX2JveFwiOiBcIk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2Rpc2NvdmVyX2JveF9fdlF3elhcIixcblx0XCJuYXZiYXJfY29udGFpbmVyX3JpZ2h0X2hlbHBfYm94XCI6IFwiTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfaGVscF9ib3hfX19sWFp4XCIsXG5cdFwibmF2YmFyX2NvbnRhaW5lcl9yaWdodF9ub3RpZnlcIjogXCJOYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9ub3RpZnlfX0VScDRMXCIsXG5cdFwibm90aWZ5XCI6IFwiTmF2QmFyX25vdGlmeV9fM19ZeVFcIixcblx0XCJuYXZiYXJfY29udGFpbmVyX3JpZ2h0X2J1dHRvblwiOiBcIk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2J1dHRvbl9fekJwTGhcIixcblx0XCJuYXZiYXJfY29udGFpbmVyX3JpZ2h0X3Byb2ZpbGVfYm94XCI6IFwiTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfcHJvZmlsZV9ib3hfX1VfSzFSXCIsXG5cdFwibmF2YmFyX2NvbnRhaW5lcl9yaWdodF9wcm9maWxlXCI6IFwiTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfcHJvZmlsZV9fT1U2OHlcIixcblx0XCJuYXZiYXJfY29udGFpbmVyX3JpZ2h0X21lbnVCdG5cIjogXCJOYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9tZW51QnRuX19LRWpnelwiLFxuXHRcIm1lbnVJY29uXCI6IFwiTmF2QmFyX21lbnVJY29uX191aGRPVlwiLFxuXHRcInNpZGVCYXJcIjogXCJOYXZCYXJfc2lkZUJhcl9fT2QwalJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./components/NavBar/NavBar.module.css\n"));

/***/ })

});