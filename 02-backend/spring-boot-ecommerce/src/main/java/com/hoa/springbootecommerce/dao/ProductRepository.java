package com.hoa.springbootecommerce.dao;

import com.hoa.springbootecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;


// interface wirh Entity type Product and PK is  Long
// REMEMBER: Origin is more than just the hostname
// Origin = protocol + hostname + port
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {


}
