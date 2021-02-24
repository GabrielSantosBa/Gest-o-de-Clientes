package com.gabriel.springApi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabriel.springApi.models.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
