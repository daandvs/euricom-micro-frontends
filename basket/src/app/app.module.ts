import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    BasketComponent
  ],
  providers: [],
  bootstrap: [BasketComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const el = createCustomElement(BasketComponent, {
      injector: this.injector
    });

    customElements.define('basket-app', el);
  }
}
