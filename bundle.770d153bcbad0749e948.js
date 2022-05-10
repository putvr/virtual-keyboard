/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #252525;\\n  color: white;\\n}\\n\\n#root {\\n  min-width: 500px;\\n  min-height: 200px;\\n}\\n\\n.container {\\n  position: relative;\\n  margin: 0 auto;\\n  max-width: 80%;\\n}\\n\\n.row {\\n  display: flex;\\n  padding-top: 5px;\\n}\\n\\n.title {\\n  text-align: center;\\n  padding: 10px;\\n}\\n\\n/* Keyboard */\\n.btn {\\n  width: 10%;\\n  margin-right: 5px;\\n  padding: 5px;\\n  flex-grow: 1;\\n  font-size: 25px;\\n  line-height: 30px;\\n  cursor: pointer;\\n  border: none;\\n  border-radius: 5px;\\n  background-color: #535353;\\n  color: white;\\n}\\n.btn--pressed {\\n  background-color: #959595;\\n}\\n\\n.btn-space {\\n  width: 80%;\\n}\\n\\n.btn-shiftleft {\\n  width: calc(20% + 10px);\\n}\\n\\n/* Display */\\n.display {\\n  resize: none;\\n  font-size: 20px;\\n  line-height: 24px;\\n  width: calc(100% - 10px);\\n  background-color: #b9baba;\\n}\\n.display:read-only {\\n  color: red;\\n  caret-color: red;\\n}\\n.display:focus {\\n  outline: none !important;\\n}\\n\\n.info {\\n  padding-top: 20px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\nconst PRESSED_BUTTON = 'btn--pressed';\nconst INFO_TEXT = `\nПривет!<br>\nПереключение раскладки выполняется через стандартный Ctrl + Alt<br>\nИли клику по этой надписи. Сейчас выбрана \n`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(element, state) {\n    this.state = state;\n    this.root = element;\n  }\n\n  init() {\n    this.render(this.root);\n\n    this.info.addEventListener('click', () => this.switchLang());\n  }\n\n  createButton(key) {\n    const b = document.createElement('button');\n    b.classList.add('btn');\n    b.classList.add(`btn-${key.toLowerCase()}`);\n    b.tabIndex = -1;\n    b.dataset.code = key;\n\n    b.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.codeToValue)(key, this.state.lang);\n\n    return b;\n  }\n\n  render(element) {\n    // create container\n    this.wrapper = document.createElement('div');\n    this.wrapper.classList.toggle('container');\n    element.append(this.wrapper);\n\n    // create keyboard\n    this.state.data.keys.forEach((rowsElements) => {\n      // create rows\n      const row = document.createElement('div');\n      row.classList.add('row');\n      this.wrapper.append(row);\n\n      // create keys\n      rowsElements.forEach((key) => row.append(this.createButton(key)));\n    });\n\n    // create info\n    this.info = document.createElement('div');\n    this.info.classList.add('row', 'info');\n    this.info.innerHTML = INFO_TEXT + this.state.lang;\n    this.wrapper.append(this.info);\n  }\n\n  press(code) {\n    const b = document.querySelectorAll(`.btn-${code.toLowerCase()}`);\n    if (b) {\n      b.forEach((e) => e.classList.add(PRESSED_BUTTON));\n    }\n\n    if (code === 'CapsLock') {\n      this.state.caps = !this.state.caps;\n      this.toggleUpperCase(this.state.caps);\n    }\n    if (code === 'ShiftLeft') {\n      this.toggleUpperCase(true);\n    }\n  }\n\n  release(code, isCtrlPressed = false, isAltPressed = false) {\n    if (code === 'CapsLock' && this.state.caps) {\n      this.toggleUpperCase(this.state.caps);\n      return;\n    }\n    if (code === 'ShiftLeft') {\n      this.toggleUpperCase(false);\n    }\n    if (code === 'AltLeft' && isCtrlPressed) {\n      this.switchLang();\n    }\n    if (code === 'ControlLeft' && isAltPressed) {\n      this.switchLang();\n    }\n\n    const b = document.querySelectorAll(`.btn-${code.toLowerCase()}`);\n\n    if (b) {\n      b.forEach((e) => e.classList.remove(PRESSED_BUTTON));\n    }\n  }\n\n  switchLang() {\n    const newLang = (this.state.lang === 'en') ? 'ru' : 'en';\n\n    this.info.innerHTML = INFO_TEXT + newLang;\n    this.state.lang = newLang;\n\n    localStorage.setItem('lang', newLang);\n\n    document.querySelectorAll('.btn').forEach((btn) => {\n      const t = btn;\n\n      t.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.codeToValue)(t.dataset.code, this.state.lang, this.state.caps);\n    });\n  }\n\n  toggleUpperCase(upper) {\n    document.querySelectorAll('.btn').forEach((btn) => {\n      const t = btn;\n\n      t.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.codeToValue)(t.dataset.code, this.state.lang, upper);\n    });\n  }\n});\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/Input.js?");

/***/ }),

/***/ "./src/components/Output.js":
/*!**********************************!*\
  !*** ./src/components/Output.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(element, state) {\n    this.root = element;\n    this.state = state;\n  }\n\n  init() {\n    // container\n    this.container = document.createElement('div');\n    this.container.classList.toggle('container');\n\n    this.root.append(this.container);\n\n    // textarea\n    this.textArea = document.createElement('textarea');\n    this.textArea.cols = 70;\n    this.textArea.rows = 10;\n    this.textArea.tabIndex = -1;\n    this.textArea.autofocus = true;\n    // this.textArea.readOnly = true;\n    this.textArea.contentEditable = true;\n    this.textArea.classList.toggle('display');\n\n    this.container.append(this.textArea);\n\n    this.textArea.addEventListener('oncut', (e) => e.preventDefault(), false);\n    this.textArea.addEventListener('onpaste', (e) => e.preventDefault(), false);\n    this.textArea.addEventListener('keydown', (e) => e.preventDefault(), false);\n  }\n\n  add(event) {\n    const code = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCodeFromEvent)(event);\n    event.preventDefault();\n\n    if (code.startsWith('Num')) return;\n    if (code.startsWith('F')) return;\n\n    let s = '';\n\n    switch (code) {\n      case 'Delete':\n        this.delete();\n        break;\n\n      case 'Backspace':\n        this.back();\n        break;\n\n      // ignore mods\n      case 'AltRight':\n      case 'AltLeft':\n      case 'MetaRight':\n      case 'MetaLeft':\n      case 'ShiftLeft':\n      case 'ShiftRight':\n      case 'ControlLeft':\n      case 'ControlRight':\n      case 'CapsLock':\n      case 'ContextMenu':\n      case 'Home':\n      case 'End':\n      case 'Insert':\n      case 'Escape':\n      case 'PageUp':\n      case 'PageDown':\n      case 'OSLeft':\n      case 'OSRight':\n        break;\n\n      case 'Enter':\n        s = '\\n';\n        break;\n      case 'Tab':\n        s = '\\t';\n        break;\n      case 'Space':\n        s = ' ';\n        break;\n\n      default:\n        s = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.codeToValue)(code, this.state.lang, this.state.caps || event.shiftKey);\n    }\n\n    const offset = this.textArea.selectionStart;\n    // const l = offset || this.textArea.textContent.length;\n\n    this.textArea.textContent = this.textArea.textContent.slice(0, offset) + s\n    + this.textArea.textContent.slice(offset);\n\n    this.focus(offset + 1);\n  }\n\n  // WTF I`m doing? 🤦🏻‍♂️😱🤯\n  delete() {\n    const offset = this.textArea.selectionStart;\n    this.textArea.textContent = this.textArea.textContent.slice(0, offset)\n    + this.textArea.textContent.slice(offset + 1);\n    this.focus(offset - 1);\n  }\n\n  back() {\n    const offset = this.textArea.selectionStart;\n\n    this.textArea.textContent = this.textArea.textContent.slice(0, offset - 1)\n    + this.textArea.textContent.slice(offset);\n\n    const o2 = (offset <= 1) ? 0 : offset - 2;\n\n    this.textArea.setSelectionRange(o2, o2 + 1);\n  }\n\n  focus(offset = false) {\n    const l = offset || this.textArea.textContent.length;\n    this.textArea.focus();\n    this.textArea.setSelectionRange(l, l);\n  }\n});\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/components/Output.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _components_Output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Output */ \"./src/components/Output.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Input */ \"./src/components/Input.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\n\nconst ANIMATION_TIMEOUT = 100;\n\nconst state = {\n  lang: localStorage.getItem('lang') || 'en',\n  text: '',\n};\n\nstate.data = _utils__WEBPACK_IMPORTED_MODULE_3__.data;\n\nconst d = new _components_Output__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.getElementById('root'), state);\nconst k = new _components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.getElementById('root'), state);\n\nconst handleKeyClick = (action) => {\n  if (action.target.tagName !== 'BUTTON') {\n    return;\n  }\n  const code = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getCodeFromEvent)(action);\n\n  k.press(code);\n  d.add(action);\n  setTimeout(() => k.release(code), ANIMATION_TIMEOUT);\n};\n\nconst dispacher = (action) => {\n  switch (action.type) {\n    case 'keydown':\n      k.press(action.code);\n      break;\n\n    case 'keyup':\n      k.release(action.code, action.ctrlKey, action.altKey);\n      d.add(action);\n      break;\n\n    case 'click':\n      handleKeyClick(action);\n      break;\n    default:\n  }\n};\n\n(0,_utils__WEBPACK_IMPORTED_MODULE_3__.renderTitle)('Virtual keyboard');\nd.init();\nk.init();\n\ndocument.addEventListener('keydown', dispacher);\ndocument.addEventListener('keyup', dispacher);\ndocument.addEventListener('click', dispacher);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"codeToValue\": () => (/* binding */ codeToValue),\n/* harmony export */   \"data\": () => (/* binding */ data),\n/* harmony export */   \"getCodeFromEvent\": () => (/* binding */ getCodeFromEvent),\n/* harmony export */   \"renderTitle\": () => (/* binding */ renderTitle)\n/* harmony export */ });\nconst data = {\n  keys: [\n    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],\n\n    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketRight', 'BracketLeft', 'Backslash', 'Delete'],\n\n    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],\n\n    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftLeft'],\n\n    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'MetaRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlLeft'],\n  ],\n\n};\n\nconst mapping = {\n  Backquote: {\n    en: '`', ru: ']', caps_en: '~', caps_ru: '[',\n  },\n  Backslash: {\n    en: '\\\\', ru: '\\\\', caps_en: '/', caps_ru: '/',\n  },\n  Minus: {\n    en: '-', ru: '-', caps_en: '_', caps_ru: '_',\n  },\n  Equal: {\n    en: '=', ru: '=', caps_en: '+', caps_ru: '+',\n  },\n  Semicolon: {\n    en: ';', ru: 'ж', caps_en: ':', caps_ru: 'Ж',\n  },\n  Quote: {\n    en: '\\'', ru: 'э', caps_en: '\"', caps_ru: 'Э',\n  },\n  Enter: {\n    en: '⏎', ru: '⏎', caps_en: '⏎', caps_ru: '⏎',\n  },\n  Comma: {\n    en: ',', ru: 'б', caps_en: '<', caps_ru: 'Б',\n  },\n  Period: {\n    en: '.', ru: 'ю', caps_en: '>', caps_ru: 'Ж',\n  },\n  Slash: {\n    en: '/', ru: '.', caps_en: '?', caps_ru: ',',\n  },\n  Delete: {\n    en: 'Del', ru: 'Del', caps_en: 'Del', caps_ru: 'Del',\n  },\n  Backspace: {\n    en: '⌫', ru: '⌫', caps_en: '⌫', caps_ru: '⌫',\n  },\n  Tab: {\n    en: '⇥', ru: '⇥', caps_en: '⇥', caps_ru: '⇥',\n  },\n\n  // Arrows\n  ArrowUp: {\n    en: '↑', ru: '↑', caps_en: '↑', caps_ru: '↑',\n  },\n  ArrowDown: {\n    en: '↓', ru: '↓', caps_en: '↓', caps_ru: '↓',\n  },\n  ArrowLeft: {\n    en: '←', ru: '←', caps_en: '←', caps_ru: '←',\n  },\n  ArrowRight: {\n    en: '→', ru: '→', caps_en: '→', caps_ru: '→',\n  },\n\n  // Digits\n  Digit1: {\n    en: 1, ru: 1, caps_en: '!', caps_ru: '!',\n  },\n  Digit2: {\n    en: 2, ru: 2, caps_en: '@', caps_ru: '\"',\n  },\n  Digit3: {\n    en: 3, ru: 3, caps_en: '#', caps_ru: '№',\n  },\n  Digit4: {\n    en: 4, ru: 4, caps_en: '$', caps_ru: ';',\n  },\n  Digit5: {\n    en: 5, ru: 5, caps_en: '%', caps_ru: '%',\n  },\n  Digit6: {\n    en: 6, ru: 6, caps_en: '^', caps_ru: ':',\n  },\n  Digit7: {\n    en: 7, ru: 7, caps_en: '*', caps_ru: '?',\n  },\n  Digit8: {\n    en: 8, ru: 8, caps_en: '&', caps_ru: '*',\n  },\n  Digit9: {\n    en: 9, ru: 9, caps_en: '(', caps_ru: '(',\n  },\n  Digit0: {\n    en: 0, ru: 0, caps_en: ')', caps_ru: ')',\n  },\n\n  // Special\n  BracketRight: {\n    en: '[', ru: 'х', caps_en: '{', caps_ru: 'X',\n  },\n  BracketLeft: {\n    en: ']', ru: 'ъ', caps_en: '}', caps_ru: 'Ъ',\n  },\n\n  // Mod\n  CapsLock: {\n    en: '⇪', ru: '⇪', caps_en: '⇪', caps_ru: '⇪',\n  },\n  ShiftLeft: {\n    en: '⇧', ru: '⇧', caps_en: '⇧', caps_ru: '⇧',\n  },\n  ControlLeft: {\n    en: 'Ctrl', ru: 'Ctrl', caps_en: 'Ctrl', caps_ru: 'Ctrl',\n  },\n  ControlRight: {\n    en: 'Ctrl', ru: 'Ctrl', caps_en: 'Ctrl', caps_ru: 'Ctrl',\n  },\n  AltLeft: {\n    en: 'Alt', ru: 'Alt', caps_en: 'Alt', caps_ru: 'Alt',\n  },\n  MetaLeft: {\n    en: '⌘', ru: '⌘', caps_en: '⌘', caps_ru: '⌘',\n  },\n  MetaRight: {\n    en: '⌘', ru: '⌘', caps_en: '⌘', caps_ru: '⌘',\n  },\n  Space: {\n    en: '', ru: '', caps_en: '', caps_ru: '',\n  },\n\n};\n\nconst en2ru = (char) => {\n  const s = {\n    q: 'й',\n    w: 'ц',\n    e: 'у',\n    r: 'к',\n    t: 'е',\n    y: 'н',\n    u: 'г',\n    i: 'ш',\n    o: 'щ',\n    p: 'з',\n    a: 'ф',\n    s: 'ы',\n    d: 'в',\n    f: 'а',\n    g: 'п',\n    h: 'р',\n    j: 'о',\n    k: 'л',\n    l: 'д',\n    z: 'я',\n    x: 'ч',\n    c: 'с',\n    v: 'м',\n    b: 'и',\n    n: 'т',\n    m: 'ь',\n  };\n\n  return s[char.toLowerCase()] || '?';\n};\n\nconst getCodeFromEvent = (event) => {\n  if (event instanceof PointerEvent || event instanceof MouseEvent) {\n    return event.target.dataset.code;\n  }\n\n  if (event instanceof KeyboardEvent) {\n    return event.code;\n  }\n\n  throw Error('Wrong Event!');\n};\n\nconst codeToValue = (code, lang, caps = false) => {\n  let val = code;\n\n  if (code.startsWith('Key')) {\n    val = code[code.length - 1];\n\n    if (lang === 'ru') {\n      val = en2ru(val);\n    }\n\n    return caps ? val.toUpperCase() : val.toLowerCase();\n  }\n\n  if (!mapping[code]) {\n    // console.warn(`Add ${code}`);\n    return val;\n  }\n  const mod = (caps ? 'caps_' : '');\n\n  val = String(mapping[code][mod + lang]);\n\n  return val;\n};\n\nconst renderTitle = (text) => {\n  const title = document.createElement('h1');\n  title.classList.add('container', 'title');\n  title.textContent = text;\n  document.getElementById('root').append(title);\n};\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/utils.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;