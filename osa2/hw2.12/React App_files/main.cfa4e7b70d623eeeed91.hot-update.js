webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_RestCountries_AppCountries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/RestCountries/AppCountries */ "./src/components/RestCountries/AppCountries.js");
/* harmony import */ var _components_PhoneBook_AppPhoneBook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PhoneBook/AppPhoneBook */ "./src/components/PhoneBook/AppPhoneBook.js");
/* harmony import */ var _components_Notes_AppNotes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Notes/AppNotes */ "./src/components/Notes/AppNotes.js");
/* harmony import */ var _components_Clock_Clock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Clock/Clock */ "./src/components/Clock/Clock.js");
/* harmony import */ var _components_Temperature_TemperatureCalculator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Temperature/TemperatureCalculator */ "./src/components/Temperature/TemperatureCalculator.js");
/* harmony import */ var _components_Kurssi_Kurssit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Kurssi/Kurssit */ "./src/components/Kurssi/Kurssit.js");





var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/App.js";






 //import AxiosDemosNotes from './components/AxiosDemos/AxiosDemoNotes';
//import AxiosDemosPersons from './components/AxiosDemos/AxiosDemoPersons';

console.log("App.js - imports loaded");

var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.state = {
      kurssit: props.kurssit
    };
    return _this;
  }

  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",

    /**console.log("App.js - const App=(props) loading");
    console.log("App.js - props",props);
    console.log("App.js - kurssit", kurssit);
    console.log("App.js - notes", notes);
    console.log("App.js - just before return");
     */
    value: function render() {
      //        <AppPhoneBook />
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "AppNotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Notes_AppNotes__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "opetusohjelma",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "App"), " HW2.14 AppPhoneBook uses server to add + all the previous sample and hw apps: AppCountries, AxiosDemosNotes, AxiosDemosPersons, Clock, TemperatureCalculator, Opetusohjelma", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "AppPhoneBook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PhoneBook_AppPhoneBook__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "AppPhoneBook")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "AppCountries",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "AppCountries"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_RestCountries_AppCountries__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "Kurssit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Kurssi_Kurssit__WEBPACK_IMPORTED_MODULE_11__["default"], {
        kurssit: this.state.kurssit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "Clock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Clock_Clock__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "TemperatureCalculator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Temperature_TemperatureCalculator__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (App);
/**
 *      <div id="AppPhoneBook"><AppPhoneBook /></div>
        <div id="AxiosDemosNotes"><AxiosDemosNotes /></div>
        <div id="AxiosDemosPersons"><AxiosDemosPersons /></div>
        <div id="AppNotes"><AppNotes /></div>
        <div id="Clock"><Clock /></div>
        <div id="TemperatureCalculator"><TemperatureCalculator /></div>
        <div id="Kurssit">
        <Kurssit kurssit={this.state.kurssit}/>
        </div>
 
 */

/***/ })

})
//# sourceMappingURL=main.cfa4e7b70d623eeeed91.hot-update.js.map