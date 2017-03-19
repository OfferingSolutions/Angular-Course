import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        // Modules here
        BrowserModule
    ],
    declarations: [
        // Components, Pipes, Directives here....
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
