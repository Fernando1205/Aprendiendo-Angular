import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoGameComponent } from './videogame/videogame.component';
import { ZapatosComponent } from './zapatos/zapatos.component';
import { MueblesComponent } from './muebles/muebles.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGameComponent,
    ZapatosComponent,
    MueblesComponent
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
