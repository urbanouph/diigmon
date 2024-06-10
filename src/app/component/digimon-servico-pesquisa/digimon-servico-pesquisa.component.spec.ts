import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DigimonServicoPesquisaComponent } from './digimon-servico-pesquisa.component';

describe('DigimonServicoPesquisaComponent', () => {
  let component: DigimonServicoPesquisaComponent;
  let fixture: ComponentFixture<DigimonServicoPesquisaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DigimonServicoPesquisaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DigimonServicoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
