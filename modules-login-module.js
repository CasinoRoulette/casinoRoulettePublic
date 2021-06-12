(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-module"],{

/***/ "./src/app/components/login/login.components.ts":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.components.ts ***!
  \******************************************************/
/*! exports provided: LoginComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponents", function() { return LoginComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_constant_app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constant/app.constant */ "./src/app/constant/app.constant.ts");
/* harmony import */ var src_app_constant_url_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constant/url.constant */ "./src/app/constant/url.constant.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_constant_application_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/constant/application.helper */ "./src/app/constant/application.helper.ts");









let LoginComponents = class LoginComponents {
    constructor(_route, _formBuilder, loginService, _tosterServices, _appHelper) {
        this._route = _route;
        this._formBuilder = _formBuilder;
        this.loginService = loginService;
        this._tosterServices = _tosterServices;
        this._appHelper = _appHelper;
        this.userInfo = new src_app_constant_application_helper__WEBPACK_IMPORTED_MODULE_8__["User"]();
        this.forgotPassword = false;
        this.isEmailValid = false;
        this.isEmailEntered = false;
        this.emailAddress = "";
        this.loginForm = this._formBuilder.group({
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            "email": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    /* .................adminLogin................ */
    /* this will take the Data From the user email and password take you to the DashBoard */
    adminLogin() {
        this.loader = true;
        this.submitClick = true;
        if (this.loginForm.valid) {
            this.subscribe = this.loginService.adminLogin(this.loginParams()).subscribe((data) => {
                if (data.status == true) {
                    this.loader = false;
                    localStorage.setItem(src_app_constant_app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].LOGIN_DATA_KEY, JSON.stringify(data.result.userId)); /*  saving the Data Into local storage  */
                    localStorage.setItem(src_app_constant_app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].USER_TOKEN_KEY, JSON.stringify(data.result.authToken));
                    localStorage.setItem(src_app_constant_app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].USER_NAME, JSON.stringify(data.result.username));
                    localStorage.setItem(src_app_constant_app_constant__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].USER_TYPE, JSON.stringify(data.result.roleType));
                    this.userInfo = {
                        userId: data.result.userId,
                        username: data.result.username,
                        name: data.result.name,
                        userAccessLevel: data.result.roleType
                    };
                    this._appHelper.setloggedInUserInfo(this.userInfo);
                    this._tosterServices.success(data.message, "You have successfully Logged In");
                    this._route.navigate([src_app_constant_url_constant__WEBPACK_IMPORTED_MODULE_6__["UrlConstant"].DASH_BORAD_PATH]); /*navigate  to the Dashborad Page  */
                }
                else {
                    this.loader = false;
                    this._tosterServices.error(data.message, "Please enter valid credentials");
                }
            }, (error) => {
                this.loader = false;
                console.log(error);
            });
        }
    }
    resetPassword() {
        this.loader = true;
        if (this.loginForm.valid) {
            this.subscribe = this.loginService.forgotPassword({ email: this.emailAddress }).subscribe((data) => {
                if (data.status == true) {
                    this.loader = false;
                    this._tosterServices.success(data.message, "password sent successfully");
                    this.forgotPassword = false;
                }
                else {
                    this.loader = false;
                    this._tosterServices.error(data.message, "Please enter valid credentials");
                }
            }, (error) => {
                this.loader = false;
                console.log(error);
            });
        }
    }
    /* .........completed .................... */
    toggleLogin() {
        this.forgotPassword = this.forgotPassword == false ? true : false;
    }
    /* .......................login object ................................ */
    loginParams() {
        var loginElement = {
            loginObj: {
                username: this.loginForm.value.email,
                password: this.loginForm.value.password,
            }
        };
        return loginElement.loginObj;
    }
    /* ............................completed ............................ */
    // / ....................... Error form control ................................ /
    get formError() {
        return this.loginForm.controls;
    }
    // / .......................completed ................................ /
    ngOnDestroy() {
        this.subscribe = undefined;
    }
};
LoginComponents = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'admin-login',
        template: __webpack_require__(/*! ../../views/login/login.components.html */ "./src/app/views/login/login.components.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LogInService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
        src_app_constant_application_helper__WEBPACK_IMPORTED_MODULE_8__["ApplicationHelper"]])
], LoginComponents);



/***/ }),

/***/ "./src/app/modules/login.module.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/login.module.ts ***!
  \*****************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_login_login_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/login/login.components */ "./src/app/components/login/login.components.ts");
/* harmony import */ var _shared_modules_control_massage_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/modules/control-massage.module */ "./src/app/shared/modules/control-massage.module.ts");







const routes = [
    {
        path: '', component: _components_login_login_components__WEBPACK_IMPORTED_MODULE_5__["LoginComponents"],
    },
];
let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_login_login_components__WEBPACK_IMPORTED_MODULE_5__["LoginComponents"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_modules_control_massage_module__WEBPACK_IMPORTED_MODULE_6__["ControlMassageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LogInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInService", function() { return LogInService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bases_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bases.service */ "./src/app/services/bases.service.ts");
/* harmony import */ var _constant_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant/constants */ "./src/app/constant/constants.ts");




let LogInService = class LogInService {
    constructor(_basesServices) {
        this._basesServices = _basesServices;
    }
    /* ..........................calling the adminlogin Api ...................*/
    adminLogin(loginObj) {
        return this._basesServices.postRequest(`${_constant_constants__WEBPACK_IMPORTED_MODULE_3__["ApiBaseUrl"]}/login`, loginObj);
    }
    forgotPassword(loginObj) {
        return this._basesServices.postRequest(`${_constant_constants__WEBPACK_IMPORTED_MODULE_3__["ApiBaseUrl"]}/forgotPassword`, loginObj);
    }
};
LogInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bases_service__WEBPACK_IMPORTED_MODULE_2__["BaseServices"]])
], LogInService);



/***/ }),

/***/ "./src/app/views/login/login.components.html":
/*!***************************************************!*\
  !*** ./src/app/views/login/login.components.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-image: url('assets/images/arback.jpg');\">\r\n  <div class=\"splash-container login-wrap d-flex align-items-center\">\r\n    <div class=\"card w-100 pt-4 pb-4\">\r\n      <div class=\"card-header text-center\"><a href=\"javascript:void(0)\"><img src=\"assets/images/argameicon.png\"\r\n            alt=\"logo\"></a>\r\n        <br>\r\n      </div>\r\n      <div *ngIf=\"!forgotPassword\" class=\"card-body\">\r\n        <form [formGroup]=\"loginForm\" #myform=\"ngForm\" (ngSubmit)=\"adminLogin()\">\r\n          <div class=\"form-group\">\r\n            <input type=\"email\" class=\"form-control form-control-lg\" id=\"exampleInputEmail\"\r\n              placeholder=\"Enter Email Address...\" formControlName=\"email\" autocomplete=\"off\">\r\n            <p class=\"error-msg text-danger\"\r\n              *ngIf=\"formError.email.touched && formError.email.invalid ||(loginForm.get('email').hasError('required') && myform.submitted)\">\r\n              <span *ngIf=\"formError.email.errors?.required\">Email Address is required.</span>\r\n              <span *ngIf=\"formError.email.errors?.email\">Email Address is not valid.</span>\r\n            </p>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control form-control-lg\" id=\"exampleInputPassword\" placeholder=\"Password\"\r\n              formControlName=\"password\" autocomplete=\"off\">\r\n            <p class=\"error-msg text-danger\"\r\n              *ngIf=\"formError.password.touched && formError.password.invalid ||(loginForm.get('password').hasError('required') && myform.submitted)\">\r\n              <span *ngIf=\"formError.password.errors?.required\">Password is required.</span>\r\n            </p>\r\n          </div>\r\n          <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">\r\n            Login\r\n          </button>\r\n          <!-- <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"toggleLogin()\">\r\n            Forgot Password\r\n          </button> -->\r\n        </form>\r\n      </div>\r\n      <div *ngIf=\"forgotPassword\" class=\"card-body\">\r\n        <div class=\"form-group\">\r\n          <input class=\"form-control form-control-lg\" id=\"exampleInputEmail11\" placeholder=\"Enter Email Address...\"\r\n            [(ngModel)]=\"emailAddress\">\r\n          <p class=\"error-msg text-danger\">\r\n            <span *ngIf=\"isEmailEntered\">Email Address is required.</span>\r\n            <span *ngIf=\"isEmailValid\">Email Address is not valid.</span>\r\n          </p>\r\n        </div>\r\n        <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"resetPassword()\">\r\n          Send Password\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"lds-roller\" *ngIf=\"loader\">\r\n  <div></div>\r\n  <div></div>\r\n  <div></div>\r\n  <div></div>\r\n  <div></div>\r\n  <div></div>\r\n  <div></div>\r\n  <div></div>\r\n</div>"

/***/ })

}]);
//# sourceMappingURL=modules-login-module.js.map