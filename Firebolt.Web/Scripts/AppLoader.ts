import { Component } from '@angular/core';
//import { ROUTER_DIRECTIVES } from '@angular/router';
//import { Login } from './Login/login';

@Component({
    selector: 'my-app',
    template: `
                <router-outlet></router-outlet>
            `
   // directives: [Login]
})

export class AppLoader {
}