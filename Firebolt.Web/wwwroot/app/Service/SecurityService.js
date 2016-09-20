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
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
const Observable_1 = require('rxjs/Observable');
const Headers_1 = require('./Headers');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
let SecurityService = class SecurityService {
    constructor(http) {
        console.log("Constructor of SecurityService");
        this.SECURITYSERVICE_BASEURL = "http://localhost:54199/api/";
        this.SECURITYSERVICE_LOGINVALIDATE = this.SECURITYSERVICE_BASEURL + "login/validate";
        this._http = http;
        this.loggedIn = false;
    }
    Login(UserName, Password) {
        console.log("Inside Login method of SecurityService ");
        return this._http.post(this.SECURITYSERVICE_LOGINVALIDATE, JSON.stringify({ UserName: UserName, Password: Password }), { headers: Headers_1.ContentHeaders })
            .map(res => res.json())
            .map((res) => {
            if (res.success) {
                console.log("login success for UserId: " + UserName);
                console.log(res);
                // localStorage.setItem('auth_token', res.auth_token);
                this.loggedIn = true;
            }
            else
                console.log("login failed for UserId: " + UserName);
            return res;
        })
            .catch(this.HandleError);
    }
    Logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }
    isLoggedIn() {
        return this.loggedIn;
    }
    HandleError(error) {
        console.log("Inside HandleError of SecurityService");
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    }
};
SecurityService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], SecurityService);
exports.SecurityService = SecurityService;
//# sourceMappingURL=SecurityService.js.map