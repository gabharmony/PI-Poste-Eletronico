package br.com.posteeletronico.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.posteeletronico.api.model.Prestador;

public interface PrestadorRepository extends JpaRepository<Prestador, Long>{
	@Query(value = "SELECT * FROM prestador WHERE email = :email AND senha = :senha", nativeQuery = true)
	Prestador loginPrestador(String email, String senha);
}
