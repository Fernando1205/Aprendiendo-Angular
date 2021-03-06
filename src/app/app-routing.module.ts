import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ZapatosComponent } from './zapatos/zapatos.component';
import { VideoGameComponent } from './videogame/videogame.component';
import { MueblesComponent } from './muebles/muebles.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'zapatos', component: ZapatosComponent},
  { path: 'videogame', component: VideoGameComponent},
  { path: 'muebles', component: MueblesComponent},
  { path: 'muebles/:color', component: MueblesComponent},
  { path: 'muebles/:color/:follows', component: MueblesComponent},
  { path: 'externo', component: ExternoComponent},
  { path: 'contacto', component: ContactComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
