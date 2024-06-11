package com.ecommerce_project.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "Category")
public class Category {

	@Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
   private Long id ;

    @Column(name = "name")
    private String name;

    @Column(name = "level")
    private int level;

    @ManyToOne
    @JoinColumn(name = "parent_category_id")
    private Category parentCategory;
    
    @ManyToOne
    @JoinColumn(name = "groupCategory")
    private GroupCategory groupCategory ;

//  @ManyToOne
//    private Category parentCategory;
   
}