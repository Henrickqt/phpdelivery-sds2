package com.devsuperior.phpdelivery.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.phpdelivery.dtos.OrderDTO;
import com.devsuperior.phpdelivery.entities.Order;
import com.devsuperior.phpdelivery.repositories.OrderRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> orders = repository.findOrdersWithProducts();
		return orders.stream().map(order -> new OrderDTO(order)).collect(Collectors.toList());
	}
	
}
