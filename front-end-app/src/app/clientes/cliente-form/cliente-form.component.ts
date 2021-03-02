import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
 
  cliente : Cliente = new Cliente();

  sucesso: Boolean = false;
  erros: String[] = [];


  constructor(private service: ClientesService) { 
    this.cliente = new Cliente();
    
  }
 
  ngOnInit(): void {
  }

  onSubmit(){
    this.service.salvar(this.cliente)
    .subscribe(response => {
      this.sucesso = true;
      } , errorResponse => {  
          this.erros =  errorResponse.error.erros;             
        }
      ) 
    }

}
