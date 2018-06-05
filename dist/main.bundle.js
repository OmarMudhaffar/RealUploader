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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* start navbar */ \n\n*{\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n} \n\n.navbar {\n    background: #4d4d52;\n    padding:10px;\n} \n\n.navbar-brand {\n    color: #20ddf1;\n    font-weight: bold;\n    font-family: 'Do Hyeon', sans-serif;\n\n} \n\n.navbar-brand:hover {\n    color: #20ddf1;   \n} \n\n.nav-item i {\n    color: #f5f1f1;\n    font-size: 17px;\n    font-weight: bold;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n} \n\n.listurl i:hover {\n    color: #f5f1f1;\n    -webkit-transform: translate(2px);\n            transform: translate(2px); \n    -webkit-transform: scale(1.1,1.1); \n            transform: scale(1.1,1.1);\n} \n\n.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {\n    color: #fff;\n} \n\n.listurl a i {\n    font-size: 20px;\n    display: inline-block;\n    margin-left: 10px;\n    color: #FFF;\n} \n\n/* end navbar */ \n\n/* start header */ \n\n.header {\n    background-image: url('back.fef14a00073ec83d7d35.jpg');\n    background-size: cover;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center\n} \n\n.header .overlow {\n    height: 589px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    background-color: #000;\n    opacity: 0.5;\n} \n\n.jumbotron {\n    text-align: center;\n    line-height: 2;\n    opacity: 0.93;\n    position: relative;\n    border-radius: 0;\n\n} \n\n.jumbotron .mybor:after {\n    border-width: 0 35px 35px 0px;\n    content: \"\";\n    border-style: solid;\n    border-color: #20ddf1 transparent;\n    display: block;\n    position: absolute;\n    bottom: 0;\n    right: 40px;\n} \n\n.jumbotron .mybor2:after{\n    border-width: 0 0px 35px 35px;\n    content: \"\";\n    border-style: solid;\n    border-color: #20ddf1 transparent;\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 40px;   \n} \n\n.custom {\n    text-align: center;\n    padding: 10px;\n    position: relative;\n    width: 300px;\n    display: inline-block;\n} \n\n.custom input {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    opacity: 0;\n} \n\n.uploadefile button {\n    background: #20ddf1;\n    border: 0;\n    border-radius: 3px;\n    color: #FFF;\n    font-weight: bold;\n    letter-spacing: 4px;\n    padding: 6px;\n} \n\n.form-control {\n    margin-bottom: 20px;\n} \n\n@media(max-width:576px){\n    .jumbotron .display-4 {\n        font-size: 35px !important;\n    }\n} \n\n.copy {\n    position: relative;\n} \n\n.copy i {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 15px;\n    background: #22d1e3;\n    color: #FFF;\n    border: 1px solid #ddd;\n    font-weight: bold;\n} \n\n/* end header */ \n\n.coped {\n    background: #4d4d52;\n    display: none;\n    width: 171px;\n    color: #DDD;\n    font-weight: bold;\n    text-align: center;\n    padding: 15px;\n    position: fixed;\n    top: 100px;\n    right: 0;\n} \n\ninput:focus {\noutline: 0px;\n} \n\n.sp {\nposition: fixed;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\nz-index: 3;\ntext-align: center;\ndisplay: -webkit-box;\ndisplay: -ms-flexbox;\ndisplay: flex;\n-webkit-box-pack: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n-webkit-box-align: center;\n    -ms-flex-align: center;\n        align-items: center;\nbackground: #4e4e4e;\n} \n\n.sp .setpos i:first-child {\ncolor: #20ddf1;\ndisplay: block;\nwidth: 100%;\nmargin-bottom: 10px;\nfont-size: 80px;\n} \n\n.sp .setpos i:last-child{\n    color: #20ddf1;\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n    font-size: 40px;    \n} \n\n.sp .setpos p {\nfont-size: 30px;\ncolor: #20ddf1;\nfont-family: 'Do Hyeon', sans-serif;\n\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" id=\"navbar\">\n    <div class=\"container\">\n\n    <a class=\"navbar-brand wow pulse\" data-wow-iteration=\"10000\"  href=\"#\">  REAL UPLOADRE <i class=\"fa fa-delete\" aria-hidden=\"true\"></i></a>\n\n  <div class=\"listurl\">\n\n    <a href=\"https://www.facebook.com/omarreaI\" target=\"blank\"><i class=\"fa fa-facebook face\" aria-hidden=\"true\"></i></a>\n\n    <a href=\"#\" target=\"blank\"><i class=\"fa fa-twitter twitter\" aria-hidden=\"true\"></i></a>\n  \n    <a href=\"https://www.youtube.com/OmarReal\" target=\"blank\"><i class=\"fa fa-youtube yout\" aria-hidden=\"true\"></i></a>\n    \n\n  </div>\n\n\n\n</div>\n    \n  </nav>\n\n  <div class=\"header\" id=\"header\" style=\"background-color: #ADD\">\n      <div id=\"overlow\" class=\"overlow\">\n\n      </div>\n\n<div class=\"container\">\n\n      <div class=\"jumbotron wow fadeIn\">\n\n        <div class=\"mybor\"></div>\n        <div class=\"mybor2\"></div>\n            <h1 class=\"display-4\">Upload Your File</h1>\n\n            <div class=\"custom\">\n                    <input type=\"file\" id=\"uplode\" #uplod (change)=\"onaplouad(uplod.files[0])\" >\n            <div class=\"uploadefile\" id=\"uploadefile\">\n            <button id=\"select\">SELECT FILE</button>\n            </div>\n\n            </div>\n            <hr class=\"my-4\">\n\n            <div class=\"copy\">\n              <input class=\"form-control form-control-lg outline\"  id=\"downloadUrl\" [value]=\"myurl\" type=\"text\" placeholder=\"Your file download link\">\n              <i (click)=\"copytext()\" class=\"fa fa-clone\" aria-hidden=\"true\"></i>\n            </div>\n\n            \n        </div>\n\n</div>\n          \n  </div>\n\n\n<div class=\"coped\" id=\"coped\">\n  <i class=\"fa fa-chevron-circle-right\" style=\"color: #fff;\" aria-hidden=\"true\"></i>\n  <span>File URL copied</span>\n</div>\n\n\n<div class=\"sp\" id=\"myload\">\n  <div class=\"setpos\">\n    <i class=\"fa fa-folder-open wow bounceInUp\" aria-hidden=\"true\"></i>\n    <p class=\"wow bounceInDown\">Real Uploader</p>\n    <i class=\"wow bounceInLeft fa fa-cog fa-spin fa-3x fa-fw\"></i>\n  </div>\n\n\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/*global console, alert*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(storeg, http) {
        this.storeg = storeg;
        this.http = http;
        this.title = 'app';
        this.myurl = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        var myheader = document.getElementById("header");
        var overlow = document.getElementById("overlow");
        var navbar = document.getElementById("navbar");
        var navh = navbar.offsetHeight;
        var winh = window.innerHeight;
        var finelhe = winh - navh;
        myheader.style.height = finelhe + "px";
        overlow.style.height = finelhe + "px";
    };
    AppComponent.prototype.onaplouad = function (file) {
        var _this = this;
        this.myurl = "";
        var selectButton = document.getElementById("select");
        var up = document.getElementById("uplode");
        up.style.display = "none";
        var cspan = document.createElement("span");
        var textnode = document.createTextNode("0%");
        var uploadefile = document.getElementById("uploadefile");
        cspan.classList.add("myspan", "wow", "pulse");
        cspan.appendChild(textnode);
        cspan.setAttribute("data-wow-iteration", "1000000");
        cspan.setAttribute("id", "myspan");
        cspan.style.height = "100px";
        cspan.style.width = "100px";
        cspan.style.border = "2px solid #20ddf1";
        cspan.style.borderRadius = "50%";
        cspan.style.display = "inline-block";
        cspan.style.lineHeight = "100px";
        selectButton.style.display = "none";
        uploadefile.appendChild(cspan);
        var myprog = document.getElementById("myspan");
        var downloadUrl = document.getElementById("downloadUrl");
        var fireref = this.storeg.ref("files/" + file.name);
        var put = fireref.put(file);
        this.mn = put.percentageChanges();
        put.then(function (done) {
            myprog.textContent = "Seucsses";
            myprog.style.border = "2px solid green";
            _this.myurl = done.downloadURL;
            var myinter = setInterval(function () {
                myprog.remove();
                selectButton.style.display = "inline-block";
                up.style.display = "inline-block";
                clearInterval(myinter);
            }, 2000);
        });
        this.mn.subscribe(function (data) {
            var pres = Math.floor(data);
            myprog.textContent = pres.toString() + "%";
        });
    };
    AppComponent.prototype.copytext = function () {
        var popup = document.getElementById("coped");
        popup.style.display = "block";
        this.myurl = "";
        var copyText = document.getElementById("downloadUrl");
        /* Select the text field */
        copyText.select();
        /* Copy the text inside the text field */
        document.execCommand("Copy");
        /* Alert the copied text */
        var myinter = setInterval(function () {
            popup.style.display = "none";
            clearInterval(myinter);
        }, 3000);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var firebase = {
    apiKey: "AIzaSyC69DG2NObfTB4bIX4fWvnWBH-I3FXXWNs",
    authDomain: "mywebsite-6fe27.firebaseapp.com",
    databaseURL: "https://mywebsite-6fe27.firebaseio.com",
    projectId: "mywebsite-6fe27",
    storageBucket: "mywebsite-6fe27.appspot.com",
    messagingSenderId: "542515045024"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebase)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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