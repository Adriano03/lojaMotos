import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMotoComponent } from './cadastro-moto.component';

describe('CadastroMotoComponent', () => {
  let component: CadastroMotoComponent;
  let fixture: ComponentFixture<CadastroMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
