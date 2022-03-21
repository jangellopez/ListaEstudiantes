import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultarestudiantes',
  templateUrl: './consultarestudiantes.component.html',
  styleUrls: ['./consultarestudiantes.component.css'],
})
export class ConsultarestudiantesComponent implements OnInit {
  listaEstudiantes: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.obtenerEstudiantes();
  }

  obtenerEstudiantes(): void {
    this.listaEstudiantes = JSON.parse(localStorage.getItem('estudiantes')!);
  }
}
