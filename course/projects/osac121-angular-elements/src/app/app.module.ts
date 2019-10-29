import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';

@NgModule({
  declarations: [AppComponent, WebComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [WebComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(WebComponent, {
      injector: this.injector,
    });
    customElements.define('web-component', el);
  }
}
