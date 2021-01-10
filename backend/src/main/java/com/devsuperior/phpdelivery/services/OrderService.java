package com.devsuperior.phpdelivery.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.phpdelivery.dtos.OrderDTO;
import com.devsuperior.phpdelivery.dtos.ProductDTO;
import com.devsuperior.phpdelivery.entities.Order;
import com.devsuperior.phpdelivery.entities.Product;
import com.devsuperior.phpdelivery.enums.OrderStatus;
import com.devsuperior.phpdelivery.repositories.OrderRepository;
import com.devsuperior.phpdelivery.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> orders = orderRepository.findOrdersWithProducts();
		return orders.stream().map(order -> new OrderDTO(order)).collect(Collectors.toList());
	}

	@Transactional
	public OrderDTO insert(OrderDTO orderDTO) {
		Order order = new Order(null, orderDTO.getAddress(), orderDTO.getLatitude(), orderDTO.getLongitude(),
				Instant.now(), OrderStatus.PENDING);

		for (ProductDTO productDTO : orderDTO.getProducts()) {
			Product product = productRepository.getOne(productDTO.getId());
			order.getProducts().add(product);
		}

		order = orderRepository.save(order);

		return new OrderDTO(order);
	}

}
