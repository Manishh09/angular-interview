import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksComponent } from './hooks/hooks.component';
import { HookChildComponent } from './hooks/hook-child/hook-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductWidgetComponent } from './product-dashboard/product-widget/product-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    HookChildComponent,
    ProductDashboardComponent,
    ProductWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    //CommonModule,
    //ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
