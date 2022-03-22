import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarestudiantesComponent } from './components/consultar-estudiantes/consultar-estudiantes.component';
import { RegistrarestudiantesComponent } from './components/registrar-estudiantes/registrar-estudiantes.component';

const routes: Routes = [
  { path: '', redirectTo: '/registrar', pathMatch: 'full' },
  { path: 'registrar', component: RegistrarestudiantesComponent },
  { path: 'consultar', component: ConsultarestudiantesComponent },
  { path: '**', redirectTo: '/registrar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
