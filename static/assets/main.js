/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/app.js":
/*!**************************!*\
  !*** ./source/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Some code could be here ...\n\n//# sourceURL=webpack:///./source/js/app.js?");

/***/ }),

/***/ "./source/js/menu.js":
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Mobile menu\nvar menuTrigger = document.querySelector(\".menu-trigger\");\nvar menu = document.querySelector(\".menu\");\nvar mobileQuery = getComputedStyle(document.body).getPropertyValue(\"--phoneWidth\");\n\nvar isMobile = function isMobile() {\n  return window.matchMedia(mobileQuery).matches;\n};\n\nvar isMobileMenu = function isMobileMenu() {\n  menuTrigger && menuTrigger.classList.toggle(\"hidden\", !isMobile());\n  menu && menu.classList.toggle(\"hidden\", isMobile());\n};\n\nisMobileMenu();\nmenuTrigger && menuTrigger.addEventListener(\"click\", function () {\n  return menu && menu.classList.toggle(\"hidden\");\n});\nwindow.addEventListener(\"resize\", isMobileMenu);\n\n//# sourceURL=webpack:///./source/js/menu.js?");

/***/ }),

/***/ "./source/js/theme.js":
/*!****************************!*\
  !*** ./source/js/theme.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Toggle theme\nvar getTheme = window.localStorage && window.localStorage.getItem(\"theme\");\nvar themeToggle = document.querySelector(\".theme-toggle\");\nvar isDark = getTheme === \"dark\";\n\nif (getTheme !== null) {\n  document.body.classList.toggle(\"dark-theme\", isDark);\n}\n\nthemeToggle.addEventListener(\"click\", function () {\n  document.body.classList.toggle(\"dark-theme\");\n  window.localStorage && window.localStorage.setItem(\"theme\", document.body.classList.contains(\"dark-theme\") ? \"dark\" : \"light\");\n});\n\n//# sourceURL=webpack:///./source/js/theme.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./source/js/app.js ./source/js/menu.js ./source/js/theme.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/djordje/Git/github.com/rhazdon/hugo-theme-hello-friend-ng/source/js/app.js */\"./source/js/app.js\");\n__webpack_require__(/*! /Users/djordje/Git/github.com/rhazdon/hugo-theme-hello-friend-ng/source/js/menu.js */\"./source/js/menu.js\");\nmodule.exports = __webpack_require__(/*! /Users/djordje/Git/github.com/rhazdon/hugo-theme-hello-friend-ng/source/js/theme.js */\"./source/js/theme.js\");\n\n\n//# sourceURL=webpack:///multi_./source/js/app.js_./source/js/menu.js_./source/js/theme.js?");

/***/ })

/******/ });