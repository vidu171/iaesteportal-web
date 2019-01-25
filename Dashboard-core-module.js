(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Dashboard-core-module"],{

/***/ "./src/app/Dashboard/cobe/cobe.component.css":
/*!***************************************************!*\
  !*** ./src/app/Dashboard/cobe/cobe.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Dashboard/cobe/cobe.component.html":
/*!****************************************************!*\
  !*** ./src/app/Dashboard/cobe/cobe.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cobe works!\n</p>\n"

/***/ }),

/***/ "./src/app/Dashboard/cobe/cobe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Dashboard/cobe/cobe.component.ts ***!
  \**************************************************/
/*! exports provided: CobeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobeComponent", function() { return CobeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CobeComponent = /** @class */ (function () {
    function CobeComponent() {
    }
    CobeComponent.prototype.ngOnInit = function () {
    };
    CobeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cobe',
            template: __webpack_require__(/*! ./cobe.component.html */ "./src/app/Dashboard/cobe/cobe.component.html"),
            styles: [__webpack_require__(/*! ./cobe.component.css */ "./src/app/Dashboard/cobe/cobe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CobeComponent);
    return CobeComponent;
}());



/***/ }),

/***/ "./src/app/Dashboard/core-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/Dashboard/core-routing.module.ts ***!
  \**************************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gc_gc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gc/gc.component */ "./src/app/Dashboard/gc/gc.component.ts");
/* harmony import */ var _cobe_cobe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cobe/cobe.component */ "./src/app/Dashboard/cobe/cobe.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/Dashboard/profile/profile.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status/status.component */ "./src/app/Dashboard/status/status.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _gc_gc_component__WEBPACK_IMPORTED_MODULE_2__["GCComponent"]
    },
    {
        path: 'gc',
        component: _gc_gc_component__WEBPACK_IMPORTED_MODULE_2__["GCComponent"]
    },
    {
        path: 'cobe',
        component: _cobe_cobe_component__WEBPACK_IMPORTED_MODULE_3__["CobeComponent"]
    },
    {
        path: 'status',
        component: _status_status_component__WEBPACK_IMPORTED_MODULE_5__["StatusComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
    }
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/Dashboard/core.module.ts":
/*!******************************************!*\
  !*** ./src/app/Dashboard/core.module.ts ***!
  \******************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gc_gc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gc/gc.component */ "./src/app/Dashboard/gc/gc.component.ts");
/* harmony import */ var _cobe_cobe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cobe/cobe.component */ "./src/app/Dashboard/cobe/cobe.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status/status.component */ "./src/app/Dashboard/status/status.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/Dashboard/profile/profile.component.ts");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/Dashboard/core-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _core_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoreRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]
            ],
            declarations: [
                _gc_gc_component__WEBPACK_IMPORTED_MODULE_1__["GCComponent"],
                _cobe_cobe_component__WEBPACK_IMPORTED_MODULE_2__["CobeComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_3__["StatusComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/Dashboard/gc/gc.component.css":
/*!***********************************************!*\
  !*** ./src/app/Dashboard/gc/gc.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.body{\n    font-family: Gotham;\n    font-size: 0.9rem;\n}\n\n.warn{\n    \n    border-radius: 20px;\n    /* background: rgb(188,0,86);\nbackground: linear-gradient(68deg, rgba(188,0,86,1) 0%, rgba(115,0,98,1) 86%); */\nbackground: rgb(214,39,57);\nbackground: linear-gradient(68deg, rgba(214,39,57,1) 23%, rgba(237,85,101,1) 97%);\n\n}\n\n.white{ \n    color: white;\n    font-size: 1rem;\n}\n\n.apply{\n    background-color: coral;\n    height: 100px;\n    text-align: center;\n    font-size: 1.3em;\n    color: white;\n    padding-top: 10px;\n    font-weight: bolder;\n}\n\n.view{\n    background-color: darkturquoise;\n    height: 100px;\n    padding-top: 10px;\n    padding-right: 12px;\n    text-align: center;\n    font-size: 1.3em;\n    color: white;\n    font-weight: bolder;\n}\n"

/***/ }),

/***/ "./src/app/Dashboard/gc/gc.component.html":
/*!************************************************!*\
  !*** ./src/app/Dashboard/gc/gc.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n\n  <br>\n<div class=\"row\">\n\n  <div *ngFor=\"let offer of offers\" class=\"col-md-4\" >\n      <div class=\"wrapper\">\n          <div class=\"offer-container\">\n            <!-- <div class=\"top\" [style.backgroundImage]=\"offer.img\"></div> -->\n            <div class=\"top\" [ngStyle]=\"{'background-image': 'url(' + offer.img + ')'}\"></div>\n\n            <div class=\"bottom\">\n              <div class=\"left\">\n                <div class=\"details\">\n                  <h1>{{offer.country}}</h1>\n                  <p>{{offer.id}}</p>\n                </div>\n                <!-- <div class=\"buy\"><i class=\"material-icons\">add_shopping_cart</i></div> -->\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 apply\" >VIEW</div>\n                <div class=\"col-md-6 view\">APPLY</div>\n            </div>\n          </div>\n          <div class=\"inside\">\n            <div class=\"icon\"><i class=\"material-icons\">info_outline</i></div>\n            <div class=\"contents\">\n              <!-- put whatever you need for info -->\n            </div>\n          </div>\n        </div>\n        \n  </div>\n\n</div>\n\n<br>\n\n<div id=\"accordion\" role=\"tablist\">\n  <div class=\"card\">\n    <div class=\"card-header  warn\"  role=\"tab\" id=\"headingOne\">\n      <h5 class=\"mb-0\">\n        <a data-toggle=\"collapse\" class=\"white\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n          <i class=\"fa fa-bandcamp\" aria-hidden=\"true\"></i> Guidelines (Important)\n        </a>\n      </h5>\n    </div>\n\n   \n\n    \n\n    <div id=\"collapseOne\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n        <ul>\n          <li>Each member is allowed to fill a <b>maximum of 3 offers</b> including both the rounds </li>\n          <li>The two most important points to be looked at before filling the form for an offer:\n            <ul>\n              <li>Branch and Specilization</li>\n              <li>Duration. (<b>Be as specific</b> as you can while filling the factsheet) </li>\n            </ul>\n          </li>\n          <li>Note that there are a few offers that would be more suitable to Present 3rd or 4th Year members. Please fill in\n            accordingly.</li>\n          <li>It is mandatory for each selected candidate to produce a copy of a valid <b>passport at the time of results</b>.\n            Failure to do so would result in disqualification of the candidate.</li>\n          <li> Please ensure that you <b>fill the google form only once</b> for each offer. No requests for multiple entries\n            for one offer will be entertained once the form has been submitted.</li>\n          <li> Please adhere to the <b>deadline</b>. This round will be closed on 5th March, Monday at 1100 hours Kindly fill\n            in your details well within the time allotted to you</li>\n          <li>Keep your passwords safe. You'll need it to login to your account and apply for offers.</li>\n          <li> The application procedure is: - You have to fill in the required details in the factsheet which will be taken to\n            the assigned faculty panel for evaluation. Be as detailed and specific as you can while filling in for the\n            factsheet), as <b>the selection will be based on the factsheet(s) only.</b></li>\n          <li>A placement fee would have to be paid by every nominated candidate and the nomination package would be sent to\n            the respective country only after a <b>copy of the receipt is produced.</b></li>\n          <li>In case a candidate is selected and then rejects the offer, he/she would be debarred for this exchange season and\n            will not be allowed to be a part of the subsequent round of offers</li>\n          <li>In case of a doubt please get in touch with the Exchange Coordinators; <ul>\n              <li>Sarthak:+91-9619937704</li>\n              <li> Ayushi:+91.9873715774</li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n \n</div>\n<br>\n\n\n</div>"

/***/ }),

/***/ "./src/app/Dashboard/gc/gc.component.scss":
/*!************************************************!*\
  !*** ./src/app/Dashboard/gc/gc.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  background: #E3E3D8;\n  font-family: sans-serif;\n  padding: 45px; }\n\n.wrapper {\n  width: 325px;\n  height: 480px;\n  background: white;\n  margin: auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 0;\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n  transition: box-shadow 0.5s, -webkit-transform 0.5s;\n  transition: box-shadow 0.5s, transform 0.5s;\n  transition: box-shadow 0.5s, transform 0.5s, -webkit-transform 0.5s; }\n\n.wrapper:hover {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2); }\n\n.wrapper .offer-container {\n    width: 100%;\n    height: 100%; }\n\n.wrapper .offer-container .top {\n      height: 70%;\n      width: 100%;\n      background-size: 100%; }\n\n.wrapper .offer-container .bottom {\n      width: 200%;\n      height: 20%;\n      transition: -webkit-transform 0.5s;\n      transition: transform 0.5s;\n      transition: transform 0.5s, -webkit-transform 0.5s; }\n\n.wrapper .offer-container .bottom.clicked {\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%); }\n\n.wrapper .offer-container .bottom h1 {\n        margin: 0;\n        padding: 0; }\n\n.wrapper .offer-container .bottom p {\n        margin: 0;\n        padding: 0; }\n\n.wrapper .offer-container .bottom .left {\n        height: 100%;\n        width: 50%;\n        background: #f4f4f4;\n        position: relative;\n        float: left; }\n\n.wrapper .offer-container .bottom .left .details {\n          padding: 20px;\n          float: left;\n          width: calc(70% - 40px); }\n\n.wrapper .offer-container .bottom .left .buy {\n          float: right;\n          width: calc(30% - 2px);\n          height: 100%;\n          background: #f1f1f1;\n          transition: background 0.5s;\n          border-left: solid thin rgba(0, 0, 0, 0.1); }\n\n.wrapper .offer-container .bottom .left .buy i {\n            font-size: 30px;\n            padding: 30px;\n            color: #254053;\n            transition: -webkit-transform 0.5s;\n            transition: transform 0.5s;\n            transition: transform 0.5s, -webkit-transform 0.5s; }\n\n.wrapper .offer-container .bottom .left .buy:hover {\n            background: #A6CDDE; }\n\n.wrapper .offer-container .bottom .left .buy:hover i {\n            -webkit-transform: translateY(5px);\n                    transform: translateY(5px);\n            color: #00394B; }\n\n.wrapper .offer-container .bottom .right {\n        width: 50%;\n        background: #A6CDDE;\n        color: white;\n        float: right;\n        height: 200%;\n        overflow: hidden; }\n\n.wrapper .offer-container .bottom .right .details {\n          padding: 20px;\n          float: right;\n          width: calc(70% - 40px); }\n\n.wrapper .offer-container .bottom .right .done {\n          width: calc(30% - 2px);\n          float: left;\n          transition: -webkit-transform 0.5s;\n          transition: transform 0.5s;\n          transition: transform 0.5s, -webkit-transform 0.5s;\n          border-right: solid thin rgba(255, 255, 255, 0.3);\n          height: 50%; }\n\n.wrapper .offer-container .bottom .right .done i {\n            font-size: 30px;\n            padding: 30px;\n            color: white; }\n\n.wrapper .offer-container .bottom .right .remove {\n          width: calc(30% - 1px);\n          clear: both;\n          border-right: solid thin rgba(255, 255, 255, 0.3);\n          height: 50%;\n          background: #BC3B59;\n          transition: background 0.5s, -webkit-transform 0.5s;\n          transition: transform 0.5s, background 0.5s;\n          transition: transform 0.5s, background 0.5s, -webkit-transform 0.5s; }\n\n.wrapper .offer-container .bottom .right .remove:hover {\n            background: #9B2847; }\n\n.wrapper .offer-container .bottom .right .remove:hover i {\n            -webkit-transform: translateY(5px);\n                    transform: translateY(5px); }\n\n.wrapper .offer-container .bottom .right .remove i {\n            transition: -webkit-transform 0.5s;\n            transition: transform 0.5s;\n            transition: transform 0.5s, -webkit-transform 0.5s;\n            font-size: 30px;\n            padding: 30px;\n            color: white; }\n\n.wrapper .offer-container .bottom .right:hover .remove, .wrapper .offer-container .bottom .right:hover .done {\n          -webkit-transform: translateY(-100%);\n                  transform: translateY(-100%); }\n\n.wrapper .inside {\n    z-index: 9;\n    background: #92879B;\n    width: 140px;\n    height: 140px;\n    position: absolute;\n    top: -70px;\n    right: -70px;\n    border-radius: 0px 0px 200px 200px;\n    transition: all 0.5s, border-radius 2s, top 1s;\n    overflow: hidden; }\n\n.wrapper .inside .icon {\n      position: absolute;\n      right: 85px;\n      top: 85px;\n      color: white;\n      opacity: 1; }\n\n.wrapper .inside:hover {\n      width: 100%;\n      right: 0;\n      top: 0;\n      border-radius: 0;\n      height: 80%; }\n\n.wrapper .inside:hover .icon {\n        opacity: 0;\n        right: 15px;\n        top: 15px; }\n\n.wrapper .inside:hover .contents {\n        opacity: 1;\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-transform: translateY(0);\n                transform: translateY(0); }\n\n.wrapper .inside .contents {\n      padding: 5%;\n      opacity: 0;\n      -webkit-transform: scale(0.5);\n              transform: scale(0.5);\n      -webkit-transform: translateY(-200%);\n              transform: translateY(-200%);\n      transition: opacity 0.2s, -webkit-transform 0.8s;\n      transition: opacity 0.2s, transform 0.8s;\n      transition: opacity 0.2s, transform 0.8s, -webkit-transform 0.8s; }\n\n.wrapper .inside .contents table {\n        text-align: left;\n        width: 100%; }\n\n.wrapper .inside .contents h1, .wrapper .inside .contents p, .wrapper .inside .contents table {\n        color: white; }\n\n.wrapper .inside .contents p {\n        font-size: 13px; }\n"

/***/ }),

/***/ "./src/app/Dashboard/gc/gc.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Dashboard/gc/gc.component.ts ***!
  \**********************************************/
/*! exports provided: GCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GCComponent", function() { return GCComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GCComponent = /** @class */ (function () {
    function GCComponent() {
        this.offers = [
            {
                country: "Germany",
                id: 10000,
                img: 'assets/testoffer.jpg'
            },
            {
                country: "Australia",
                id: 10000,
                img: 'assets/testoffer2.jpg'
            },
            {
                country: "Belgium",
                id: 10000,
                img: 'assets/testoffer3.jpg'
            },
            {
                country: "Newzeland",
                id: 10000,
                img: 'assets/testoffer.jpg'
            },
            {
                country: "Turkey",
                id: 10000,
                img: 'assets/testoffer.jpg'
            },
            {
                country: "Germany",
                id: 10000,
                img: 'assets/testoffer.jpg'
            }, {
                country: "Germany",
                id: 10000,
                img: 'assets/testoffer.jpg'
            }
        ];
    }
    GCComponent.prototype.ngOnInit = function () {
        $('.buy').click(function () {
            $('.bottom').addClass("clicked");
        });
        $('.remove').click(function () {
            $('.bottom').removeClass("clicked");
        });
    };
    GCComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gc',
            template: __webpack_require__(/*! ./gc.component.html */ "./src/app/Dashboard/gc/gc.component.html"),
            styles: [__webpack_require__(/*! ./gc.component.css */ "./src/app/Dashboard/gc/gc.component.css"), __webpack_require__(/*! ./gc.component.scss */ "./src/app/Dashboard/gc/gc.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GCComponent);
    return GCComponent;
}());



/***/ }),

/***/ "./src/app/Dashboard/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/Dashboard/profile/profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Dashboard/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Dashboard/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/Dashboard/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/Dashboard/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/Dashboard/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/Dashboard/status/status.component.css":
/*!*******************************************************!*\
  !*** ./src/app/Dashboard/status/status.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Dashboard/status/status.component.html":
/*!********************************************************!*\
  !*** ./src/app/Dashboard/status/status.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Status Component works"

/***/ }),

/***/ "./src/app/Dashboard/status/status.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Dashboard/status/status.component.ts ***!
  \******************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/Dashboard/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.css */ "./src/app/Dashboard/status/status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Dashboard-core-module.js.map