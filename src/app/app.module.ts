import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LeftGroupComponent} from './configuration/leftgroup/leftgroup.component';
import { GroupDetailsComponent } from "./configuration/groupdetails/groupdetails.component";
import { ProductListComponent } from "./configuration/productlist/productlist.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutHelpComponent } from './about-help/about-help.component';
import { DocumentsCommunicationComponent } from './documents-communication/documents-communication.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { SlpviewComponent } from './slpview/slpview.component';
import { DocumentsBomComponent } from './documents-bom/documents-bom.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LeftGroupComponent,
    GroupDetailsComponent,
    ProductListComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LandingComponent,
    ConfigurationComponent,
    AboutHelpComponent,
    DocumentsCommunicationComponent,
    AboutViewComponent,
    SlpviewComponent,
    DocumentsBomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
