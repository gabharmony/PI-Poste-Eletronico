package br.com.posteeletronico.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.posteeletronico.api.model.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Long> {
	
	@Query(value = "SELECT * FROM servico WHERE id_prestador = :id", nativeQuery = true)
	List<Servico> findByIdPresta(Long id);
	
	@Query(value = "SELECT * FROM servico WHERE id_servico =  :id", nativeQuery = true)
	Servico findByCodigo(Long id);
}
