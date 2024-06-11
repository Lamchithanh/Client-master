package com.ecommerce_project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.model.User;
@Repository
public interface CartItemRepository extends  JpaRepository<CartItem, Long>	{
	@Query("SELECT ci FROM CartItem ci WHERE ci.cart = :cart AND ci.product = :product AND ci.size = :size AND ci.color = :color AND ci.userId = :userId")
	public CartItem isCartItemExist(@Param("cart") Cart cart, @Param("product") Product product, @Param("size") String size,  @Param("color") String color ,@Param("userId") Long userId);
	
	
	@Query("SELECT ci FROM CartItem ci WHERE ci.cart = :cart")
	public List<CartItem> findAllByCartId(@Param("cart") Cart cart);
	
	
	@Query("SELECT ci FROM CartItem ci WHERE ci.cart = :cart")
     public List<CartItem> findAllByCart(@Param("cart") Cart cart);
	
	@Query("SELECT ci FROM CartItem ci WHERE ci.id = :id")
    public CartItem findCartItemByCartItemId(@Param("id") Long id);
	
	@Query("SELECT ci FROM CartItem ci WHERE ci.checkStatus = :checkStatus  AND ci.cart.id = :cartId")
    public List<CartItem> findCartItemByCheckStatus(@Param("checkStatus") String checkStatus , @Param("cartId") Long cartId);
	
	@Query("SELECT ci FROM CartItem ci WHERE ci.product.id = :id")
    public List<CartItem> findCartItemByProductId(@Param("id") Long id);
	
	
	
	
}
