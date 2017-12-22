import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { IsNumberValidator } from './validators/isNumber.validator';
import { IsInRangeValidator } from './validators/isInRange.validator';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    IsNumberValidator,
    IsInRangeValidator
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
