import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],

    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
