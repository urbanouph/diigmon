import { TestBed } from '@angular/core/testing';

import { DigimonServicoPesquisaService } from './digimon-servico-pesquisa.service';

describe('DigimonServicoPesquisaService', () => {
  let service: DigimonServicoPesquisaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigimonServicoPesquisaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
