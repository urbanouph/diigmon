import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pesquisa-digimon',
    loadChildren: () => import('./pesquisa-digimon/pesquisa-digimon.module').then( m => m.PesquisaDigimonPageModule)
  },
  {
    path: 'digimon-pesquisa',
    loadChildren: () => import('./digimon-pesquisa/digimon-pesquisa.module').then( m => m.DigimonPesquisaPageModule)
  },
  {
    path: 'digimon-lista',
    loadChildren: () => import('./digimon-lista/digimon-lista.module').then( m => m.DigimonListaPageModule)
  },
  {
    path: 'digimon-detalhe',
    loadChildren: () => import('./digimon-detalhe/digimon-detalhe.module').then( m => m.DigimonDetalhePageModule)
  },
  {
    path: 'digimon-deck',
    loadChildren: () => import('./digimon-deck/digimon-deck.module').then( m => m.DigimonDeckPageModule)
  },
  {
    path: 'digimon-deck-card',
    loadChildren: () => import('./digimon-deck-card/digimon-deck-card.module').then( m => m.DigimonDeckCardPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
