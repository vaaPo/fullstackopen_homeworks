(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n    color: green;\n    font-style: italic;\n  }\nh2 {\n    color: brown;\n    font-style: italic;\n  }\nh3 {\n    color: blueviolet;\n    font-style: italic;\n  }\nh3 {\n    color: darkcyan;\n    font-style: italic;\n  }\nli {\n    color: brown;\n    padding-top: 5px;\n    font-size: 15px;\n  }\n.note {\n    color: darkslateblue;\n    padding-top: 5px;\n    font-size: 15px;\n  }\n.error {\n    color: red;\n    background: lightgrey;\n    font-size: 20px;\n    border-style: solid;\n    border-radius: 5px;\n    padding: 10px;\n    margin-bottom: 10px;\n  }\n  .noerror {\n    color: deepskyblue;\n    background: lightgrey;\n    font-size: 20px;\n    border-style: solid;\n    border-radius: 5px;\n    padding: 10px;\n    margin-bottom: 10px;\n  }", ""]);

// exports


/***/ }),

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

/***/ }),

/***/ "./src/components/AxiosDemos/AxiosDemos.js":
/*!*************************************************!*\
  !*** ./src/components/AxiosDemos/AxiosDemos.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var promisenotes = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:3001/notes');
console.log('AxiosDemos promise /notes', promisenotes);
var promisepersons = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:3001/persons');
console.log('AxiosDemos promis /persons', promisepersons);
/**
axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data;
  console.log('AxiosDemos notes',notes);
});
 */
// prettyprint, curl http://localhost:3001/notes

axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:3001/notes').then(function (response) {
  var notes = response.data;
  console.log('AxiosDemos notes', notes);
}); // this fails:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises  
//const promisefoobar = axios.get('http://localhost:3001/foobar');
//console.log(promisefoobar);

/***/ }),

/***/ "./src/components/Clock/Clock.js":
/*!***************************************!*\
  !*** ./src/components/Clock/Clock.js ***!
  \***************************************/
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





var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/Clock/Clock.js";
 //https://reactjs.org/docs/components-and-props.html
//https://reactjs.org/docs/state-and-lifecycle.html     for Class

var Clock =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Clock, _React$Component);

  function Clock(props) {
    var _this;

    Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Clock);

    _this = Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Clock).call(this, props));
    _this.state = {
      date: new Date()
    }; //FIXME note instead of using this.props.date we handle now the state locally in the Class

    return _this;
  }

  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // mounting, method runs after the component output has been rendered to the DOM. This is a good place to set up a timer
      console.log('Clock componentDidMount');
      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",

    /**While this.props is set up by React itself and this.state has a special meaning, 
     * you are free to add additional fields to the class manually 
     * if you need to store something that doesn’t participate in the data flow (like a timer ID).
     * 
     */
    value: function componentWillUnmount() {
      // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('Clock componentWillUnmount');
      clearInterval(this.timerID);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.setState({
        date: new Date() //It will use this.setState() to schedule updates to the component local state:

      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Clock"), "It is ", this.state.date.toLocaleTimeString(), ".");
    }
  }]);

  return Clock;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Clock);
/**
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
 */

/**In applications with many components, it’s very important to free up resources taken by the components when they are destroyed. */

/**Now the clock ticks every second.

Let’s quickly recap what’s going on and the order in which the methods are called:
1    When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.
2    React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock’s render output.
3    When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method. Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.
4    Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
5    If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.
 */

/***/ }),

/***/ "./src/components/Kurssi/Kurssi.js":
/*!*****************************************!*\
  !*** ./src/components/Kurssi/Kurssi.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Otsikko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Otsikko */ "./src/components/Kurssi/Otsikko.js");
/* harmony import */ var _Sisalto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sisalto */ "./src/components/Kurssi/Sisalto.js");
/* harmony import */ var _Yhteensa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Yhteensa */ "./src/components/Kurssi/Yhteensa.js");
var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/Kurssi/Kurssi.js";



 //console.log("Kurssi.js - loading");

function Kurssi(props) {
  //console.log("Kurssi.js - props", props);
  //console.log("Kurssi.js - props.kurssi", props.kurssi);
  //const parsikurssi = props.kurssi;
  //console.log("Kurssi.js - parsikurssi", parsikurssi);
  var ots = Object(_Otsikko__WEBPACK_IMPORTED_MODULE_1__["default"])(props);
  var yht = Object(_Yhteensa__WEBPACK_IMPORTED_MODULE_3__["default"])(props);
  var osat = Object(_Sisalto__WEBPACK_IMPORTED_MODULE_2__["default"])(props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "otsikko",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, ots), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "osat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, osat, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "yhteensa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, yht)));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Kurssi);

/***/ }),

/***/ "./src/components/Kurssi/Kurssit.js":
/*!******************************************!*\
  !*** ./src/components/Kurssi/Kurssit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Kurssi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Kurssi */ "./src/components/Kurssi/Kurssi.js");
var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/Kurssi/Kurssit.js";

 //console.log("Kurssit.js - loading");

function Kurssit(props) {
  //console.log("Kurssit.js - props", props);
  var kurssix = props.kurssit; //console.log("Kurssit.js - kurssix", kurssix);

  /**var found = kurssix.find(function(kurssi) {
      //  return kurssi.id =2 ;
        return kurssi.id =1 ;
      });
   */
  //console.log("Kurssit - found",found);
  //const kala = kurssix.map((kurssi) => kurssi.nimi);

  var content = kurssix.map(function (mappedkurssi) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: mappedkurssi.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Kurssi__WEBPACK_IMPORTED_MODULE_1__["default"], {
      kurssi: mappedkurssi,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }));
  }); //console.log('Kurssit.js - kala', kala);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, content);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Kurssit);
/**
    <div key={mappedkurssi.id}>
    <h3>{mappedkurssi.nimi}</h3>
    <p><Kurssi kurssi={mappedkurssi}/></p>
    </div>
 */

/***/ }),

/***/ "./src/components/Kurssi/Otsikko.js":
/*!******************************************!*\
  !*** ./src/components/Kurssi/Otsikko.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/Kurssi/Otsikko.js";
 //function Otsikko(props) {
//console.log("Otsikko.js - loading");
//const Otsikko = ({otsake}) => {

function Otsikko(props) {
  //console.log("Otsikko.js - props",props);
  var otsake = props; //console.log("Otsikko.js - otsake.kurssi.nimi", otsake.kurssi.nimi);
  //   //console.log("Otsikko.js - otsake.nimi", otsake.nimi);

  var otsikko15 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Otsikko ", otsake.kurssi.nimi)); //console.log("Otsikko.js - just before return");

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "otsikko15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), otsikko15);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Otsikko);

/***/ }),

/***/ "./src/components/Kurssi/Sisalto.js":
/*!******************************************!*\
  !*** ./src/components/Kurssi/Sisalto.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/Kurssi/Sisalto.js";


function Sisalto(props) {
  //console.log("Sisalto.js - loading");
  //console.log("  Sisalto.js - props", props);
  var content = props.kurssi.osat.map(function (osa) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: osa.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, osa.id, " ", osa.nimi, " ", osa.tehtavia));
  }); //console.log("   Sisalto.js - just before return");

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "osat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), content);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Sisalto);

/***/ }),

/***/ "./src/components/Kurssi/Yhteensa.js":
/*!*******************************************!*\
  !*** ./src/components/Kurssi/Yhteensa.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/Kurssi/Yhteensa.js";


function Yhteensa(props) {
  //console.log("Yhteensa.js - loading");
  //console.log("  Yhteensa.js - props", props);
  var sumteht = props.kurssi.osat.reduce(function (sum, osa) {
    //console.log('Yhteensa sum',sum,'osa',osa, 'osa.tehtavia',osa.tehtavia);     
    return sum + osa.tehtavia;
  }, 0);
  var sumosa = props.kurssi.osat.reduce(function (sum, osa) {
    //console.log('Yhteensa osia',sum); //INFO shows previous value :)
    return sum + 1;
  }, 0);
  /** obsoleted
  const summa = {
      hwtot : 0,
      osatot : 0
  }; 
  props.kurssi.osat.forEach((osa) => {
      summa.hwtot=summa.hwtot+osa.tehtavia;
      summa.osatot=summa.osatot+1;
      //console.log('osa.id:', osa.id,'osa.tehtavia:',osa.tehtavia,'summa.hwtot:', summa.hwtot,'summa.osatot:',summa.osatot,'osa.nimi:', osa.nimi); 
    });
      ////console.log("Yhteensa.js - just before return", summa.hwtot, summa.osatot);
      <h3>Yhteensä tehtäviä {summa.hwtot} kappaletta kurssin {summa.osatot} osassa</h3>
     */
  //console.log("Yhteensa.js - just before return", sumteht, sumosa);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "summaosa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Yhteens\xE4 teht\xE4vi\xE4 ", sumteht, " kappaletta kurssin ", sumosa, " osassa"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Yhteensa);

/***/ }),

/***/ "./src/components/Kurssi/montakurssia.js":
/*!***********************************************!*\
  !*** ./src/components/Kurssi/montakurssia.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datafiles_Kurssit_halfstackkurssi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../datafiles/Kurssit/halfstackkurssi */ "./src/datafiles/Kurssit/halfstackkurssi.js");
/* harmony import */ var _datafiles_Kurssit_nodekurssi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../datafiles/Kurssit/nodekurssi */ "./src/datafiles/Kurssit/nodekurssi.js");
//import React from 'react';

 //console.log("montakurssia.js loading");
//console.log(halfstackkurssi);
//console.log(nodekurssi);

var kurssit = [_datafiles_Kurssit_halfstackkurssi__WEBPACK_IMPORTED_MODULE_0__["default"], _datafiles_Kurssit_nodekurssi__WEBPACK_IMPORTED_MODULE_1__["default"]]; //console.log(kurssit);
//console.log(kurssit.length);

/** just hardcoding here to test 
const kurssit2 = [
  {
    nimi: 'Half Stack -sovelluskehitys',
    id: 1,
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  },
  {
    nimi: 'Node.js',
    id: 2,
    osat: [
      {
        nimi: 'Routing',
        tehtavia: 3,
        id: 1
      },
      {
        nimi: 'Middlewaret',
        tehtavia: 7,
        id: 2
      }
    ]
  }
];
 */
//console.log(kurssit2);
//console.log(kurssit2.length);
//const jabba=JSON.stringify(kurssit) === JSON.stringify(kurssit2);
//console.log("Check if montakurssia can load from files the kurssi parts = ", jabba);

/* harmony default export */ __webpack_exports__["default"] = (kurssit);

/***/ }),

/***/ "./src/components/Notes/AppNotes.js":
/*!******************************************!*\
  !*** ./src/components/Notes/AppNotes.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _NoteRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NoteRow */ "./src/components/Notes/NoteRow.js");
/* harmony import */ var _services_notesTAPI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/notesTAPI */ "./src/components/Notes/services/notesTAPI.js");
/* harmony import */ var _Notification_Notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Notification/Notification */ "./src/components/Notification/Notification.js");







var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/Notes/AppNotes.js";
 //import axios from 'axios';


 // in lecture material this was refactored to ~/services/notes.js

 //notifications

var AppNotes =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AppNotes, _React$Component);

  function AppNotes(props) {
    var _this;

    Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppNotes);

    _this = Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AppNotes).call(this, props));

    _this.addNote = function (event) {
      event.preventDefault();
      var noteObject = {
        content: _this.state.newNote,
        date: new Date().new,
        important: Math.random() > 0.5,
        // 50% chance to get true or false
        id: _this.state.notes.length + 1
      }; // adds note to notes - jsonserver handles post

      /** prior notesTAPI.js 
      axios.post('http://localhost:3001/notes', noteObject)
      .then(response => {
        console.log(response);
        this.setState({
          notes: this.state.notes.concat(response.data),
          newNote: ''
        })
      });
       */

      /**
      notesTAPI
        .create(noteObject)
        .then(response => {
          this.setState({
            notes: this.state.notes.concat(response.data),
            newNote: ''
          })
        });
       */

      _services_notesTAPI__WEBPACK_IMPORTED_MODULE_9__["default"].createpromised(noteObject).then(function (newNote) {
        _this.setState({
          notes: _this.state.notes.concat(newNote),
          newNote: ''
        });
      });
      /** OBSOLETED WITH AXIOS POST        const notes = this.state.notes.concat(noteObject);
              this.setState({
                notes,
                newNote: ''
      });
       */
    };

    _this.handleNoteChange = function (event) {
      console.log(event.target.value);

      _this.setState({
        newNote: event.target.value
      });
    };

    _this.toggleVisible = function () {
      _this.setState({
        showAll: !_this.state.showAll
      }); // toggles the true to false to true

    };

    _this.toggleImportance = function (id) {
      return function () {
        //FIXME es6 template string doesnt work: console.log('importance of ${id} needs to be toggled');
        console.log('importance of ' + id + ' needs to be toggled'); //FIXME ei toimi  const url='http://localhost:3001/notes/${id}';            // note specific unique url
        // notesTAPI.js <-- const url='http://localhost:3001/notes/'+id;

        var note = _this.state.notes.find(function (n) {
          return n.id === id;
        }); // get id reference (to note) for the to be changed note


        var changedNote = Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, note, {
          important: !note.important
        }); // object spread https://github.com/tc39/proposal-object-rest-spread

        /**
         * Käytännössä {...note} luo olion, jolla on kenttinään kopiot olion note kenttien arvoista. 
         * Kun aaltosulkeisiin lisätään asioita, esim. { ...note, important: true }, 
         * tulee uuden olion kenttä important saamaan arvon true. 
         * Eli esimerkissämme important saa uudessa oliossa vanhan arvonsa käänteisarvon.
         * Kannattaa myös huomata, että uusi olio changedNote on ainoastaan ns shallow copy,  https://en.wikipedia.org/wiki/Object_copying#Shallow_copy
         * eli uuden olion kenttien arvoina on vanhan olion kenttien arvot. 
         * Jos vanhan olion kentät olisivat itsessään olioita, 
         * viittaisivat uuden olion kentät samoihin olioihin.
         * 
         *  Koska tilaa ei Reactissa saa muuttaa suoraan!
         */

        /** prior notesTAPI.jos 
        axios
          .put(url, changedNote)
          .then(response => {
            this.setState({
              notes: this.state.notes.map(note=>note.id!==id ? note:response.data)
            })
          });
        */

        /**
         notesTAPI
           .update(id, changedNote)
           .then(response => {
             this.setState({
               notes: this.state.notes.map(note=>note.id!==id ? note:response.data)
             })
           });
          */


        _services_notesTAPI__WEBPACK_IMPORTED_MODULE_9__["default"].updatepromised(id, changedNote).then(function (changedNote) {
          var notes = _this.state.notes.filter(function (n) {
            return n.id !== id;
          });

          _this.setState({
            notes: notes.concat(changedNote)
          });
        }) //              .catch(error => {
        //                alert(`muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta`)
        //                this.setState({ notes: this.state.notes.filter(n => n.id !== id) })
        //              });  //promise-chain ends here, so .catch is here too
        .catch(function (error) {
          _this.setState({
            error: "muistiinpano '".concat(note.content, "' on jo valitettavasti poistettu palvelimelta"),
            notes: _this.state.notes.filter(function (n) {
              return n.id !== id;
            })
          });

          setTimeout(function () {
            _this.setState({
              error: null
            });
          }, 5000);
        });
        /**
         * Uusi muistiinpano lähetetään sitten PUT-pyynnön mukana palvelimelle, jossa se korvaa aiemman muistiinpanon.
         * Takaisinkutsufunktiossa asetetaan komponentin App tilaan kaikki vanhat muistiinpanot 
         * paitsi MUUTTUNEEN, josta tilaan asetetaan PALVELIMEN PALAUTTAMA versio:
         * Tämä saadaan aikaan metodilla map joka siis luo uuden taulukon vanhan taulukon perusteella. 
         * Jokainen uuden taulukon alkio luodaan ehdollisesti siten, että 
         * jos ehto note.id !== id on tosi, otetaan uuteen taulukkoon suoraan vanhan taulukon kyseinen alkio. 
         * Jos ehto on epätosi, eli kyseessä on muutettu muistiinpano, otetaan uuteen taulukkoon palvelimen palauttama olio.
         * 
         */
      };
      /**Eli komponentin App metodi toggleImportanceOf ei itsessään ole tapahtumankäsittelijä, 
       * vaan tehdas, jonka avulla kullekin muistiinpanolle luodaan oma tapahtumankäsittelijä.
       * Yksittäistä json-serverillä olevaa muistiinpanoa voi muuttaa kahdella tavalla, 
       * joko korvaamalla sen tekemällä HTTP PUT -pyyntö muistiinpanon yksilöivään osoitteeseen 
       * tai muuttamalla ainoastaan joidenkin muistiinpanon kenttien arvoja HTTP PATCH -pyynnöllä.
       * 
       */
    };

    _this.state = {
      notes: [],
      newNote: '',
      showAll: true,
      error: null //'catched that something went wrong..'

    };
    console.log('AppNotes constructor');
    _this.toggleVisible = _this.toggleVisible.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    _this.addNote = _this.addNote.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    _this.handleNoteChange = _this.handleNoteChange.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    return _this;
  }

  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AppNotes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('AppNotes did mount');
      /** prior notesTAPI.js
      axios
        .get('http://localhost:3001/notes')
        .then(response => {
          console.log('AppNotes promise fulfilled');
          this.setState({ notes: response.data });
        });
      */

      /** notesTAPI vanillas, then must handled here
      notesTAPI                        //summoned in notesTAPI.js
      .getAll()
      .then(response => {
        this.setState({
          notes: response.data        // response from http get
        })
      });
      */

      _services_notesTAPI__WEBPACK_IMPORTED_MODULE_9__["default"] //        .getAllpromised()           // ok function
      .getAllpromisedpaskaa() // to test .catch in end of promise-chain see toggleImportance
      .then(function (response) {
        _this2.setState({
          notes: response
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('AppNotes componentWillUnmount');
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log('AppNotes render');
      var notesToShow = // ternary operator, if showAll===false then filter
      this.state.showAll ? this.state.notes : this.state.notes.filter(function (note) {
        return note.important === true;
      }); // render only important===true

      var label = this.state.showAll ? 'vain tärkeät' : 'kaikki';
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "AppNotes"), "using notesTAPI to get,put,post to json-server", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.toggleVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "n\xE4yt\xE4 ", label), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, notesToShow.map(function (note) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_NoteRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: note.id,
          note: note,
          toggleImportance: _this3.toggleImportance(note.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Notification_Notification__WEBPACK_IMPORTED_MODULE_10__["default"], {
        message: this.state.error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.addNote,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        name: "addNoteInput",
        type: "text",
        value: this.state.newNote,
        onChange: this.handleNoteChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "tallenna")));
    }
  }]);

  return AppNotes;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (AppNotes);

/***/ }),

/***/ "./src/components/Notes/NoteRow.js":
/*!*****************************************!*\
  !*** ./src/components/Notes/NoteRow.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/Notes/NoteRow.js";


var NoteRow = function NoteRow(_ref) {
  var note = _ref.note,
      toggleImportance = _ref.toggleImportance;
  var label = note.important ? 'make not important' : 'make important';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "note",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, ">", note.content, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: toggleImportance,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, label));
};

/* harmony default export */ __webpack_exports__["default"] = (NoteRow);

/***/ }),

/***/ "./src/components/Notes/services/notesTAPI.js":
/*!****************************************************!*\
  !*** ./src/components/Notes/services/notesTAPI.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var baseUrl = 'http://localhost:3001/notes'; // vanilla approach, returns promised which must be handled by the caller

var getAll = function getAll() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl); // returns response from the http get, ugly but works, .then in caller
};

var create = function create(newObject) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl, newObject);
};

var update = function update(id, newObject) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(baseUrl, "/").concat(id), newObject);
}; // improved tapi's promise handled here, returns only the response.data


var getAllpromised = function getAllpromised() {
  var request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl);
  return request.then(function (response) {
    return response.data;
  }); // return request.then(response => { return response.data })
  //returns only data, look .then now handled here for the http data response and caller must handle .then for the 'pure' data
};

var getAllpromisedpaskaa = function getAllpromisedpaskaa() {
  // use to test that .catch works in toggleImportance  (cant toggle non-existent!)
  var request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl);
  var nonExisting = {
    id: 10000,
    content: 'Tätä muistiinpanoa ei ole palvelimelta CLICKKAAMUA!!',
    date: '2017-12-10T17:30:31.098Z',
    important: true
  };
  return request.then(function (response) {
    return response.data.concat(nonExisting);
  });
};

var createpromised = function createpromised(newObject) {
  var request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl, newObject);
  return request.then(function (response) {
    return response.data;
  }); // again post has also response, .then handled here
};

var updatepromised = function updatepromised(id, newObject) {
  var request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(baseUrl, "/").concat(id), newObject);
  return request.then(function (response) {
    return response.data;
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getAll: getAll,
  create: create,
  update: update,
  getAllpromised: getAllpromised,
  createpromised: createpromised,
  updatepromised: updatepromised,
  getAllpromisedpaskaa: getAllpromisedpaskaa
});

/***/ }),

/***/ "./src/components/Notification/Notification.js":
/*!*****************************************************!*\
  !*** ./src/components/Notification/Notification.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/Notification/Notification.js";


var Notification = function Notification(_ref) {
  var message = _ref.message;

  if (message === null) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, message);
};

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./src/components/Notification/OkNotification.js":
/*!*******************************************************!*\
  !*** ./src/components/Notification/OkNotification.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/Notification/OkNotification.js";


var OkNotification = function OkNotification(_ref) {
  var message = _ref.message;

  if (message === null) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "noerror",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, message);
};

/* harmony default export */ __webpack_exports__["default"] = (OkNotification);

/***/ }),

/***/ "./src/components/PhoneBook/AllPersons.js":
/*!************************************************!*\
  !*** ./src/components/PhoneBook/AllPersons.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PersonRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonRow */ "./src/components/PhoneBook/PersonRow.js");
var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/PhoneBook/AllPersons.js";


console.log("AllPersons.js - loading");

var AllPersons = function AllPersons(_ref) {
  var persons = _ref.persons;
  var hit = persons;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "AllPersons:"), hit.map(function (person) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PersonRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: person.id,
      person: person,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AllPersons);

/***/ }),

/***/ "./src/components/PhoneBook/AppPhoneBook.js":
/*!**************************************************!*\
  !*** ./src/components/PhoneBook/AppPhoneBook.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PersonRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PersonRow */ "./src/components/PhoneBook/PersonRow.js");
/* harmony import */ var _FormPersonsByString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormPersonsByString */ "./src/components/PhoneBook/FormPersonsByString.js");
/* harmony import */ var _FilterPersonsByName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FilterPersonsByName */ "./src/components/PhoneBook/FilterPersonsByName.js");
/* harmony import */ var _FilterPersonsByString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FilterPersonsByString */ "./src/components/PhoneBook/FilterPersonsByString.js");
/* harmony import */ var _AllPersons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AllPersons */ "./src/components/PhoneBook/AllPersons.js");
/* harmony import */ var _FormPersonAdd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormPersonAdd */ "./src/components/PhoneBook/FormPersonAdd.js");
/* harmony import */ var _services_personsTAPI__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/personsTAPI */ "./src/components/PhoneBook/services/personsTAPI.js");
/* harmony import */ var _Notification_Notification__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Notification/Notification */ "./src/components/Notification/Notification.js");
/* harmony import */ var _Notification_OkNotification__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Notification/OkNotification */ "./src/components/Notification/OkNotification.js");






var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/PhoneBook/AppPhoneBook.js";
 //import axios from 'axios';








 //notifications

 //notifications

var AppPhoneBook =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AppPhoneBook, _React$Component);

  function AppPhoneBook(props) {
    var _this;

    Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppPhoneBook);

    _this = Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppPhoneBook).call(this, props));

    _this.addPerson = function (event) {
      event.preventDefault();

      var duplicate = _this.state.persons.find(function (person) {
        return person.name === _this.state.newPerson;
      });

      if (duplicate === undefined) {
        console.log(duplicate);
        alert('addPerson submitted: ' + _this.state.newPerson + ' with phonenumber:' + _this.state.newPhonenumber);
        var personObject = {
          name: _this.state.newPerson,
          phonenumber: _this.state.newPhonenumber //        id: this.state.persons.length + 1

        };
        _services_personsTAPI__WEBPACK_IMPORTED_MODULE_13__["default"].createpromised(personObject).then(function (newPerson) {
          _this.setState({
            persons: _this.state.persons.concat(personObject),
            //FIXME ei toimi json-serverin luoma id puuttuu
            newPerson: '',
            newPhonenumber: '',
            noerror: 'addPerson!'
          });

          setTimeout(function () {
            _this.setState({
              noerror: null
            });
          }, 5000);

          _this.refreshPersons();
        }); //      const persons = this.state.persons.concat(personObject);
        //      this.setState({
        //        persons: persons,
        //        newPerson: '',
        //        newPhonenumber: ''
        //      });
      } else {//alert('duplicate check: ' +this.state.newPerson +" is duplicate " + duplicate); 
        }

      ;
    };

    _this.handlePersonChange = function (event) {
      console.log(event.target.value);

      _this.setState({
        newPerson: event.target.value
      });
    };

    _this.handlePhonenumberChange = function (event) {
      console.log(event.target.value);

      _this.setState({
        newPhonenumber: event.target.value
      });
    };

    _this.addFormPerson = function (event) {
      event.preventDefault();
      alert('addFormPerson submitted: ' + _this.state.newFormPerson + ' with phonenumber:' + _this.state.newFormPhonenumber);

      var duplicate = _this.state.persons.find(function (person) {
        return person.name === _this.state.newFormPerson;
      });

      if (duplicate === undefined) {
        console.log(duplicate);
        var personObject = {
          name: _this.state.newFormPerson,
          phonenumber: _this.state.newFormPhonenumber //        id: this.state.persons.length + 1

        };
        _services_personsTAPI__WEBPACK_IMPORTED_MODULE_13__["default"].createpromised(personObject).then(function (newPerson) {
          _this.setState({
            persons: _this.state.persons.concat(personObject),
            //FIXME returning id uupuu?
            newFormPerson: '',
            newFormPhonenumber: '',
            ValueFormPerson: '',
            ValueFormPhonenumber: '',
            noerror: 'addPerson!'
          });

          setTimeout(function () {
            _this.setState({
              noerror: null
            });
          }, 5000);

          _this.refreshPersons();
        }); //      const persons = this.state.persons.concat(personObject);
        //  
        //      this.setState({
        //        persons: persons,
        //        newFormPerson: '',
        //        newFormPhonenumber: '',
        //        ValueFormPerson: '',
        //        ValueFormPhonenumber:''
        //      });
      } else {
        alert('duplicate check: ' + _this.state.newFormPerson + " is duplicate " + duplicate);
      }

      ;
    };

    _this.handleChangeValueFormPerson = function (event) {
      console.log('hCVFormP', event.target.value);

      _this.setState({
        newFormPerson: event.target.value
      });
    };

    _this.handleChangeValueFormPhonenumber = function (event) {
      console.log('hCVFormPn', event.target.value);

      _this.setState({
        newFormPhonenumber: event.target.value
      });
    };

    _this.handlesearchPersonChange = function (event) {
      console.log(event.target.value);

      _this.setState({
        value: event.target.value.toUpperCase(),
        newsearchPerson: event.target.value.toUpperCase()
      });
    };

    _this.handleFormPersonByString = function (event) {
      console.log(event.target.value); //alert('handleFormPersonByString event.target.value: ' + event.target.value);

      _this.setState({
        value: event.target.value.toUpperCase(),
        newsearchPerson: event.target.value.toUpperCase()
      });
    };

    _this.state = {
      showAll: true,
      persons: [],
      newPerson: '',
      newPhonenumber: '',
      newFormPerson: '',
      newFormPhonenumber: '',
      newsearchPerson: '',
      value: '',
      deletePersonId: '',
      error: null,
      noerror: null
    };
    console.log('AppPhoneBook constructor');
    _this.addPerson = _this.addPerson.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handlePersonChange = _this.handlePersonChange.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handlesearchPersonChange = _this.handlesearchPersonChange.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleFormPersonByString = _this.handleFormPersonByString.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleChangeValueFormPerson = _this.handleChangeValueFormPerson.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleChangeValueFormPhonenumber = _this.handleChangeValueFormPhonenumber.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.onPersonClickDelDeep = _this.onPersonClickDelDeep.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppPhoneBook, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('AppPhoneBook did mount');
      /**      axios
              .get('http://localhost:3001/persons')
              .then(response => {
                console.log('AppPhoneBook promise fulfilled');
                this.setState({ persons: response.data });
              });
               */

      _services_personsTAPI__WEBPACK_IMPORTED_MODULE_13__["default"].getAllpromised().then(function (response) {
        _this2.setState({
          persons: response,
          noerror: 'personsTAPI getAllpromised gets persons to you!'
        });

        setTimeout(function () {
          _this2.setState({
            noerror: null
          });
        }, 5000);
      });
    }
  }, {
    key: "refreshPersons",
    value: function refreshPersons() {
      var _this3 = this;

      console.log('AppPhoneBook.js refreshPersons');
      this.setState({
        persons: []
      });
      _services_personsTAPI__WEBPACK_IMPORTED_MODULE_13__["default"].getAllpromised().then(function (response) {
        _this3.setState({
          persons: response,
          noerror: 'refreshPersons!'
        });

        setTimeout(function () {
          _this3.setState({
            noerror: null
          });
        }, 5000);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('AppPhoneBook componentWillUnmount');
    }
  }, {
    key: "onPersonClickDelDeep",
    // conditional chains type, but only one row
    //  of ternary https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
    // the difference of == and ===
    value: function onPersonClickDelDeep() {
      alert("AppPhoneBook onPersonClickDelDeep ");
      console.log("this.onPersonClickDelDeep");
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      console.log('AppPhoneBook render');
      var fetchedpersons = this.state.persons;
      console.log('AppPhoneBook fetchedpersons', fetchedpersons);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "AppPhoneBook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "AppPhoneBook for HW2.14"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Notification_OkNotification__WEBPACK_IMPORTED_MODULE_15__["default"], {
        message: this.state.noerror,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Notification_Notification__WEBPACK_IMPORTED_MODULE_14__["default"], {
        message: this.state.error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "uses axios: adding persons,duplicate prevention,phonenumbers and search"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "components: AllPersons, FilterPersonsByName, FilterPersonsByString, FormPersonAdd"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_FormPersonsByString__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: this.state.value,
        onChangeValue: this.handleFormPersonByString,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "FilterPersonsByString",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_FilterPersonsByString__WEBPACK_IMPORTED_MODULE_10__["default"], {
        searchstring: this.state.newsearchPerson,
        persons: this.state.persons,
        onPersonClickDel: function onPersonClickDel() {
          return _this4.refreshPersons();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_FormPersonAdd__WEBPACK_IMPORTED_MODULE_12__["default"], {
        ValuePerson: this.state.newFormPerson,
        onChangeValuePerson: this.handleChangeValueFormPerson,
        ValuePhonenumber: this.state.newFormPhonenumber,
        onChangeValuePhonenumber: this.handleChangeValueFormPhonenumber,
        onSubmit: this.addFormPerson,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onChange: this.searchPerson,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "search:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        name: "searchPersonInput",
        type: "text",
        value: this.state.newsearchPerson,
        onChange: this.handlesearchPersonChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      })), "debug: ", this.state.newsearchPerson), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "Person-form in App"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.addPerson,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "name:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        name: "addPersonInput",
        type: "text",
        value: this.state.newPerson,
        onChange: this.handlePersonChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "phonenumber:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        name: "addPhonenumberInput",
        type: "text",
        value: this.state.newPhonenumber,
        onChange: this.handlePhonenumberChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "tallenna person")), "debug: ", this.state.newPerson));
    }
  }]);

  return AppPhoneBook;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (AppPhoneBook);
/**
 * 
        <div id="FormPersonsByString"><h1>FORM FormPersonsByString</h1>
        <FormPersonsByString value={this.state.value} onChangeValue={this.handleFormPersonByString} />

                </div>

                        <div id="searchedpersonsincludes"><h2>Searched persons, string includes</h2>
            {searchitpersons3.map(person=><PersonRow key={person.id} person={person}/>)}
        <div id="searchedpersonsexact"><h2>Searched persons, exact match</h2>
            {searchitpersons.map(person=><PersonRow key={person.id} person={person}/>)}
        <div id="persons"><h2>All persons</h2>
            {this.state.persons.map(person=><PersonRow key={person.id} person={person}/>)}

        <p><b>AppPhoneBook.PersonsRow:</b>{fetchedpersons.map(person=><PersonRow 
                                                                        key={person.id}
                                                                        person={person}
                                                                        deletePerson={this.deletePerson(person.id)} />)}</p>

 */

/**
 * 
 *         <div id="AllPersons"><AllPersons persons={this.state.persons}/>
        <div id="FilterPersonsByName"><FilterPersonsByName searchstring={this.state.newsearchPerson} persons={this.state.persons}/>
        </div>
        </div>

 */

/***/ }),

/***/ "./src/components/PhoneBook/FilterPersonsByName.js":
/*!*********************************************************!*\
  !*** ./src/components/PhoneBook/FilterPersonsByName.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PersonRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonRow */ "./src/components/PhoneBook/PersonRow.js");
var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/PhoneBook/FilterPersonsByName.js";


console.log("FilterPersonsByName.js - loading");

var FilterPersonsByName = function FilterPersonsByName(_ref) {
  var searchstring = _ref.searchstring,
      persons = _ref.persons;
  var hit = persons.filter(function (obj) {
    return obj.name.toUpperCase() === searchstring;
  });
  console.log('FPBN searchstring', searchstring);
  console.log('FPBN persons', persons);
  console.log('FPBN hit', hit);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "FilterPersonsByName:"), searchstring, " ", hit.map(function (person) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PersonRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: person.id,
      person: person,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FilterPersonsByName);

/***/ }),

/***/ "./src/components/PhoneBook/FilterPersonsByString.js":
/*!***********************************************************!*\
  !*** ./src/components/PhoneBook/FilterPersonsByString.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PersonRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PersonRow */ "./src/components/PhoneBook/PersonRow.js");
/* harmony import */ var _services_personsTAPI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/personsTAPI */ "./src/components/PhoneBook/services/personsTAPI.js");
/* harmony import */ var _Notification_Notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Notification/Notification */ "./src/components/Notification/Notification.js");
/* harmony import */ var _Notification_OkNotification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Notification/OkNotification */ "./src/components/Notification/OkNotification.js");






var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/PhoneBook/FilterPersonsByString.js";



 //notifications

 //notifications

console.log("FilterPersonsByString.js - loading");

var FilterPersonsByString =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FilterPersonsByString, _React$Component);

  function FilterPersonsByString(props) {
    var _this;

    Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FilterPersonsByString);

    _this = Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FilterPersonsByString).call(this, props));
    _this.state = {
      deleteId: null,
      noerror: null,
      error: null
    };
    console.log('PersonRow constructor');
    _this.onPersonClickDel = _this.onPersonClickDel.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterPersonsByString, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // mounting, method runs after the component output has been rendered to the DOM. This is a good place to set up a timer
      console.log('PersonRow componentDidMount');
      console.log('PersonRow props', this.props);
    }
  }, {
    key: "componentWillUnmount",

    /**While this.props is set up by React itself and this.state has a special meaning, 
     * you are free to add additional fields to the class manually 
     * if you need to store something that doesn’t participate in the data flow (like a timer ID).
     * 
     */
    value: function componentWillUnmount() {
      // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('PersonRow componentWillUnmount');
    }
  }, {
    key: "onPersonClickDel",
    value: function onPersonClickDel(id) {
      var _this2 = this;

      alert("FPBS onPersonClickDel for id " + id);
      console.log("FPBS onPersonClickDel", id);
      _services_personsTAPI__WEBPACK_IMPORTED_MODULE_8__["default"].deletepromised(id).then(function (deletedPerson) {
        alert("deletePromised " + id);

        _this2.props.onPersonClickDel(id);

        _this2.setState({
          noerror: 'DELETE OK!'
        });

        setTimeout(function () {
          _this2.setState({
            noerror: null
          });
        }, 5000);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var hit = this.props.persons.filter(function (obj) {
        return obj.name.toUpperCase().includes(_this3.props.searchstring);
      });
      console.log('FPBS searchstring', this.props.searchstring);
      console.log('FPBS persons', this.props.persons);
      console.log('FPBS hit', hit);
      var content = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "FilterPersonsByString:"), this.props.searchstring, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Notification_OkNotification__WEBPACK_IMPORTED_MODULE_10__["default"], {
        message: this.state.noerror,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Notification_Notification__WEBPACK_IMPORTED_MODULE_9__["default"], {
        message: this.state.error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), hit.map(function (person) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PersonRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: person.id,
          person: person,
          onPersonClick: function onPersonClick() {
            return _this3.onPersonClickDel(person.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        });
      }));
      /**
      const content =<><br></br><b>FilterPersonsByString:</b>{this.props.searchstring} 
                     {hit.map(person=><PersonRow
                          key={person.id}
                          person={person}
                          onPersonClick={() => this.props.onPersonClickDel(person.id)}
                          />)}</>;
      */

      return content;
    }
  }]);

  return FilterPersonsByString;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (FilterPersonsByString); //const FilterPersonsByString = ({ searchstring,persons,onSubmitDelete }) => {

/**
 * 
    return (
        <p><b>FilterPersonsByString:</b>{this.props.searchstring} 
                                        {hit.map(person=><PersonRow
                                                             key={person.id}
                                                             person={person}
                                                             onPersonClick={() => this.onPersonClickDel(person.id)}
                                                             />)}</p>
    );
 */

/***/ }),

/***/ "./src/components/PhoneBook/FormPersonAdd.js":
/*!***************************************************!*\
  !*** ./src/components/PhoneBook/FormPersonAdd.js ***!
  \***************************************************/
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





var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/PhoneBook/FormPersonAdd.js";
 //https://reactjs.org/docs/components-and-props.html
//https://reactjs.org/docs/state-and-lifecycle.html     for Class
//https://stackoverflow.com/questions/41619166/react-can-a-child-component-send-value-back-to-parent-form/41626358
//https://stackoverflow.com/questions/48458334/functions-are-not-valid-as-a-react-child-this-may-happen-if-you-return-a-compon
// the parent is App and this is the child

var FormPersonAdd =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FormPersonAdd, _React$Component);

  function FormPersonAdd() {
    Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FormPersonAdd);

    return Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FormPersonAdd).apply(this, arguments));
  }

  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FormPersonAdd, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // mounting, method runs after the component output has been rendered to the DOM. This is a good place to set up a timer
      console.log('FormPersonAdd componentDidMount');
    }
  }, {
    key: "componentWillUnmount",

    /**While this.props is set up by React itself and this.state has a special meaning, 
     * you are free to add additional fields to the class manually 
     * if you need to store something that doesn’t participate in the data flow (like a timer ID).
     * 
     */
    value: function componentWillUnmount() {
      // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('FormPersonAdd componentWillUnmount');
    }
  }, {
    key: "render",

    /** handler lifted too App parent
     */
    //type="text"
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "FormPersonAdd")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        onSubmit: this.props.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "name:", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        name: "addPersonInput",
        type: "text",
        value: this.props.ValuePerson,
        onChange: this.props.onChangeValuePerson,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "phonenumber:", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        name: "addPhonenumberInput",
        type: "text",
        value: this.props.ValuePhonenumber,
        onChange: this.props.onChangeValuePhonenumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "FormPersonAdd tallenna person")));
    }
  }]);

  return FormPersonAdd;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (FormPersonAdd);

/***/ }),

/***/ "./src/components/PhoneBook/FormPersonsByString.js":
/*!*********************************************************!*\
  !*** ./src/components/PhoneBook/FormPersonsByString.js ***!
  \*********************************************************/
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





var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/PhoneBook/FormPersonsByString.js";
 //https://reactjs.org/docs/components-and-props.html
//https://reactjs.org/docs/state-and-lifecycle.html     for Class
//https://stackoverflow.com/questions/41619166/react-can-a-child-component-send-value-back-to-parent-form/41626358
//https://stackoverflow.com/questions/48458334/functions-are-not-valid-as-a-react-child-this-may-happen-if-you-return-a-compon
// the parent is App and this is the child

var FormPersonsByString =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FormPersonsByString, _React$Component);

  function FormPersonsByString() {
    Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FormPersonsByString);

    return Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FormPersonsByString).apply(this, arguments));
  }

  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FormPersonsByString, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // mounting, method runs after the component output has been rendered to the DOM. This is a good place to set up a timer
      console.log('FormPersonsByString componentDidMount');
    }
  }, {
    key: "componentWillUnmount",

    /**While this.props is set up by React itself and this.state has a special meaning, 
     * you are free to add additional fields to the class manually 
     * if you need to store something that doesn’t participate in the data flow (like a timer ID).
     * 
     */
    value: function componentWillUnmount() {
      // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('FormPersonsByString componentWillUnmount');
    }
  }, {
    key: "render",

    /** handler lifted too App parent
     */
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        onChange: this.searchPerson,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "FormPersonsByString:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        name: "FormPersonsByStringInput",
        type: "text",
        value: this.props.value,
        onChange: this.props.onChangeValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), "debug this.props.value: ", this.props.value));
    }
  }]);

  return FormPersonsByString;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (FormPersonsByString); // tää on killeri           debug this.props.onChangeValue: {this.props.onChangeValue}
// thanx for finding that this causes the warning to mr. Joona in telegram..
// jos se häiritsee ni pistä vaik {`${onChangeValue}`} eli käytännös pistät sen stringiks
//const newHOCFormPersonsByString =   // do we need to do Higher order components to get rid of warnings?

/**Warning: Functions are not valid as a React child. 
 * This may happen if you return a Component instead of <Component /> from render. 
 * Or maybe you meant to call this function rather than return it.
 * 
 */

/***/ }),

/***/ "./src/components/PhoneBook/PersonRow.js":
/*!***********************************************!*\
  !*** ./src/components/PhoneBook/PersonRow.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_personsTAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/personsTAPI */ "./src/components/PhoneBook/services/personsTAPI.js");






var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/PhoneBook/PersonRow.js";



var PersonRow =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PersonRow, _React$Component);

  function PersonRow(props) {
    var _this;

    Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PersonRow);

    _this = Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PersonRow).call(this, props));
    _this.state = {
      deleteId: null
    };
    console.log('PersonRow constructor');
    _this.onPersonClick = _this.onPersonClick.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PersonRow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // mounting, method runs after the component output has been rendered to the DOM. This is a good place to set up a timer
      console.log('PersonRow componentDidMount');
      console.log('PersonRow props', this.props);
    }
  }, {
    key: "componentWillUnmount",

    /**While this.props is set up by React itself and this.state has a special meaning, 
     * you are free to add additional fields to the class manually 
     * if you need to store something that doesn’t participate in the data flow (like a timer ID).
     * 
     */
    value: function componentWillUnmount() {
      // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('PersonRow componentWillUnmount');
    }
  }, {
    key: "onPersonClick",
    value: function onPersonClick(id) {
      alert("PersonRow onPersonClick for this.props.person.id " + id);
      console.log("this.onPersonClick", id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      /** 
      const content= <><br></br>{this.props.person.id}
                                {this.props.person.phonenumber}
                                {this.props.person.name}
                                <button type="submit" 
                                        onClick={() => this.onPersonClick(this.props.person.id)}>
                                        del
                                </button>
                      </>;
      */
      var content = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), this.props.person.id, this.props.person.phonenumber, this.props.person.name, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "submit",
        onClick: function onClick() {
          return _this2.props.onPersonClick(_this2.props.person.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "del"));
      return content;
    }
  }]);

  return PersonRow;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (PersonRow); //const PersonRow = ({ person }) => {

/***/ }),

/***/ "./src/components/PhoneBook/services/personsTAPI.js":
/*!**********************************************************!*\
  !*** ./src/components/PhoneBook/services/personsTAPI.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var baseUrl = 'http://localhost:3001/persons'; // improved tapi's promise handled here, returns only the response.data

var getAllpromised = function getAllpromised() {
  var request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl);
  return request.then(function (response) {
    return response.data;
  }); // return request.then(response => { return response.data })
  //returns only data, look .then now handled here for the http data response and caller must handle .then for the 'pure' data
};

var createpromised = function createpromised(newObject) {
  var request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl, newObject);
  return request.then(function (response) {
    return response.data;
  }); // again post has also response, .then handled here
};

var updatepromised = function updatepromised(id, newObject) {
  var request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(baseUrl, "/").concat(id), newObject);
  return request.then(function (response) {
    return response.data;
  });
};

var deletepromised = function deletepromised(id) {
  var request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("".concat(baseUrl, "/").concat(id));
  return request.then(function (response) {
    return response.data;
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getAllpromised: getAllpromised,
  createpromised: createpromised,
  updatepromised: updatepromised,
  deletepromised: deletepromised
});

/***/ }),

/***/ "./src/components/RestCountries/AppCountries.js":
/*!******************************************************!*\
  !*** ./src/components/RestCountries/AppCountries.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _FormCountriesByString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormCountriesByString */ "./src/components/RestCountries/FormCountriesByString.js");
/* harmony import */ var _FilterCountriesByString__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FilterCountriesByString */ "./src/components/RestCountries/FilterCountriesByString.js");






var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/RestCountries/AppCountries.js";

 //import CountryRow from './CountryRow';


 //import Imagetest from './Imagetest';

var AppCountries =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AppCountries, _React$Component);

  function AppCountries(props) {
    var _this;

    Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppCountries);

    _this = Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppCountries).call(this, props));

    _this.handleFormCountriesByString = function (event) {
      console.log(event.target.value); //alert('handleFormCountriesByString event.target.value: ' + event.target.value);

      _this.setState({
        value: event.target.value.toUpperCase(),
        newsearchCountry: event.target.value.toUpperCase()
      });
    };

    _this.state = {
      countries: [],
      newsearchCountry: '',
      value: '',
      responsedatalength: ''
    };
    console.log('AppCountries constructor');
    _this.handleFormCountriesByString = _this.handleFormCountriesByString.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppCountries, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('AppCountries did mount');
      axios__WEBPACK_IMPORTED_MODULE_7___default.a //        .get('http://localhost:3001/all_name_capital_population_flag_alpha3Code') //https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;alpha3Code
      .get('https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;alpha3Code').then(function (response) {
        console.log('AppCountries promise fulfilled');

        _this2.setState({
          countries: response.data
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('AppCountries componentWillUnmount');
    }
  }, {
    key: "render",
    value: function render() {
      console.log('AppCountries render');
      var fetchedcountries = this.state.countries;
      var responsedatalength = this.state.countries.length;
      console.log('AppCountries render responsedatalength', responsedatalength); //const haemut='Å';
      //const haemut='A';

      console.log('AppCountries fetchedcountries', fetchedcountries);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "AppCountries",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "AppCountries for HW2.13"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "uses axios to fetch countries from restcountries.eu"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "components: FilterCountriesByString, FormCountriesByString"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_FormCountriesByString__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: this.state.value,
        onChangeValue: this.handleFormCountriesByString,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "FilterCountriesByString",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_FilterCountriesByString__WEBPACK_IMPORTED_MODULE_9__["default"], {
        searchstring: this.state.newsearchCountry,
        countries: this.state.countries,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })));
    }
  }]);

  return AppCountries;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (AppCountries);

/***/ }),

/***/ "./src/components/RestCountries/CountryRow.js":
/*!****************************************************!*\
  !*** ./src/components/RestCountries/CountryRow.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_image_resizer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-image-resizer */ "./node_modules/react-image-resizer/lib/index.js");
/* harmony import */ var react_image_resizer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_image_resizer__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/RestCountries/CountryRow.js";



var CountryRow =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CountryRow, _React$Component);

  function CountryRow(props) {
    var _this;

    Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CountryRow);

    _this = Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CountryRow).call(this, props));
    _this.state = {
      showdetail: false
    };
    console.log("CountryRow - loading");
    console.log("CountryRow - props", props);
    _this.handleClick = _this.handleClick.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CountryRow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('CountryRow did mount');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('CountryRow componentWillUnmount');
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.setState(function (state) {
        return {
          showdetail: !state.showdetail
        };
      });
      console.log('PUM', this.state.showdetail);
    }
  }, {
    key: "render",
    value: function render() {
      //  country: this.props.country
      //  responsedatalength: this.props.responsedatalength
      var country = this.props.country;
      var responsedatalength = this.props.responsedatalength;
      var name = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, country.name));
      var alpha3Code = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, country.alpha3Code);
      var capital = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "capital:"), " ", country.capital);
      var population = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "population:"), " ", country.population);
      var flag = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_image_resizer__WEBPACK_IMPORTED_MODULE_7___default.a, {
        src: country.flag,
        height: 50,
        width: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      });
      console.log('CountryRow render this.state.showdetail', this.state.showdetail);

      if (responsedatalength === 1 || this.state.showdetail === true) {
        var detail = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, name, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "capital",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, capital, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "population",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, population, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "alpha3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, alpha3Code), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "flag",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, flag))));
        return detail;
      } else {
        //              const row=<><li>{country.alpha3Code} <div id="clickmerow" onClick={this.handleClick}>{country.name}</div></li></>;
        var row = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          onClick: this.handleClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, country.name);
        return row; //              return (<div id="clickmerow" onClick={this.handleClick}>{row}</div>);
        // eslint-disable-next-line
      }

      ;
    }
  }]);

  return CountryRow;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (CountryRow);

/***/ }),

/***/ "./src/components/RestCountries/FilterCountriesByString.js":
/*!*****************************************************************!*\
  !*** ./src/components/RestCountries/FilterCountriesByString.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CountryRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountryRow */ "./src/components/RestCountries/CountryRow.js");
var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/RestCountries/FilterCountriesByString.js";


console.log("FilterCountriesByString.js - loading");

var FilterCountriesByString = function FilterCountriesByString(_ref) {
  var searchstring = _ref.searchstring,
      countries = _ref.countries;
  console.log('FilterCountriesByString searchstring', searchstring);
  var hitx = countries.filter(function (obj) {
    return obj.name.toUpperCase().includes('Å');
  });
  console.log(hitx);
  var hit = countries.filter(function (obj) {
    return obj.name.toUpperCase().includes(searchstring);
  });
  var hitcount = hit.length;
  console.log('FCBS searchstring:', searchstring, 'and hitcount as hit.length', hitcount); //    console.log('FCBS countries',countries);

  if (hitcount < 11) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "FilterCountriesByString:"), searchstring, hit.map(function (country) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountryRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: country.alpha3Code,
        country: country,
        responsedatalength: hitcount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "too many rows, refine search"); // eslint-disable-next-line
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (FilterCountriesByString);

/***/ }),

/***/ "./src/components/RestCountries/FormCountriesByString.js":
/*!***************************************************************!*\
  !*** ./src/components/RestCountries/FormCountriesByString.js ***!
  \***************************************************************/
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





var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/RestCountries/FormCountriesByString.js";
 //https://reactjs.org/docs/components-and-props.html
//https://reactjs.org/docs/state-and-lifecycle.html     for Class
//https://stackoverflow.com/questions/41619166/react-can-a-child-component-send-value-back-to-parent-form/41626358
//https://stackoverflow.com/questions/48458334/functions-are-not-valid-as-a-react-child-this-may-happen-if-you-return-a-compon
// the parent is App and this is the child

var FormCountriesByString =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FormCountriesByString, _React$Component);

  function FormCountriesByString() {
    Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FormCountriesByString);

    return Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FormCountriesByString).apply(this, arguments));
  }

  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FormCountriesByString, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // mounting, method runs after the component output has been rendered to the DOM. This is a good place to set up a timer
      console.log('FormCountriesByString componentDidMount');
    }
  }, {
    key: "componentWillUnmount",

    /**While this.props is set up by React itself and this.state has a special meaning, 
     * you are free to add additional fields to the class manually 
     * if you need to store something that doesn’t participate in the data flow (like a timer ID).
     * 
     */
    value: function componentWillUnmount() {
      // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('FormCountriesByString componentWillUnmount');
    }
  }, {
    key: "render",

    /** handler lifted too App parent
     */
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        onChange: this.searchCountry,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "FormCountriesByString:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        name: "FormCountriesByStringInput",
        type: "text",
        value: this.props.value,
        onChange: this.props.onChangeValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), "debug this.props.value: ", this.props.value));
    }
  }]);

  return FormCountriesByString;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (FormCountriesByString);

/***/ }),

/***/ "./src/components/Temperature/BoilingVerdict.js":
/*!******************************************************!*\
  !*** ./src/components/Temperature/BoilingVerdict.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/Temperature/BoilingVerdict.js";


function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, "The water would boil.");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "The water would not boil.");
}

;
/* harmony default export */ __webpack_exports__["default"] = (BoilingVerdict);

/***/ }),

/***/ "./src/components/Temperature/TemperatureCalculator.js":
/*!*************************************************************!*\
  !*** ./src/components/Temperature/TemperatureCalculator.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TemperatureInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TemperatureInput */ "./src/components/Temperature/TemperatureInput.js");
/* harmony import */ var _TryConvert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TryConvert */ "./src/components/Temperature/TryConvert.js");
/* harmony import */ var _toCelsius__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toCelsius */ "./src/components/Temperature/toCelsius.js");
/* harmony import */ var _toFahrenheit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toFahrenheit */ "./src/components/Temperature/toFahrenheit.js");
/* harmony import */ var _BoilingVerdict__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BoilingVerdict */ "./src/components/Temperature/BoilingVerdict.js");






var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/Temperature/TemperatureCalculator.js";





 //https://reactjs.org/docs/lifting-state-up.html

var TemperatureCalculator =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TemperatureCalculator, _React$Component);

  function TemperatureCalculator(props) {
    var _this;

    Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TemperatureCalculator);

    _this = Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TemperatureCalculator).call(this, props));
    _this.handleCelsiusChange = _this.handleCelsiusChange.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleFahrenheitChange = _this.handleFahrenheitChange.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.state = {
      temperature: '',
      scale: 'c'
    };
    return _this;
  }

  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TemperatureCalculator, [{
    key: "handleCelsiusChange",
    value: function handleCelsiusChange(temperature) {
      this.setState({
        scale: 'c',
        temperature: temperature
      });
    }
  }, {
    key: "handleFahrenheitChange",
    value: function handleFahrenheitChange(temperature) {
      this.setState({
        scale: 'f',
        temperature: temperature
      });
    }
  }, {
    key: "render",
    value: function render() {
      var scale = this.state.scale;
      var temperature = this.state.temperature;
      var celsius = scale === 'f' ? Object(_TryConvert__WEBPACK_IMPORTED_MODULE_8__["default"])(temperature, _toCelsius__WEBPACK_IMPORTED_MODULE_9__["default"]) : temperature; // see f --> c

      var fahrenheit = scale === 'c' ? Object(_TryConvert__WEBPACK_IMPORTED_MODULE_8__["default"])(temperature, _toFahrenheit__WEBPACK_IMPORTED_MODULE_10__["default"]) : temperature; // see c --> f

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "TemperatureCalculator"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TemperatureInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
        scale: "c",
        temperature: celsius,
        onTemperatureChange: this.handleCelsiusChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TemperatureInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
        scale: "f",
        temperature: fahrenheit,
        onTemperatureChange: this.handleFahrenheitChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_BoilingVerdict__WEBPACK_IMPORTED_MODULE_11__["default"], {
        celsius: parseFloat(celsius),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }));
    }
  }]);

  return TemperatureCalculator;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TemperatureCalculator);

/***/ }),

/***/ "./src/components/Temperature/TemperatureInput.js":
/*!********************************************************!*\
  !*** ./src/components/Temperature/TemperatureInput.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/components/Temperature/TemperatureInput.js";

var scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

var TemperatureInput =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TemperatureInput, _React$Component);

  function TemperatureInput(props) {
    var _this;

    Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TemperatureInput);

    _this = Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TemperatureInput).call(this, props));
    _this.handleChange = _this.handleChange.bind(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_paavo_src_git3_homeworks_osa2_hw2_14_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TemperatureInput, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var temperature = this.props.temperature;
      var scale = this.props.scale;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("legend", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Enter temperature in ", scaleNames[scale], ":"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        value: temperature,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
    }
  }]);

  return TemperatureInput;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (TemperatureInput);

/***/ }),

/***/ "./src/components/Temperature/TryConvert.js":
/*!**************************************************!*\
  !*** ./src/components/Temperature/TryConvert.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tryConvert(temperature, convert) {
  var input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return '';
  }

  var output = convert(input);
  var rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

;
/* harmony default export */ __webpack_exports__["default"] = (tryConvert);

/***/ }),

/***/ "./src/components/Temperature/toCelsius.js":
/*!*************************************************!*\
  !*** ./src/components/Temperature/toCelsius.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

;
/* harmony default export */ __webpack_exports__["default"] = (toCelsius);

/***/ }),

/***/ "./src/components/Temperature/toFahrenheit.js":
/*!****************************************************!*\
  !*** ./src/components/Temperature/toFahrenheit.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

;
/* harmony default export */ __webpack_exports__["default"] = (toFahrenheit);

/***/ }),

/***/ "./src/datafiles/Kurssit/halfstackkurssi.js":
/*!**************************************************!*\
  !*** ./src/datafiles/Kurssit/halfstackkurssi.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// ./src/datafiles/Kurssit/halfstackkurssi.js
console.log("halfstackkurssi.js loading");
var kurssi = {
  nimi: 'Half Stack -sovelluskehitys',
  id: 1,
  osat: [{
    nimi: 'Reactin perusteet',
    tehtavia: 10,
    id: 1
  }, {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7,
    id: 2
  }, {
    nimi: 'Komponenttien tila',
    tehtavia: 14,
    id: 3
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (kurssi);

/***/ }),

/***/ "./src/datafiles/Kurssit/nodekurssi.js":
/*!*********************************************!*\
  !*** ./src/datafiles/Kurssit/nodekurssi.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// ./src/datafiles/Kurssit/nodekurssi.js
console.log("nodekurssi.js loading");
var kurssi = {
  nimi: 'Node.js',
  id: 2,
  osat: [{
    nimi: 'Routing',
    tehtavia: 3,
    id: 1
  }, {
    nimi: 'Middlewaret',
    tehtavia: 7,
    id: 2
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (kurssi);

/***/ }),

/***/ "./src/datafiles/Notes/notes.js":
/*!**************************************!*\
  !*** ./src/datafiles/Notes/notes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var notes = [{
  id: 1,
  content: 'HTML on helppoa',
  date: '2017-12-10T17:30:31.098Z',
  important: true
}, {
  id: 2,
  content: 'Selain pystyy suorittamaan vain javascriptiä',
  date: '2017-12-10T18:39:34.091Z',
  important: false
}, {
  id: 3,
  content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
  date: '2017-12-10T19:20:14.298Z',
  important: true
}];
/* harmony default export */ __webpack_exports__["default"] = (notes);

/***/ }),

/***/ "./src/datafiles/PhoneBook/persons.js":
/*!********************************************!*\
  !*** ./src/datafiles/PhoneBook/persons.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var persons = [{
  id: 1,
  name: 'Arto Hellas',
  phonenumber: '+358 1234 567'
}, {
  id: 2,
  name: 'Martti Tienari',
  phonenumber: '040-123456'
}, {
  id: 3,
  name: 'Arto Järvinen',
  phonenumber: '040-123456'
}, {
  id: 4,
  name: 'Lea Kutvonen',
  phonenumber: '040-123456'
}];
console.log(persons);
console.log(persons[1].name); //Filter array of objects, which property matches value, returns array:

var result = persons.filter(function (obj) {
  return obj.name === 'Arto Hellas';
});
console.log(result);
var searchitpersons = persons.filter(function (obj) {
  return obj.name.toUpperCase() === 'ARTO HELLAS';
});
console.log('searchitpersons', searchitpersons);
var searchitpersons2 = persons.filter(function (obj) {
  return obj.name.toUpperCase().includes('ARTO HELLAS');
});
console.log('searchitpersons2', searchitpersons2);
var kala = 'AR';
var searchitpersons3 = persons.filter(function (obj) {
  return obj.name.toUpperCase().includes(kala);
});
console.log('searchitpersons3', searchitpersons3);
/* harmony default export */ __webpack_exports__["default"] = (persons);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _datafiles_Notes_notes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datafiles/Notes/notes */ "./src/datafiles/Notes/notes.js");
/* harmony import */ var _components_Kurssi_montakurssia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Kurssi/montakurssia */ "./src/components/Kurssi/montakurssia.js");
/* harmony import */ var _datafiles_PhoneBook_persons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datafiles/PhoneBook/persons */ "./src/datafiles/PhoneBook/persons.js");
/* harmony import */ var _components_AxiosDemos_AxiosDemos_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/AxiosDemos/AxiosDemos.js */ "./src/components/AxiosDemos/AxiosDemos.js");
var _jsxFileName = "/home/paavo/src/git3/homeworks/osa2/hw2.14/src/index.js";








console.log("Index.js loading"); //const kala=AxiosInitialFetchPersons;
//console.log("Index.js axios kala", kala);

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  notes: _datafiles_Notes_notes__WEBPACK_IMPORTED_MODULE_4__["default"],
  kurssit: _components_Kurssi_montakurssia__WEBPACK_IMPORTED_MODULE_5__["default"],
  persons: _datafiles_PhoneBook_persons__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), document.getElementById('root')); //  <App notes={notes} kurssit={montakurssia} persons={persons}/>,

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paavo/src/git3/homeworks/osa2/hw2.14/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/paavo/src/git3/homeworks/osa2/hw2.14/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map