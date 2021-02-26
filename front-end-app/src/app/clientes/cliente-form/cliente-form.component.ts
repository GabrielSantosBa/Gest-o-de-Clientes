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

  constructor(private service: ClientesService) { 
    this.cliente = service.getCliente();
  }
 
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.cliente);
  }

}
