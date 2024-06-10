import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigimonDetalhePageRoutingModule } from './digimon-detalhe-routing.module';

import { DigimonDetalhePage } from './digimon-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigimonDetalhePageRoutingModule
  ],
  declarations: [DigimonDetalhePage]
})
export class DigimonDetalhePageModule {}
