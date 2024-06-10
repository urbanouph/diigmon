import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisaDigimonPage } from './pesquisa-digimon.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisaDigimonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisaDigimonPageRoutingModule {}
