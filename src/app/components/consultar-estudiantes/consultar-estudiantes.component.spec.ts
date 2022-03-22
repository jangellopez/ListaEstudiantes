import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarestudiantesComponent } from './consultar-estudiantes.component';

describe('ConsultarestudiantesComponent', () => {
  let component: ConsultarestudiantesComponent;
  let fixture: ComponentFixture<ConsultarestudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarestudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
