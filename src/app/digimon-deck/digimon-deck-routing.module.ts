import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigimonDeckPage } from './digimon-deck.page';

const routes: Routes = [
  {
    path: '',
    component: DigimonDeckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigimonDeckPageRoutingModule {}
