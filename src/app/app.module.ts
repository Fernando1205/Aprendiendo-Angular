import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// COMPONENTS
import { VideoGameComponent } from './videogame/videogame.component';
import { ZapatosComponent } from './zapatos/zapatos.component';
import { MueblesComponent } from './muebles/muebles.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

// PIPES
import { CalculadoraPipe } from './pipes/calculadora.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VideoGameComponent,
    ZapatosComponent,
    MueblesComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
