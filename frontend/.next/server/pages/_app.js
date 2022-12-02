"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./redux/actionTypes/actionTypes.js
var actionTypes = __webpack_require__(706);
;// CONCATENATED MODULE: ./redux/reducer/auth.js

const authReducer = (state = {
    authData: null
}, action)=>{
    switch(action.type){
        case actionTypes/* AUTH */.B:
            localStorage.setItem("profile", JSON.stringify({
                ...action?.data
            }));
            return {
                ...state,
                authData: action.data,
                loading: false,
                errors: null
            };
        case actionTypes/* LOGOUT */.N:
            localStorage.clear();
            return {
                ...state,
                authData: null,
                loading: false,
                errors: null
            };
        default:
            return state;
    }
};
/* harmony default export */ const auth = (authReducer);

;// CONCATENATED MODULE: ./redux/reducer/index.js

//import authGithubReducer from "./authGithubReducer";

const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    auth: auth
});
/* harmony default export */ const reducer = (rootReducer);

;// CONCATENATED MODULE: ./redux/store/store.js




// import reducer 

// middleware
const middleware = [
    (external_redux_thunk_default())
];
const store = (0,external_redux_namespaceObject.createStore)(reducer, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(...middleware)));
/* harmony default export */ const store_store = (store);
// assigning store to next wrapper
const makeStore = ()=>store;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./themes/default.js
/* harmony default export */ const themes_default = ({
    // Temp fonts
    fonts: {
        title: "Space Grotesk, sans-serif",
        main: "Space Grotesk, sans-serif"
    },
    // Colors for layout
    colors: {
        primary1: "hsl(204,23.8%,95.9%)",
        background1: "#0F1624",
        accent1: "hsl(34.9,98.6%,72.9%)",
        button: "hsl(205.1,100%,36.1%)",
        background2: "hsl(232.7,27.3%,23.7%)"
    },
    // Breakpoints for responsive design
    breakpoints: {
        sm: "screen and (max-width: 640px)",
        md: "screen and (max-width: 768px)",
        lg: "screen and (max-width: 1024px)",
        xl: "screen and (max-width: 1280px)"
    }
});

;// CONCATENATED MODULE: external "styled-normalize"
const external_styled_normalize_namespaceObject = require("styled-normalize");
;// CONCATENATED MODULE: ./styles/globals.js


const GlobalStyles = external_styled_components_.createGlobalStyle`
  ${external_styled_normalize_namespaceObject.normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props)=>props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props)=>props.theme.colors.background1};
    color: ${(props)=>props.theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props)=>props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;
/* harmony default export */ const globals = (GlobalStyles);

;// CONCATENATED MODULE: ./styles/theme.js




const Theme = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
        theme: themes_default,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(globals, {}),
            children
        ]
    });
/* harmony default export */ const theme = (Theme);

;// CONCATENATED MODULE: ./pages/_app.js




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
            store: store_store,
            children: /*#__PURE__*/ jsx_runtime_.jsx(theme, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}


/***/ }),

/***/ 706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ AUTH),
/* harmony export */   "N": () => (/* binding */ LOGOUT)
/* harmony export */ });
const AUTH = "AUTH";
const LOGOUT = "LOGOUT";


/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6658));
module.exports = __webpack_exports__;

})();