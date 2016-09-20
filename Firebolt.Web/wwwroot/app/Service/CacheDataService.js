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
//import { HTTP_PROVIDERS, Http, Headers, Response, JSONP_PROVIDERS, Jsonp } from '@angular/http';
const http_1 = require('@angular/http');
const Observable_1 = require('rxjs/Observable');
const Headers_1 = require('./Headers');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
let CacheDataService = class CacheDataService {
    constructor(http) {
        this.GetExtractorQueuesByID = (queueID) => {
            console.log("Inside method GetExtractorQueuesByID");
            console.log("API URL: " + this.BLUESKYDATACACHEAPI_GETEXTRACTORQUEUEBYID + queueID);
            return this._http.get(this.BLUESKYDATACACHEAPI_GETEXTRACTORQUEUEBYID + queueID, { headers: Headers_1.ContentHeaders })
                .map(Response => Response.json())
                .catch(this.HandleError);
        };
        this.GetExtractorByID = (extractorId) => {
            console.log("Inside method GetExtractorQueuesByID");
            console.log("API URL: " + this.BLUESKYDATACACHEAPI_GETEXTRACTORBYID + extractorId);
            return this._http.get(this.BLUESKYDATACACHEAPI_GETEXTRACTORBYID + extractorId, { headers: Headers_1.ContentHeaders })
                .map(Response => Response.json())
                .catch(this.HandleError);
        };
        console.log("Constructor of CacheDataService");
        this.BLUESKYDATACACHEAPI_BASEURL = "http://localhost:23647/api/"; //ExtractorQueue/ExtractorQueueId/1502
        this.BLUESKYDATACACHEAPI_GETEXTRACTORQUEUESLATEST = this.BLUESKYDATACACHEAPI_BASEURL + "extractorqueue/getextractorqueueslatest/";
        this.BLUESKYDATACACHEAPI_GETEXTRACTORQUEUEBYID = this.BLUESKYDATACACHEAPI_BASEURL + "extractorqueue/ExtractorQueueId/";
        this.BLUESKYDATACACHEAPI_GETEXTRACTORBYID = this.BLUESKYDATACACHEAPI_BASEURL + "Extractor/ExtractorID/";
        this._http = http;
    }
    HandleError(error) {
        console.log("Inside HandleError of CacheDataService");
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    }
};
CacheDataService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], CacheDataService);
exports.CacheDataService = CacheDataService;
//# sourceMappingURL=CacheDataService.js.map