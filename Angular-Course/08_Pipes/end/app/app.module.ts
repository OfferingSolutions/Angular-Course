import { FilterPipe } from './pipes/filter.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],

    declarations: [
        AppComponent,
        NavigationComponent,
        UppercasePipe,
        FilterPipe
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
