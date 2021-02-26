import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente'

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
 
  cliente: Cliente;

  constructor() { 
  this.cliente = new Cliente();

  this.cliente.nome = 'Gabriel';
  }

  ngOnInit(): void {
  }

}
