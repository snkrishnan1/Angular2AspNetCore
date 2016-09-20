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
let ClientAPIService = class ClientAPIService {
    constructor(http) {
        this.GetApplications = (userName) => {
            console.log("Inside method GetApplications");
            console.log("API URL: " + this.CLIENTAPISERVICE_APPLICATIONS + userName);
            return this._http.get(this.CLIENTAPISERVICE_APPLICATIONS + userName, { headers: Headers_1.ContentHeaders })
                .map(Response => Response.json())
                .catch(this.HandleError);
        };
        this.GetReportGroupsList = (userName, application) => {
            console.log("Inside method GetReportGroupsList");
            console.log("API URL: " + this.CLIENTAPISERVICE_GETREPORTGROUPSLIST + userName + "/" + application);
            return this._http.get(this.CLIENTAPISERVICE_GETREPORTGROUPSLIST + userName + "/" + application, { headers: Headers_1.ContentHeaders })
                .map(Response => Response.json())
                .catch(this.HandleError);
        };
        this.GetReportListByGroup = (userName, application, reportgroup) => {
            console.log("Inside method GetReportListByGroup");
            console.log("API URL: " + this.CLIENTAPISERVICE_GETREPORTLIST + userName + "/" + application + "/" + reportgroup);
            return this._http.get(this.CLIENTAPISERVICE_GETREPORTLIST + userName + "/" + application + "/" + reportgroup, { headers: Headers_1.ContentHeaders })
                .map(Response => Response.json())
                .catch(this.HandleError);
        };
        console.log("Constructor of ClientAPIService");
        this.CLIENTAPISERVICE_BASEURL = "http://localhost:56629/api/";
        this.CLIENTAPISERVICE_APPLICATIONS = this.CLIENTAPISERVICE_BASEURL + "BlueSkyReports/applications/";
        this.CLIENTAPISERVICE_GETREPORTGROUPSLIST = this.CLIENTAPISERVICE_BASEURL + "BlueSkyReports/groups/";
        this.CLIENTAPISERVICE_GETREPORTLIST = this.CLIENTAPISERVICE_BASEURL + "BlueSkyReports/reportsbygroup/";
        this._http = http;
    }
    HandleError(error) {
        console.log("Inside HandleError of ClientAPIService");
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    }
};
ClientAPIService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ClientAPIService);
exports.ClientAPIService = ClientAPIService;
//# sourceMappingURL=ClientAPIService.js.map