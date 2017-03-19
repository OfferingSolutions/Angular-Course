import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        HttpModule,
        BrowserModule
    ],

    declarations: [
        AppComponent,
        NavigationComponent
    ],

    providers: [ ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
