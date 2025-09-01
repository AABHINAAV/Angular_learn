import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectiveDirective } from './attributeDirective/attribute-directive.directive';
import { HostlistenerDirectiveDirective } from './attributeDirective/hostlistener-directive.directive';
import { ValueDirectiveDirective } from './attributeDirective/value-directive.directive';
import { FormsModule } from '@angular/forms';
import { CustompipePipe } from './pipes/custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectiveDirective,
    HostlistenerDirectiveDirective,
    ValueDirectiveDirective,
    CustompipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
