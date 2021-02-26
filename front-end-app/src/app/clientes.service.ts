import { Injectable } from '@angular/core';
import { Cliente } from './clientes/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente(){
    let cliente: Cliente = new Cliente();
    cliente.nome = "Gabriel Teste Service";
    cliente.cpf="06632215521";
    return cliente;
  }
}
