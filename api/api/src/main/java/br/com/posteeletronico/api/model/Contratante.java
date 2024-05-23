package br.com.posteeletronico.api.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "contratante")
public class Contratante {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_contratante;
	private String nome;
	private String sobrenome;
	private String celular;
	private String email;
	private String senha;
}
