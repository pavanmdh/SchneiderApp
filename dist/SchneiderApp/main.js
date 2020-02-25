(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-help/about-help.component.css":
/*!*****************************************************!*\
  !*** ./src/app/about-help/about-help.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n  \r\n  /* Bottom left text */\r\n  \r\n  .bottom-left {\r\n    position: absolute;\r\n    top: 250px;\r\n    left: 200px;\r\n    font-size: xx-large;\r\n  }\r\n  \r\n  .text{\r\n    position: absolute;\r\n    top: 300px;\r\n    left: 200px;\r\n    font-size: medium;\r\n    text-align: justify;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtaGVscC9hYm91dC1oZWxwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQSxxQkFBcUI7O0VBQ3JCO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LWhlbHAvYWJvdXQtaGVscC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJvdHRvbSBsZWZ0IHRleHQgKi9cclxuICAuYm90dG9tLWxlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNTBweDtcclxuICAgIGxlZnQ6IDIwMHB4O1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICB9XHJcbiAgLnRleHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwMHB4O1xyXG4gICAgbGVmdDogMjAwcHg7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/about-help/about-help.component.html":
/*!******************************************************!*\
  !*** ./src/app/about-help/about-help.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body style=\"background-color:rgba(245, 245, 245, 0.884)\">\n  <div class=\"container\">\n  <img src=\"assets/Images/bg.jpg\" alt=\"help-background\" width=\"900px\" height=\"500px\" >\n  <div class=\"bottom-left\">Contact Support</div>\n  <div class=\"text\">Reach out to our customer care team<br>if you have any questions or need <br>more details or technical support.</div>\n  </div>\n\n  <div class=\"container-fluid\" style=\"margin-left: 305px; margin-right: 305px; margin-top: 30px; background-color:white;\">\n    <h1 class=\"lead\" style=\"text-align: justify; color: limegreen; font:bold\">\n      For technical support please contact us.             \n    </h1>\n    <p class=\"lead\" style=\"text-align: justify; font-size: medium; color: darkslategray;\">\n      +91 1800 103 0011<br><br>+91 1800 419 4272</p>\n    </div>\n    <p><br></p>\n  </body>"

/***/ }),

/***/ "./src/app/about-help/about-help.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-help/about-help.component.ts ***!
  \****************************************************/
/*! exports provided: AboutHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutHelpComponent", function() { return AboutHelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutHelpComponent = /** @class */ (function () {
    function AboutHelpComponent() {
    }
    AboutHelpComponent.prototype.ngOnInit = function () {
    };
    AboutHelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-help',
            template: __webpack_require__(/*! ./about-help.component.html */ "./src/app/about-help/about-help.component.html"),
            styles: [__webpack_require__(/*! ./about-help.component.css */ "./src/app/about-help/about-help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutHelpComponent);
    return AboutHelpComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration/configuration.component */ "./src/app/configuration/configuration.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _about_help_about_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-help/about-help.component */ "./src/app/about-help/about-help.component.ts");
/* harmony import */ var _documents_communication_documents_communication_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./documents-communication/documents-communication.component */ "./src/app/documents-communication/documents-communication.component.ts");










var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    {
        path: 'app', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"], children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
            { path: 'configuration', component: _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_6__["ConfigurationComponent"] },
            { path: 'page-not-found', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] },
            { path: 'about-help', component: _about_help_about_help_component__WEBPACK_IMPORTED_MODULE_8__["AboutHelpComponent"] },
            { path: 'documents-communication', component: _documents_communication_documents_communication_component__WEBPACK_IMPORTED_MODULE_9__["DocumentsCommunicationComponent"] }
        ]
    },
    { path: '**', redirectTo: 'app/page-not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  \n</div> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/common.service */ "./src/app/shared/common.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(commonService) {
        this.commonService = commonService;
        this.title = 'SchneiderApp';
        this.showHeader = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./configuration/configuration.component */ "./src/app/configuration/configuration.component.ts");
/* harmony import */ var _configuration_leftgroup_leftgroup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./configuration/leftgroup/leftgroup.component */ "./src/app/configuration/leftgroup/leftgroup.component.ts");
/* harmony import */ var _configuration_groupdetails_groupdetails_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./configuration/groupdetails/groupdetails.component */ "./src/app/configuration/groupdetails/groupdetails.component.ts");
/* harmony import */ var _configuration_productlist_productlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./configuration/productlist/productlist.component */ "./src/app/configuration/productlist/productlist.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _about_help_about_help_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about-help/about-help.component */ "./src/app/about-help/about-help.component.ts");
/* harmony import */ var _documents_communication_documents_communication_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./documents-communication/documents-communication.component */ "./src/app/documents-communication/documents-communication.component.ts");
/* harmony import */ var _documents_communicationng_documents_communicationng_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./documents-communicationng/documents-communicationng.component */ "./src/app/documents-communicationng/documents-communicationng.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _configuration_leftgroup_leftgroup_component__WEBPACK_IMPORTED_MODULE_12__["LeftGroupComponent"],
                _configuration_groupdetails_groupdetails_component__WEBPACK_IMPORTED_MODULE_13__["GroupDetailsComponent"],
                _configuration_productlist_productlist_component__WEBPACK_IMPORTED_MODULE_14__["ProductListComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_11__["ConfigurationComponent"],
                _about_help_about_help_component__WEBPACK_IMPORTED_MODULE_16__["AboutHelpComponent"],
                _documents_communication_documents_communication_component__WEBPACK_IMPORTED_MODULE_17__["DocumentsCommunicationComponent"],
                _documents_communicationng_documents_communicationng_component__WEBPACK_IMPORTED_MODULE_18__["DocumentsCommunicationngComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/configuration/configuration.component.css":
/*!***********************************************************!*\
  !*** ./src/app/configuration/configuration.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/configuration/configuration.component.html":
/*!************************************************************!*\
  !*** ./src/app/configuration/configuration.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <left-group></left-group>\n    <product-list></product-list>\n    <group-details></group-details>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/configuration/configuration.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/configuration/configuration.component.ts ***!
  \**********************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigurationComponent = /** @class */ (function () {
    function ConfigurationComponent() {
    }
    ConfigurationComponent.prototype.ngOnInit = function () {
    };
    ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuration',
            template: __webpack_require__(/*! ./configuration.component.html */ "./src/app/configuration/configuration.component.html"),
            styles: [__webpack_require__(/*! ./configuration.component.css */ "./src/app/configuration/configuration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigurationComponent);
    return ConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/configuration/configuration.service.ts":
/*!********************************************************!*\
  !*** ./src/app/configuration/configuration.service.ts ***!
  \********************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ConfigurationService = /** @class */ (function () {
    function ConfigurationService() {
        this.groupdetailSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.productListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // items: Array<any> = [['1','2',3,4,5,6,7],[1,2,3],[1,2,3,4]];
        this.items = [["ACB_com_modules_concept_191118-02", "ACB_com_modules_concept_191118-03", "ACB_com_modules_concept_191118-04", "ACB_com_modules_concept_191118-05", "ACB_com_modules_concept_191118-06"],
            ["ACB_com_modules_concept_191118-07", "ACB_com_modules_concept_191118-08"],
            ["ACB_com_modules_concept_191118-09", "ACB_com_modules_concept_191118-10", "ACB_com_modules_concept_191118-12"],
            ["ACB_com_modules_concept_191118-12", "ACB_com_modules_concept_191118-13", "ACB_com_modules_concept_191118-14b", "ACB_com_modules_concept_191118-15B"],
            ["ACB_com_modules_concept_191118-15B", "ACB_com_modules_concept_191118-15C", "ACB_com_modules_concept_191118-15D", "ACB_com_modules_concept_191118-16B"]];
        this.productlist = {
            "Interlock MV/LV": ["Interlock MV/LV List 1", "Interlock MV/LV List 2", "Interlock MV/LV List 3", "Interlock MV/LV List 4"],
            "ZSI": ["ZSI List 1", "ZSI List 2", "ZSI List 3", "ZSI List 4", "ZSI List 5"],
            "Load Schedule": ["Load Schedule List 1", "Load Schedule List 2"],
            "ATS": ["ATS List 1", "ATS List 2", "ATS List 3"]
        };
        this.parts = {
            "Interlock MV/LV List 1": ["ACB_com_modules_concept_191118-02", "ACB_com_modules_concept_191118-03", "ACB_com_modules_concept_191118-04"],
            "Interlock MV/LV List 2": ["ACB_com_modules_concept_191118-05", "ACB_com_modules_concept_191118-06"],
            "Interlock MV/LV List 3": ["ACB_com_modules_concept_191118-07", "ACB_com_modules_concept_191118-08"],
            "Interlock MV/LV List 4": ["ACB_com_modules_concept_191118-09", "ACB_com_modules_concept_191118-10", "ACB_com_modules_concept_191118-12"],
            "ZSI List 1": ["ACB_com_modules_concept_191118-12", "ACB_com_modules_concept_191118-13"],
            "ZSI List 2": ["ACB_com_modules_concept_191118-14b", "ACB_com_modules_concept_191118-15B"],
            "ZSI List 3": ["ACB_com_modules_concept_191118-15B"],
            "ZSI List 4": ["ACB_com_modules_concept_191118-15D",],
            "ZSI List 5": ["ACB_com_modules_concept_191118-15C", "ACB_com_modules_concept_191118-15D"],
            "Load Schedule List 1": ["ACB_com_modules_concept_191118-09"],
            "Load Schedule List 2": ["ACB_com_modules_concept_191118-15B", "ACB_com_modules_concept_191118-15C"],
            "ATS List 1": ["ACB_com_modules_concept_191118-08"],
            "ATS List 2": ["ACB_com_modules_concept_191118-06"],
            "ATS List 3": ["ACB_com_modules_concept_191118-10"]
        };
    }
    ConfigurationService.prototype.sendGroupDetails = function (str) {
        // this.groupdetailSubject.next(this.items[index]?this.items[index]:[]);
        this.groupdetailSubject.next(this.parts[str]);
    };
    ConfigurationService.prototype.sendProductListDetails = function (product) {
        this.productListSubject.next(this.productlist[product]);
    };
    ConfigurationService.prototype.clearGroup = function () {
        this.groupdetailSubject.next([]);
    };
    ConfigurationService.prototype.clearProductList = function () {
        this.productListSubject.next([]);
    };
    ConfigurationService.prototype.getGroupDetails = function () {
        return this.groupdetailSubject.asObservable();
    };
    ConfigurationService.prototype.getProductListDetails = function () {
        return this.productListSubject.asObservable();
    };
    ConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/app/configuration/groupdetails/groupdetails.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/configuration/groupdetails/groupdetails.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#group-details {\n    min-height: 400px;\n    /* border: 1px solid coral; */\n    /* padding: 10px 5px; */\n}\n\n.detail-container {\n    height: 100px;\n    width: 100px;\n    margin-bottom: 20px;\n}\n\n.flex-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    /* align-items: flex-start; */\n}\n\n.assembly-container {\n    height: 500px;\n    border: 1px solid rgba(199, 218, 199, 0.829);\n}\n\n#assembly-details {\n    height: 500px;\n    width: 450px;\n    border: 1px solid rgba(199, 218, 199, 0.829);\n    float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlndXJhdGlvbi9ncm91cGRldGFpbHMvZ3JvdXBkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osNENBQTRDO0lBQzVDLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYXRpb24vZ3JvdXBkZXRhaWxzL2dyb3VwZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dyb3VwLWRldGFpbHMge1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGNvcmFsOyAqL1xuICAgIC8qIHBhZGRpbmc6IDEwcHggNXB4OyAqL1xufVxuXG4uZGV0YWlsLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLyogYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXG59XG5cbi5hc3NlbWJseS1jb250YWluZXIge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTksIDIxOCwgMTk5LCAwLjgyOSk7XG59XG5cbiNhc3NlbWJseS1kZXRhaWxzIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5OSwgMjE4LCAxOTksIDAuODI5KTtcbiAgICBmbG9hdDogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/configuration/groupdetails/groupdetails.component.html":
/*!************************************************************************!*\
  !*** ./src/app/configuration/groupdetails/groupdetails.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"group-details\" class=\"col-md-4\">\n    <div *ngIf=\"items.length == 0\">Please select group to view details</div>\n    <div class=\"flex-container\">\n        <div class=\"detail-container\" *ngFor = \"let item of items\">\n            <a href=\"#\" class=\"thumbnail\">\n                <img src=\"assets/Images/Square_200x200.png\" alt=\"loading\">\n              </a>\n          </div>\n    </div>\n</div> -->\n\n<div id=\"group-details\" class=\"col-md-3\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">Parts</div>\n        <div *ngIf=\"items.length == 0\">Please select group to view details</div>\n        <div class=\"flex-container\">\n            <div class=\"detail-container\" *ngFor = \"let item of items\">\n                <a class=\"thumbnail\" cdkDrag>\n                    <img src = \"assets/Images/{{item}}.png\" alt=\"loading\">\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"panel panel-default\" id=\"assembly-details\">\n    <div class=\"panel-heading\">Assembly</div>\n</div>\n"

/***/ }),

/***/ "./src/app/configuration/groupdetails/groupdetails.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/configuration/groupdetails/groupdetails.component.ts ***!
  \**********************************************************************/
/*! exports provided: GroupDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailsComponent", function() { return GroupDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration.service */ "./src/app/configuration/configuration.service.ts");



var GroupDetailsComponent = /** @class */ (function () {
    function GroupDetailsComponent(configurationService) {
        this.configurationService = configurationService;
        this.items = [];
        this.dropItems = [];
    }
    GroupDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.detailsSubscription = this.configurationService.getGroupDetails().subscribe(function (data) {
            _this.items = data;
        });
    };
    GroupDetailsComponent.prototype.ngDocheck = function () {
        this.items = [];
    };
    GroupDetailsComponent.prototype.ngOnDestroy = function () {
        this.detailsSubscription.unsubscribe();
    };
    GroupDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'group-details',
            template: __webpack_require__(/*! ./groupdetails.component.html */ "./src/app/configuration/groupdetails/groupdetails.component.html"),
            styles: [__webpack_require__(/*! ./groupdetails.component.css */ "./src/app/configuration/groupdetails/groupdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
    ], GroupDetailsComponent);
    return GroupDetailsComponent;
}());



/***/ }),

/***/ "./src/app/configuration/leftgroup/leftgroup.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/configuration/leftgroup/leftgroup.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#left-group{\n    height: 400px;\n    border: 1px solid coral;\n    padding: 10px 5px;\n    margin-right: 20px;\n}\n\n.deck{\n    position: relative;\n    cursor: pointer;\n    height: 40px;\n    margin: 5px;\n    text-align: center;\n    border: 1px solid rgb(37, 241, 37);\n    padding-left: 19px;\n}\n\n.deck-active{\n    padding-left: 10px;\n    border: 1px solid rgb(14, 139, 14);\n    border-left: 10px solid green;\n}\n\n.badge-align{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\nli {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlndXJhdGlvbi9sZWZ0Z3JvdXAvbGVmdGdyb3VwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb25maWd1cmF0aW9uL2xlZnRncm91cC9sZWZ0Z3JvdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsZWZ0LWdyb3Vwe1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgY29yYWw7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uZGVja3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDM3LCAyNDEsIDM3KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE5cHg7XG59XG5cbi5kZWNrLWFjdGl2ZXtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE0LCAxMzksIDE0KTtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCBncmVlbjtcbn1cblxuLmJhZGdlLWFsaWdue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmxpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/configuration/leftgroup/leftgroup.component.html":
/*!******************************************************************!*\
  !*** ./src/app/configuration/leftgroup/leftgroup.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"left-group\" class=\"col-md-3\">\n    <div (click)=\"check($event)\">\n\n        <div class=\"deck\" [ngClass]=\"{'deck-active': selectedGroupId == '1'}\">\n            <span class=\"badge badge-align\">Interlock MV/LV</span>\n        </div>\n    \n        <div class=\"deck\" [ngClass]=\"{'deck-active': selectedGroupId == '2'}\">\n            <span class=\"badge badge-align\">ZSI</span>\n        </div>\n\n        <div class=\"deck\" [ngClass]=\"{'deck-active': selectedGroupId == '3'}\">\n            <span class=\"badge badge-align\">Load Schedule</span>\n        </div>\n\n        <div class=\"deck\" [ngClass]=\"{'deck-active': selectedGroupId == '4'}\">\n            <span class=\"badge badge-align\">ATS</span>\n        </div>\n\n    </div>\n\n      \n</div> -->\n\n<div class=\"col-md-2\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">Application</div>\n      <div class=\"panel-body\" (click)=\"check($event)\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" [ngClass]=\"{'active': selectedGroupId == '1'}\">Interlock MV/LV</li>\n          <li class=\"list-group-item\" [ngClass]=\"{'active': selectedGroupId == '2'}\">ZSI</li>\n          <li class=\"list-group-item\" [ngClass]=\"{'active': selectedGroupId == '3'}\">Load Schedule</li>\n          <li class=\"list-group-item\" [ngClass]=\"{'active': selectedGroupId == '4'}\">ATS</li>\n        </ul>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/configuration/leftgroup/leftgroup.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/configuration/leftgroup/leftgroup.component.ts ***!
  \****************************************************************/
/*! exports provided: LeftGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftGroupComponent", function() { return LeftGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration.service */ "./src/app/configuration/configuration.service.ts");



var LeftGroupComponent = /** @class */ (function () {
    function LeftGroupComponent(configurationServive) {
        this.configurationServive = configurationServive;
        this.selectedGroup = "";
        this.selectedGroupId = "";
        this.applicationGroup = {
            "Interlock MV/LV": 1,
            "ZSI": 2,
            "Load Schedule": 3,
            "ATS": 4
        };
    }
    LeftGroupComponent.prototype.ngOnInit = function () {
    };
    LeftGroupComponent.prototype.check = function (data) {
        this.configurationServive.clearProductList();
        this.configurationServive.clearGroup();
        var selectedGroupText = data.target.innerText;
        this.selectedGroupId = this.applicationGroup[selectedGroupText];
        // this.homeService.sendGroupDetails(+this.selectedGroupText);
        this.configurationServive.sendProductListDetails(selectedGroupText);
    };
    LeftGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'left-group',
            template: __webpack_require__(/*! ./leftgroup.component.html */ "./src/app/configuration/leftgroup/leftgroup.component.html"),
            styles: [__webpack_require__(/*! ./leftgroup.component.css */ "./src/app/configuration/leftgroup/leftgroup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
    ], LeftGroupComponent);
    return LeftGroupComponent;
}());



/***/ }),

/***/ "./src/app/configuration/productlist/productlist.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/configuration/productlist/productlist.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#product-list{\n    height: 400px;\n    border: 1px solid coral;\n    padding: 10px 5px;\n    margin-right: 20px;\n}\n\n.deck{\n    position: relative;\n    cursor: pointer;\n    height: 40px;\n    margin: 5px;\n    text-align: center;\n    border: 1px solid rgb(37, 241, 37);\n    padding-left: 19px;\n}\n\n.deck-active{\n    padding-left: 10px;\n    border: 1px solid rgb(14, 139, 14);\n    border-left: 10px solid green;\n}\n\n.badge-align{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\nli{\n    cursor: pointer; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlndXJhdGlvbi9wcm9kdWN0bGlzdC9wcm9kdWN0bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29uZmlndXJhdGlvbi9wcm9kdWN0bGlzdC9wcm9kdWN0bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2R1Y3QtbGlzdHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGNvcmFsO1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmRlY2t7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigzNywgMjQxLCAzNyk7XG4gICAgcGFkZGluZy1sZWZ0OiAxOXB4O1xufVxuXG4uZGVjay1hY3RpdmV7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNCwgMTM5LCAxNCk7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgZ3JlZW47XG59XG5cbi5iYWRnZS1hbGlnbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5saXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/configuration/productlist/productlist.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/configuration/productlist/productlist.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"product-list\" class=\"col-md-3\">\n    <div *ngIf=\"lists.length == 0\">Please select Application to view Product details</div>\n    <div (click)=\"check($event)\">\n        <div class=\"deck\" *ngFor=\"let list of lists;let i = index\" [attr.data-index]=\"i\" \n        [ngClass]=\"{'deck-active': selectedProductList == i}\" >\n            <span class=\"badge badge-align\" [attr.data-index]=\"i\">{{list}}</span>\n        </div>\n    </div>     \n</div> -->\n\n\n<div class=\"col-md-2\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">Product List</div>\n      <div *ngIf=\"lists.length == 0\">Please select Application to view Product details</div>\n      <div class=\"panel-body\" (click)=\"check($event)\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let list of lists;let i = index\" [attr.data-index]=\"i\" \n          [ngClass]=\"{'active': selectedProductList == i}\">{{list}}</li>\n        </ul>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/configuration/productlist/productlist.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/configuration/productlist/productlist.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration.service */ "./src/app/configuration/configuration.service.ts");



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(configurationService) {
        this.configurationService = configurationService;
        this.lists = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listsSubscription = this.configurationService.getProductListDetails().subscribe(function (data) {
            if (data.length === 0)
                _this.selectedProductList = -1;
            _this.lists = data;
        });
    };
    ProductListComponent.prototype.check = function (data) {
        this.selectedProductList = +data.target.attributes["data-index"].value;
        // this.configurationService.sendGroupDetails(this.selectedProductList);
        this.configurationService.sendGroupDetails(data.target.innerText);
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.listsSubscription.unsubscribe();
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-list',
            template: __webpack_require__(/*! ./productlist.component.html */ "./src/app/configuration/productlist/productlist.component.html"),
            styles: [__webpack_require__(/*! ./productlist.component.css */ "./src/app/configuration/productlist/productlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/documents-communication/documents-communication.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/documents-communication/documents-communication.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy1jb21tdW5pY2F0aW9uL2RvY3VtZW50cy1jb21tdW5pY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/documents-communication/documents-communication.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/documents-communication/documents-communication.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  documents-communication works!\n</p>\n"

/***/ }),

/***/ "./src/app/documents-communication/documents-communication.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/documents-communication/documents-communication.component.ts ***!
  \******************************************************************************/
/*! exports provided: DocumentsCommunicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsCommunicationComponent", function() { return DocumentsCommunicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentsCommunicationComponent = /** @class */ (function () {
    function DocumentsCommunicationComponent() {
    }
    DocumentsCommunicationComponent.prototype.ngOnInit = function () {
    };
    DocumentsCommunicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documents-communication',
            template: __webpack_require__(/*! ./documents-communication.component.html */ "./src/app/documents-communication/documents-communication.component.html"),
            styles: [__webpack_require__(/*! ./documents-communication.component.css */ "./src/app/documents-communication/documents-communication.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentsCommunicationComponent);
    return DocumentsCommunicationComponent;
}());



/***/ }),

/***/ "./src/app/documents-communicationng/documents-communicationng.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/documents-communicationng/documents-communicationng.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy1jb21tdW5pY2F0aW9ubmcvZG9jdW1lbnRzLWNvbW11bmljYXRpb25uZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/documents-communicationng/documents-communicationng.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/documents-communicationng/documents-communicationng.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  documents-communicationng works!\n</p>\n"

/***/ }),

/***/ "./src/app/documents-communicationng/documents-communicationng.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/documents-communicationng/documents-communicationng.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DocumentsCommunicationngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsCommunicationngComponent", function() { return DocumentsCommunicationngComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentsCommunicationngComponent = /** @class */ (function () {
    function DocumentsCommunicationngComponent() {
    }
    DocumentsCommunicationngComponent.prototype.ngOnInit = function () {
    };
    DocumentsCommunicationngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documents-communicationng',
            template: __webpack_require__(/*! ./documents-communicationng.component.html */ "./src/app/documents-communicationng/documents-communicationng.component.html"),
            styles: [__webpack_require__(/*! ./documents-communicationng.component.css */ "./src/app/documents-communicationng/documents-communicationng.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentsCommunicationngComponent);
    return DocumentsCommunicationngComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    margin-bottom: 0;\n    border-radius: 0;\n  }\n\n  .navbar-inverse .navbar-nav>li>a {\n  color: #f5f5f5;\n    }\n\n  /* Set height of the grid so .sidenav can be 100% (adjust as needed) */\n\n  .row.content {height: 450px}\n\n  /* Set gray background color and 100% height */\n\n  .sidenav {\n    padding-top: 20px;\n    background-color: #f1f1f1;\n    height: 100%;\n  }\n\n  /* Set black background color, white text and some padding */\n\n  footer {\n    background-color: #555;\n    color: white;\n    padding: 15px;\n  }\n\n  /* On small screens, set height to 'auto' for sidenav and grid */\n\n  @media screen and (max-width: 767px) {\n    .sidenav {\n      height: auto;\n      padding: 15px;\n    }\n    .row.content {height:auto;} \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtFQUNBLGNBQWM7SUFDWjs7RUFFRixzRUFBc0U7O0VBQ3RFLGNBQWMsYUFBYTs7RUFFM0IsOENBQThDOztFQUM5QztJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBLDREQUE0RDs7RUFDNUQ7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQSxnRUFBZ0U7O0VBQ2hFO0lBQ0U7TUFDRSxZQUFZO01BQ1osYUFBYTtJQUNmO0lBQ0EsY0FBYyxXQUFXLENBQUM7RUFDNUIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXY+bGk+YSB7XG4gIGNvbG9yOiAjZjVmNWY1O1xuICAgIH1cbiAgXG4gIC8qIFNldCBoZWlnaHQgb2YgdGhlIGdyaWQgc28gLnNpZGVuYXYgY2FuIGJlIDEwMCUgKGFkanVzdCBhcyBuZWVkZWQpICovXG4gIC5yb3cuY29udGVudCB7aGVpZ2h0OiA0NTBweH1cbiAgXG4gIC8qIFNldCBncmF5IGJhY2tncm91bmQgY29sb3IgYW5kIDEwMCUgaGVpZ2h0ICovXG4gIC5zaWRlbmF2IHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLyogU2V0IGJsYWNrIGJhY2tncm91bmQgY29sb3IsIHdoaXRlIHRleHQgYW5kIHNvbWUgcGFkZGluZyAqL1xuICBmb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgXG4gIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHNldCBoZWlnaHQgdG8gJ2F1dG8nIGZvciBzaWRlbmF2IGFuZCBncmlkICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLnNpZGVuYXYge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gICAgLnJvdy5jb250ZW50IHtoZWlnaHQ6YXV0bzt9IFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" style=\"background-color: #349630\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"../../assets/Images/logo.png\" alt=\"schneider\" width=\"50px\"></a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink = \"/app/home\">HOME</a></li>\n        <li routerLinkActive=\"active\"><a routerLink = \"/app/configuration\">CONFIGURATION</a></li>\n        <li routerLinkActive=\"active\"><a routerLink = \"/app/slp\">SLP VIEW</a></li>\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">DOCUMENTS\n          <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink = \"\">BOM</a></li>\n            <li><a routerLinkActive=\"active\"><a routerLink = \"/app/documents-communication\">COMMUNICATION</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">ABOUT\n          <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLinkActive=\"active\" routerLink = \"/app/about-help\">HELP</a></li>\n            <li><a routerLink = \"\">VIEW</a></li>\n          </ul>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink = \"/\"><span class=\"glyphicon glyphicon-log-out\"></span>Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Remove the navbar's default margin-bottom and rounded borders */ \r\n.navbar {\r\n    margin-bottom: 0;\r\n    border-radius: 0;\r\n  } \r\n.navbar-inverse .navbar-nav>li>a {\r\n  color: #f5f5f5;\r\n    } \r\n/* Set height of the grid so .sidenav can be 100% (adjust as needed) */ \r\n.row.content {height: 450px} \r\n/* Set gray background color and 100% height */ \r\n.sidenav {\r\n    padding-top: 20px;\r\n    background-color: #f1f1f1;\r\n    height: 100%;\r\n  } \r\n/* Set black background color, white text and some padding */ \r\nfooter {\r\n    background-color: #555;\r\n    color: white;\r\n    padding: 15px;\r\n  } \r\n/* On small screens, set height to 'auto' for sidenav and grid */ \r\n@media screen and (max-width: 767px) {\r\n    .sidenav {\r\n      height: auto;\r\n      padding: 15px;\r\n    }\r\n    .row.content {height:auto;} \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFO0FBQ2xFO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtBQUVBO0VBQ0EsY0FBYztJQUNaO0FBRUYsc0VBQXNFO0FBQ3RFLGNBQWMsYUFBYTtBQUUzQiw4Q0FBOEM7QUFDOUM7SUFDRSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtBQUVBLDREQUE0RDtBQUM1RDtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtFQUNmO0FBRUEsZ0VBQWdFO0FBQ2hFO0lBQ0U7TUFDRSxZQUFZO01BQ1osYUFBYTtJQUNmO0lBQ0EsY0FBYyxXQUFXLENBQUM7RUFDNUIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFJlbW92ZSB0aGUgbmF2YmFyJ3MgZGVmYXVsdCBtYXJnaW4tYm90dG9tIGFuZCByb3VuZGVkIGJvcmRlcnMgKi8gXHJcbi5uYXZiYXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXY+bGk+YSB7XHJcbiAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICB9XHJcbiAgXHJcbiAgLyogU2V0IGhlaWdodCBvZiB0aGUgZ3JpZCBzbyAuc2lkZW5hdiBjYW4gYmUgMTAwJSAoYWRqdXN0IGFzIG5lZWRlZCkgKi9cclxuICAucm93LmNvbnRlbnQge2hlaWdodDogNDUwcHh9XHJcbiAgXHJcbiAgLyogU2V0IGdyYXkgYmFja2dyb3VuZCBjb2xvciBhbmQgMTAwJSBoZWlnaHQgKi9cclxuICAuc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCBibGFjayBiYWNrZ3JvdW5kIGNvbG9yLCB3aGl0ZSB0ZXh0IGFuZCBzb21lIHBhZGRpbmcgKi9cclxuICBmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHNldCBoZWlnaHQgdG8gJ2F1dG8nIGZvciBzaWRlbmF2IGFuZCBncmlkICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5zaWRlbmF2IHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnJvdy5jb250ZW50IHtoZWlnaHQ6YXV0bzt9IFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body style=\"background-color:rgba(245, 245, 245, 0.884);\" >\r\n<div class=\"container\">\r\n    <h2>Schneider Digital</h2>  \r\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n      <!-- Indicators -->\r\n      <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n      </ol>\r\n  \r\n      <!-- Wrapper for slides -->\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"item active\">\r\n          <img src=\"../../assets/Images/sh1.jpg\" alt=\"Los Angeles\" style=\"width:100%;\">\r\n        </div>\r\n  \r\n        <div class=\"item\">\r\n          <img src=\"../../assets/Images/sh2.jpg\" alt=\"Chicago\" style=\"width:100%;\">\r\n        </div>\r\n      \r\n        <div class=\"item\">\r\n          <img src=\"../../assets/Images/sh3.png\" alt=\"New york\" style=\"width:100%;\">\r\n        </div>\r\n      </div>\r\n  \r\n      <!-- Left and right controls -->\r\n      <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n        <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n      <div class=\"container-fluid\" style=\"margin-left: 190px; margin-right: 190px; margin-top: 30px; background-color:white;\">\r\n      <h1 class=\"lead\" style=\"text-align: justify; color: limegreen; font:bold\">\r\n         What we do at Schneider Electric            \r\n      </h1>\r\n      <p class=\"lead\" style=\"text-align: justify; font-size: medium; color: darkslategray;\">\r\n        We provide energy and automation digital solutions for efficiency and sustainability. We combine world-leading energy technologies, real-time automation, software and services into integrated solutions for homes, buildings, data centres, infrastructure and industries. We make process and energy safe and reliable, efficient and sustainable, open and connected.      \r\n      </p>\r\n      <a style=\"color:deepskyblue\" href=\"https://www.se.com/in/en/work/campaign/innovation/overview.jsp\">Learn more ></a>\r\n      <p><br></p>\r\n      </div>\r\n      <div class=\"container-fluid\" style=\"margin-left: 190px; margin-right: 190px; margin-top: 30px; background-color:white;\">\r\n        <h1 class=\"lead\" style=\"text-align: justify; color: limegreen; font:bold\">\r\n          Our technology, everywhere.            \r\n        </h1>\r\n        <p class=\"lead\" style=\"text-align: justify; font-size: medium; color: darkslategray;\">\r\n          Our technologies ensure that Life Is On everywhere, for everyone and at every moment.  \r\n        </p>\r\n        <br>\r\n        </div>\r\n        <div class=\"container-fluid\" style=\"margin-left: 190px; margin-right: 190px; margin-top: 30px; background-color:white;\">\r\n          <h1 class=\"lead\" style=\"text-align: justify; color: limegreen; font:bold\">\r\n            Our governance structure            \r\n          </h1>\r\n          <p class=\"lead\" style=\"text-align: justify; font-size: medium; color: darkslategray;\">\r\n            Schneider Electric is a European company with a board of directors. The functions of the Chairman and the Chief Executive Officer are carried out by Jean-Pascal Tricoire, who was appointed Chairman and Chief Executive Officer on 25 April 2013. \r\n          </p>\r\n          <a style=\"color:deepskyblue\" href=\"https://www.se.com/ww/en/about-us/company-profile/corporate-governance.jsp\">Understand more ></a>\r\n          <p><br></p>\r\n          </div>\r\n        <div class=\"container-fluid\" style=\"margin-left: 190px; margin-right: 190px; margin-top: 30px; background-color:white;\">\r\n          <h1 class=\"lead\" style=\"text-align: justify; color: limegreen; font:bold\">\r\n            Over 180 years of history and innovation            \r\n          </h1>\r\n          <p class=\"lead\" style=\"text-align: justify; font-size: medium; color: darkslategray;\">\r\n            Our story is written by generations of people who have been transforming our company – and the world – for almost two centuries. Today, our heritage empowers us to innovate at every level - and to ensure that Life Is On\r\n          </p>\r\n          <a style=\"color:deepskyblue\" href=\"https://www.se.com/in/en/about-us/company-profile/history/schneider-electric-history.jsp\">Read more ></a>\r\n          <p><br></p>\r\n          </div>\r\n</body>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div style=\"margin-bottom: 20px;\"></div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');\n.login-container {\n\tbackground: #a0a5a4;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\tfont-family: 'Montserrat', sans-serif;\n\theight: 100vh;\n\tmargin: -20px 0 50px;\n}\nh1 {\n\tfont-weight: bold;\n\tmargin: 0;\n\tcolor:a0a5a4;\n}\nh2 {\n\ttext-align: center;\n}\np {\n\tfont-size: 14px;\n\tfont-weight: 100;\n\tcolor:a0a5a4;\n\tline-height: 20px;\n\tletter-spacing: 0.5px;\n\tmargin: 20px 0 30px;\n}\nspan {\n\tfont-size: 12px;\n}\na {\n\tcolor: #333;\n\tfont-size: 14px;\n\ttext-decoration: none;\n\tmargin: 15px 0;\n}\nbutton {\n\tborder-radius: 20px;\n\tborder: 1px solid #7cb931;\n\tbackground-color: #7cb931;\n\tcursor: pointer;\n\tcolor: #FFFFFF;\n\tfont-size: 12px;\n\tfont-weight: bold;\n\tpadding: 12px 45px;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\ttransition: transform 80ms ease-in;\n}\nbutton:active {\n\ttransform: scale(0.95);\n}\nbutton:focus {\n\toutline: none;\n}\nbutton.ghost {\n\tbackground-color: transparent;\n\tborder-color: #FFFFFF;\n}\nform {\n\tbackground-color: #4e8608;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tpadding: 0 50px;\n\theight: 100%;\n\ttext-align: center;\n}\ninput {\n\tbackground-color: #eee;\n\tborder: none;\n\tpadding: 12px 15px;\n\tmargin: 8px 0;\n\twidth: 100%;\n}\n.container {\n\tbackground-color: #fff;\n\tborder-radius: 10px;\n  \tbox-shadow: 0 14px 28px rgba(0,0,0,0.25), \n\t\t\t0 10px 10px rgba(0,0,0,0.22);\n\tposition: relative;\n\toverflow: hidden;\n\twidth: 768px;\n\tmax-width: 100%;\n\tmin-height: 480px;\n}\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\theight: 100%;\n\ttransition: all 0.6s ease-in-out;\n}\n.sign-in-container {\n\tleft: 0;\n\twidth: 50%;\n\tz-index: 2;\n}\n.container.right-panel-active .sign-in-container {\n\ttransform: translateX(100%);\n}\n.sign-up-container {\n\tleft: 0;\n\twidth: 50%;\n\topacity: 0;\n\tz-index: 1;\n}\n.container.right-panel-active .sign-up-container {\n\ttransform: translateX(100%);\n\topacity: 1;\n\tz-index: 5;\n\t-webkit-animation: show 0.6s;\n\t        animation: show 0.6s;\n}\n@-webkit-keyframes show {\n\t0%, 49.99% {\n\t\topacity: 0;\n\t\tz-index: 1;\n\t}\n\t\n\t50%, 100% {\n\t\topacity: 1;\n\t\tz-index: 5;\n\t}\n}\n@keyframes show {\n\t0%, 49.99% {\n\t\topacity: 0;\n\t\tz-index: 1;\n\t}\n\t\n\t50%, 100% {\n\t\topacity: 1;\n\t\tz-index: 5;\n\t}\n}\n.overlay-container {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 50%;\n\twidth: 50%;\n\theight: 100%;\n\toverflow: hidden;\n\ttransition: transform 0.6s ease-in-out;\n\tz-index: 100;\n}\n.container.right-panel-active .overlay-container{\n\ttransform: translateX(-100%);\n}\n.overlay {\n\tbackground-image: url('bg.jpg');\n  background-attachment: fixed;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: 0 0;\n\tcolor: #FFFFFF;\n\tposition: relative;\n\tleft: -100%;\n\theight: 100%;\n\twidth: 200%;\n  \ttransform: translateX(0);\n\ttransition: transform 0.6s ease-in-out;\n}\n.container.right-panel-active .overlay {\n  \ttransform: translateX(50%);\n}\n.overlay-panel {\n\tposition: absolute;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tpadding: 0 40px;\n\ttext-align: center;\n\ttop: 0;\n\theight: 100%;\n\twidth: 50%;\n\ttransform: translateX(0);\n\ttransition: transform 0.6s ease-in-out;\n}\n.overlay-left {\n\ttransform: translateX(-20%);\n}\n.container.right-panel-active .overlay-left {\n\ttransform: translateX(0);\n}\n.overlay-right {\n\tright: 0;\n\ttransform: translateX(0);\n}\n.container.right-panel-active .overlay-right {\n\ttransform: translateX(20%);\n}\n.social-container {\n\tmargin: 20px 0;\n}\n.social-container a {\n\tborder: 1px solid #DDDDDD;\n\tborder-radius: 50%;\n\tdisplay: inline-flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 0 5px;\n\theight: 40px;\n\twidth: 40px;\n}\nfooter {\n    background-color: #222;\n    color: #fff;\n    font-size: 14px;\n    bottom: 0;\n    position: fixed;\n    left: 0;\n    right: 0;\n    text-align: center;\n    z-index: 999;\n}\nfooter p {\n    margin: 10px 0;\n}\nfooter i {\n    color: red;\n}\nfooter a {\n    color: #3c97bf;\n    text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RUFBeUU7QUFDekU7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLHFDQUFxQztDQUNyQyxhQUFhO0NBQ2Isb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsU0FBUztDQUNULFlBQVk7QUFDYjtBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixxQkFBcUI7Q0FDckIsY0FBYztBQUNmO0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsY0FBYztDQUNkLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsa0NBQWtDO0FBQ25DO0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7QUFFQTtDQUNDLGFBQWE7QUFDZDtBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QixlQUFlO0NBQ2YsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLFdBQVc7QUFDWjtBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLG1CQUFtQjtHQUNqQjsrQkFDNEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixZQUFZO0NBQ1osZ0NBQWdDO0FBQ2pDO0FBRUE7Q0FDQyxPQUFPO0NBQ1AsVUFBVTtDQUNWLFVBQVU7QUFDWDtBQUVBO0NBQ0MsMkJBQTJCO0FBQzVCO0FBRUE7Q0FDQyxPQUFPO0NBQ1AsVUFBVTtDQUNWLFVBQVU7Q0FDVixVQUFVO0FBQ1g7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQixVQUFVO0NBQ1YsVUFBVTtDQUNWLDRCQUFvQjtTQUFwQixvQkFBb0I7QUFDckI7QUFFQTtDQUNDO0VBQ0MsVUFBVTtFQUNWLFVBQVU7Q0FDWDs7Q0FFQTtFQUNDLFVBQVU7RUFDVixVQUFVO0NBQ1g7QUFDRDtBQVZBO0NBQ0M7RUFDQyxVQUFVO0VBQ1YsVUFBVTtDQUNYOztDQUVBO0VBQ0MsVUFBVTtFQUNWLFVBQVU7Q0FDWDtBQUNEO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixzQ0FBc0M7Q0FDdEMsWUFBWTtBQUNiO0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7QUFFQTtDQUNDLCtCQUFtRDtFQUNsRCw0QkFBNEI7Q0FDN0IsNEJBQTRCO0NBQzVCLHNCQUFzQjtDQUN0Qix3QkFBd0I7Q0FDeEIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFdBQVc7R0FDVCx3QkFBd0I7Q0FDMUIsc0NBQXNDO0FBQ3ZDO0FBRUE7R0FDRywwQkFBMEI7QUFDN0I7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sWUFBWTtDQUNaLFVBQVU7Q0FDVix3QkFBd0I7Q0FDeEIsc0NBQXNDO0FBQ3ZDO0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7QUFFQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUVBO0NBQ0MsUUFBUTtDQUNSLHdCQUF3QjtBQUN6QjtBQUVBO0NBQ0MsMEJBQTBCO0FBQzNCO0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFlBQVk7Q0FDWixXQUFXO0FBQ1o7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLFNBQVM7SUFDVCxlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsODAwJyk7XG4ubG9naW4tY29udGFpbmVyIHtcblx0YmFja2dyb3VuZDogI2EwYTVhNDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cdGhlaWdodDogMTAwdmg7XG5cdG1hcmdpbjogLTIwcHggMCA1MHB4O1xufVxuXG5oMSB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRtYXJnaW46IDA7XG5cdGNvbG9yOmEwYTVhNDtcbn1cblxuaDIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAge1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZvbnQtd2VpZ2h0OiAxMDA7XG5cdGNvbG9yOmEwYTVhNDtcblx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0bWFyZ2luOiAyMHB4IDAgMzBweDtcbn1cblxuc3BhbiB7XG5cdGZvbnQtc2l6ZTogMTJweDtcbn1cblxuYSB7XG5cdGNvbG9yOiAjMzMzO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0bWFyZ2luOiAxNXB4IDA7XG59XG5cbmJ1dHRvbiB7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM3Y2I5MzE7XG5cdGJhY2tncm91bmQtY29sb3I6ICM3Y2I5MzE7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Y29sb3I6ICNGRkZGRkY7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHBhZGRpbmc6IDEycHggNDVweDtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG5cdHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbi5naG9zdCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbmZvcm0ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGU4NjA4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0cGFkZGluZzogMCA1MHB4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuXHRib3JkZXI6IG5vbmU7XG5cdHBhZGRpbmc6IDEycHggMTVweDtcblx0bWFyZ2luOiA4cHggMDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuICBcdGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIFxuXHRcdFx0MCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR3aWR0aDogNzY4cHg7XG5cdG1heC13aWR0aDogMTAwJTtcblx0bWluLWhlaWdodDogNDgwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2lnbi1pbi1jb250YWluZXIge1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogNTAlO1xuXHR6LWluZGV4OiAyO1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi1pbi1jb250YWluZXIge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG5cbi5zaWduLXVwLWNvbnRhaW5lciB7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiA1MCU7XG5cdG9wYWNpdHk6IDA7XG5cdHotaW5kZXg6IDE7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLXVwLWNvbnRhaW5lciB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcblx0b3BhY2l0eTogMTtcblx0ei1pbmRleDogNTtcblx0YW5pbWF0aW9uOiBzaG93IDAuNnM7XG59XG5cbkBrZXlmcmFtZXMgc2hvdyB7XG5cdDAlLCA0OS45OSUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0ei1pbmRleDogMTtcblx0fVxuXHRcblx0NTAlLCAxMDAlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHotaW5kZXg6IDU7XG5cdH1cbn1cblxuLm92ZXJsYXktY29udGFpbmVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDUwJTtcblx0d2lkdGg6IDUwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcblx0ei1pbmRleDogMTAwO1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXJ7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5vdmVybGF5IHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvSW1hZ2VzL2JnLmpwZycpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGxlZnQ6IC0xMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAyMDAlO1xuICBcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5IHtcbiAgXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cblxuLm92ZXJsYXktcGFuZWwge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nOiAwIDQwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dG9wOiAwO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LWxlZnQge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnQge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5vdmVybGF5LXJpZ2h0IHtcblx0cmlnaHQ6IDA7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmlnaHQge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcbn1cblxuLnNvY2lhbC1jb250YWluZXIge1xuXHRtYXJnaW46IDIwcHggMDtcbn1cblxuLnNvY2lhbC1jb250YWluZXIgYSB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNEREREREQ7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW46IDAgNXB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdHdpZHRoOiA0MHB4O1xufVxuXG5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG5mb290ZXIgcCB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbmZvb3RlciBpIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG5mb290ZXIgYSB7XG4gICAgY29sb3I6ICMzYzk3YmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- -------------------------------NEW HTML------------------------- -->\n<div class=\"login-container\">\n  <h2>Welcome to Schneider Electric LV Breaker Configuration Tool</h2>\n  <div class=\"container\" id=\"container\">\n    <div class=\"form-container sign-up-container\">\n      <form action=\"#\">\n        <h1>Create Account</h1>\n        <div class=\"social-container\">\n          <a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a>\n          <a href=\"#\" class=\"social\"><i class=\"fab fa-google-plus-g\"></i></a>\n          <a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin-in\"></i></a>\n        </div>\n        <span>or use your email for registration</span>\n        <input type=\"text\" placeholder=\"Name\" />\n        <input type=\"email\" placeholder=\"Email\" />\n        <input type=\"password\" placeholder=\"Password\" />\n        <button>Sign Up</button>\n      </form>\n    </div>\n    <div class=\"form-container sign-in-container\">\n      <form action=\"#\">\n        <h1 style=\"margin-bottom: 10px;\">Sign in</h1>\n\n        <input type=\"email\" placeholder=\"Email\" name=\"username\" [(ngModel)]=\"username\" />\n        <input type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\"\n          (keydown)=\"keyDownFunction($event)\" />\n        <a href=\"#\">Forgot your password?</a>\n        <button (click)=\"login()\">Sign In</button>\n\n        <div *ngIf=\"authFailed\" class=\"alert alert-danger col-sm-12\">Please enter valid username and password.</div>\n        <div *ngIf=\"approvalPending\" class=\"alert alert-danger col-sm-12\">Your request is still waiting for approval.\n        </div>\n        <div *ngIf=\"userInactive\" class=\"alert alert-danger col-sm-12\">Currently this user is In active.</div>\n        <div *ngIf=\"emailNotVerified\" class=\"alert alert-danger col-sm-12\">Your email has not been verified.</div>\n      </form>\n    </div>\n    <div class=\"overlay-container\">\n      <div class=\"overlay\">\n        <div class=\"overlay-panel overlay-left\">\n          <h1>Welcome Back!</h1>\n          <p>To keep connected with us please login with your personal info</p>\n          <button class=\"ghost\" id=\"signIn\">Sign In</button>\n        </div>\n        <div class=\"overlay-panel overlay-right\">\n          <h1>Hello, User!</h1>\n          <p>Enter your personal details and Configuration Your Tool with us</p>\n          <button class=\"ghost\" id=\"signUp\">Sign Up</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "./src/app/shared/common.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, commmonService) {
        this.router = router;
        this.commmonService = commmonService;
        this.username = '';
        this.password = '';
        this.authFailed = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.username == "admin" && this.password == "admin") {
            this.router.navigate(["/app/home"]);
        }
        else {
            this.authFailed = true;
            setTimeout(function () {
                _this.authFailed = false;
            }, 3000);
        }
    };
    LoginComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.login();
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>404: Page Not Found</h2>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/common.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/common.service.ts ***!
  \******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonService = /** @class */ (function () {
    function CommonService() {
        this.showHeader = false;
    }
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SESA566544\SchneiderApp_V6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map