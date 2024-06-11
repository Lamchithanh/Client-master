package com.ecommerce_project.repository;

import com.ecommerce_project.model.Brand;
import com.ecommerce_project.model.Category;
import com.ecommerce_project.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;





public interface ProductRepository extends JpaRepository<Product , Long> {
	@Query("SELECT p FROM Product p " +
            "WHERE (:category IS NULL OR p.category.name = :category) " +
            "AND ((:minPrice IS NULL AND :maxPrice IS NULL) OR (p.discountedPrice BETWEEN :minPrice AND :maxPrice)) " +
            "AND (:minDiscount IS NULL OR p.discountPersent >= :minDiscount) " +
            "ORDER BY " +
            "CASE WHEN :sort = 'price_low' THEN p.discountedPrice END ASC, " +
            "CASE WHEN :sort = 'price_high' THEN p.discountedPrice END DESC "
    )
    public List<Product> filteredProducts(@Param("category") String category ,
                                        @Param("minPrice") Integer minPrice ,
                                        @Param("maxPrice") Integer maxPrice ,
                                        @Param("minDiscount") Integer minDiscount ,
                                        @Param("sort") String sort );

	
	
	 @Query("SELECT p FROM Product p WHERE p.category.name = :name")
	 public  List<Product> findProductByCategoryName(@Param("name") String name);
	
	 @Query("SELECT p FROM Product p WHERE p.id = :id")
	 public  Product findProductById(@Param("id") Long id);
	 
	 @Query("SELECT p FROM Product p WHERE p.category.id = :id")
	 public  List<Product> findProductsByCategoryId(@Param("id") Long id);
	 
	 @Query("SELECT p FROM Product p WHERE p.category.name = :name")
	 public  List<Product> findProductsByCategoryName(@Param("name") String name);
	 
	 @Query("SELECT p FROM Product p WHERE p.brand = :brand")
	 public  List<Product> findProductByBrand(@Param("brand") Brand brand);
	 
	 @Query("SELECT p FROM Product p WHERE p.category.id = id ")
	 public   void deleteByCategoryId(@Param("id") Long id);
	 
	 @Query("SELECT COUNT(p) FROM Product p")
	 long count();
	 
	 @Query("SELECT p FROM Product p WHERE p.title LIKE %:query%")
	 public List<Product> searchProducts(@Param("query") String query);
	 
	 @Query("SELECT p FROM Product p WHERE p.soldAt =   :soldAt")
	 public List<Product> searchProductsBySoldAt(@Param("soldAt") String soldAt);
	 
	 @Query("SELECT p FROM Product p WHERE p.favouriteStatus =   :favouriteStatus")
	 public List<Product>  findByFavouriteStatus(@Param("favouriteStatus") String favouriteStatus);
	 
	   @Query("SELECT p FROM Product p WHERE p.brand.id IN :brandIds")
	   public List<Product> findByBrands(@Param("brandIds") List<Long> brandIds);
	
}
