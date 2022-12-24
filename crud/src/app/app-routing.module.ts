import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './producto/lista/lista.component';
import { TemplateComponent } from './template/template/template.component';

const routes: Routes = [
  {
    path:'', component:TemplateComponent,
    children:[
      {
        path:'producto', component:ListaComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
