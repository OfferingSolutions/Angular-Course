import { IsNumberValidator } from './validators/isNumber.validator';
import { IsInRangeValidator } from './validators/isInRange.validator';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],

    declarations: [
        AppComponent,
        NavigationComponent,
        IsNumberValidator,
        IsInRangeValidator
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
