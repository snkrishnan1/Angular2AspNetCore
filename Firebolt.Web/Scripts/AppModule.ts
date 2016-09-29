import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './AppComponent';
import { Layout } from './Layout';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, Layout],
    bootstrap: [Layout]
})

export class AppModule { }