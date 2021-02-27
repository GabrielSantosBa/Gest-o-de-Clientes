import { Injectable } from '@angular/core';
import { Cliente } from './clientes/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) {

   }

   salvar( cliente: Cliente) : Observable<Cliente>{
      return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
   }



  getCliente(){
    let cliente: Cliente = new Cliente();
    cliente.nome = "Gabriel Teste Service";
    cliente.cpf="06632215521";
    return cliente;
  }
}
