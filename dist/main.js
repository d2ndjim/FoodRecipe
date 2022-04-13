/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:ital@0;1&family=Ubuntu+Mono:ital@1&family=Work+Sans:wght@400;500;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: bisque;\r\n  font-family: 'Mono', sans-serif;\r\n}\r\n\r\nheader {\r\n  background-color: grey;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-weight: bolder;\r\n}\r\n\r\n.heading {\r\n  font-family: \"Allison\", sans-serif;\r\n  color: chartreuse;\r\n  font-weight: bolder;\r\n}\r\n\r\n.logo {\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.flex-col {\r\n  flex-direction: column;\r\n}\r\n\r\n.align-center {\r\n  align-items: center;\r\n}\r\n\r\n.justify-center {\r\n  justify-content: center;\r\n}\r\n\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.justify-end {\r\n  justify-content: end;\r\n}\r\n\r\n.justify-around {\r\n  justify-content: space-around;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nheader ul {\r\n  list-style: none;\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\nheader a {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nheader a:hover {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\nheader h2 {\r\n  text-align: center;\r\n}\r\n\r\n.footer {\r\n  height: 50px;\r\n  background-color: #6d8347;\r\n}\r\n\r\n.meals-section {\r\n  padding: 0 2rem;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n.meal {\r\n  width: 90%;\r\n}\r\n\r\n.meal-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.meal-body {\r\n  height: 60px;\r\n}\r\n\r\n.meal-list li {\r\n  list-style: none;\r\n  width: 30%;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.fav-btn {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-heart {\r\n  color: #aaa7a7;\r\n}\r\n\r\n.heart-active {\r\n  color: #01616d;\r\n}\r\n\r\n.fa-heart.active {\r\n  color: rgb(128, 0, 0);\r\n}\r\n\r\n.fa-heart:active {\r\n  transform: translateY(4px);\r\n  transition: all ease 0.3s;\r\n}\r\n\r\n.active {\r\n  border-bottom: 1px solid #6d8347;\r\n}\r\n\r\n.comments {\r\n  padding: 0.7rem;\r\n  background-color: #6d8347;\r\n  color: #fff;\r\n  font-size: 1rem;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  border: #6d8347 1px solid;\r\n}\r\n\r\n#comment {\r\n  font-family: 'Poppins', sans-serif;\r\n  border: 1px solid #6d8347;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.comments:hover {\r\n  background-color: #eaeaea;\r\n  color: #6d8347;\r\n  transition: all ease 0.3s;\r\n}\r\n\r\n#comments-ul {\r\n  padding: 0;\r\n}\r\n\r\n#comments-ul li {\r\n  width: 40%;\r\n  text-align: start;\r\n  align-self: center;\r\n}\r\n\r\n#comments-ul li p {\r\n  margin: 0.2rem;\r\n}\r\n\r\n.modal {\r\n  width: 85vw;\r\n  min-height: 100vh;\r\n  border: #6d8347 2px solid;\r\n  padding: 1rem;\r\n}\r\n\r\n.modal h2 {\r\n  font-size: 2.5rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\n.modal-header-img {\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.modal-header-img img {\r\n  width: 500px;\r\n  height: 500px;\r\n}\r\n\r\n.recipe-instrruction {\r\n  word-break: break-word;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 20;\r\n  -webkit-box-orient: vertical;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.description-header {\r\n  font-weight: bolder;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.left,\r\n.right {\r\n  width: 50%;\r\n}\r\n\r\n.close {\r\n  border: none;\r\n  font-size: 2rem;\r\n  background: transparent;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 40%;\r\n}\r\n\r\n.submit-comment {\r\n  border: 1px solid #6d8347;\r\n  background-color: #6d8347;\r\n  color: #fff;\r\n  padding: 0.5rem 2rem;\r\n}\r\n\r\n.submit-comment,\r\n#input-name,\r\n#comment {\r\n  border: 1px solid #6d8347;\r\n  padding: 0.7rem 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n  outline: none !important;\r\n  box-shadow: 0 0 10px #6d8347;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAGA;;;EAGE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,WAAW;EACX,eAAe;EACf,WAAW;EACX,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,oBAAoB;EACpB,sBAAsB;EACtB,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,WAAW;EACX,oBAAoB;AACtB;;AAEA;;;EAGE,yBAAyB;EACzB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;;EAEE,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,wBAAwB;AAC1B","sourcesContent":["\r\n@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:ital@0;1&family=Ubuntu+Mono:ital@1&family=Work+Sans:wght@400;500;800&display=swap');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: bisque;\r\n  font-family: 'Mono', sans-serif;\r\n}\r\n\r\nheader {\r\n  background-color: grey;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-weight: bolder;\r\n}\r\n\r\n.heading {\r\n  font-family: \"Allison\", sans-serif;\r\n  color: chartreuse;\r\n  font-weight: bolder;\r\n}\r\n\r\n.logo {\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.flex-col {\r\n  flex-direction: column;\r\n}\r\n\r\n.align-center {\r\n  align-items: center;\r\n}\r\n\r\n.justify-center {\r\n  justify-content: center;\r\n}\r\n\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.justify-end {\r\n  justify-content: end;\r\n}\r\n\r\n.justify-around {\r\n  justify-content: space-around;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nheader ul {\r\n  list-style: none;\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\nheader a {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nheader a:hover {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\nheader h2 {\r\n  text-align: center;\r\n}\r\n\r\n.footer {\r\n  height: 50px;\r\n  background-color: #6d8347;\r\n}\r\n\r\n.meals-section {\r\n  padding: 0 2rem;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n.meal {\r\n  width: 90%;\r\n}\r\n\r\n.meal-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.meal-body {\r\n  height: 60px;\r\n}\r\n\r\n.meal-list li {\r\n  list-style: none;\r\n  width: 30%;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.fav-btn {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-heart {\r\n  color: #aaa7a7;\r\n}\r\n\r\n.heart-active {\r\n  color: #01616d;\r\n}\r\n\r\n.fa-heart.active {\r\n  color: rgb(128, 0, 0);\r\n}\r\n\r\n.fa-heart:active {\r\n  transform: translateY(4px);\r\n  transition: all ease 0.3s;\r\n}\r\n\r\n.active {\r\n  border-bottom: 1px solid #6d8347;\r\n}\r\n\r\n.comments {\r\n  padding: 0.7rem;\r\n  background-color: #6d8347;\r\n  color: #fff;\r\n  font-size: 1rem;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  border: #6d8347 1px solid;\r\n}\r\n\r\n#comment {\r\n  font-family: 'Poppins', sans-serif;\r\n  border: 1px solid #6d8347;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.comments:hover {\r\n  background-color: #eaeaea;\r\n  color: #6d8347;\r\n  transition: all ease 0.3s;\r\n}\r\n\r\n#comments-ul {\r\n  padding: 0;\r\n}\r\n\r\n#comments-ul li {\r\n  width: 40%;\r\n  text-align: start;\r\n  align-self: center;\r\n}\r\n\r\n#comments-ul li p {\r\n  margin: 0.2rem;\r\n}\r\n\r\n.modal {\r\n  width: 85vw;\r\n  min-height: 100vh;\r\n  border: #6d8347 2px solid;\r\n  padding: 1rem;\r\n}\r\n\r\n.modal h2 {\r\n  font-size: 2.5rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\n.modal-header-img {\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.modal-header-img img {\r\n  width: 500px;\r\n  height: 500px;\r\n}\r\n\r\n.recipe-instrruction {\r\n  word-break: break-word;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 20;\r\n  -webkit-box-orient: vertical;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.description-header {\r\n  font-weight: bolder;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.left,\r\n.right {\r\n  width: 50%;\r\n}\r\n\r\n.close {\r\n  border: none;\r\n  font-size: 2rem;\r\n  background: transparent;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 40%;\r\n}\r\n\r\n.submit-comment {\r\n  border: 1px solid #6d8347;\r\n  background-color: #6d8347;\r\n  color: #fff;\r\n  padding: 0.5rem 2rem;\r\n}\r\n\r\n.submit-comment,\r\n#input-name,\r\n#comment {\r\n  border: 1px solid #6d8347;\r\n  padding: 0.7rem 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n  outline: none !important;\r\n  box-shadow: 0 0 10px #6d8347;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/likeSection.js":
/*!****************************!*\
  !*** ./src/likeSection.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Displaylikes": () => (/* binding */ Displaylikes),
/* harmony export */   "like": () => (/* binding */ like)
/* harmony export */ });
const Displaylikes = async () => {
  const likeditems = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aJ1d0zBZhgzyK7ium8fa/likes')
    .then((response) => response.json())
    .then((data) => data);

  const likesnumber = document.getElementsByClassName('likes-qty');
  const likebtnsarray = Array.from(likesnumber);

  likebtnsarray.forEach((element) => {
    const likeId = element.getAttribute('data');
    const currentSpan = element;
    likeditems.forEach((e) => {
      if (likeId === e.item_id) {
        currentSpan.innerHTML = e.likes;
      }
    });
  });
};

const likeapi = async (itemid) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aJ1d0zBZhgzyK7ium8fa/likes/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemid,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      Displaylikes();
    });
};

const like = () => {
  const likebtns = document.getElementsByClassName('fa-heart');
  const likebtnsarray = Array.from(likebtns);
  likebtnsarray.forEach((element) => {
    const likeId = element.getAttribute('data');
    element.addEventListener('click', () => {
      element.classList.add('heart-active');
      likeapi(likeId);
    });
  });
};

setTimeout(() => like(), 3000);



/***/ }),

/***/ "./src/mealDb.js":
/*!***********************!*\
  !*** ./src/mealDb.js ***!
  \***********************/
/***/ (() => {

const popup = async () => {
  const header = document.querySelector('header');
  const main = document.querySelector('.meals-section');
  const footer = document.querySelector('footer');
  const btn = document.getElementsByClassName('comments');
  const modal = document.querySelector('#modal');

  const dataModal = async (id) => {
    const mealapiurl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const meals = await fetch(mealapiurl)
      .then((res) => res.json())
      .then((data) => data.meals);
    meals.forEach((element) => {
      if (element.idMeal === id) {
        modal.innerHTML = `
        <div class="modal">
        <div class="meal-header justify-end d-flex">
            <button class="close"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-header-img d-flex ">
            <img class="modal-img" src="${element.strMealThumb}" alt="${element.strMeal}">
            <h2 class="titme">${element.strMeal}</h2>
        </div>
        <div class="modal-description d-flex ">
        <div class = "left">
        <p> <span class="description-header">Category:</span> ${element.strCategory} <p>
        <p> <span class="description-header">Ingredients:</span>
        <ul id = "ingredientsUl">
        </ul>
        </span><p>
        </div>
        <div class = "right">
        <p> <span class="description-header">Country:</span> ${element.strArea} <p>
        <p> <span class="description-header">Instructions:</span> <p> <span class = "recipe-instrruction"> ${element.strInstructions}  > read more </button> </span>
        </div>
        </div>
        <div class="comments-container">
          <div class="all-comments text-center">
            <h3>Comments <span id= "comments-count">0</span></h3>
            <ul id="comments-ul" class = "d-flex justify-center flex-col">

            </ul>
          </div>
          <div class = "text-center">
            <h3> Add a comment </h3> 
          </div>
      
    <div class="add-comments text-center d-flex justify-center">
      <form action="POST">
          <input name= "name" type="text" id="input-name" placeholder="Your name" required>
          <textarea name="comment" id="comment" cols="30" rows="10" required></textarea>
          <span id = "alert" class="text-start"> </span>
          <button id="submit-comment" class="submit-comment" data="${element.idMeal}"> Submit</button>
          
      </form>
    </div>
    </div>
      `;

        const ingredientsUl = document.querySelector('#ingredientsUl');
        const ingredients = () => {
          const entries = Object.entries(element);
          const ingredientsArray = entries
            .filter(
              ([key, value]) => key.startsWith('strIngredient') && value && value.trim(),
            )
            /* eslint-disable-next-line */
            .map(([key, value]) => value);
          const measuresArray = entries
            .filter(
              ([key, value]) => key.startsWith('strMeasure') && value && value.trim(),
            )
            /* eslint-disable-next-line */
            .map(([key, value]) => value);
          for (let i = 1; i < ingredientsArray.length; i += 1) {
            ingredientsUl.innerHTML += `<li> ${ingredientsArray[i]} - ${measuresArray[i]} </li> `;
          }
        };
        ingredients();
        const exit = document.querySelector('.fa-times');
        exit.addEventListener('click', () => {
          header.classList.remove('hidden');
          main.classList.remove('hidden');
          footer.classList.remove('hidden');
          modal.classList.add('hidden');
        });
      }
      // postComment();
    });
  };

  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', () => {
      window.scrollTo(0, 0);
      const id = btn[i].getAttribute('data');
      dataModal(id);
      header.classList.add('hidden');
      main.classList.add('hidden');
      footer.classList.add('hidden');
      modal.classList.remove('hidden');
    });
  }
};

const fetchMeal = async () => {
  const meallist = document.querySelector('.meal-list');
  const getCategoryUrl = async (category) => {
    meallist.innerHTML = '';
    const printMeals = (meals) => {
      meals.forEach((element) => {
        const newmeal = document.createElement('li');
        newmeal.innerHTML = ` 
        <div class="meal">
        <div class="meal-header">
          <img src="${element.strMealThumb}" loading="lazy" width="500" height="280" alt="${element.strMeal}">
        </div>
        <div class="meal-body d-flex justify-between">
          <h4>${element.strMeal}</h4>
          <button class="fav-btn" ><i class="fas fa-heart" data="${element.idMeal}"></i></button>
        </div>
        <div>
          <div class = "likes"><span class= "likes-qty" data="${element.idMeal}">0</span> likes </div>
          <button class= "comments" data="${element.idMeal}">Comments</button>
        </div>
      </div>`;

        meallist.appendChild(newmeal);
      });
    };

    const mealapiurl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const meals = await fetch(mealapiurl)
      .then((res) => res.json())
      .then((data) => data.meals);
    printMeals(meals);
    popup();
  };

  const navlinks = document.querySelectorAll('nav li');
  const resetLinks = () => {
    for (let i = 0; i < navlinks.length; i += 1) {
      navlinks[i].classList.remove('active');
    }
  };

  for (let i = 0; i < navlinks.length; i += 1) {
    navlinks[i].addEventListener('click', () => {
      const category = navlinks[i].textContent.toLowerCase();
      getCategoryUrl(category);
      resetLinks();
      navlinks[i].classList.add('active');
    });
  }
  getCategoryUrl('seafood');
};

fetchMeal();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _mealDb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mealDb.js */ "./src/mealDb.js");
/* harmony import */ var _mealDb_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mealDb_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _likeSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likeSection.js */ "./src/likeSection.js");






(0,_likeSection_js__WEBPACK_IMPORTED_MODULE_2__.Displaylikes)();
(0,_likeSection_js__WEBPACK_IMPORTED_MODULE_2__.like)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUEsa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCLGlEQUFpRCxnQkFBZ0I7QUFDNUc7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0I7QUFDaEMsbUVBQW1FLGVBQWU7QUFDbEY7QUFDQTtBQUNBLGdFQUFnRSxlQUFlO0FBQy9FLDRDQUE0QyxlQUFlO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsK0VBQStFLFNBQVM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O1VDNUpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ0E7QUFDSztBQUNzQjtBQUNSOztBQUV4Qyw2REFBWTtBQUNaLHFEQUFJLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrc2V0dXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2tzZXR1cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3NldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3NldHVwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2tzZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2tzZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3NldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3NldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja3NldHVwLy4vc3JjL2xpa2VTZWN0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2tzZXR1cC8uL3NyYy9tZWFsRGIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3NldHVwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tzZXR1cC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrc2V0dXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tzZXR1cC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tzZXR1cC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2tzZXR1cC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFicmlsK0ZhdGZhY2UmZmFtaWx5PU1lcnJpd2VhdGhlcjppdGFsQDA7MSZmYW1pbHk9VWJ1bnR1K01vbm86aXRhbEAxJmZhbWlseT1Xb3JrK1NhbnM6d2dodEA0MDA7NTAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxyXFxuICBmb250LWZhbWlseTogJ01vbm8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFsbGlzb25cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IGNoYXJ0cmV1c2U7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kLWZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtY29sIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5hbGlnbi1jZW50ZXIge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnktY2VudGVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1iZXR3ZWVuIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnktZW5kIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1hcm91bmQge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNlbnRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MzQ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAwIDJyZW07XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWJvZHkge1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1saXN0IGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhdi1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGNvbG9yOiAjYWFhN2E3O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQtYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjMDE2MTZkO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQuYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTI4LCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2ZDgzNDc7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cyB7XFxyXFxuICBwYWRkaW5nOiAwLjdyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MzQ3O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogIzZkODM0NyAxcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmQ4MzQ3O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50czpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xcclxcbiAgY29sb3I6ICM2ZDgzNDc7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHMtdWwge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzLXVsIGxpIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzLXVsIGxpIHAge1xcclxcbiAgbWFyZ2luOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICB3aWR0aDogODV2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYm9yZGVyOiAjNmQ4MzQ3IDJweCBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBoMiB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbjogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyLWltZyB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlci1pbWcgaW1nIHtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaW5zdHJydWN0aW9uIHtcXHJcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjA7XFxyXFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLWhlYWRlciB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQsXFxyXFxuLnJpZ2h0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1jb21tZW50IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZDgzNDc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MzQ3O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1jb21tZW50LFxcclxcbiNpbnB1dC1uYW1lLFxcclxcbiNjb21tZW50IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZDgzNDc7XFxyXFxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzLFxcclxcbnRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM2ZDgzNDc7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFHQTs7O0VBR0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7OztFQUdFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWJyaWwrRmF0ZmFjZSZmYW1pbHk9TWVycml3ZWF0aGVyOml0YWxAMDsxJmZhbWlseT1VYnVudHUrTW9ubzppdGFsQDEmZmFtaWx5PVdvcmsrU2Fuczp3Z2h0QDQwMDs1MDA7ODAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9ubycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxsaXNvblxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogY2hhcnRyZXVzZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1jb2wge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFsaWduLWNlbnRlciB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1jZW50ZXIge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1lbmQge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWFyb3VuZCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY2VudGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZDgzNDc7XFxyXFxufVxcclxcblxcclxcbi5tZWFscy1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYm9keSB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWxpc3QgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmF2LWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQge1xcclxcbiAgY29sb3I6ICNhYWE3YTc7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC1hY3RpdmUge1xcclxcbiAgY29sb3I6ICMwMTYxNmQ7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydC5hY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYigxMjgsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQ6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZkODM0NztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIHtcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZDgzNDc7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAjNmQ4MzQ3IDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZDgzNDc7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XFxyXFxuICBjb2xvcjogIzZkODM0NztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50cy11bCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHMtdWwgbGkge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHMtdWwgbGkgcCB7XFxyXFxuICBtYXJnaW46IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIHdpZHRoOiA4NXZ3O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBib3JkZXI6ICM2ZDgzNDcgMnB4IHNvbGlkO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1oZWFkZXItaW1nIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyLWltZyBpbWcge1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1pbnN0cnJ1Y3Rpb24ge1xcclxcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyMDtcXHJcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24taGVhZGVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdCxcXHJcXG4ucmlnaHQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWNvbW1lbnQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzZkODM0NztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZDgzNDc7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWNvbW1lbnQsXFxyXFxuI2lucHV0LW5hbWUsXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzZkODM0NztcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMsXFxyXFxudGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzZkODM0NztcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgRGlzcGxheWxpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsaWtlZGl0ZW1zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2FKMWQwekJaaGd6eUs3aXVtOGZhL2xpa2VzJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YSk7XG5cbiAgY29uc3QgbGlrZXNudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaWtlcy1xdHknKTtcbiAgY29uc3QgbGlrZWJ0bnNhcnJheSA9IEFycmF5LmZyb20obGlrZXNudW1iZXIpO1xuXG4gIGxpa2VidG5zYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGxpa2VJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgY29uc3QgY3VycmVudFNwYW4gPSBlbGVtZW50O1xuICAgIGxpa2VkaXRlbXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgaWYgKGxpa2VJZCA9PT0gZS5pdGVtX2lkKSB7XG4gICAgICAgIGN1cnJlbnRTcGFuLmlubmVySFRNTCA9IGUubGlrZXM7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgbGlrZWFwaSA9IGFzeW5jIChpdGVtaWQpID0+IHtcbiAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2FKMWQwekJaaGd6eUs3aXVtOGZhL2xpa2VzLycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpdGVtaWQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIERpc3BsYXlsaWtlcygpO1xuICAgIH0pO1xufTtcblxuY29uc3QgbGlrZSA9ICgpID0+IHtcbiAgY29uc3QgbGlrZWJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYS1oZWFydCcpO1xuICBjb25zdCBsaWtlYnRuc2FycmF5ID0gQXJyYXkuZnJvbShsaWtlYnRucyk7XG4gIGxpa2VidG5zYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGxpa2VJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhcnQtYWN0aXZlJyk7XG4gICAgICBsaWtlYXBpKGxpa2VJZCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuc2V0VGltZW91dCgoKSA9PiBsaWtlKCksIDMwMDApO1xuXG5leHBvcnQgeyBsaWtlLCBEaXNwbGF5bGlrZXMgfTsiLCJjb25zdCBwb3B1cCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHMtc2VjdGlvbicpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tbWVudHMnKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcblxuICBjb25zdCBkYXRhTW9kYWwgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCBtZWFsYXBpdXJsID0gYGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JHtpZH1gO1xuICAgIGNvbnN0IG1lYWxzID0gYXdhaXQgZmV0Y2gobWVhbGFwaXVybClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5tZWFscyk7XG4gICAgbWVhbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuaWRNZWFsID09PSBpZCkge1xuICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXIganVzdGlmeS1lbmQgZC1mbGV4XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2VcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXItaW1nIGQtZmxleCBcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJtb2RhbC1pbWdcIiBzcmM9XCIke2VsZW1lbnQuc3RyTWVhbFRodW1ifVwiIGFsdD1cIiR7ZWxlbWVudC5zdHJNZWFsfVwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bWVcIj4ke2VsZW1lbnQuc3RyTWVhbH08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRlc2NyaXB0aW9uIGQtZmxleCBcIj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibGVmdFwiPlxuICAgICAgICA8cD4gPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbi1oZWFkZXJcIj5DYXRlZ29yeTo8L3NwYW4+ICR7ZWxlbWVudC5zdHJDYXRlZ29yeX0gPHA+XG4gICAgICAgIDxwPiA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPkluZ3JlZGllbnRzOjwvc3Bhbj5cbiAgICAgICAgPHVsIGlkID0gXCJpbmdyZWRpZW50c1VsXCI+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDwvc3Bhbj48cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInJpZ2h0XCI+XG4gICAgICAgIDxwPiA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPkNvdW50cnk6PC9zcGFuPiAke2VsZW1lbnQuc3RyQXJlYX0gPHA+XG4gICAgICAgIDxwPiA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uLWhlYWRlclwiPkluc3RydWN0aW9uczo8L3NwYW4+IDxwPiA8c3BhbiBjbGFzcyA9IFwicmVjaXBlLWluc3RycnVjdGlvblwiPiAke2VsZW1lbnQuc3RySW5zdHJ1Y3Rpb25zfSAgPiByZWFkIG1vcmUgPC9idXR0b24+IDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFsbC1jb21tZW50cyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGgzPkNvbW1lbnRzIDxzcGFuIGlkPSBcImNvbW1lbnRzLWNvdW50XCI+MDwvc3Bhbj48L2gzPlxuICAgICAgICAgICAgPHVsIGlkPVwiY29tbWVudHMtdWxcIiBjbGFzcyA9IFwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtY29sXCI+XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcyA9IFwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMz4gQWRkIGEgY29tbWVudCA8L2gzPiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDxkaXYgY2xhc3M9XCJhZGQtY29tbWVudHMgdGV4dC1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8Zm9ybSBhY3Rpb249XCJQT1NUXCI+XG4gICAgICAgICAgPGlucHV0IG5hbWU9IFwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpbnB1dC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbW1lbnRcIiBpZD1cImNvbW1lbnRcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgIDxzcGFuIGlkID0gXCJhbGVydFwiIGNsYXNzPVwidGV4dC1zdGFydFwiPiA8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdC1jb21tZW50XCIgY2xhc3M9XCJzdWJtaXQtY29tbWVudFwiIGRhdGE9XCIke2VsZW1lbnQuaWRNZWFsfVwiPiBTdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgIGA7XG5cbiAgICAgICAgY29uc3QgaW5ncmVkaWVudHNVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmdyZWRpZW50c1VsJyk7XG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnRzID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhlbGVtZW50KTtcbiAgICAgICAgICBjb25zdCBpbmdyZWRpZW50c0FycmF5ID0gZW50cmllc1xuICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgKFtrZXksIHZhbHVlXSkgPT4ga2V5LnN0YXJ0c1dpdGgoJ3N0ckluZ3JlZGllbnQnKSAmJiB2YWx1ZSAmJiB2YWx1ZS50cmltKCksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUpO1xuICAgICAgICAgIGNvbnN0IG1lYXN1cmVzQXJyYXkgPSBlbnRyaWVzXG4gICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAoW2tleSwgdmFsdWVdKSA9PiBrZXkuc3RhcnRzV2l0aCgnc3RyTWVhc3VyZScpICYmIHZhbHVlICYmIHZhbHVlLnRyaW0oKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB2YWx1ZSk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpbmdyZWRpZW50c0FycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbmdyZWRpZW50c1VsLmlubmVySFRNTCArPSBgPGxpPiAke2luZ3JlZGllbnRzQXJyYXlbaV19IC0gJHttZWFzdXJlc0FycmF5W2ldfSA8L2xpPiBgO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaW5ncmVkaWVudHMoKTtcbiAgICAgICAgY29uc3QgZXhpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS10aW1lcycpO1xuICAgICAgICBleGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBwb3N0Q29tbWVudCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnRuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgY29uc3QgaWQgPSBidG5baV0uZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICBkYXRhTW9kYWwoaWQpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBmZXRjaE1lYWwgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1lYWxsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWwtbGlzdCcpO1xuICBjb25zdCBnZXRDYXRlZ29yeVVybCA9IGFzeW5jIChjYXRlZ29yeSkgPT4ge1xuICAgIG1lYWxsaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHByaW50TWVhbHMgPSAobWVhbHMpID0+IHtcbiAgICAgIG1lYWxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3bWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld21lYWwuaW5uZXJIVE1MID0gYCBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke2VsZW1lbnQuc3RyTWVhbFRodW1ifVwiIGxvYWRpbmc9XCJsYXp5XCIgd2lkdGg9XCI1MDBcIiBoZWlnaHQ9XCIyODBcIiBhbHQ9XCIke2VsZW1lbnQuc3RyTWVhbH1cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWJvZHkgZC1mbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxoND4ke2VsZW1lbnQuc3RyTWVhbH08L2g0PlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmYXYtYnRuXCIgPjxpIGNsYXNzPVwiZmFzIGZhLWhlYXJ0XCIgZGF0YT1cIiR7ZWxlbWVudC5pZE1lYWx9XCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJsaWtlc1wiPjxzcGFuIGNsYXNzPSBcImxpa2VzLXF0eVwiIGRhdGE9XCIke2VsZW1lbnQuaWRNZWFsfVwiPjA8L3NwYW4+IGxpa2VzIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9IFwiY29tbWVudHNcIiBkYXRhPVwiJHtlbGVtZW50LmlkTWVhbH1cIj5Db21tZW50czwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgbWVhbGxpc3QuYXBwZW5kQ2hpbGQobmV3bWVhbCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWVhbGFwaXVybCA9IGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9jPSR7Y2F0ZWdvcnl9YDtcbiAgICBjb25zdCBtZWFscyA9IGF3YWl0IGZldGNoKG1lYWxhcGl1cmwpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEubWVhbHMpO1xuICAgIHByaW50TWVhbHMobWVhbHMpO1xuICAgIHBvcHVwKCk7XG4gIH07XG5cbiAgY29uc3QgbmF2bGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgbGknKTtcbiAgY29uc3QgcmVzZXRMaW5rcyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdmxpbmtzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBuYXZsaW5rc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZsaW5rcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIG5hdmxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBuYXZsaW5rc1tpXS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgZ2V0Q2F0ZWdvcnlVcmwoY2F0ZWdvcnkpO1xuICAgICAgcmVzZXRMaW5rcygpO1xuICAgICAgbmF2bGlua3NbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0Q2F0ZWdvcnlVcmwoJ3NlYWZvb2QnKTtcbn07XG5cbmZldGNoTWVhbCgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL21lYWxEYi5qcyc7XG5pbXBvcnQgJy4vbGlrZVNlY3Rpb24uanMnO1xuaW1wb3J0IHsgRGlzcGxheWxpa2VzIH0gZnJvbSAnLi9saWtlU2VjdGlvbi5qcyc7XG5pbXBvcnQgeyBsaWtlIH0gZnJvbSAnLi9saWtlU2VjdGlvbi5qcyc7XG5cbkRpc3BsYXlsaWtlcygpO1xubGlrZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==