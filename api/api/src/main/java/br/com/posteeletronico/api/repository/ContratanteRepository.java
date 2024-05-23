
package br.com.posteeletronico.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.posteeletronico.api.model.Contratante;

public interface ContratanteRepository extends JpaRepository<Contratante, Long> {
	@Query(value = "SELECT * FROM contratante WHERE email = :email AND senha = :senha", nativeQuery = true)
	Contratante loginContratante(String email, String senha);
}