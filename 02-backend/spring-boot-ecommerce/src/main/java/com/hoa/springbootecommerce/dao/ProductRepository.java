package com.hoa.springbootecommerce.dao;

import com.hoa.springbootecommerce.entity.Product;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;


// interface wirh Entity type Product and PK is  Long
// REMEMBER: Origin is more than just the hostname
// Origin = protocol + hostname + port
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {

    // SPRING DATA REST automatically expose endpoints for query method
    // and will execute a query similar to query method (i.e. findBy = SELECT * FROM...)
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);

}
