import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigimonDetalhePage } from './digimon-detalhe.page';

describe('DigimonDetalhePage', () => {
  let component: DigimonDetalhePage;
  let fixture: ComponentFixture<DigimonDetalhePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
