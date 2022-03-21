import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/models/estudiante';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrarestudiantes',
  templateUrl: './registrarestudiantes.component.html',
  styleUrls: ['./registrarestudiantes.component.css'],
})
export class RegistrarestudiantesComponent implements OnInit {
  registrar: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.registrar = this.fb.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      nota1: ['', Validators.required],
      nota2: ['', Validators.required],
      nota3: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  promedio!: number;
  estado!: string;

  registrarEstudiante(): void {
    this.promedio =
      (this.registrar.value.nota1 +
        this.registrar.value.nota2 +
        this.registrar.value.nota3) /
      3;

    if (this.promedio >= 3) {
      this.estado = 'Aprobado';
    } else if (this.promedio > 0 && this.promedio < 3) {
      this.estado = 'Reprobado';
    } else {
      this.estado = 'Excluido';
    }

    console.log(this.registrar);
    const estudiante: Estudiante = {
      identificacion: this.registrar.value.identificacion,
      nombre: this.registrar.value.nombre,
      nota1: this.registrar.value.nota1,
      nota2: this.registrar.value.nota2,
      nota3: this.registrar.value.nota3,
      promedio: this.promedio,
      estado: this.estado,
    };

    let listaEstudiantes: Estudiante[] = [];
    if (localStorage.getItem('estudiantes') === null) {
      listaEstudiantes.push(estudiante);
      localStorage.setItem('estudiantes', JSON.stringify(listaEstudiantes));
      this.toastr.success('Registrado correctamente', 'Mensaje');
      this.registrar.reset();
    } else {
      listaEstudiantes = JSON.parse(localStorage.getItem('estudiantes')!);
      listaEstudiantes.push(estudiante);
      localStorage.setItem('estudiantes', JSON.stringify(listaEstudiantes));
      this.toastr.success('Registrado correctamente', 'Mensaje');
      this.registrar.reset();
    }
  }
}
