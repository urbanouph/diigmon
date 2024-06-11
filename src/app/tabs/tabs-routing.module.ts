import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'digimon-pesquisa',
        loadChildren: () => import('../digimon-pesquisa/digimon-pesquisa.module').then( m => m.DigimonPesquisaPageModule)
      },
      {
        path: 'digimon-lista',
        loadChildren: () => import('../digimon-lista/digimon-lista.module').then( m => m.DigimonListaPageModule)
      },
      {
        path: 'digimon-detalhe',
        loadChildren: () => import('../digimon-detalhe/digimon-detalhe.module').then( m => m.DigimonDetalhePageModule)
      },
      {
        path: 'digimon-deck',
        loadChildren: () => import('../digimon-deck/digimon-deck.module').then( m => m.DigimonDeckPageModule)
      },
      {
        path: 'digimon-deck-card',
        loadChildren: () => import('../digimon-deck-card/digimon-deck-card.module').then( m => m.DigimonDeckCardPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
