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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n.NavBar_navbar__Bstg3{\\r\\n    width: 100%;\\r\\n    padding-block: 1.5rem;\\r\\n    position: relative;\\r\\n    z-index: 111111111;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container__BjO6p{\\r\\n    width: 80%;\\r\\n    margin:  0 auto;\\r\\n\\r\\n    display:  grid;\\r\\n    display: inline-grid; \\r\\n    /* self added */\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    grid-gap: 1rem;\\r\\n    gap: 1rem;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_left__2MWYz{\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 2fr;\\r\\n    align-items:  center;\\r\\n}\\r\\n\\r\\n.NavBar_logo__787js{\\r\\n  color: var(--icons-color);\\r\\n  font-size: 4rem;\\r\\n  padding-top: 20px; /* self added */\\r\\n \\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_left_box_input_box__GzTk_{\\r\\n    width: 60%;\\r\\n    border: 1px solid var(--icons-color);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding: .5rem;\\r\\n    border-radius: 2rem;\\r\\n    margin-left: 50px; \\r\\n    /* above line self added */\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_left_box_input_box__GzTk_ input{\\r\\n    width: 90%;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    background-color:  transparent;\\r\\n}\\r\\n\\r\\n.NavBar_search_icon__IRkqD{\\r\\n    cursor: pointer;\\r\\n    font-size: 1.4rem;\\r\\n    \\r\\n}\\r\\n\\r\\n/* //-------RIGHT */\\r\\n\\r\\n.NavBar_navbar_container_right__qLj_0{\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\\r\\n    grid-gap: 1rem;\\r\\n    gap: 1rem;\\r\\n    align-items: center;\\r\\n    /* align-self: flex-end; */\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_discover__po_Gx{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.NavBar_navbar_container_right_help__2PyMU{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_discover_box__vQwzX,\\r\\n.NavBar_navbar_container_right_help_box___lXZx{\\r\\n    position: absolute;\\r\\n    padding: 1rem .5rem;\\r\\n    box-shadow: var(--box-shadow);\\r\\n    font-size: 1rem;\\r\\n    width: 15rem;\\r\\n    border-radius: 1rem;\\r\\n    background-color: var(--main-bg-color);\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_notify__ERp4L{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n    /* display: none;  */\\r\\n    /* self added */\\r\\n}\\r\\n\\r\\n.NavBar_notify__3_YyQ{\\r\\n    font-size: 2rem;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_button__zBpLh{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_profile_box__U_K1R{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_profile__OU68y{\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\n.NavBar_navbar_container_right_menuBtn__KEjgz{\\r\\n    /* display: none; */\\r\\n\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n    \\r\\n\\r\\n}\\r\\n\\r\\n.NavBar_menuIcon__uhdOV{\\r\\n    font-size: 2.5rem;\\r\\n    cursor: pointer;\\r\\n\\r\\n}\\r\\n\\r\\n/* /////------SIDEBAR */\\r\\n\\r\\n.NavBar_sideBar__Od0jR{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    width: 24rem;\\r\\n    background-color: var(--main-bg-color);\\r\\n    box-shadow: var(--box-shadow);\\r\\n    height: 100vh;\\r\\n    overflow-y: auto;\\r\\n    /* display: none; */\\r\\n    z-index: 11111;\\r\\n}\\r\\n\\r\\n.NavBar_sideBar__Od0jR::-webkit-scrollbar{\\r\\n    /* display: none; */\\r\\n}\\r\\n\\r\\n@media screen and (min-device-width: 320px) and (max-device-width: 768px) {\\r\\n    .NavBar_navbar_container__BjO6p{\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n    }\\r\\n\\r\\n    .NavBar_navbar_container_left__2MWYz{\\r\\n        grid-template-columns: 1fr;\\r\\n    }\\r\\n\\r\\n    .NavBar_navbar_container_right__qLj_0{\\r\\n        grid-template-columns: repeat(3, 1fr);\\r\\n    }\\r\\n\\r\\n    .NavBar_navbar_container_right_menuBtn__KEjgz{\\r\\n        display: block;\\r\\n\\r\\n    }\\r\\n\\r\\n    .NavBar_navbar_container_left_box_input_box__GzTk_{\\r\\n        display: none;\\r\\n    }\\r\\n    .NavBar_navbar_container_right_discover__po_Gx{\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .NavBar_navbar_container_right_help__2PyMU{\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .NavBar_navbar_container_right_button__zBpLh{\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .NavBar_sideBar__Od0jR{\\r\\n        display: block;\\r\\n    }\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/NavBar/NavBar.module.css\"],\"names\":[],\"mappings\":\";AACA;IACI,WAAW;IACX,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,eAAe;;IAEf,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,qCAAqC;IACrC,mBAAmB;IACnB,8BAA8B;IAC9B,cAAS;IAAT,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,iBAAiB,EAAE,eAAe;;AAEpC;;AAEA;IACI,UAAU;IACV,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,mBAAmB;IACnB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,iBAAiB;;AAErB;;AAEA,mBAAmB;;AAEnB;IACI,aAAa;IACb,8CAA8C;IAC9C,cAAS;IAAT,SAAS;IACT,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,kBAAkB;IAClB,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;;IAEnB,kBAAkB;IAClB,eAAe;;;AAGnB;;AAEA;IACI,iBAAiB;IACjB,eAAe;;AAEnB;;AAEA,uBAAuB;;AAEvB;IACI,eAAe;IACf,MAAM;IACN,YAAY;IACZ,sCAAsC;IACtC,6BAA6B;IAC7B,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI;QACI,8BAA8B;IAClC;;IAEA;QACI,0BAA0B;IAC9B;;IAEA;QACI,qCAAqC;IACzC;;IAEA;QACI,cAAc;;IAElB;;IAEA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,cAAc;IAClB;AACJ\",\"sourcesContent\":[\"\\r\\n.navbar{\\r\\n    width: 100%;\\r\\n    padding-block: 1.5rem;\\r\\n    position: relative;\\r\\n    z-index: 111111111;\\r\\n}\\r\\n\\r\\n.navbar_container{\\r\\n    width: 80%;\\r\\n    margin:  0 auto;\\r\\n\\r\\n    display:  grid;\\r\\n    display: inline-grid; \\r\\n    /* self added */\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    gap: 1rem;\\r\\n}\\r\\n\\r\\n.navbar_container_left{\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 2fr;\\r\\n    align-items:  center;\\r\\n}\\r\\n\\r\\n.logo{\\r\\n  color: var(--icons-color);\\r\\n  font-size: 4rem;\\r\\n  padding-top: 20px; /* self added */\\r\\n \\r\\n}\\r\\n\\r\\n.navbar_container_left_box_input_box{\\r\\n    width: 60%;\\r\\n    border: 1px solid var(--icons-color);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding: .5rem;\\r\\n    border-radius: 2rem;\\r\\n    margin-left: 50px; \\r\\n    /* above line self added */\\r\\n}\\r\\n\\r\\n.navbar_container_left_box_input_box input{\\r\\n    width: 90%;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    background-color:  transparent;\\r\\n}\\r\\n\\r\\n.search_icon{\\r\\n    cursor: pointer;\\r\\n    font-size: 1.4rem;\\r\\n    \\r\\n}\\r\\n\\r\\n/* //-------RIGHT */\\r\\n\\r\\n.navbar_container_right{\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\\r\\n    gap: 1rem;\\r\\n    align-items: center;\\r\\n    /* align-self: flex-end; */\\r\\n}\\r\\n\\r\\n.navbar_container_right_discover{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.navbar_container_right_help{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.navbar_container_right_discover_box,\\r\\n.navbar_container_right_help_box{\\r\\n    position: absolute;\\r\\n    padding: 1rem .5rem;\\r\\n    box-shadow: var(--box-shadow);\\r\\n    font-size: 1rem;\\r\\n    width: 15rem;\\r\\n    border-radius: 1rem;\\r\\n    background-color: var(--main-bg-color);\\r\\n}\\r\\n\\r\\n.navbar_container_right_notify{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n    /* display: none;  */\\r\\n    /* self added */\\r\\n}\\r\\n\\r\\n.notify{\\r\\n    font-size: 2rem;\\r\\n}\\r\\n\\r\\n.navbar_container_right_button{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.navbar_container_right_profile_box{\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.navbar_container_right_profile{\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\n.navbar_container_right_menuBtn{\\r\\n    /* display: none; */\\r\\n\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n    \\r\\n\\r\\n}\\r\\n\\r\\n.menuIcon{\\r\\n    font-size: 2.5rem;\\r\\n    cursor: pointer;\\r\\n\\r\\n}\\r\\n\\r\\n/* /////------SIDEBAR */\\r\\n\\r\\n.sideBar{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    width: 24rem;\\r\\n    background-color: var(--main-bg-color);\\r\\n    box-shadow: var(--box-shadow);\\r\\n    height: 100vh;\\r\\n    overflow-y: auto;\\r\\n    /* display: none; */\\r\\n    z-index: 11111;\\r\\n}\\r\\n\\r\\n.sideBar::-webkit-scrollbar{\\r\\n    /* display: none; */\\r\\n}\\r\\n\\r\\n@media screen and (min-device-width: 320px) and (max-device-width: 768px) {\\r\\n    .navbar_container{\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n    }\\r\\n\\r\\n    .navbar_container_left{\\r\\n        grid-template-columns: 1fr;\\r\\n    }\\r\\n\\r\\n    .navbar_container_right{\\r\\n        grid-template-columns: repeat(3, 1fr);\\r\\n    }\\r\\n\\r\\n    .navbar_container_right_menuBtn{\\r\\n        display: block;\\r\\n\\r\\n    }\\r\\n\\r\\n    .navbar_container_left_box_input_box{\\r\\n        display: none;\\r\\n    }\\r\\n    .navbar_container_right_discover{\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .navbar_container_right_help{\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .navbar_container_right_button{\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .sideBar{\\r\\n        display: block;\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"navbar\": \"NavBar_navbar__Bstg3\",\n\t\"navbar_container\": \"NavBar_navbar_container__BjO6p\",\n\t\"navbar_container_left\": \"NavBar_navbar_container_left__2MWYz\",\n\t\"logo\": \"NavBar_logo__787js\",\n\t\"navbar_container_left_box_input_box\": \"NavBar_navbar_container_left_box_input_box__GzTk_\",\n\t\"search_icon\": \"NavBar_search_icon__IRkqD\",\n\t\"navbar_container_right\": \"NavBar_navbar_container_right__qLj_0\",\n\t\"navbar_container_right_discover\": \"NavBar_navbar_container_right_discover__po_Gx\",\n\t\"navbar_container_right_help\": \"NavBar_navbar_container_right_help__2PyMU\",\n\t\"navbar_container_right_discover_box\": \"NavBar_navbar_container_right_discover_box__vQwzX\",\n\t\"navbar_container_right_help_box\": \"NavBar_navbar_container_right_help_box___lXZx\",\n\t\"navbar_container_right_notify\": \"NavBar_navbar_container_right_notify__ERp4L\",\n\t\"notify\": \"NavBar_notify__3_YyQ\",\n\t\"navbar_container_right_button\": \"NavBar_navbar_container_right_button__zBpLh\",\n\t\"navbar_container_right_profile_box\": \"NavBar_navbar_container_right_profile_box__U_K1R\",\n\t\"navbar_container_right_profile\": \"NavBar_navbar_container_right_profile__OU68y\",\n\t\"navbar_container_right_menuBtn\": \"NavBar_navbar_container_right_menuBtn__KEjgz\",\n\t\"menuIcon\": \"NavBar_menuIcon__uhdOV\",\n\t\"sideBar\": \"NavBar_sideBar__Od0jR\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUg7QUFDQTtBQUNBLG9FQUFvRSxvQkFBb0IsOEJBQThCLDJCQUEyQiwyQkFBMkIsS0FBSyx3Q0FBd0MsbUJBQW1CLHdCQUF3QiwyQkFBMkIsOEJBQThCLHNFQUFzRSw0QkFBNEIsdUNBQXVDLHVCQUF1QixrQkFBa0IsS0FBSyw2Q0FBNkMsc0JBQXNCLHVDQUF1Qyw2QkFBNkIsS0FBSyw0QkFBNEIsZ0NBQWdDLHNCQUFzQix5QkFBeUIsMEJBQTBCLDJEQUEyRCxtQkFBbUIsNkNBQTZDLHNCQUFzQiw0QkFBNEIsdUJBQXVCLDRCQUE0QiwyQkFBMkIsd0NBQXdDLGlFQUFpRSxtQkFBbUIscUJBQXFCLHNCQUFzQix1Q0FBdUMsS0FBSyxtQ0FBbUMsd0JBQXdCLDBCQUEwQixhQUFhLDBFQUEwRSxzQkFBc0IsdURBQXVELHVCQUF1QixrQkFBa0IsNEJBQTRCLGlDQUFpQyxPQUFPLHVEQUF1RCwyQkFBMkIsd0JBQXdCLEtBQUssK0NBQStDLDJCQUEyQix3QkFBd0IsS0FBSyw4R0FBOEcsMkJBQTJCLDRCQUE0QixzQ0FBc0Msd0JBQXdCLHFCQUFxQiw0QkFBNEIsK0NBQStDLEtBQUsscURBQXFELDJCQUEyQix3QkFBd0IsMkJBQTJCLCtCQUErQiw4QkFBOEIsd0JBQXdCLEtBQUsscURBQXFELDJCQUEyQix3QkFBd0Is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QUFxQiwrQ0FBK0Msc0NBQXNDLHNCQUFzQix5QkFBeUIsMEJBQTBCLHlCQUF5QixLQUFLLG9DQUFvQywwQkFBMEIsT0FBTyxtRkFBbUYsMEJBQTBCLDJDQUEyQyxTQUFTLG1DQUFtQyx1Q0FBdUMsU0FBUyxvQ0FBb0Msa0RBQWtELFNBQVMsNENBQTRDLDJCQUEyQixhQUFhLGlEQUFpRCwwQkFBMEIsU0FBUyx5Q0FBeUMsMEJBQTBCLFNBQVMseUNBQXlDLDBCQUEwQixTQUFTLDJDQUEyQywwQkFBMEIsU0FBUyxxQkFBcUIsMkJBQTJCLFNBQVMsS0FBSyxtQkFBbUI7QUFDdHZTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLm1vZHVsZS5jc3M/YWMyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLk5hdkJhcl9uYXZiYXJfX0JzdGcze1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMS41cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDExMTExMTExMTtcXHJcXG59XFxyXFxuXFxyXFxuLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX19Cak82cHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWFyZ2luOiAgMCBhdXRvO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiAgZ3JpZDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7IFxcclxcbiAgICAvKiBzZWxmIGFkZGVkICovXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX2xlZnRfXzJNV1l6e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiAgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2QmFyX2xvZ29fXzc4N2pze1xcclxcbiAgY29sb3I6IHZhcigtLWljb25zLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4OyAvKiBzZWxmIGFkZGVkICovXFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4uTmF2QmFyX25hdmJhcl9jb250YWluZXJfbGVmdF9ib3hfaW5wdXRfYm94X19HelRrX3tcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taWNvbnMtY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7IFxcclxcbiAgICAvKiBhYm92ZSBsaW5lIHNlbGYgYWRkZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX2xlZnRfYm94X2lucHV0X2JveF9fR3pUa18gaW5wdXR7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2QmFyX3NlYXJjaF9pY29uX19JUmtxRHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi8qIC8vLS0tLS0tLVJJR0hUICovXFxyXFxuXFxyXFxuLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X19xTGpfMHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLyogYWxpZ24tc2VsZjogZmxleC1lbmQ7ICovXFxyXFxufVxcclxcblxcclxcbi5OYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9kaXNjb3Zlcl9fcG9fR3h7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfaGVscF9fMlB5TVV7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfZGlzY292ZXJfYm94X192UXd6WCxcXHJcXG4uTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfaGVscF9ib3hfX19sWFp4e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gLjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5OYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9ub3RpZnlfX0VScDRMe1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTsgICovXFxyXFxuICAgIC8qIHNlbGYgYWRkZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLk5hdkJhcl9ub3RpZnlfXzNfWXlRe1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5OYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9idXR0b25fX3pCcExoe1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X3Byb2ZpbGVfYm94X19VX0sxUntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5OYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9wcm9maWxlX19PVTY4eXtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfbWVudUJ0bl9fS0VqZ3p7XFxyXFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLk5hdkJhcl9tZW51SWNvbl9fdWhkT1Z7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIC8vLy8vLS0tLS0tU0lERUJBUiAqL1xcclxcblxcclxcbi5OYXZCYXJfc2lkZUJhcl9fT2QwalJ7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMjRyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG4gICAgei1pbmRleDogMTExMTE7XFxyXFxufVxcclxcblxcclxcbi5OYXZCYXJfc2lkZUJhcl9fT2QwalI6Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX19Cak82cHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuTmF2QmFyX25hdmJhcl9jb250YWluZXJfbGVmdF9fMk1XWXp7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfX3FMal8we1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfbWVudUJ0bl9fS0VqZ3p7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuTmF2QmFyX25hdmJhcl9jb250YWluZXJfbGVmdF9ib3hfaW5wdXRfYm94X19HelRrX3tcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2Rpc2NvdmVyX19wb19HeHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2hlbHBfXzJQeU1Ve1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfYnV0dG9uX196QnBMaHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLk5hdkJhcl9zaWRlQmFyX19PZDBqUntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL05hdkJhci9OYXZCYXIubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTs7SUFFZixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixjQUFTO0lBQVQsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQkFBb0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQixFQUFFLGVBQWU7O0FBRXBDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLGNBQVM7SUFBVCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7O0lBRW5CLGtCQUFrQjtJQUNsQixlQUFlOzs7QUFHbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTs7QUFFbkI7O0FBRUEsdUJBQXVCOztBQUV2QjtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sWUFBWTtJQUNaLHNDQUFzQztJQUN0Qyw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0kscUNBQXFDO0lBQ3pDOztJQUVBO1FBQ0ksY0FBYzs7SUFFbEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLm5hdmJhcntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDEuNXJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxMTExMTExMTE7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfY29udGFpbmVye1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW46ICAwIGF1dG87XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6ICBncmlkO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDsgXFxyXFxuICAgIC8qIHNlbGYgYWRkZWQgKi9cXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfY29udGFpbmVyX2xlZnR7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6ICBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dve1xcclxcbiAgY29sb3I6IHZhcigtLWljb25zLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4OyAvKiBzZWxmIGFkZGVkICovXFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX2NvbnRhaW5lcl9sZWZ0X2JveF9pbnB1dF9ib3h7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWljb25zLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4OyBcXHJcXG4gICAgLyogYWJvdmUgbGluZSBzZWxmIGFkZGVkICovXFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfY29udGFpbmVyX2xlZnRfYm94X2lucHV0X2JveCBpbnB1dHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hfaWNvbntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi8qIC8vLS0tLS0tLVJJR0hUICovXFxyXFxuXFxyXFxuLm5hdmJhcl9jb250YWluZXJfcmlnaHR7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLyogYWxpZ24tc2VsZjogZmxleC1lbmQ7ICovXFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2Rpc2NvdmVye1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLm5hdmJhcl9jb250YWluZXJfcmlnaHRfaGVscHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2Rpc2NvdmVyX2JveCxcXHJcXG4ubmF2YmFyX2NvbnRhaW5lcl9yaWdodF9oZWxwX2JveHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX2NvbnRhaW5lcl9yaWdodF9ub3RpZnl7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAvKiBkaXNwbGF5OiBub25lOyAgKi9cXHJcXG4gICAgLyogc2VsZiBhZGRlZCAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubm90aWZ5e1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2J1dHRvbntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfY29udGFpbmVyX3JpZ2h0X3Byb2ZpbGVfYm94e1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9jb250YWluZXJfcmlnaHRfcHJvZmlsZXtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX2NvbnRhaW5lcl9yaWdodF9tZW51QnRue1xcclxcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5tZW51SWNvbntcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vLy8tLS0tLS1TSURFQkFSICovXFxyXFxuXFxyXFxuLnNpZGVCYXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMjRyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG4gICAgei1pbmRleDogMTExMTE7XFxyXFxufVxcclxcblxcclxcbi5zaWRlQmFyOjotd2Via2l0LXNjcm9sbGJhcntcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC5uYXZiYXJfY29udGFpbmVye1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZiYXJfY29udGFpbmVyX2xlZnR7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2YmFyX2NvbnRhaW5lcl9yaWdodHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmJhcl9jb250YWluZXJfcmlnaHRfbWVudUJ0bntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZiYXJfY29udGFpbmVyX2xlZnRfYm94X2lucHV0X2JveHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhcl9jb250YWluZXJfcmlnaHRfZGlzY292ZXJ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2hlbHB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2J1dHRvbntcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpZGVCYXJ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJuYXZiYXJcIjogXCJOYXZCYXJfbmF2YmFyX19Cc3RnM1wiLFxuXHRcIm5hdmJhcl9jb250YWluZXJcIjogXCJOYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9fQmpPNnBcIixcblx0XCJuYXZiYXJfY29udGFpbmVyX2xlZnRcIjogXCJOYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9sZWZ0X18yTVdZelwiLFxuXHRcImxvZ29cIjogXCJOYXZCYXJfbG9nb19fNzg3anNcIixcblx0XCJuYXZiYXJfY29udGFpbmVyX2xlZnRfYm94X2lucHV0X2JveFwiOiBcIk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX2xlZnRfYm94X2lucHV0X2JveF9fR3pUa19cIixcblx0XCJzZWFyY2hfaWNvblwiOiBcIk5hdkJhcl9zZWFyY2hfaWNvbl9fSVJrcURcIixcblx0XCJuYXZiYXJfY29udGFpbmVyX3JpZ2h0XCI6IFwiTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfX3FMal8wXCIsXG5cdFwibmF2YmFyX2NvbnRhaW5lcl9yaWdodF9kaXNjb3ZlclwiOiBcIk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2Rpc2NvdmVyX19wb19HeFwiLFxuXHRcIm5hdmJhcl9jb250YWluZXJfcmlnaHRfaGVscFwiOiBcIk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2hlbHBfXzJQeU1VXCIsXG5cdFwibmF2YmFyX2NvbnRhaW5lcl9yaWdodF9kaXNjb3Zlcl9ib3hcIjogXCJOYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9kaXNjb3Zlcl9ib3hfX3ZRd3pYXCIsXG5cdFwibmF2YmFyX2NvbnRhaW5lcl9yaWdodF9oZWxwX2JveFwiOiBcIk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X2hlbHBfYm94X19fbFhaeFwiLFxuXHRcIm5hdmJhcl9jb250YWluZXJfcmlnaHRfbm90aWZ5XCI6IFwiTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfbm90aWZ5X19FUnA0TFwiLFxuXHRcIm5vdGlmeVwiOiBcIk5hdkJhcl9ub3RpZnlfXzNfWXlRXCIsXG5cdFwibmF2YmFyX2NvbnRhaW5lcl9yaWdodF9idXR0b25cIjogXCJOYXZCYXJfbmF2YmFyX2NvbnRhaW5lcl9yaWdodF9idXR0b25fX3pCcExoXCIsXG5cdFwibmF2YmFyX2NvbnRhaW5lcl9yaWdodF9wcm9maWxlX2JveFwiOiBcIk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X3Byb2ZpbGVfYm94X19VX0sxUlwiLFxuXHRcIm5hdmJhcl9jb250YWluZXJfcmlnaHRfcHJvZmlsZVwiOiBcIk5hdkJhcl9uYXZiYXJfY29udGFpbmVyX3JpZ2h0X3Byb2ZpbGVfX09VNjh5XCIsXG5cdFwibmF2YmFyX2NvbnRhaW5lcl9yaWdodF9tZW51QnRuXCI6IFwiTmF2QmFyX25hdmJhcl9jb250YWluZXJfcmlnaHRfbWVudUJ0bl9fS0VqZ3pcIixcblx0XCJtZW51SWNvblwiOiBcIk5hdkJhcl9tZW51SWNvbl9fdWhkT1ZcIixcblx0XCJzaWRlQmFyXCI6IFwiTmF2QmFyX3NpZGVCYXJfX09kMGpSXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./components/NavBar/NavBar.module.css\n"));

/***/ })

});