"use strict";
exports.id = 767;
exports.ids = [767];
exports.modules = {

/***/ 674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C$": () => (/* binding */ cartReducer),
/* harmony export */   "Uw": () => (/* binding */ cartActions)
/* harmony export */ });
/* unused harmony export cartSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = [];
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action)=>{
            state.push(action.payload);
        },
        removeItem: (state, action)=>{
            return state.filter((item)=>item.id !== action.payload.id
            );
        }
    }
});
const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;


/***/ }),

/***/ 258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ productApi),
/* harmony export */   "C": () => (/* binding */ useGetProductsQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const productApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: 'api/products',
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    endpoints: (build)=>({
            getProducts: build.query({
                query: (limit = 5)=>`products?limit=${limit}`
            })
        })
});
const { useGetProductsQuery  } = productApi;


/***/ })

};
;