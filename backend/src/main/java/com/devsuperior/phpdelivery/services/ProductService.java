package com.devsuperior.phpdelivery.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.phpdelivery.dtos.ProductDTO;
import com.devsuperior.phpdelivery.entities.Product;
import com.devsuperior.phpdelivery.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;

	@Transactional(readOnly = true)
	public List<ProductDTO> findAll() {
		List<Product> products = repository.findAllByOrderByNameAsc();
		return products.stream().map(product -> new ProductDTO(product)).collect(Collectors.toList());
	}
	
}
