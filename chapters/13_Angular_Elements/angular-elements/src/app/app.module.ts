import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WebComponentComponent } from './web-component/web-component.component';

@NgModule({
  declarations: [AppComponent, WebComponentComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [WebComponentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(WebComponentComponent, { injector });
    customElements.define('web-component', el);
  }
  ngDoBootstrap() {}
}
