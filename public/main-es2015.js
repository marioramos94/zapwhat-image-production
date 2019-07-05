(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n  <head>\n    <title>Socket.IO chat</title>\n    <style>\n\n    </style>\n  </head>\n  <body *ngIf=\"!isLogin\">\n    <div>\n        <h1 class=\"header\">Bienvenido a ZapWhat,</h1>\n        <h1 class=\"header\">por favor ingrese un usuario</h1>\n    </div>\n    <div class=\"login\">\n      <input [(ngModel)]=\"loginInput\" (keyup.enter)=\"login()\" id=\"m\" autocomplete=\"off\" /><button (click)=\"login()\">Ingresar</button>\n    </div>\n  </body>\n  <body *ngIf=\"isLogin\">\n      <h1 class=\"header\">ZapWhat</h1>\n      <ul id=\"messages\">\n        <li *ngFor=\"let msg of msgs\" [ngClass]=\"{'serverMsg':msg.type==2,'serverMsg2':msg.type==1}\">\n        <span class=\"user\">{{msg.user}}</span> {{msg.msg}}\n        </li>\n        <li *ngIf=\"writting.length > 0\" class=\"writting animated bounce\">\n          <span *ngFor=\"let user of writting; let last = last\">\n            {{user}}<span *ngIf=\"!last\">,</span>\n          </span> <span *ngIf=\"writting.length == 1\"> esta</span> <span *ngIf=\"writting.length > 1\"> estan</span> escribiendo...\n        </li>\n      </ul>\n      <div class=\"msg\">\n        <input [(ngModel)]=\"msgInput\" (ngModelChange)=\"sendWrite()\" (keyup.enter)=\"sendMsg()\" id=\"m\" autocomplete=\"off\" /><button (click)=\"sendMsg()\">Send</button>\n      </div>\n    </body>\n</html>"

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



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font: 20px Helvetica, Arial; }\ndiv.msg { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }\ndiv.msg input { border: 0; padding: 10px; width: 90%; margin-right: .4%; }\ndiv.msg button { width: 9.6%; background: #1EBEA5; border: none; padding: 10px; }\ndiv.login { background: #000; padding: 3px; position: fixed; width: 50%; }\ndiv.login input { border: 0; padding: 10px; width: 90%; margin-right: .4%; }\ndiv.login button { width: 9.6%; background: #1EBEA5; border: none; padding: 10px; }\n#messages { list-style-type: none; margin: 0; padding: 0; }\n#messages li { padding: 5px 10px; background: #eee;}\n.serverMsg{margin-left: 0%!important;text-align: left!important;border-radius: 0px 15px 15px 15px;\n    width: 50%;    word-wrap: break-word;}\n.serverMsg2{text-align: right;border-radius: 15px 0px 15px 15px;\n    background: powderblue!important;\n    width: 50%;margin-left: 50%;    word-wrap: break-word;}\n.header{color:#1EBEA5;}\n.writting{background:none!important;font-weight: bold}\n.user{color:green;   \n    position: relative;\n    bottom: 1ex; \n    font-size: 80%; }\n@-webkit-keyframes bounce {\n    0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);transform: translateY(0);}\n    40% {-webkit-transform: translateY(-10  px);transform: translateY(-10  px);}\n    60% {-webkit-transform: translateY(-5px);transform: translateY(-5px);}\n}\n@keyframes bounce {\n    0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);transform: translateY(0);}\n    40% {-webkit-transform: translateY(-10  px);transform: translateY(-10  px);}\n    60% {-webkit-transform: translateY(-5px);transform: translateY(-5px);}\n}\n.bounce {\n    -webkit-animation-name: bounce;\n            animation-name: bounce;\n}\n.animated {\n    -webkit-animation-duration: 2.5s;\n            animation-duration: 2.5s;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxTQUFTLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFO0FBQ25ELE9BQU8sMkJBQTJCLEVBQUU7QUFDcEMsVUFBVSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUU7QUFDbkYsZ0JBQWdCLFNBQVMsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFO0FBQ3pFLGlCQUFpQixXQUFXLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRTtBQUNoRixZQUFZLGdCQUFnQixFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFO0FBQ3pFLGtCQUFrQixTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRTtBQUMzRSxtQkFBbUIsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUU7QUFDbEYsWUFBWSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFO0FBQzFELGVBQWUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7QUFDbkQsV0FBVyx5QkFBeUIsQ0FBQywwQkFBMEIsQ0FBQyxpQ0FBaUM7SUFDN0YsVUFBVSxLQUFLLHFCQUFxQixDQUFDO0FBQ3pDLFlBQVksaUJBQWlCLENBQUMsaUNBQWlDO0lBQzNELGdDQUFnQztJQUNoQyxVQUFVLENBQUMsZ0JBQWdCLEtBQUsscUJBQXFCLENBQUM7QUFDMUQsUUFBUSxhQUFhLENBQUM7QUFDdEIsVUFBVSx5QkFBeUIsQ0FBQyxpQkFBaUI7QUFDckQsTUFBTSxXQUFXO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjLEVBQUU7QUFFcEI7SUFDSSx5QkFBeUIsZ0NBQXdCLENBQXhCLHdCQUF3QixDQUFDO0lBQ2xELEtBQUssc0NBQThCLENBQTlCLDhCQUE4QixDQUFDO0lBQ3BDLEtBQUssbUNBQTJCLENBQTNCLDJCQUEyQixDQUFDO0FBQ3JDO0FBSkE7SUFDSSx5QkFBeUIsZ0NBQXdCLENBQXhCLHdCQUF3QixDQUFDO0lBQ2xELEtBQUssc0NBQThCLENBQTlCLDhCQUE4QixDQUFDO0lBQ3BDLEtBQUssbUNBQTJCLENBQTNCLDJCQUEyQixDQUFDO0FBQ3JDO0FBQ0E7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsMkNBQW1DO1lBQW5DLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuYm9keSB7IGZvbnQ6IDIwcHggSGVsdmV0aWNhLCBBcmlhbDsgfVxuZGl2Lm1zZyB7IGJhY2tncm91bmQ6ICMwMDA7IHBhZGRpbmc6IDNweDsgcG9zaXRpb246IGZpeGVkOyBib3R0b206IDA7IHdpZHRoOiAxMDAlOyB9XG5kaXYubXNnIGlucHV0IHsgYm9yZGVyOiAwOyBwYWRkaW5nOiAxMHB4OyB3aWR0aDogOTAlOyBtYXJnaW4tcmlnaHQ6IC40JTsgfVxuZGl2Lm1zZyBidXR0b24geyB3aWR0aDogOS42JTsgYmFja2dyb3VuZDogIzFFQkVBNTsgYm9yZGVyOiBub25lOyBwYWRkaW5nOiAxMHB4OyB9XG5kaXYubG9naW4geyBiYWNrZ3JvdW5kOiAjMDAwOyBwYWRkaW5nOiAzcHg7IHBvc2l0aW9uOiBmaXhlZDsgd2lkdGg6IDUwJTsgfVxuZGl2LmxvZ2luIGlucHV0IHsgYm9yZGVyOiAwOyBwYWRkaW5nOiAxMHB4OyB3aWR0aDogOTAlOyBtYXJnaW4tcmlnaHQ6IC40JTsgfVxuZGl2LmxvZ2luIGJ1dHRvbiB7IHdpZHRoOiA5LjYlOyBiYWNrZ3JvdW5kOiAjMUVCRUE1OyBib3JkZXI6IG5vbmU7IHBhZGRpbmc6IDEwcHg7IH1cbiNtZXNzYWdlcyB7IGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9XG4jbWVzc2FnZXMgbGkgeyBwYWRkaW5nOiA1cHggMTBweDsgYmFja2dyb3VuZDogI2VlZTt9XG4uc2VydmVyTXNne21hcmdpbi1sZWZ0OiAwJSFpbXBvcnRhbnQ7dGV4dC1hbGlnbjogbGVmdCFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAxNXB4O1xuICAgIHdpZHRoOiA1MCU7ICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDt9XG4uc2VydmVyTXNnMnt0ZXh0LWFsaWduOiByaWdodDtib3JkZXItcmFkaXVzOiAxNXB4IDBweCAxNXB4IDE1cHg7XG4gICAgYmFja2dyb3VuZDogcG93ZGVyYmx1ZSFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDUwJTttYXJnaW4tbGVmdDogNTAlOyAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7fVxuLmhlYWRlcntjb2xvcjojMUVCRUE1O31cbi53cml0dGluZ3tiYWNrZ3JvdW5kOm5vbmUhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OiBib2xkfVxuLnVzZXJ7Y29sb3I6Z3JlZW47ICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMWV4OyBcbiAgICBmb250LXNpemU6IDgwJTsgfVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgMCUsIDIwJSwgNTAlLCA4MCUsIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTt9XG4gICAgNDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwICBweCk7fVxuICAgIDYwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO31cbn1cbi5ib3VuY2Uge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2U7XG59XG5cbi5hbmltYXRlZCB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyLjVzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59Il19 */"

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
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");



let AppComponent = class AppComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.msgs = [];
        this.writting = [];
    }
    ngOnInit() {
        this.chatService
            .getWritting()
            .subscribe(write => {
            if (write.state) {
                if (this.writting.indexOf(write.user) == -1) {
                    this.writting.push(write.user);
                }
            }
            else {
                this.writting.splice(this.writting.indexOf(write.user));
            }
        });
    }
    sendMsg() {
        if (this.msgInput != "") {
            this.msgs.push({ type: 1, msg: this.msgInput });
            this.chatService.sendMessage('message', this.msgInput);
            this.chatService.sendMessage('writting', false);
            this.msgInput = "";
        }
    }
    sendWrite() {
        console.log(this.msgInput);
        if (this.msgInput != "") {
            this.chatService.sendMessage('writting', true);
        }
        else {
            this.chatService.sendMessage('writting', false);
        }
    }
    login() {
        if (this.msgInput != "") {
            this.chatService.sendMessage('login', this.loginInput);
            this.isLogin = true;
            this.chatService
                .getMessage()
                .subscribe(msg => {
                this.msgs.push({ type: 2, msg: msg.msg, user: msg.user });
            });
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        providers: [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]],
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







const config = { url: 'http://localhost:3000', options: {} };
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["SocketIoModule"].forRoot(config)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ChatService = class ChatService {
    constructor(socket) {
        this.socket = socket;
    }
    sendMessage(topic, msg) {
        this.socket.emit(topic, msg);
    }
    getMessage() {
        return this.socket
            .fromEvent("message")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
    getWritting() {
        return this.socket
            .fromEvent("writting")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
};
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
], ChatService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/quantico/Desktop/meetupbackend/meetupangular/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map