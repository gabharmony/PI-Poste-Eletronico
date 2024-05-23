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

import br.com.posteeletronico.api.model.Prestador;
import br.com.posteeletronico.api.repository.PrestadorRepository;

@RestController
@RequestMapping("/prestador")
public class PrestadorController {
	
	@Autowired
	private PrestadorRepository prestadorRepository;
	
	
	@CrossOrigin
	@PostMapping("/cadastrar")
	public Prestador prestador(@RequestBody Prestador p) {
		return this.prestadorRepository.save(p);
	}
	
	@CrossOrigin
	@GetMapping("/{id}")
	public Optional<Prestador> prestador(@PathVariable("id") Long id) {
		return this.prestadorRepository.findById(id);
	}
	
	@CrossOrigin
	@GetMapping("login/{email}/{senha}")
	public Prestador prestador(@PathVariable("email") String email, @PathVariable("senha") String senha){
		return this.prestadorRepository.loginPrestador(email, senha);
	}
}

