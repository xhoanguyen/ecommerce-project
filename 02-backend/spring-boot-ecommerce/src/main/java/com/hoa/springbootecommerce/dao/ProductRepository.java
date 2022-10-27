package com.hoa.springbootecommerce.dao;

import com.hoa.springbootecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;


// interface wirh Entity type Product and PK is  Long
public interface ProductRepository extends JpaRepository<Product, Long> {


}
