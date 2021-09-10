package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SaleSucessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.service.SaleService;

@RestController
@RequestMapping(value="/sales")
public class SaleController {
	
	@Autowired
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
	Page<SaleDTO> list = service.findAll(pageable);
	return ResponseEntity.ok(list);
	}
	
	@GetMapping(value="/sum-by-seller")
	public ResponseEntity<List<SaleSumDTO>> amaountGroupedBySeller(){
	List<SaleSumDTO> list = service.amaountGroupedBySeller();
	return ResponseEntity.ok(list);
	}
	
	@GetMapping(value="/secess-by-seller")
	public ResponseEntity<List<SaleSucessDTO>> sucessGroupedBySeller(){
	List<SaleSucessDTO> list = service.sucessGroupedBySeller();
	return ResponseEntity.ok(list);
	}


}
 