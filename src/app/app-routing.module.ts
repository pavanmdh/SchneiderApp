import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component'
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutHelpComponent } from './about-help/about-help.component';
import { DocumentsCommunicationComponent } from './documents-communication/documents-communication.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { SlpviewComponent } from './slpview/slpview.component';
import { DocumentsBomComponent } from './documents-bom/documents-bom.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'app', component: LandingComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'page-not-found', component: PageNotFoundComponent },
      { path: 'about-help', component: AboutHelpComponent },
      { path: 'documents-communication', component: DocumentsCommunicationComponent },
      { path: 'about-view', component: AboutViewComponent },
      { path: 'slpview', component: SlpviewComponent },
      { path: 'documents-bom', component: DocumentsBomComponent}
    ]
  },
  { path: '**', redirectTo: 'app/page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
