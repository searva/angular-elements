import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { FrameworkPollComponent } from './framework-poll/framework-poll.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    FrameworkPollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    FrameworkPollComponent
  ]
  //,  bootstrap: [FrameworkPollComponent] //Solo descomentar cuando se haga ng serve
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(FrameworkPollComponent, { injector: this.injector });
    customElements.define('framework-poll', el);
  }
}
