package com.gabriel.springApi.rest;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.gabriel.springApi.Util.BigDecimalConverter;
import com.gabriel.springApi.models.Cliente;
import com.gabriel.springApi.models.ServicoPrestado;
import com.gabriel.springApi.repositories.ClienteRepository;
import com.gabriel.springApi.repositories.ServicoPrestadoRepository;
import com.gabriel.springApi.rest.Dto.ServicoPrestadoDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/servicos-prestados")
@CrossOrigin("http://localhost:4200")
@RequiredArgsConstructor
public class ServicosPrestadosController {
	
	 	private final ClienteRepository clienteRepository;
	    private final ServicoPrestadoRepository repository;
	    private final BigDecimalConverter bigDecimalConverter;

	    @PostMapping
	    @ResponseStatus(HttpStatus.CREATED)
	    public ServicoPrestado salvar( @RequestBody @Valid ServicoPrestadoDto dto ){
	        LocalDate data = LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("dd/MM/yy"));
	        Integer idCliente = dto.getIdCliente();

	        Cliente cliente =
	                clienteRepository
	                        .findById(idCliente)
	                        .orElseThrow(() ->
	                                new ResponseStatusException(
	                                        HttpStatus.BAD_REQUEST, "Cliente inexistente."));


	        ServicoPrestado servicoPrestado = new ServicoPrestado();
	        servicoPrestado.setDescricao(dto.getDescricao());
	        servicoPrestado.setData( data );
	        servicoPrestado.setCliente(cliente);
	        servicoPrestado.setValor( bigDecimalConverter.converter(dto.getPreco())  );

	        return repository.save(servicoPrestado);
	    }

	    @GetMapping
	    public List<ServicoPrestado> pesquisar(
	            @RequestParam(value = "nome", required = false, defaultValue = "") String nome,
	            @RequestParam(value = "mes", required = false) Integer mes
	    ) {
	        return repository.findByNomeClienteAndMes("%" + nome + "%", mes);
	    }
	
	
}
