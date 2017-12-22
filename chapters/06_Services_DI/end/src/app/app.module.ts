import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { Configuration } from './app.configuration';
import { CoreModule } from './core/core.module';
import { CalculatorService } from './core/calculator/calculator.service';

const randomFactory = () => {
  return Math.random();
};

@NgModule({
  declarations: [AppComponent, NavigationComponent, ContentComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    { provide: CalculatorService, useClass: CalculatorService },
    { provide: 'RandomWithFactory', useFactory: randomFactory },
    { provide: 'RandomWithValue', useValue: Math.random() },
    Configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
