import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigimonPesquisaPageRoutingModule } from './digimon-pesquisa-routing.module';

import { DigimonPesquisaPage } from './digimon-pesquisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigimonPesquisaPageRoutingModule
  ],
  declarations: [DigimonPesquisaPage]
})
export class DigimonPesquisaPageModule {}
