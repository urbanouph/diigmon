import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigimonDeckCardPageRoutingModule } from './digimon-deck-card-routing.module';

import { DigimonDeckCardPage } from './digimon-deck-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigimonDeckCardPageRoutingModule
  ],
  declarations: [DigimonDeckCardPage]
})
export class DigimonDeckCardPageModule {}
