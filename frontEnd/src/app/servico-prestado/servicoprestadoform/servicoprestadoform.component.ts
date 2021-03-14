import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service'
import { ServicoPrestadoModule } from '../servico-prestado.module';
import { ServicoPrestadoService } from '../../servico-prestado.service'
import { ServicoPrestado } from '../servicoPrestado';

@Component({
  selector: 'app-servicoprestadoform',
  templateUrl: './servicoprestadoform.component.html',
  styleUrls: ['./servicoprestadoform.component.css']
})
export class ServicoprestadoformComponent implements OnInit {


  clientes: Cliente[] = []
  servico: ServicoPrestado;
  success: boolean = false;
  errors: String[];

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService
  ) { 
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.listarTodosClientes()
      .subscribe( response => this.clientes = response );
  }

  onSubmit(){
    this.service
      .salvar(this.servico)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
        this.servico = new ServicoPrestado();
      } , errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
  }

}
