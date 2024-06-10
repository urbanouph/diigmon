import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigimonListaPage } from './digimon-lista.page';

const routes: Routes = [
  {
    path: '',
    component: DigimonListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigimonListaPageRoutingModule {}
