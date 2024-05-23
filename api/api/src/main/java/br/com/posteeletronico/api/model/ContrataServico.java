package br.com.posteeletronico.api.model;

import java.util.Date;

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
@Table(name = "contrataservico")
public class ContrataServico {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_prestacao;
	private Date dt_inicio;
	private Date dt_prev_fim;
	private Date dt_fim;
	private int id_contratante;
	private int id_servico;
}
