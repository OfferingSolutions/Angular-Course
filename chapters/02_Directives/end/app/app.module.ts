import { HighlightDirective } from './directives/highlight.directive';
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
        NavigationComponent,
        HighlightDirective
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
