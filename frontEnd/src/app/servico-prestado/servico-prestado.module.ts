import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoprestadoformComponent } from './servicoprestadoform/servicoprestadoform.component';
import { ServicoprestadoListaComponent } from './servicoprestado-lista/servicoprestado-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicoprestadoformComponent, 
    ServicoprestadoListaComponent    
  ],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ServicoprestadoformComponent, 
    ServicoprestadoListaComponent
  ]
})
export class ServicoPrestadoModule { }
