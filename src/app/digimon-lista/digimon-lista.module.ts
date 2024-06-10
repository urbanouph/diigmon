import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigimonListaPageRoutingModule } from './digimon-lista-routing.module';

import { DigimonListaPage } from './digimon-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigimonListaPageRoutingModule
  ],
  declarations: [DigimonListaPage]
})
export class DigimonListaPageModule {}
