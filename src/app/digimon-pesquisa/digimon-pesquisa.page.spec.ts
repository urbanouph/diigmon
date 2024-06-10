import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigimonPesquisaPage } from './digimon-pesquisa.page';

describe('DigimonPesquisaPage', () => {
  let component: DigimonPesquisaPage;
  let fixture: ComponentFixture<DigimonPesquisaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonPesquisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
