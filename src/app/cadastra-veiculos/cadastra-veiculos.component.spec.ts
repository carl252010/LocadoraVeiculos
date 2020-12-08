import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraVeiculosComponent } from './cadastra-veiculos.component';

describe('CadastraVeiculosComponent', () => {
  let component: CadastraVeiculosComponent;
  let fixture: ComponentFixture<CadastraVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraVeiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
