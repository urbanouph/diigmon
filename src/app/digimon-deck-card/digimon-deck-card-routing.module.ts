import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigimonDeckCardPage } from './digimon-deck-card.page';

const routes: Routes = [
  {
    path: '',
    component: DigimonDeckCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigimonDeckCardPageRoutingModule {}
