import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/models/estudiante';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrarestudiantes',
  templateUrl: './registrar-estudiantes.component.html',
  styleUrls: ['./registrar-estudiantes.component.css'],
})
export class RegistrarestudiantesComponent implements OnInit {
  formRegistrar: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.formRegistrar = this.fb.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      nota1: ['', Validators.required],
      nota2: ['', Validators.required],
      nota3: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  promedio!: number;
  estado!: string;

  registrarEstudiante(): void {
    this.promedio =
      (this.formRegistrar.value.nota1 +
        this.formRegistrar.value.nota2 +
        this.formRegistrar.value.nota3) /
      3;

    if (this.promedio >= 3) {
      this.estado = 'Aprobado';
    } else if (this.promedio > 0 && this.promedio < 3) {
      this.estado = 'Reprobado';
    } else {
      this.estado = 'Excluido';
    }

    const estudiante: Estudiante = {
      identificacion: this.formRegistrar.value.identificacion,
      nombre: this.formRegistrar.value.nombre,
      nota1: this.formRegistrar.value.nota1,
      nota2: this.formRegistrar.value.nota2,
      nota3: this.formRegistrar.value.nota3,
      promedio: this.promedio,
      estado: this.estado,
    };

    let listaEstudiantes: Estudiante[] = [];
    var bandera = 1;
    if (localStorage.getItem('estudiantes') === null) {
      listaEstudiantes.push(estudiante);
      localStorage.setItem('estudiantes', JSON.stringify(listaEstudiantes));
      this.toastr.success('Registrado correctamente', 'Mensaje');
      this.formRegistrar.reset();
    } else {
      listaEstudiantes = JSON.parse(localStorage.getItem('estudiantes')!);

      for (var i in listaEstudiantes) {
        if (estudiante.identificacion == listaEstudiantes[i].identificacion) {
          bandera = 0;
          break
        }
      }

      if (bandera == 1) {
        listaEstudiantes.push(estudiante);
        localStorage.setItem('estudiantes', JSON.stringify(listaEstudiantes));
        this.toastr.success('Registrado correctamente', 'Mensaje');
        this.formRegistrar.reset();
      } else {
        this.toastr.error('Esta identificacion ya fue registrada, ingrese una nueva', 'Error');
        this.formRegistrar.reset();
      }
    }


    console.log(this.formRegistrar);
  }
}
