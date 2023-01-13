"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["tagsfns"],{

/***/ "./src/selectTag.js":
/*!**************************!*\
  !*** ./src/selectTag.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ selectTag)\n/* harmony export */ });\n// onclick:\n//   bgc = darker -> remove .unused\n//   check if there is another one\n//   set parent div class to = icons id\nfunction selectTag(event) {\n  //set all icons to unused (10/11)\n  const unusedIcons = document.getElementsByClassName('unused');\n  //set clicked one as in-use\n  const setId = event.target.id;\n  const iconToParent = event.target.parentNode.parentNode;\n  const dropToParent = event.target.parentNode.parentNode.parentNode.parentNode;\n  const parentId = document.getElementById('tag-container')\n\n  event.target.classList.toggle('unused');\n\n  if (iconToParent.id === 'tag-container'){\n    // delete iconToParent.dataset.value;\n    // iconToParent.dataset.value = setId;\n    iconToParent.classList.toggle(setId);\n  } else if (dropToParent.id === 'tag-container'){\n    // delete dropToParent.dataset.value;\n    dropToParent.classList.toggle(setId);\n  }\n};  \n\n//# sourceURL=webpack://todo-app/./src/selectTag.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/selectTag.js"));
/******/ }
]);