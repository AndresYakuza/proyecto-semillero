import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { TableComponent } from './modulos/modulo-usuario/table.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ModuloNivelComponent } from './modulos/modulo-nivel/modulo-nivel.component';
import { ModuloCargoComponent } from './modulos/modulo-cargo/modulo-cargo.component';
import { ModuloTipoEvaluacionComponent } from './modulos/modulo-tipo-evaluacion/modulo-tipo-evaluacion.component';
import { ModuloComportamientoComponent } from './modulos/modulo-comportamiento/modulo-comportamiento.component';
import { ModuloCompetenciaComponent } from './modulos/modulo-competencia/modulo-competencia.component';
import { FacultadComponent } from './modulos/modulo-facultad/facultad.component'; 
import { ProgramaComponent } from './modulos/modulo-programa/programa.component'; 
import { AsignaturaComponent } from './modulos/modulo-asignatura/asignatura.component'; 
import { ModuloGrupoComponent } from './modulos/modulo-grupo/modulo-grupo.component';

import { ModuloEvaluacionComponent } from './modulos/modulo-evaluacion/modulo-evaluacion.component';
import { ModuloBancoPreguntaComponent } from './modulos/modulo-banco-pregunta/modulo-banco-pregunta.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'principal', component: CardComponent },
  { path: 'table', component: TableComponent },
  { path: 'login', component: LoginComponent, data: { title: "Inicio de sessión" } },
  { path: 'menubar', component: MenubarComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'facultad', component:FacultadComponent},
  {path: 'programa', component:ProgramaComponent},
  {path: 'asignatura', component:AsignaturaComponent},
  { path: 'modulo_nivel', component: ModuloNivelComponent },
  { path: 'modulo_cargo', component: ModuloCargoComponent },
  { path: 'modulo_tipoevaluacion', component: ModuloTipoEvaluacionComponent },
  { path: 'modulo_competencia', component: ModuloCompetenciaComponent },
  { path: 'modulo_comportamiento', component: ModuloComportamientoComponent },
  { path: 'modulo_grupo', component: ModuloGrupoComponent },
  { path: 'evaluacion_docente', component: ModuloEvaluacionComponent },
  { path: 'banco_pregunta', component: ModuloBancoPreguntaComponent },


  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
