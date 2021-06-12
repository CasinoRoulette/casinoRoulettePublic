(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./games-manager/games-manager.module": [
		"./src/app/games-manager/games-manager.module.ts",
		"default~games-manager-games-manager-module~modules-login-module",
		"games-manager-games-manager-module"
	],
	"./modules/login.module": [
		"./src/app/modules/login.module.ts",
		"default~games-manager-games-manager-module~modules-login-module",
		"modules-login-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");




const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './modules/login.module#LoginModule' },
    { path: 'games-manager', loadChildren: './games-manager/games-manager.module#GamesManagerModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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

module.exports = "<jaspero-confirmations></jaspero-confirmations>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constant_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant/app.constant */ "./src/app/constant/app.constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constant_url_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant/url.constant */ "./src/app/constant/url.constant.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let AppComponent = class AppComponent {
    constructor(_route, _location) {
        this._route = _route;
        this._location = _location;
        this.hello = "Hello, I am learning Angular";
    }
    ngOnInit() {
        /* if the User is alrady login
         and he refresh the Page and he Do
          not Logout so directaly it will take to the DashBorad Page
          (if the Token is define it wil take to the DashBorad Page)  */
        if (localStorage.getItem(_constant_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstant"].USER_TOKEN_KEY) != undefined && (this._location.path() == '/login' || this._location.path() == '')) {
            console.log(this._location.path());
            this._route.navigate([_constant_url_constant__WEBPACK_IMPORTED_MODULE_4__["UrlConstant"].DASH_BORAD_PATH]);
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jaspero/ng2-confirmations */ "./node_modules/@jaspero/ng2-confirmations/ng2-confirmations.js");
/* harmony import */ var _constant_routeData_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constant/routeData.constant */ "./src/app/constant/routeData.constant.ts");
/* harmony import */ var _constant_application_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constant/application.helper */ "./src/app/constant/application.helper.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"],
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _jaspero_ng2_confirmations__WEBPACK_IMPORTED_MODULE_8__["JasperoConfirmationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                // timeOut: 10000,
                preventDuplicates: true
            }),
        ],
        providers: [_constant_routeData_constant__WEBPACK_IMPORTED_MODULE_9__["RouteDataHelper"], _constant_application_helper__WEBPACK_IMPORTED_MODULE_10__["ApplicationHelper"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  forgot-password works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/components/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/components/forgot-password/forgot-password.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/constant/app.constant.ts":
/*!******************************************!*\
  !*** ./src/app/constant/app.constant.ts ***!
  \******************************************/
/*! exports provided: AppConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstant", function() { return AppConstant; });
class AppConstant {
    static get CONFERMATION_NO() { return 'No'; }
    static get CONFERMATION_YES() { return 'Yes'; }
    static get USER_TOKEN_KEY() { return 'token'; }
    static get USER_NAME() { return 'name'; }
    static get USER_TYPE() { return 'type'; }
    static get USER_EMAIL() { return 'email'; }
    static get USER_IMAGE() { return 'image'; }
    static get FAILED_MESSAGE() { return 'Failed'; }
    static get SUCCESS_MEASSAGE() { return 'Success'; }
    static get DEVICE_TOKEN() { return 'deviceToken'; }
    static get LOGIN_DATA_KEY() { return 'userId'; }
    static get MARK_DATA_KEY() { return 'mark as trending'; }
    static get UNMARK_DATA_KEY() { return 'un-mark as trending'; }
    static get BLANK_STRING() { return ""; }
    /*  creating the Function For the Log */
    static print(value) {
        let val = console.log(value);
        return val;
    }
}


/***/ }),

/***/ "./src/app/constant/application.helper.ts":
/*!************************************************!*\
  !*** ./src/app/constant/application.helper.ts ***!
  \************************************************/
/*! exports provided: UserMask, User, ApplicationHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMask", function() { return UserMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationHelper", function() { return ApplicationHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.constant */ "./src/app/constant/app.constant.ts");



class UserMask {
}
class User {
    /**
     *
     */
    constructor() {
        this.name = "";
        this.userAccessLevel = "";
        this.userId = "";
    }
}
const memberMask = {
    hiddenItems: [
        'link_all_match',
        'link_user_management',
        'link_agent_management',
        'link_member_management'
    ],
};
const adminMask = {
    hiddenItems: [],
};
const agentMask = {
    hiddenItems: [
        'link_all_match',
        'link_user_management',
        'link_agent_management'
    ],
};
let ApplicationHelper = class ApplicationHelper {
    constructor() {
    }
    setloggedInUserInfo(user) {
        this.user = user;
    }
    getloggedInUserInfo() {
        return this.user;
    }
    getUserAccessLevel() {
        return JSON.parse(localStorage.getItem(_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstant"].USER_TYPE));
    }
    getLoggedInUserId() {
        return this.user.userId;
    }
    getUserRoleMask() {
        switch (this.getUserAccessLevel()) {
            case 0:
                return adminMask;
            case 1:
                return agentMask;
            case 2:
                return memberMask;
            default:
                return null;
        }
    }
};
ApplicationHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ApplicationHelper);



/***/ }),

/***/ "./src/app/constant/routeData.constant.ts":
/*!************************************************!*\
  !*** ./src/app/constant/routeData.constant.ts ***!
  \************************************************/
/*! exports provided: RouteDataHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteDataHelper", function() { return RouteDataHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class RouteData {
}
let RouteDataHelper = class RouteDataHelper {
    constructor() {
        this.routeDataList = [];
    }
    setData(data) {
        this.routeDataList.push(data);
    }
    getData(url) {
        let routeData;
        if (this.routeDataList && this.routeDataList.length > 0) {
            routeData = this.routeDataList.find(r => r.url == url);
            if (routeData) {
                this.routeDataList.splice(this.routeDataList.indexOf(routeData), 1);
                return routeData;
            }
            else {
                return null;
            }
        }
    }
    clearData() {
        this.routeDataList = [];
    }
};
RouteDataHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RouteDataHelper);



/***/ }),

/***/ "./src/app/constant/url.constant.ts":
/*!******************************************!*\
  !*** ./src/app/constant/url.constant.ts ***!
  \******************************************/
/*! exports provided: UrlConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlConstant", function() { return UrlConstant; });
class UrlConstant {
    static get LOGIN_PATH() { return 'login'; }
    static get DASH_BORAD_PATH() { return 'games-manager'; }
    static get TOPIC_PATH() { return 'topic'; }
    static get EMPLOYEE_MANAGER_PATH() { return 'employee-manager'; }
    static get TASK_MANAGER_PATH() { return 'task-manager'; }
    static get CREATE_EMPLOYEE_PATH() { return 'create-employee'; }
    static get ALL_EMPLOYEE_PATH() { return 'all-employee'; }
    static get ALL_TOPIC_PATH() { return 'all-topics'; }
}


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constant_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant/app.constant */ "./src/app/constant/app.constant.ts");
/* harmony import */ var _constant_url_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant/url.constant */ "./src/app/constant/url.constant.ts");





let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.getCurrentUser()) {
            this.router.navigate(['/' + _constant_url_constant__WEBPACK_IMPORTED_MODULE_4__["UrlConstant"].LOGIN_PATH]);
            return false;
        }
        return true;
    }
    getCurrentUser() {
        const token = localStorage.getItem(_constant_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstant"].USER_TOKEN_KEY);
        if (token) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



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
const environment = {
    production: false,
    // API_URL: 'http://66.175.217.67:3020',
    //  API_URL: 'http://localhost:3000',
    API_URL: 'https://casino-roulettee.herokuapp.com',
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\casinoRouletteFrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map