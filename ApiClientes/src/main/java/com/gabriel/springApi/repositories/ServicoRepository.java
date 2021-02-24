package com.gabriel.springApi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabriel.springApi.models.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {

}
