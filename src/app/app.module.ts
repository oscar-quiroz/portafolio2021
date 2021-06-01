import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { GrupoHabsComponent } from './grupo-habs/grupo-habs.component';
import { Habilidades2Component } from './habilidades2/habilidades2.component';
import { ListaHabsComponent } from './lista-habs/lista-habs.component';
import { ContactComponent } from './contact/contact.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HabilidadesComponent,
    GrupoHabsComponent,
    Habilidades2Component,
    ListaHabsComponent,
    ContactComponent,
    SocialButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
