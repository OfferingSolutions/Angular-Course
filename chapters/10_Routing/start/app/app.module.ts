import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
