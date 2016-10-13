webpackJsonp([0],{

/***/ 0:
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_module_1 = __webpack_require__(/*! ./app/app.module */ 23);
	// if (process.env.ENV === 'production') {
	//   enableProdMode();
	// }
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 21);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 24);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule
	            ],
	            declarations: [
	                app_component_1.AppComponent
	            ],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 24:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	__webpack_require__(/*! ./styles.css */ 25);
	// require("css!./styles.css");
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            // template: '<div>Hello world<div>'
	            template: __webpack_require__(/*! ./app.component.html */ 26),
	            styles: [__webpack_require__(/*! ./app.component.css */ 28)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 25:
/*!****************************!*\
  !*** ./src/app/styles.css ***!
  \****************************/
/***/ function(module, exports) {

	module.exports = "// removed by extract-text-webpack-plugin"

/***/ },

/***/ 26:
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div>\n  <h1>Hello from Angular App with Webpack</h1>\n  <img src=\"" + __webpack_require__(/*! ../album-art-4.jpg */ 27) + "\">\n</div>";

/***/ },

/***/ 27:
/*!*****************************!*\
  !*** ./src/album-art-4.jpg ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/album-art-4.05247e44bb9ba554191803604a95d430.jpg";

/***/ },

/***/ 28:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = "// removed by extract-text-webpack-plugin"

/***/ }

});
//# sourceMappingURL=app.js.map