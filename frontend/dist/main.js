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



var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
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

module.exports = "<mat-toolbar color=\"primary\">\n    <span [routerLink]=\"['']\">Movie Cruiser Application</span>\n    <button mat-button [routerLink]=\"['movies/popular']\">Popular Movies</button>\n    <button mat-button [routerLink]=\"['movies/top_rated']\">Top Rated Movies</button>\n    <button mat-button [routerLink]=\"['movies/watchlist']\">Watchlisted Movies</button>\n    <button mat-button [routerLink]=\"['movies/search']\"  class=\"search-button\">Search</button>\n    <button mat-button (click)=\"logout()\">Logout</button>\n</mat-toolbar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _modules_authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/authentication/auth-service.service */ "./src/app/modules/authentication/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.title = 'movie-cruiser-capsule-frontend';
    }
    AppComponent.prototype.logout = function () {
        this.auth.removeToken();
        this.router.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_movie_movie_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/movie/movie.module */ "./src/app/modules/movie/movie.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/authentication/authentication.module */ "./src/app/modules/authentication/authentication.module.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _modules_movie_movie_module__WEBPACK_IMPORTED_MODULE_7__["MovieModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _modules_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_9__["AuthenticationModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"]
            ],
            providers: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/authentication/auth-service.service */ "./src/app/modules/authentication/auth-service.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(route, authService) {
        this.route = route;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.authService.isTokenExpired()) {
            return true;
        }
        this.route.navigate(['/login']);
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _modules_authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/modules/authentication/auth-service.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/authentication/auth-service.service.ts ***!
  \****************************************************************/
/*! exports provided: TOKEN_NAME, AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_NAME", function() { return TOKEN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);




var TOKEN_NAME = "jwt_token";
var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(http) {
        this.http = http;
        this.springEndPoint = "http://localhost:2213/api/v1/userservice";
    }
    AuthServiceService.prototype.registerUser = function (newUser) {
        var registerUrl = this.springEndPoint + "/register";
        // console.log("in service newuser "+newUser);
        // console.log(registerUrl);
        return this.http.post(registerUrl, newUser, { responseType: 'text' });
    };
    AuthServiceService.prototype.loginUser = function (newUser) {
        var loginUrl = this.springEndPoint + "/login";
        // console.log("in login service newuser "+newUser);
        return this.http.post(loginUrl, newUser);
    };
    AuthServiceService.prototype.setToken = function (token) {
        return localStorage.setItem(TOKEN_NAME, token);
    };
    AuthServiceService.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_NAME);
    };
    AuthServiceService.prototype.removeToken = function () {
        return localStorage.removeItem(TOKEN_NAME);
    };
    AuthServiceService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthServiceService.prototype.isTokenExpired = function (token) {
        if (!token)
            token = this.getToken();
        // console.log(!token+" "+token);
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        //  console.log(date);
        if (date === undefined || date === null) {
            return false;
        }
        //  console.log(!(date.valueOf() > new Date().valueOf()));
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthServiceService);
    return AuthServiceService;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication-router.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/authentication/authentication-router.module.ts ***!
  \************************************************************************/
/*! exports provided: AuthRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRouterModule", function() { return AuthRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _register_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register/register.component */ "./src/app/modules/authentication/register/register/register.component.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/modules/authentication/login/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var authRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'register',
                component: _register_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]
            },
            {
                path: 'login',
                component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            }
        ]
    }
];
var AuthRouterModule = /** @class */ (function () {
    function AuthRouterModule() {
    }
    AuthRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(authRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], AuthRouterModule);
    return AuthRouterModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/modules/authentication/login/login/login.component.ts");
/* harmony import */ var _register_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register/register.component */ "./src/app/modules/authentication/register/register/register.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/modules/authentication/auth-service.service.ts");
/* harmony import */ var _authentication_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication-router.module */ "./src/app/modules/authentication/authentication-router.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _register_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _authentication_router_module__WEBPACK_IMPORTED_MODULE_7__["AuthRouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"]
            ],
            exports: [
                _register_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                _login_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            ],
            providers: [
                _auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/login/login/login.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/authentication/login/login/login.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container{\n    margin: auto;\n    width: 50%;\n    padding: 10%;\n    padding-top: 5%;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    flex-flow: column nowrap;\n    align-items: center;\n\n}\n.login-input{\n    width: 100%;\n}\nh3{\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixvQkFBb0I7O0NBRXZCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMTAlO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuLmxvZ2luLWlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xufVxuaDN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/authentication/login/login/login.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/authentication/login/login/login.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"login-form\" #registerForm=\"ngForm\" (ngSubmit)=\"loginUser()\">\n  <div class=\"login-container\">\n    <div class=\"row\">\n      <h3>Login User</h3>\n    </div>\n    <div class=\"row\">\n      <mat-form-field class=\"login-input\">\n        <input class=\"inputId\" id=\"userId\" matInput  #userId=\"ngModel\"  [(ngModel)]=\"newUser.userId\" placeholder=\"User Id\" name=\"userId\"\n          minlength=\"5\" maxlength=\"10\" required #userId=\"ngModel\">\n      </mat-form-field>\n      <mat-form-field class=\"login-input\">\n        <input class= \"inputPass\" matInput id=\"password\" #password=\"ngModel\" [(ngModel)]=\"newUser.password\" placeholder=\"Password\"\n          name=\"password\" required>\n      </mat-form-field>\n    </div>\n    <div class=\"row\">\n      <button class=\"login-user\" mat-raised-button color=\"primary\" type=\"submit\">Login</button>\n      <button class=\"register-button\" mat-raised-button color=\"primary\" [routerLink]=\"['/register']\">Register</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/authentication/login/login/login.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/authentication/login/login/login.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user */ "./src/app/modules/authentication/user.ts");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth-service.service */ "./src/app/modules/authentication/auth-service.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.newUser = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.service.loginUser(this.newUser).subscribe(function (data) {
            if (data['token']) {
                _this.service.setToken(data['token']);
                _this.router.navigate(['/movies/popular']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'auth-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/authentication/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/authentication/login/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/authentication/register/register/register.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/authentication/register/register/register.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-container{\n    margin: auto;\n    width: 50%;\n    padding: 10%;\n    padding-top: 5%;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    flex-flow: column nowrap;\n    align-items: center;\n\n}\n.register-input{\n    width: 100%;\n}\nh3{\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9yZWdpc3Rlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixvQkFBb0I7O0NBRXZCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vcmVnaXN0ZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1jb250YWluZXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMTAlO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuLnJlZ2lzdGVyLWlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xufVxuaDN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/authentication/register/register/register.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/authentication/register/register/register.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"register-form\" #registerForm=\"ngForm\" (ngSubmit)=\"registerUser()\">\n  <div class=\"register-container\">\n    <div class=\"row\">\n      <h3>Register User</h3>\n    </div>\n    <div class=\"row\">\n\n      <mat-form-field class=\"register-input\">\n        <input matInput id=\"firstName\" [(ngModel)]=\"newUser.firstName\" placeholder=\"First Name\" name=\"firstName\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"register-input\">\n        <input matInput id=\"lastName\" [(ngModel)]=\"newUser.lastName\" placeholder=\"Last Name\" name=\"lastName\">\n      </mat-form-field>\n\n\n      <mat-form-field class=\"register-input\">\n        <input matInput id=\"userId\" [(ngModel)]=\"newUser.userId\" placeholder=\"User Id\" name=\"userId\" minlength=\"5\" maxlength=\"10\"\n          required #userId=\"ngModel\">\n      </mat-form-field>\n\n      <mat-form-field class=\"register-input\">\n        <input matInput id=\"password\" [(ngModel)]=\"newUser.password\" placeholder=\"Passwoed\" name=\"password\" required>\n      </mat-form-field>\n    </div>\n    <div class=\"row\">\n      <button mat-raised-button color=\"primary\" class=\"register-user\" type=\"submit\" (click)=\"registerUser()\">Register</button>\n      <button mat-raised-button color=\"primary\" (click)=\"resetInput()\">Clear</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/authentication/register/register/register.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/authentication/register/register/register.component.ts ***!
  \********************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user */ "./src/app/modules/authentication/user.ts");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth-service.service */ "./src/app/modules/authentication/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.newUser = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        console.log("Register User " + this.newUser.userId + " " + this.newUser.password);
        this.authService.registerUser(this.newUser).subscribe(function (res) {
            console.log("user data " + res);
        });
        this.router.navigate(['/login']);
    };
    RegisterComponent.prototype.clearInput = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'auth-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/authentication/register/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/modules/authentication/register/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/authentication/user.ts":
/*!************************************************!*\
  !*** ./src/app/modules/authentication/user.ts ***!
  \************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/modules/movie/components/container/container.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/movie/components/container/container.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\n    height: 100vh;    \n}\n\n.movie-container{\n    margin: auto;\n    width: 90vw;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    overflow-x: auto;\n    height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tb3ZpZS9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tb3ZpZS9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIGhlaWdodDogMTAwdmg7ICAgIFxufVxuXG4ubW92aWUtY29udGFpbmVye1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/movie/components/container/container.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/movie/components/container/container.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movie-container\">\n  <movie-thumbnail *ngFor=\"let movie of movies\" [movie]=\"movie\" [useWatchlistApi]='useWatchlistApi'\n  (deleted)=\"onDelete($event)\" (added)=\"addToWatchlist($event)\"></movie-thumbnail>\n</div>"

/***/ }),

/***/ "./src/app/modules/movie/components/container/container.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/movie/components/container/container.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../movie.service */ "./src/app/modules/movie/movie.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(snackbar, movieService) {
        this.snackbar = snackbar;
        this.movieService = movieService;
        this.movies = [];
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent.prototype.onDelete = function (movie) {
        // for(let i=0;i<this.movies.length; i++)
        // {
        //   if(movie.id === this.movies[i].id)
        //   {
        //     this.movies.splice(i,1);
        //   }
        // }
        var _this = this;
        this.movieService.deleteMovieFromWatchlist(movie.id).subscribe(function () {
            _this.snackbar.open("Removed " + ("" + movie.title) + " From Watchlist Successfully", '', {
                duration: 1000
            });
        });
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
    };
    ContainerComponent.prototype.addToWatchlist = function (movie) {
        var _this = this;
        this.movieService.addMovieToWatchlist(movie).subscribe(function (movie) {
            _this.snackbar.open("Added " + ("" + movie.name) + " To Watchlist Successfully", '', {
                duration: 1000
            });
        });
    };
    ContainerComponent.prototype.updateWatchlist = function (movie) {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ContainerComponent.prototype, "movies", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ContainerComponent.prototype, "useWatchlistApi", void 0);
    ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'movie-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/modules/movie/components/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.css */ "./src/app/modules/movie/components/container/container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/movie/components/movie-dialog/movie-dialog.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbW92aWUvY29tcG9uZW50cy9tb3ZpZS1kaWFsb2cvbW92aWUtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/movie/components/movie-dialog/movie-dialog.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>Update the comments for the movie {{data.obj.title}}</span>\n<h1 mat-dialog-title>{{data.obj.title}}</h1>\n<div mat-dialog-content>\n  <p>Comments</p>\n  <mat-form-field>\n  <textarea matInput [(ngModel)]=\"comments\"></textarea>\n</mat-form-field>\n</div>\n<div mat-dialog-actions>\n    <button mat-button color=\"warn\" (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button color=\"warn\" (click)=\"updateComments()\">Update</button>  \n</div>"

/***/ }),

/***/ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/movie/components/movie-dialog/movie-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MovieDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDialogComponent", function() { return MovieDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../movie.service */ "./src/app/modules/movie/movie.service.ts");




var MovieDialogComponent = /** @class */ (function () {
    function MovieDialogComponent(snackBar, dialogRef, data, movieService) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.movieService = movieService;
        this.comments = data.obj.comments;
        this.movie = data.obj;
        this.actionType = data.actionType;
    }
    MovieDialogComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    MovieDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MovieDialogComponent.prototype.updateComments = function () {
        var _this = this;
        this.movie.comments = this.comments;
        this.dialogRef.close();
        this.movieService.updateMovieInWatchlist(this.movie).subscribe(function (movie) {
            _this.snackBar.open("Updated " + _this.movie.title + " Successfully", '', {
                duration: 1000
            });
        });
    };
    MovieDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'movie-movie-dialog',
            template: __webpack_require__(/*! ./movie-dialog.component.html */ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.html"),
            styles: [__webpack_require__(/*! ./movie-dialog.component.css */ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]])
    ], MovieDialogComponent);
    return MovieDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/components/search/search.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/movie/components/search/search.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbW92aWUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/movie/components/search/search.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/movie/components/search/search.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <form class=\"example-form\">\n    <mat-form-field>\n      <input matInput type=\"text\" id=\"search-button-input\" #box (keyUp.enter)=\"onEnter(box.value)\">\n      <mat-placeholder>Search</mat-placeholder>\n    </mat-form-field>\n  </form>\n</div>\n\n<movie-container [movies]=\"movies\"></movie-container>"

/***/ }),

/***/ "./src/app/modules/movie/components/search/search.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/movie/components/search/search.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../movie.service */ "./src/app/modules/movie/movie.service.ts");



var SearchComponent = /** @class */ (function () {
    function SearchComponent(movieService) {
        this.movieService = movieService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onEnter = function (searchKey) {
        var _this = this;
        this.movieService.searchMovies(searchKey).subscribe(function (movies) {
            _this.movies = movies;
        });
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'movie-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/modules/movie/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/modules/movie/components/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/components/thumbnail/thumbnail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/movie/components/thumbnail/thumbnail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-thumbnail{\n    width: 300px;\n    margin: 10px;\n}\n\n.movieTitle{\n    margin: 0;\n    height: 45px;\n}\n\n.movie-actions{\n    text-align: right;\n}\n\n.movie-overview{\n    height:50px;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n\n.movie-overview::-webkit-scrollbar{\n    width: 2px;\n    background: gray;\n}\n\n.movie-image{\n    height : 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tb3ZpZS9jb21wb25lbnRzL3RodW1ibmFpbC90aHVtYm5haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tb3ZpZS9jb21wb25lbnRzL3RodW1ibmFpbC90aHVtYm5haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS10aHVtYm5haWx7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLm1vdmllVGl0bGV7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLm1vdmllLWFjdGlvbnN7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tb3ZpZS1vdmVydmlld3tcbiAgICBoZWlnaHQ6NTBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1vdmllLW92ZXJ2aWV3Ojotd2Via2l0LXNjcm9sbGJhcntcbiAgICB3aWR0aDogMnB4O1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG59XG5cbi5tb3ZpZS1pbWFnZXtcbiAgICBoZWlnaHQgOiA1MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/movie/components/thumbnail/thumbnail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/movie/components/thumbnail/thumbnail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"movie-card\" class=\"movie-thumbnail\">\n    <mat-card-header>\n        <mat-card-title class=\"movieTitle\">{{movie?.title}}</mat-card-title>\n        <mat-card-subtitle>{{movie?.release_date}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image class=\"movie-image\" [src]=\"movie?.poster_path\" [alt]=\"movie?.title\">\n    <mat-card-content class=\"movie-overview\">\n        {{movie?.overview}}\n    </mat-card-content>\n    <mat-card-actions class=\"movie-actions\">\n        <button *ngIf=\"!useWatchlistApi\" mat-raised-button color=\"primary\" class=\"addButton\" (click)=\"addToWatchList()\">Add To Watchlist</button>\n        <button *ngIf=\"useWatchlistApi\" mat-raised-button color=\"primary\" (click)=\"deleteFromWatchList()\">Remove</button>\n        <button *ngIf=\"useWatchlistApi\" mat-raised-button color=\"primary\" (click)=\"updateWatchList('update')\" align=\"end\">Update</button>\n      </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/movie/components/thumbnail/thumbnail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/movie/components/thumbnail/thumbnail.component.ts ***!
  \***************************************************************************/
/*! exports provided: ThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailComponent", function() { return ThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie-dialog/movie-dialog.component */ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.ts");




var ThumbnailComponent = /** @class */ (function () {
    function ThumbnailComponent(dialog) {
        this.dialog = dialog;
        this.added = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ThumbnailComponent.prototype.ngOnInit = function () {
    };
    ThumbnailComponent.prototype.addToWatchList = function () {
        this.added.emit(this.movie);
    };
    ThumbnailComponent.prototype.deleteFromWatchList = function () {
        this.deleted.emit(this.movie);
    };
    ThumbnailComponent.prototype.updateWatchList = function (actionType) {
        var dialogRef = this.dialog.open(_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MovieDialogComponent"], {
            width: '400px',
            data: { obj: this.movie, actionType: actionType }
        });
        console.log("open dialog");
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("The dialog is closed now");
        });
        //this.updated.emit(this.movie);  
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThumbnailComponent.prototype, "movie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ThumbnailComponent.prototype, "useWatchlistApi", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThumbnailComponent.prototype, "added", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThumbnailComponent.prototype, "deleted", void 0);
    ThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'movie-thumbnail',
            template: __webpack_require__(/*! ./thumbnail.component.html */ "./src/app/modules/movie/components/thumbnail/thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./thumbnail.component.css */ "./src/app/modules/movie/components/thumbnail/thumbnail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ThumbnailComponent);
    return ThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/components/tmdb-container/tmdb-container.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/movie/components/tmdb-container/tmdb-container.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\n    height: 100vh;    \n}\n\n.movie-container{\n    margin: auto;\n    width: 90vw;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    overflow-x: auto;\n    height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tb3ZpZS9jb21wb25lbnRzL3RtZGItY29udGFpbmVyL3RtZGItY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbW92aWUvY29tcG9uZW50cy90bWRiLWNvbnRhaW5lci90bWRiLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgaGVpZ2h0OiAxMDB2aDsgICAgXG59XG5cbi5tb3ZpZS1jb250YWluZXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/movie/components/tmdb-container/tmdb-container.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/movie/components/tmdb-container/tmdb-container.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"movie-container\">\n  <movie-thumbnail *ngFor=\"let movie of movies\" [movie]=\"movie\"></movie-thumbnail>\n</div> -->\n<movie-container [movies]=\"movies\"></movie-container>"

/***/ }),

/***/ "./src/app/modules/movie/components/tmdb-container/tmdb-container.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/movie/components/tmdb-container/tmdb-container.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TmdbContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmdbContainerComponent", function() { return TmdbContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../movie.service */ "./src/app/modules/movie/movie.service.ts");




var TmdbContainerComponent = /** @class */ (function () {
    function TmdbContainerComponent(movieService, route) {
        var _this = this;
        this.movieService = movieService;
        this.route = route;
        this.movies = [];
        this.route.data.subscribe(function (data) {
            _this.movieType = data.movieType;
        });
    }
    TmdbContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovies(this.movieType).subscribe(function (movies) {
            var _a;
            (_a = _this.movies).push.apply(_a, movies);
        }, function (err) {
        });
    };
    TmdbContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'movie-tmdb-container',
            template: __webpack_require__(/*! ./tmdb-container.component.html */ "./src/app/modules/movie/components/tmdb-container/tmdb-container.component.html"),
            styles: [__webpack_require__(/*! ./tmdb-container.component.css */ "./src/app/modules/movie/components/tmdb-container/tmdb-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TmdbContainerComponent);
    return TmdbContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/components/watchlist/watchlist.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/movie/components/watchlist/watchlist.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbW92aWUvY29tcG9uZW50cy93YXRjaGxpc3Qvd2F0Y2hsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/movie/components/watchlist/watchlist.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/movie/components/watchlist/watchlist.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<movie-container [movies]=\"movies\" [useWatchlistApi]='useWatchlistApi'></movie-container>\n"

/***/ }),

/***/ "./src/app/modules/movie/components/watchlist/watchlist.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/movie/components/watchlist/watchlist.component.ts ***!
  \***************************************************************************/
/*! exports provided: WatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function() { return WatchlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../movie.service */ "./src/app/modules/movie/movie.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var WatchlistComponent = /** @class */ (function () {
    function WatchlistComponent(movieService, snackBar) {
        this.movieService = movieService;
        this.snackBar = snackBar;
        this.useWatchlistApi = true;
        this.movies = [];
    }
    WatchlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMoviesFromWatchlist().subscribe(function (res) {
            if (res.length === 0) {
                _this.snackBar.open("Your Watchlist is Empty", '', {
                    duration: 1000
                });
            }
            res.forEach(function (element) {
                console.log(JSON.stringify(element));
                var postData = {
                    "id": element.movieId,
                    "title": element.name,
                    "poster_path": element.posterPath,
                    "release_date": element.releaseDate,
                    "vote_average": element.voteAverage,
                    "vote_count": element.voteCount,
                    "userId": element.userId
                };
                _this.movies.push(postData);
            });
        });
    };
    WatchlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'movie-watchlist',
            template: __webpack_require__(/*! ./watchlist.component.html */ "./src/app/modules/movie/components/watchlist/watchlist.component.html"),
            styles: [__webpack_require__(/*! ./watchlist.component.css */ "./src/app/modules/movie/components/watchlist/watchlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], WatchlistComponent);
    return WatchlistComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/movie/interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/auth-service.service */ "./src/app/modules/authentication/auth-service.service.ts");



var InterceptorService = /** @class */ (function () {
    function InterceptorService(authService) {
        this.authService = authService;
    }
    InterceptorService.prototype.intercept = function (request, next) {
        //console.log("in intercept");
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.authService.getToken()
            }
        });
        return next.handle(request);
    };
    InterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]])
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/modules/movie/movie-router.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/movie/movie-router.module.ts ***!
  \******************************************************/
/*! exports provided: MovieRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieRouterModule", function() { return MovieRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_tmdb_container_tmdb_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tmdb-container/tmdb-container.component */ "./src/app/modules/movie/components/tmdb-container/tmdb-container.component.ts");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "./src/app/modules/movie/components/watchlist/watchlist.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/modules/movie/components/search/search.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth-guard.service */ "./src/app/auth-guard.service.ts");







var movieRoutes = [
    {
        path: 'movies',
        children: [
            {
                path: '',
                redirectTo: '/movies/popular',
                pathMatch: 'full',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
            },
            {
                path: 'popular',
                component: _components_tmdb_container_tmdb_container_component__WEBPACK_IMPORTED_MODULE_3__["TmdbContainerComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
                data: {
                    movieType: 'popular'
                }
            },
            {
                path: 'top_rated',
                component: _components_tmdb_container_tmdb_container_component__WEBPACK_IMPORTED_MODULE_3__["TmdbContainerComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
                data: {
                    movieType: 'top_rated'
                }
            },
            {
                path: 'watchlist',
                component: _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_4__["WatchlistComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
            },
            {
                path: 'search',
                component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
            }
        ]
    }
];
var MovieRouterModule = /** @class */ (function () {
    function MovieRouterModule() {
    }
    MovieRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(movieRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], MovieRouterModule);
    return MovieRouterModule;
}());



/***/ }),

/***/ "./src/app/modules/movie/movie.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/movie/movie.module.ts ***!
  \***********************************************/
/*! exports provided: MovieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModule", function() { return MovieModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/thumbnail/thumbnail.component */ "./src/app/modules/movie/components/thumbnail/thumbnail.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie.service */ "./src/app/modules/movie/movie.service.ts");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/modules/movie/components/container/container.component.ts");
/* harmony import */ var _movie_router_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-router.module */ "./src/app/modules/movie/movie-router.module.ts");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "./src/app/modules/movie/components/watchlist/watchlist.component.ts");
/* harmony import */ var _components_tmdb_container_tmdb_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tmdb-container/tmdb-container.component */ "./src/app/modules/movie/components/tmdb-container/tmdb-container.component.ts");
/* harmony import */ var _components_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/movie-dialog/movie-dialog.component */ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/modules/movie/components/search/search.component.ts");
/* harmony import */ var _interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptor.service */ "./src/app/modules/movie/interceptor.service.ts");















var MovieModule = /** @class */ (function () {
    function MovieModule() {
    }
    MovieModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_4__["ThumbnailComponent"],
                _components_container_container_component__WEBPACK_IMPORTED_MODULE_7__["ContainerComponent"],
                _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_9__["WatchlistComponent"],
                _components_tmdb_container_tmdb_container_component__WEBPACK_IMPORTED_MODULE_10__["TmdbContainerComponent"],
                _components_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_11__["MovieDialogComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _movie_router_module__WEBPACK_IMPORTED_MODULE_8__["MovieRouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
            ],
            entryComponents: [
                _components_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_11__["MovieDialogComponent"]
            ],
            exports: [
                _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_4__["ThumbnailComponent"],
                _movie_router_module__WEBPACK_IMPORTED_MODULE_8__["MovieRouterModule"],
                _components_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_11__["MovieDialogComponent"]
            ],
            providers: [
                _movie_service__WEBPACK_IMPORTED_MODULE_6__["MovieService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_service__WEBPACK_IMPORTED_MODULE_14__["InterceptorService"],
                    multi: true
                }
            ]
        })
    ], MovieModule);
    return MovieModule;
}());



/***/ }),

/***/ "./src/app/modules/movie/movie.service.ts":
/*!************************************************!*\
  !*** ./src/app/modules/movie/movie.service.ts ***!
  \************************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.apiKey = 'api_key=de5170af8a729fa221563e510e28bb2d';
        this.tmdbEndPoint = 'https://api.themoviedb.org/3/movie';
        this.imagePrefix = "https://image.tmdb.org/t/p/w500";
        this.watchlistEndPoint = 'http://localhost:3000/watchlist';
        this.springEndPoint = "http://localhost:2212/api/v1/movieservice/movie";
        this.search = "https://api.themoviedb.org/3/search/movie";
    }
    MovieService.prototype.getMovies = function (type, page) {
        if (page === void 0) { page = 1; }
        var endPoint = this.tmdbEndPoint + '/' + type + '?' + this.apiKey + '&page=' + page;
        return this.http.get(endPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.pickMovieResults), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.transformPosterPathMovies.bind(this)));
    };
    MovieService.prototype.transformPosterPathMovies = function (movies) {
        var _this = this;
        return movies.map(function (movie) {
            movie.poster_path = _this.imagePrefix + movie.poster_path;
            return movie;
        });
    };
    MovieService.prototype.pickMovieResults = function (response) {
        return response['results'];
    };
    MovieService.prototype.searchMovies = function (searchKey) {
        if (searchKey.length > 0) {
            var url = this.search + "?" + this.apiKey + "&page=1&include_adult=false&query=" + searchKey;
            console.log(url);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.pickMovieResults), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.transformPosterPathMovies.bind(this)));
        }
    };
    MovieService.prototype.addMovieToWatchlist = function (movie) {
        var postData = {
            "movieId": movie.id,
            "name": movie.title,
            "posterPath": movie.poster_path,
            "releaseDate": movie.release_date,
            "voteAverage": movie.vote_average,
            "voteCount": movie.vote_count,
            "userId": movie.userId
        };
        // console.log(movie.id+" "+postData.movieId);
        return this.http.post(this.springEndPoint, postData);
    };
    MovieService.prototype.getMoviesFromWatchlist = function () {
        return this.http.get(this.springEndPoint + "s");
    };
    MovieService.prototype.deleteMovieFromWatchlist = function (id) {
        var url = this.springEndPoint + "/" + id;
        return this.http.delete(url, { responseType: 'text' });
    };
    MovieService.prototype.updateMovieInWatchlist = function (movie) {
        var putData = {
            "movieId": movie.id,
            "name": movie.title,
            "posterPath": movie.poster_path,
            "releaseDate": movie.release_date,
            "voteAverage": movie.vote_average,
            "voteCount": movie.vote_count,
            "comments": movie.comments,
            "userId": movie.userId
        };
        console.log(JSON.stringify(putData));
        return this.http.put(this.springEndPoint, putData);
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
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

module.exports = __webpack_require__(/*! /home/ubuntu/Desktop/moviecruiserserverapplication/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map