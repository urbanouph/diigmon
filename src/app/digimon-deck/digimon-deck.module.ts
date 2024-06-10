import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigimonDeckPageRoutingModule } from './digimon-deck-routing.module';

import { DigimonDeckPage } from './digimon-deck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigimonDeckPageRoutingModule
  ],
  declarations: [DigimonDeckPage]
})
export class DigimonDeckPageModule {}
