import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../Cliente';



@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

clientes?: Cliente[];
clienteSelecionado?: Cliente[];
msgSucesso?: String;
msgErro?: String;

  constructor( 
    private service: ClientesService,
    private router: Router
    ) { 

    }

  ngOnInit(): void {
    this.service.listarTodosClientes()
    .subscribe(resposta => this.clientes = resposta);
  }

  preDeletarCliente(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service
    .deletar(this.clienteSelecionado).subscribe(response => this.msgSucesso = "Cliente Deletado com Sucesso!",
    erroResponse => this.msgErro = "Erro ao Deletar cliente"
    )
  }

}
