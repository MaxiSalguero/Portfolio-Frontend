import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ExperienciaComponent } from '../app/componentes/experiencia/experiencia.component';
import { EducacionComponent } from '../app/componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProjectComponent } from './componentes/project/project.component';


const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'experiencia', component:ExperienciaComponent},
  {path: 'educacion', component:EducacionComponent},
  {path: 'skills', component:SkillsComponent},
  {path: 'projects', component:ProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
