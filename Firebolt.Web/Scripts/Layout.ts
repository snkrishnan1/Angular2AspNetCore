import { Component, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Http, Headers } from '@angular/http';

//import { ClientAPIService } from '../Service/ClientAPIService';
//import { LeftMenu } from './LeftMenu';
//import { ApplicationListComponent } from './ApplicationListComponent';
//import { UserProfile } from './UserProfile';
//import { Constants } from '../Configuration/Constants';
//import { SessionService } from '../Service/SessionService';

@Component({
    selector: 'my-app',
    templateUrl: './HTML/Layouts/Layout.html',
   // providers: [ClientAPIService, Constants],
    encapsulation: ViewEncapsulation.None
})
export class Layout {
    applications: any;
    selectedApplication: any;
    //@ViewChild(LeftMenu) leftMenu: LeftMenu;

    //constructor(private _SessionService: SessionService, private componentFactoryResolver: ComponentFactoryResolver) {
    //    console.log("In constructor of Layout - loggedInUser : " + this._SessionService.LoggedInUser);
    //    this.applications = this._SessionService.Applications;
    //}

    //getSelectedApplication(value) {
    //    console.log("After event emit in getSelectedApplication " + value);
    //    this.selectedApplication = value;
    //    this.leftMenu.GetReportGroupsList();
    //}

}