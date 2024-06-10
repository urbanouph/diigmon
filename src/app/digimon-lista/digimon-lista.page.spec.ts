import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigimonListaPage } from './digimon-lista.page';

describe('DigimonListaPage', () => {
  let component: DigimonListaPage;
  let fixture: ComponentFixture<DigimonListaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
