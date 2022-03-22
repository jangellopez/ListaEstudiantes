import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarestudiantesComponent } from './registrar-estudiantes.component';

describe('RegistrarestudiantesComponent', () => {
  let component: RegistrarestudiantesComponent;
  let fixture: ComponentFixture<RegistrarestudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarestudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
