import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../Cliente';



@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

clientes?: Cliente[];

  constructor( private service: ClientesService  ) { }

  ngOnInit(): void {
    this.service.listarTodosClientes()
    .subscribe(resposta => this.clientes = resposta);
  }

}
