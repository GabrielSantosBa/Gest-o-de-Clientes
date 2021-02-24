import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { HomeComponent} from './home/home.component';

const routes: Routes = [
{path: 'home', component:  HomeComponent },
{path: 'cliente-form', component: ClienteFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
