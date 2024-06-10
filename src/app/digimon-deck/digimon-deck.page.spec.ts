import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigimonDeckPage } from './digimon-deck.page';

describe('DigimonDeckPage', () => {
  let component: DigimonDeckPage;
  let fixture: ComponentFixture<DigimonDeckPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonDeckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
