webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__games_games_component__ = __webpack_require__("./src/app/games/games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__play_play_component__ = __webpack_require__("./src/app/play/play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rules_rules_component__ = __webpack_require__("./src/app/rules/rules.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/rules', pathMatch: 'full' },
    { path: 'games', component: __WEBPACK_IMPORTED_MODULE_2__games_games_component__["a" /* GamesComponent */] },
    { path: 'games/:id', component: __WEBPACK_IMPORTED_MODULE_3__play_play_component__["a" /* PlayComponent */] },
    { path: 'rules', component: __WEBPACK_IMPORTED_MODULE_4__rules_rules_component__["a" /* RulesComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { enableTracing: false })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_root_component__ = __webpack_require__("./src/app/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__games_games_component__ = __webpack_require__("./src/app/games/games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_game_service__ = __webpack_require__("./src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__random_number_random_number_component__ = __webpack_require__("./src/app/random-number/random-number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__completed_numbers_completed_numbers_component__ = __webpack_require__("./src/app/completed-numbers/completed-numbers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__play_play_component__ = __webpack_require__("./src/app/play/play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__game_game_component__ = __webpack_require__("./src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__filters_sort_by_time_pipe__ = __webpack_require__("./src/app/filters/sort-by-time.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rules_rules_component__ = __webpack_require__("./src/app/rules/rules.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__root_root_component__["a" /* RootComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__games_games_component__["a" /* GamesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__random_number_random_number_component__["a" /* RandomNumberComponent */],
                __WEBPACK_IMPORTED_MODULE_10__completed_numbers_completed_numbers_component__["a" /* CompletedNumbersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__play_play_component__["a" /* PlayComponent */],
                __WEBPACK_IMPORTED_MODULE_12__game_game_component__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_13__filters_sort_by_time_pipe__["a" /* SortByTimePipe */],
                __WEBPACK_IMPORTED_MODULE_14__rules_rules_component__["a" /* RulesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_game_service__["a" /* GameService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__root_root_component__["a" /* RootComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/completed-numbers/completed-numbers.component.css":
/***/ (function(module, exports) {

module.exports = ".ncompleted {\r\n    background-color: lightgray;\r\n}\r\n.ncurrent {\r\n    background-color: green;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/completed-numbers/completed-numbers.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\">\r\n  <tr *ngFor=\"let row of numbers\">\r\n    <td *ngFor=\"let number of row\" [class.ncompleted]=\"isCompleted(number)\" [class.ncurrent]=\"number==game.lastNumber\">\r\n      {{number}}\r\n    </td>\r\n  </tr>\r\n</table>"

/***/ }),

/***/ "./src/app/completed-numbers/completed-numbers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedNumbersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("./src/app/services/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompletedNumbersComponent = /** @class */ (function () {
    function CompletedNumbersComponent(gameService) {
        this.gameService = gameService;
        var numbers = gameService.getGameNumbers();
        this.numbers = [
            numbers.splice(0, 10),
            numbers.splice(0, 10),
            numbers.splice(0, 10),
            numbers.splice(0, 10),
            numbers.splice(0, 10),
            numbers.splice(0, 10),
            numbers.splice(0, 10),
            numbers.splice(0, 10),
            numbers.splice(0, 10)
        ];
    }
    CompletedNumbersComponent.prototype.ngOnInit = function () {
    };
    CompletedNumbersComponent.prototype.isCompleted = function (n) {
        return this.game.completedNumbers.indexOf(n) != -1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CompletedNumbersComponent.prototype, "game", void 0);
    CompletedNumbersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-completed-numbers]',
            template: __webpack_require__("./src/app/completed-numbers/completed-numbers.component.html"),
            styles: [__webpack_require__("./src/app/completed-numbers/completed-numbers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]])
    ], CompletedNumbersComponent);
    return CompletedNumbersComponent;
}());



/***/ }),

/***/ "./src/app/filters/sort-by-time.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByTimePipe = /** @class */ (function () {
    function SortByTimePipe() {
    }
    SortByTimePipe.prototype.transform = function (values, key) {
        return values.sort(function (a, b) { return b[key] - a[key]; });
    };
    SortByTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sortByTime'
        })
    ], SortByTimePipe);
    return SortByTimePipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".cright {\r\n    font-weight: 500;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"cright\">\r\n        © All rights reserved | @NKurapati, 2018\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-footer]',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/***/ (function(module, exports) {

module.exports = ".resutls {\r\n    margin-top: 38px;\r\n}"

/***/ }),

/***/ "./src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\" id=\"heading{{game.id}}\" data-toggle=\"collapse\" attr.data-target=\"#collapse{{game.id}}\" aria-expanded=\"true\" attr.aria-controls=\"collapse{{game.id}}\">\r\n    <span>{{game.id}}</span>\r\n    <button class=\"btn btn btn-primary float-right\" *ngIf=\"!game.completed && !isPlay\" (click)=\"startGame($event)\">Resume</button>\r\n    <button class=\"btn btn btn-primary float-right\" *ngIf=\"!game.completed && isPlay\" (click)=\"onCompleteGame()\">Completed</button>\r\n  </div>\r\n\r\n  <div id=\"collapse{{game.id}}\" class=\"collapse\" [class.show]=\"isPlay\" attr.aria-labelledby=\"heading{{game.id}}\" data-parent=\"#accordion\">\r\n    <div class=\"card-body\">\r\n      <section class=\"row game\">\r\n          <div app-completed-numbers [game]=\"game\" class=\"col-md-6 col-lg-6\"></div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n            <div app-random-number [lastNumber]=\"game.lastNumber\" class=\"col-md-12 col-sm-4 col-xs-4\" (click)=\"onUpdateNumber()\"></div>\r\n            <div class=\"col-md-12 col-sm-8 col-xs-8\">\r\n              <div class=\"card resutls\">\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">Winners:</h5>\r\n                  <div>First Five: {{game.firstFive?(game.firstFive.numbers + \" - \" + game.firstFive.name):\"\"}} </div>\r\n                  <div>1st Row: {{game.firstRow?(game.firstRow.numbers + \" - \" + game.firstRow.name) : \"\"}}</div>\r\n                  <div>2nd Row: {{game.secondRow?(game.secondRow.numbers + \" - \" + game.secondRow.name):\"\"}} </div>\r\n                  <div>3rd Row: {{game.thirdRow?(game.thirdRow.numbers + \" - \" + game.thirdRow.name):\"\"}} </div>\r\n                  <div>Full House: {{game.fullHouse?(game.fullHouse.numbers + \" - \" + game.fullHouse.name):\"\"}} </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card col text-center\" *ngIf=\"isPlay\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">Last 5 numbers:</h5>\r\n              {{game.completedNumbers.slice(-5).reverse().join(', ')}}\r\n            </div>\r\n          </div>\r\n        </section>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = /** @class */ (function () {
    function GameComponent(router) {
        this.router = router;
        this.updateNumber = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.completeGame = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent.prototype.startGame = function (event) {
        event.stopPropagation();
        this.router.navigate(['/games', this.game.id]);
    };
    GameComponent.prototype.onUpdateNumber = function () {
        this.updateNumber.emit();
    };
    GameComponent.prototype.onCompleteGame = function () {
        this.completeGame.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], GameComponent.prototype, "game", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], GameComponent.prototype, "isPlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], GameComponent.prototype, "updateNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], GameComponent.prototype, "completeGame", void 0);
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-game]',
            template: __webpack_require__("./src/app/game/game.component.html"),
            styles: [__webpack_require__("./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/games/games.component.css":
/***/ (function(module, exports) {

module.exports = ".game {\r\n    margin: 10px 0px;\r\n}"

/***/ }),

/***/ "./src/app/games/games.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"accordion\" class=\"games\" *ngIf=\"games.length\">\r\n    <div app-game class=\"game\" *ngFor=\"let game of (games | sortByTime: 'updatedTime')\" [game]=\"game\"></div>\r\n</section>\r\n<div *ngIf=\"!games.length\" class=\"text-center\">\r\n    Not played yet! Click on <b>New Game</b> to Play.\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("./src/app/services/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GamesComponent = /** @class */ (function () {
    function GamesComponent(gameService) {
        this.gameService = gameService;
    }
    GamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getGames().subscribe(function (games) { return _this.games = games; });
    };
    GamesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-games]',
            template: __webpack_require__("./src/app/games/games.component.html"),
            styles: [__webpack_require__("./src/app/games/games.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    font-weight: bold;\r\n    color: #007bff;\r\n    font-size: 1.9rem;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-light navbar-expand-lg navbar-expand-md navbar-expand-sm\">\r\n    <a class=\"navbar-brand logo\" href=\"/\">Tambola</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" \r\n        data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" \r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <div class=\"d-flex w-100\">\r\n            <div class=\"d-none d-md-block mr-auto p-2\"></div>\r\n            <ul class=\"navbar-nav p-2\">\r\n                <li class=\"nav-item\" routerLink=\"/rules\" routerLinkActive=\"active\">\r\n                    <a class=\"nav-link\" href=\"/rules\">Rules</a>\r\n                </li>\r\n                <li class=\"nav-item\" routerLink=\"/games\" routerLinkActive=\"active\">\r\n                    <a class=\"nav-link\" href=\"/games\">Games</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"createNewGame()\">New Game</button>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_service__ = __webpack_require__("./src/app/services/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(gameService, router) {
        this.gameService = gameService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.createNewGame = function () {
        var newGame = this.gameService.createGame();
        this.router.navigate(['/games', newGame.id]);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-header]',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-home]',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/play/play.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/play/play.component.html":
/***/ (function(module, exports) {

module.exports = "<div app-game [game]=\"game\" isPlay=\"true\" (updateNumber)=\"updateNumber()\" (completeGame)=\"completeGame()\"></div>"

/***/ }),

/***/ "./src/app/play/play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("./src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayComponent = /** @class */ (function () {
    function PlayComponent(gameService, route, router) {
        this.gameService = gameService;
        this.route = route;
        this.router = router;
    }
    PlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.game = _this.gameService.getGame(params['id']);
        });
    };
    PlayComponent.prototype.updateNumber = function () {
        var rindex = Math.floor(Math.random() * this.game.remainingNumbers.length);
        var lastNumber = this.game.remainingNumbers.splice(rindex, 1)[0];
        this.game.completedNumbers.push(lastNumber);
        this.game.lastNumber = lastNumber;
        this.game.updatedTime = Date.now();
        this.gameService.setGames(null);
    };
    PlayComponent.prototype.completeGame = function () {
        this.game.completed = true;
        this.gameService.setGames(null);
        this.router.navigate(['/games']);
    };
    PlayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-play]',
            template: __webpack_require__("./src/app/play/play.component.html"),
            styles: [__webpack_require__("./src/app/play/play.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PlayComponent);
    return PlayComponent;
}());



/***/ }),

/***/ "./src/app/random-number/random-number.component.css":
/***/ (function(module, exports) {

module.exports = ".livenumber {\r\n    font-weight: bold;\r\n    font-size: 110px;\r\n    color: green;\r\n}"

/***/ }),

/***/ "./src/app/random-number/random-number.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body text-center align-middle\">\r\n    <div class=\"livenumber\">{{lastNumber}}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/random-number/random-number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("./src/app/services/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RandomNumberComponent = /** @class */ (function () {
    function RandomNumberComponent(gameService) {
        this.gameService = gameService;
    }
    RandomNumberComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], RandomNumberComponent.prototype, "lastNumber", void 0);
    RandomNumberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-random-number]',
            template: __webpack_require__("./src/app/random-number/random-number.component.html"),
            styles: [__webpack_require__("./src/app/random-number/random-number.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]])
    ], RandomNumberComponent);
    return RandomNumberComponent;
}());



/***/ }),

/***/ "./src/app/root/root.component.css":
/***/ (function(module, exports) {

module.exports = "header {\r\n    height: 72px;\r\n}\r\n\r\nfooter {\r\n    width: 100%;\r\n    height: 50px;\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: #f8f9fa!important;\r\n    padding: 13px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "<header app-header></header>\r\n<main>\r\n    <router-outlet></router-outlet>\r\n</main>\r\n<footer app-footer class=\"text-center align-middle\"></footer>"

/***/ }),

/***/ "./src/app/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    RootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-root]',
            template: __webpack_require__("./src/app/root/root.component.html"),
            styles: [__webpack_require__("./src/app/root/root.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/rules/rules.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rules/rules.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  rules works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/rules/rules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RulesComponent = /** @class */ (function () {
    function RulesComponent() {
    }
    RulesComponent.prototype.ngOnInit = function () {
    };
    RulesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rules',
            template: __webpack_require__("./src/app/rules/rules.component.html"),
            styles: [__webpack_require__("./src/app/rules/rules.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RulesComponent);
    return RulesComponent;
}());



/***/ }),

/***/ "./src/app/services/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameService = /** @class */ (function () {
    function GameService() {
        this.games = JSON.parse(localStorage.getItem('games')) || [];
    }
    GameService.prototype.storeGames = function () {
        localStorage.setItem('games', JSON.stringify(this.games));
    };
    GameService.prototype.getGames = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.games);
    };
    GameService.prototype.setGames = function (data) {
        if (data) {
            this.games = data;
        }
        this.storeGames();
    };
    GameService.prototype.getGameNumbers = function () {
        return Array.from(Array(91).keys()).slice(1);
    };
    GameService.prototype.createGame = function () {
        var newGame = {
            id: "" + Date.now(),
            lastNumber: 0,
            remainingNumbers: this.getGameNumbers(),
            completedNumbers: [],
            firstFive: { numbers: "", name: "" },
            firstRow: { numbers: "", name: "" },
            secondRow: { numbers: "", name: "" },
            thirdRow: { numbers: "", name: "" },
            fullHouse: { numbers: "", name: "" },
            completed: false,
            updatedTime: Date.now()
        };
        this.games.push(newGame);
        this.storeGames();
        return newGame;
    };
    GameService.prototype.getGame = function (id) {
        return this.games.find(function (game) { return game.id == id; });
    };
    GameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map