import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisaDigimonPageRoutingModule } from './pesquisa-digimon-routing.module';

import { PesquisaDigimonPage } from './pesquisa-digimon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisaDigimonPageRoutingModule
  ],
  declarations: [PesquisaDigimonPage]
})
export class PesquisaDigimonPageModule {}
