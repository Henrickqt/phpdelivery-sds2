package com.devsuperior.phpdelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.phpdelivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
