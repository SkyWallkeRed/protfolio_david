import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// PRIME-NG
import { AccordionModule } from 'primeng/accordion';     // accordion and accordion tab
import { MenuItem } from 'primeng/api';                 // api
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { NavComponent } from './nav/nav.component';
import { GalleriaModule } from 'primeng/galleria';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { ConnectComponent } from './connect/connect.component';
import { InfoComponent } from './info/info.component';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    P1Component,
    P2Component,
    P3Component,
    ConnectComponent,
    InfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    GalleriaModule,
    CardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
