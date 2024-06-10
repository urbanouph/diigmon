import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigimonDeckCardPage } from './digimon-deck-card.page';

describe('DigimonDeckCardPage', () => {
  let component: DigimonDeckCardPage;
  let fixture: ComponentFixture<DigimonDeckCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonDeckCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
