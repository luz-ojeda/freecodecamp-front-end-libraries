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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/store.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\src\\\\index.js: Unexpected token (8:8)\\n\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m\\u001b[36mconst\\u001b[39m \\u001b[33mDisplay\\u001b[39m \\u001b[33m=\\u001b[39m (props) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m  7 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  8 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"display-container\\\"\\u001b[39m id\\u001b[33m=\\u001b[39m\\u001b[32m\\\"display-container\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m id\\u001b[33m=\\u001b[39m\\u001b[32m\\\"display-input\\\"\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"display\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m                {props\\u001b[33m.\\u001b[39minput}\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6387:17)\\n    at Parser.unexpected (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7704:16)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8912:20)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8483:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8463:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8329:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8302:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8249:21)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9049:28)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8833:21)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8483:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8463:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8329:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8302:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8249:21)\\n    at Parser.parseExpression (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8197:23)\\n    at Parser.parseReturnStatement (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10269:28)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9948:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9900:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10476:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10463:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10447:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9495:24)\\n    at Parser.parseArrowExpression (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9436:10)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9073:12)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8833:21)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8483:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8463:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8329:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\lucas\\\\Dropbox\\\\Programación\\\\fcc-front-end-libraries-proyectos\\\\javascript-calculator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8302:23)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: Container, store, Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Provider\", function() { return Provider; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_0__);\n ////////////////////////////////////////////////\n// REDUX\n\nconst FIRST_NUMBER = 'FIRST_NUMBER';\nconst ADD_NUMBER = 'ADD_NUMBER';\nconst ADD_DECIMAL = 'ADD_DECIMAL';\nconst ADD_ZERO = 'ADD_ZERO';\nconst ADD_OPERATOR = 'ADD_OPERATOR';\nconst EVALUATE = 'EVALUATE';\nconst CLEAR = 'CLEAR'; //ACTION CREATOR\n\nconst addFirstNumber = number => {\n  return {\n    type: FIRST_NUMBER,\n    number: number\n  };\n};\n\nconst addNumber = number => {\n  return {\n    type: ADD_NUMBER,\n    number: number\n  };\n};\n\nconst addDecimal = () => {\n  return {\n    type: ADD_DECIMAL\n  };\n};\n\nconst addZero = number => {\n  return {\n    type: ADD_ZERO,\n    number: number\n  };\n};\n\nconst addOperator = operator => {\n  return {\n    type: ADD_OPERATOR,\n    operator: operator\n  };\n};\n\nconst evaluateOperation = operation => {\n  return {\n    type: EVALUATE,\n    operation: operation\n  };\n};\n\nconst clearResultAndOperation = () => {\n  return {\n    type: CLEAR\n  };\n}; //REDUCERS     \n\n\nconst inputReducer = (state = '0', action) => {\n  switch (action.type) {\n    case FIRST_NUMBER:\n      return eval(parseInt(state + action.number));\n\n    case ADD_NUMBER:\n      return state + action.number;\n\n    case ADD_DECIMAL:\n      if (state.toString().length == 1) {\n        console.log(\"asd\");\n        return state + '.'; //if it's first number just add the decimal\n      } else if (state[state.length - 1].indexOf('.') == -1) {\n        return state + '.'; //if it's not the first number, check that the last character is not a decimal to avoid repetition\n      }\n\n      return state;\n\n    case ADD_ZERO:\n      if (contains_decimal.test(state) || state != \"0\") {\n        return state + \"0\";\n      }\n\n      return state;\n\n    case ADD_OPERATOR:\n      return action.operator;\n\n    case EVALUATE:\n      try {\n        return eval(state);\n      } catch (err) {\n        return state;\n      }\n\n    case CLEAR:\n      state = '0';\n\n    default:\n      return state;\n  }\n};\n\nconst outputReducer = (state = '0', action) => {\n  switch (action.type) {\n    case FIRST_NUMBER:\n      return eval(parseInt(state + action.number));\n\n    case ADD_NUMBER:\n      return state + action.number;\n\n    case ADD_DECIMAL:\n      if (state.toString().length == 1) {\n        return state + '.';\n      } else if (state[state.length - 1].indexOf('.') == -1) {\n        return state + '.';\n      }\n\n      return state;\n\n    case ADD_ZERO:\n      if (contains_decimal.test(state) || state != \"0\") {\n        return state + \"0\";\n      }\n\n      return state;\n\n    case ADD_OPERATOR:\n      var is_operator = /\\/|\\*|\\-|\\+/;\n      var is_number = /[0-9]/;\n      var two_operators = /(\\/|\\*|\\-|\\+){2}/;\n\n      if (two_operators.test(state.toString().slice(-2))) {\n        return state.replace(state.toString().slice(-2), action.operator);\n      } else if (is_number.test(state) && state.toString().length == 1 || is_number.test(state[state.length - 1])) {\n        return state + action.operator;\n      } else if (is_operator.test(state[state.length - 1]) && action.operator != \"-\") {\n        return state.substring(0, state.length - 1) + action.operator;\n      } else if (is_operator.test(state[state.length - 1]) && state[state.length - 1] != \"-\") {\n        return state + action.operator;\n      }\n\n      return state + action.operator;\n\n    case EVALUATE:\n      try {\n        return eval(state);\n      } catch (err) {\n        alert(\"Please finish the operation or clear input (AC)\");\n        return state;\n      }\n\n    case CLEAR:\n      state = '0';\n\n    default:\n      return state;\n  }\n}; //STORE\n\n\nconst rootReducer = Redux.combineReducers({\n  input: inputReducer,\n  operation: outputReducer\n});\nconst store = Redux.createStore(rootReducer); //CONNECT TO REACT-REDUX\n\nconst Provider = ReactRedux.Provider; //MAP STATE AND PROPS\n\nfunction mapStateToProps(state) {\n  return {\n    input: state.input,\n    operation: state.operation\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    addFirstNumber_dispatched: number => {\n      dispatch(addFirstNumber(number));\n    },\n    addNewNumber: number => {\n      dispatch(addNumber(number));\n    },\n    addNewDecimal: () => {\n      dispatch(addDecimal());\n    },\n    addNewZero: number => {\n      dispatch(addZero(number));\n    },\n    addNewOperator: operator => {\n      dispatch(addOperator(operator));\n    },\n    evaluateOperation_dispatched: operation => {\n      dispatch(evaluateOperation(operation));\n    },\n    clearResultAndOperation_dispatched: () => {\n      dispatch(clearResultAndOperation());\n    }\n  };\n}\n\nconst Container = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"Presentational\"]);\n\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ })

/******/ });