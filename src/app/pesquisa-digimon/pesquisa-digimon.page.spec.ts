import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisaDigimonPage } from './pesquisa-digimon.page';

describe('PesquisaDigimonPage', () => {
  let component: PesquisaDigimonPage;
  let fixture: ComponentFixture<PesquisaDigimonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaDigimonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
