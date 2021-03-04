import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
import { ClientesService } from '../../clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
 
  cliente : Cliente = new Cliente();

  sucesso: Boolean = false;
  erros?: String[];
  id?: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute 
    ) {     
    this.cliente = new Cliente();
    
  }
 
  ngOnInit(): void {
    let params = this.activatedRoute.params;
    
    params.subscribe( urlParams => {  
      this.id = urlParams['id'];
        if(this.id){
          this.service.listarClientePorId(this.id)
          .subscribe(
          resposta => this.cliente = resposta, 
          erroResposta => this.cliente = new Cliente()
        );
      }
      
    })
    
  }

  onSubmit(){
    this.service.salvar(this.cliente)
    .subscribe(response => {
      this.sucesso = true;
      this.cliente = response;
      } , errorResponse => {  
          this.erros =  errorResponse.error.erros;             
        }
      ) 
    }

}
