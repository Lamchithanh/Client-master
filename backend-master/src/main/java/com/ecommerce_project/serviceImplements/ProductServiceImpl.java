package com.ecommerce_project.serviceImplements;

import com.ecommerce_project.exception.ProductException;
import com.ecommerce_project.model.Brand;
import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.Category;
import com.ecommerce_project.model.Colors;
import com.ecommerce_project.model.FavouriteList;
import com.ecommerce_project.model.GroupCategory;
import com.ecommerce_project.model.Order;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.model.Size;
import com.ecommerce_project.repository.BrandRepository;
import com.ecommerce_project.repository.CartItemRepository;
import com.ecommerce_project.repository.CartRepository;
import com.ecommerce_project.repository.CategoryRepository;
import com.ecommerce_project.repository.ColorRepository;
import com.ecommerce_project.repository.FavouriteRepository;
import com.ecommerce_project.repository.ProductRepository;
import com.ecommerce_project.repository.SizeRepository;
import com.ecommerce_project.request.CategoryRequest;
import com.ecommerce_project.request.ColorsRequest;
import com.ecommerce_project.request.CreateProductRequest;
import com.ecommerce_project.request.SizeRequest;
import com.ecommerce_project.service.CategoryService;
import com.ecommerce_project.service.ProductService;
import com.ecommerce_project.service.UserService;
import com.fasterxml.jackson.databind.ser.std.StdKeySerializers.Default;

import jakarta.persistence.EntityManager;

import java.util.Collections;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository ;
    @Autowired
    private CategoryRepository categoryRepository ;
    @Autowired
    private  BrandRepository brandRepository;
    @Autowired
    private FavouriteRepository favouriteRepository ; 
    @Autowired
    private SizeRepository sizeRepository ;
    @Autowired
    private ColorRepository colorRepository ; 
    @Autowired
    private CategoryService categoryService ; 
    @Autowired
    private EntityManager entityManager ; 
    @Autowired
    private CartItemRepository cartItemRepository ;
//    @Autowired
//    private ColorsRequest colorsRequest ; 

//    public ProductServiceImpl(ProductRepository productRepository, UserService userService, CategoryRepository categoryRepository) {
//        this.productRepository = productRepository;
//        this.userService = userService;
//        this.categoryRepository = categoryRepository;
//    }

    @Override
    public Product createProduct(CreateProductRequest req) {

//        Category topLevel = categoryRepository.findByName(req.getTopLavelCategory());
//        if (topLevel==null){
//            Category topLavelCategory = new Category() ;
//            topLavelCategory.setName(req.getTopLavelCategory());
//            topLavelCategory.setLevel(1);
//
//            topLevel = categoryRepository.save(topLavelCategory) ;
//
//
//        }
//        Category secondLevel = categoryRepository.findByNameAndParent(req.getSecondLavelCategory() , topLevel.getName());
//        if (secondLevel ==null){
//            Category secondLavelCategory = new Category() ;
//            secondLavelCategory.setName(req.getSecondLavelCategory());
//            secondLavelCategory.setParentCategory(topLevel);
//            secondLavelCategory.setLevel(2);
//
//            secondLevel = categoryRepository.save(secondLavelCategory);
//        }
//        Category thirdLevel = categoryRepository.findByNameAndParent(req.getThirdLavelCategory() , secondLevel.getName());
//        if (thirdLevel ==null){
//            Category thirdLavelCategory= new Category() ;
//            thirdLavelCategory.setName(req.getThirdLavelCategory());
//            thirdLavelCategory.setParentCategory(secondLevel);
//            thirdLavelCategory.setLevel(3);
//
//            thirdLevel = categoryRepository.save(thirdLavelCategory) ;
//        }
    	CategoryRequest categoryRequest = new CategoryRequest();
    	categoryRequest.setTopLavelCategory(req.getTopLavelCategory());
    	categoryRequest.setSecondLavelCategory(req.getSecondLavelCategory());
    	categoryRequest.setThirdLavelCategory(req.getThirdLavelCategory());
    	Category category=    categoryService.createOrGetCategory(categoryRequest);

        Product product = new Product() ;
        
        product.setSoldAt(req.getSoldAt());
        product.setTitle(req.getTitle());
        product.setFavouriteStatus("false");
//        product.setColor(req.getColor());
        product.setDescription(req.getDescription());
//        product.setDiscountedPrice(req.getPrice()* req.getDiscountPersent());
        Double discountPercent = req.getDiscountPersent() / 100.0;
        Double discountedPrice = req.getPrice() * (1 - discountPercent);
        product.setDiscountedPrice(discountedPrice);
        product.setDiscountPersent(req.getDiscountPersent());
        product.setImageUrl(req.getImageUrl());
        
//        Brand brandId = brandRepository.findByName(req.getBrand())
//                .orElseGet(() -> {
//                    Brand brand = new Brand();
//                    brand.setName(req.getBrand());
//                    brand.setImageUrl("Default Image URL");
//                    return brandRepository.save(brand);
//                });
      Brand brandId = brandRepository.findBrandByName(req.getBrand());
      if(brandId ==null ) {
    	  Brand brand = new Brand();
          brand.setName(req.getBrand());
          brand.setImageUrl("Default Image URL");
          Brand savedBrand = brandRepository.save(brand);
      }
         

        product.setBrand(brandId);
        product.setPrice(req.getPrice());        
        List<Colors> colors = req.getColors().stream().map(colorRequest -> {
            Colors color = new Colors();
            color.setName(colorRequest.getName());
            color.setQuantity(colorRequest.getQuantity());
            color.setProduct(product);

            List<Size> sizes = colorRequest.getSizes().stream().map(sizeRequest -> {
                Size size = new Size();
                size.setName(sizeRequest.getName());
                size.setQuantity(sizeRequest.getQuantity());
                size.setColor(color);
                return size;
            }).collect(Collectors.toList());

            color.setSize(sizes);
            return color;
        }).collect(Collectors.toList());
        product.setColors(colors);        
        product.setQuantity(req.getQuantity());
//        product.setCategory(thirdLevel);
      product.setCategory(category);
        product.setCreateAt(LocalDateTime.now());
        Product savedProduct  = productRepository.save(product) ;
        return savedProduct  ; 
    }

    @Override
    public String deleteProduct(Long productId) throws ProductException {
    	Product product = productRepository.findProductById(productId);
    	List<CartItem> cartItems = cartItemRepository.findCartItemByProductId(productId);
        if (cartItems != null && !cartItems.isEmpty()) {
            for (CartItem cartItem : cartItems) {
                cartItemRepository.delete(cartItem);
            }
        }
        for (Colors color : product.getColors()) {
            for (Size size : color.getSize()) {
                sizeRepository.delete(size);
            }
    
            colorRepository.delete(color);
        }
        productRepository.delete(product);
    	return "Product deleted Successfully";
    	
    }

    @Override
    public Product updateProduct(Long productId, Product req) throws ProductException {
    	Product product=findProductById(productId);
    	if(req.getQuantity() != 0) {
    	product.setQuantity(req.getQuantity());
    	
    	}
    	return productRepository.save(product);
    }

    @Override
    public Product findProductById(Long id) throws ProductException {
    	Optional<Product> opt=productRepository.findById(id);
    	if(opt.isPresent()) {
    	return opt.get();
    	}
    	throw new ProductException("Product not found with id - "+id);
    }

    @Override
    public List<Product> findProductByCategory(String category) {
        return null;
    }

//    @Override
//    public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
//        Pageable pageable = PageRequest.of(pageNumber, pageSize);
//        List<Product> products = productRepository.filteredProducts(category, minPrice, maxPrice, minDiscount, sort);
//        
//        if (!colors.isEmpty()) {
//            products = products.stream()
//                               .filter(p -> colors.stream().anyMatch(c -> c.equalsIgnoreCase(p.getColors())))
//                               .collect(Collectors.toList());
//        }
//        
//        if (stock != null) {
//            if (stock.equals("in_stock")) {
//                products = products.stream()
//                                   .filter(p -> p.getQuantity() > 0)
//                                   .collect(Collectors.toList());
//            } else if (stock.equals("out_of_stock")) {
//                products = products.stream()
//                                   .filter(p -> p.getQuantity() < 1)
//                                   .collect(Collectors.toList());
//            }
//        }
//        
//        int startIndex = (int) pageable.getOffset();
//        int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());
//        List<Product> pageContent = products.subList(startIndex, endIndex);
//        Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable, products.size());
//        
//        return filteredProducts;
//    }
    
    @Override
  public Page<Product> getAllProduct(String category, List<String> colors, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
      Pageable pageable = PageRequest.of(pageNumber, pageSize);
      List<Product> products = productRepository.filteredProducts(category, minPrice, maxPrice, minDiscount, sort);
      
//      if (!colors.isEmpty()) {
//          products = products.stream()
//                             .filter(p -> colors.stream().anyMatch(c -> c.equalsIgnoreCase(p.getColor())))
//                             .collect(Collectors.toList());
//      }
      
      if (stock != null) {
          if (stock.equals("in_stock")) {
              products = products.stream()
                                 .filter(p -> p.getQuantity() > 0)
                                 .collect(Collectors.toList());
          } else if (stock.equals("out_of_stock")) {
              products = products.stream()
                                 .filter(p -> p.getQuantity() < 1)
                                 .collect(Collectors.toList());
          }
      }
      
      int startIndex = (int) pageable.getOffset();
      int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());
      List<Product> pageContent = products.subList(startIndex, endIndex);
      Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable, products.size());
      
      return filteredProducts;
  }
    
    

//	@Override
//	public Page<Product> getAllProducts() {
//		 return productRepository.findAll(); 	
//	}
    
    @Override
    public Page<Product> getAllProducts(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        return productRepository.findAll(pageable);
    }

	@Override
	public List<Product> getProductsByCategory(String category) {
	    List<Product> product =	productRepository.findProductByCategoryName(category) ; 
		return product;
	}

	@Override
	public Product setFavouriteProductStatusById(Long id) throws ProductException {	
		    Product product =  productRepository.findProductById(id)  ; 
		    String favouriteStatusBoolean =    product.getFavouriteStatus(); 		    
		    FavouriteList favouriteById =  favouriteRepository.findProductById(id); 
              if(favouriteById != null ){
            	  if( favouriteStatusBoolean.equals("true") ) {
      		    	product.setFavouriteStatus("false"); 
      		    	 Product savedProduct  = productRepository.save(product) ;
      		    	favouriteRepository.delete(favouriteById);
      		    	 return null ; 
      		    }else if(favouriteStatusBoolean.equals("false")) {
      		    	 product.setFavouriteStatus("true"); 
      		    	 Product savedProduct  = productRepository.save(product) ;
      		    	 return null ; 
      			}  
            } 
    		    if(  favouriteStatusBoolean.equals("true")   ) {
		    	product.setFavouriteStatus("false"); 
		    	 Product savedProduct  = productRepository.save(product) ;
		    	  favouriteRepository.delete(favouriteById);
		    } else if(favouriteStatusBoolean.equals("false")) {
		    	 product.setFavouriteStatus("true"); 
		    	 Product savedProduct  = productRepository.save(product) ;
			}
    		    Product savedProduct  = productRepository.save(product) ;
  		      FavouriteList favouriteList = new FavouriteList();  
  		      favouriteList.setProduct(product);
  		      FavouriteList savedFavouriteList  = favouriteRepository.save(favouriteList) ; 
  		      return savedProduct;
	}

	@Override
	public List<Product> getProductByCategory(String categoryName) {
		
//		Category category = categoryRepository.findByName(categoryName);
//		Long categoryId = category.getId();
//		String categoryName = category.getName();
		List<Product> products = productRepository.findProductsByCategoryName(categoryName);
        if (products != null) {
        	return products ; 
        } else {
        	 return Collections.emptyList();
        }
	}

	@Override
	public List<Brand> getAllBrand() {
		 List<Brand> brand = brandRepository.findAll();
		return brand;
	}
	 public void deleteCategory(Category category) {
//	          Category category =  categoryRepository.findCategoryById(categoryId);
	          GroupCategory groupCategory = category.getGroupCategory();
	          List<Category> categoryByGroupCategory =     categoryRepository.findCategoryByGroupCategory(groupCategory);
	          categoryRepository.deleteAll(categoryByGroupCategory);
	    }

	@Override
	public void deleteBrand(Long brandId) throws ProductException {
		 Brand brand =   brandRepository.findBrandById(brandId);
         List<Product> products = productRepository.findProductByBrand(brand);
         if (products == null || products.isEmpty()) {
    		 brandRepository.delete(brand);
         } else {
        	 productRepository.deleteAll(products);
        	 brandRepository.delete(brand);
		}
         
	}

	@Override
	public List<Product> searchProducts(String query) {
		List<Product> products =   productRepository.searchProducts(query);
		return products;
	}
	@Override
	public List<Product> searchProductsBySoldAt(String soldAt) {
		List<Product> products =   productRepository.searchProductsBySoldAt(soldAt);
		return products;
	}


	@Override
	public Product removeFavourite(Long productId) throws ProductException {
		Product product =  productRepository.findProductById(productId);
	    	product.setFavouriteStatus("false"); 
	    	Product productSaved = productRepository.save(product);
		return productSaved;
		
	}

	@Override
	public List<Product> getProductsFavourite() {
		String favouriteStatus = "true"  ;
		List<Product> products = productRepository.findByFavouriteStatus(favouriteStatus);
		return products;
	}
	public List<Product> getProductsByBrands(List<String> brands) {
		
		 List<Long>  brands2Id =   brandRepository.findBrandsIdByNames(brands);
		 
        return productRepository.findByBrands(brands2Id);
		 
    }
}

