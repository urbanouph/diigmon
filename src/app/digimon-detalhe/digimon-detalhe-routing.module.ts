import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigimonDetalhePage } from './digimon-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: DigimonDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigimonDetalhePageRoutingModule {}
