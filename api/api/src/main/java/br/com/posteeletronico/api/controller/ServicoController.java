package br.com.posteeletronico.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.posteeletronico.api.model.Servico;
import br.com.posteeletronico.api.repository.ServicoRepository;

@RestController
@RequestMapping("/servico")
public class ServicoController {
	
	@Autowired
	private ServicoRepository servicoRepository;
	
	@PostMapping("/cadastrar")
	public Servico servico(@RequestBody Servico s) {
		return this.servicoRepository.save(s);
	}
	
	@DeleteMapping("/deletar/{id}")
	public void remover(@PathVariable Long id) {
		Servico obj = this.servicoRepository.findByCodigo(id);
		this.servicoRepository.delete(obj);
	}
	
	@GetMapping("/{id}")
	public Optional<Servico> servico (@PathVariable("id") Long id){
		return this.servicoRepository.findById(id);
	}
	
	@GetMapping("/all")
	public List<Servico> list(){
		return this.servicoRepository.findAll();
	}
	
	@GetMapping("/all/{id}")
	public List<Servico> listById(@PathVariable("id") Long id){
		return this.servicoRepository.findByIdPresta(id);
	}
	
	@GetMapping("/contagem")
	public long contarServicos() {
		return this.servicoRepository.count();
	}
	
}
