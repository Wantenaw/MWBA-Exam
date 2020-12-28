import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material-ui/material-ui.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WantenawHeaderComponent } from './wantenaw-header/wantenaw-header.component';
import { WantenawTab1Component } from './wantenaw-tab1/wantenaw-tab1.component';
import { WantenawTab2Component } from './wantenaw-tab2/wantenaw-tab2.component';

@NgModule({
  declarations: [
    AppComponent,
    WantenawHeaderComponent,
    WantenawTab1Component,
    WantenawTab2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
