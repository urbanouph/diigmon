import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigimonPesquisaPage } from './digimon-pesquisa.page';

const routes: Routes = [
  {
    path: '',
    component: DigimonPesquisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigimonPesquisaPageRoutingModule {}
