package com.gabriel.springApi.rest;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.server.ResponseStatusException;

@org.springframework.web.bind.annotation.RestControllerAdvice
public class RestControllerAdvice {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ApiErros handleValidationErros( MethodArgumentNotValidException ex) {
		
		
		BindingResult bindingResult = ex.getBindingResult();
		
		List<String> messages = bindingResult.getAllErrors()
		.stream()
		.map( objectError -> objectError.getDefaultMessage())
		.collect( Collectors.toList());
		
		return new ApiErros(messages);
	}
	
	@SuppressWarnings("unchecked")
	@ExceptionHandler(ResponseStatusException.class)
	public ResponseEntity handleResponseStatusException(ResponseStatusException ex) {
		
		String messagemErro = ex.getMessage();
		HttpStatus codigoHttp = ex.getStatus();
		ApiErros apiErros = new ApiErros(messagemErro);
		
		return new ResponseEntity(apiErros, codigoHttp);
		
	}
	
}
