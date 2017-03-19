import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
    imports: [
        BrowserModule
    ],

    declarations: [
        AppComponent,
        NavigationComponent,
        ParentComponent,
        ChildComponent
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
