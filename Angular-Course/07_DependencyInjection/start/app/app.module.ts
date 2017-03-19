import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],

    declarations: [
        AppComponent,
        NavigationComponent
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
