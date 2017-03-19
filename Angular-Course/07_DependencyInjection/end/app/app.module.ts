import { Configuration } from './app.configuration';
import { FoodDataService } from './shared/services/item.dataservice';
import { CalculatorService } from './shared/services/calculator.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const randomFactory = () => { return Math.random(); };

@NgModule({
    imports: [
        HttpModule,
        BrowserModule
    ],

    declarations: [
        AppComponent,
        NavigationComponent
    ],

    providers: [
        // CalculatorService,
        { provide: CalculatorService, useClass: CalculatorService },
        { provide: 'RandomWithFactory', useFactory: randomFactory },
        { provide: 'RandomWithValue', useValue: Math.random() },
        FoodDataService,
        Configuration
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
