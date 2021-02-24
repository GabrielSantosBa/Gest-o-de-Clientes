package com.gabriel.springApi.rest;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.gabriel.springApi.models.Cliente;
import com.gabriel.springApi.repositories.ClienteRepository;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {
	
	@Autowired
	private ClienteRepository repository;

	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente salvar(@RequestBody @Valid Cliente cliente) {
		return repository.save(cliente);
	}
	
	@GetMapping("{id}")
	@ResponseStatus(HttpStatus.OK)
	public Cliente get(@PathVariable Integer id) {
		return  repository.findById(id)
				.orElseThrow( 
						() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente Não Encontrado"));
		
		
	}
	
	@DeleteMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deletar(@PathVariable Integer id) {
		
		repository.findById(id).map(cliente ->{
			repository.delete(cliente);
			return Void.TYPE;
		})
		.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		
	}
	
	@PutMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void atualizar(@PathVariable Integer id, @RequestBody Cliente clienteAtualizado) {
		repository.findById(id).map(cliente ->{
			clienteAtualizado.setId(cliente.getId());
			return repository.save(clienteAtualizado);//O metodo save atualiza um registro se ele tiver um Id ou seja se ele já for cadastrado, por isso estou setando o ID.
		})
		.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		
	}
	
	
}
