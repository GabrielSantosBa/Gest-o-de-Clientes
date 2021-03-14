import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoprestadoformComponent } from './servicoprestadoform/servicoprestadoform.component';
import {  ServicoprestadoListaComponent } from './servicoprestado-lista/servicoprestado-lista.component';
import { LayoutComponent } from '../layout/layout.component';
//import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  { path: 'servicos-prestados', /*canActivate: [AuthGuard]*/ component: LayoutComponent, children: [
    { path: 'form', component: ServicoprestadoformComponent },
    { path: 'lista', component: ServicoprestadoListaComponent },
    { path: '', redirectTo: '/servicos-prestados/lista', pathMatch: 'full' }

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
