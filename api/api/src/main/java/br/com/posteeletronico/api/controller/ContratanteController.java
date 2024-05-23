package br.com.posteeletronico.api.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.posteeletronico.api.model.Contratante;
import br.com.posteeletronico.api.repository.ContratanteRepository;

@RestController
@RequestMapping("/contratante")
public class ContratanteController {
	
	@Autowired
	private ContratanteRepository contratanteRepository;
	
	@CrossOrigin
	@PostMapping("/cadastrar")
	public Contratante contratante(@RequestBody Contratante c) {
		return this.contratanteRepository.save(c);
	}
	
	@CrossOrigin
	@GetMapping("/{id}")
	public Optional<Contratante> contratante(@PathVariable("id") Long id){
		return this.contratanteRepository.findById(id);
	}
	
	@CrossOrigin
	@GetMapping("login/{email}/{senha}")
	public Contratante contratante(@PathVariable("email") String email, @PathVariable("senha") String senha) {
		return this.contratanteRepository.loginContratante(email, senha);
	}
}
