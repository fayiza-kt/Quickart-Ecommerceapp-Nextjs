
import ProductCard from '@/app/components/ProductCard/ProductCard';
import { Product } from '@/app/context/CartContext/CartContext';
import { ProductService } from '@/app/services/product-services';
import React from 'react'

export default async function categoryPage(props:any) {
    console.log('search params props:',props)
    const params=props.params
    console.log('new params:',params)
    const categoryName:string = props.params.categoryName;
    const productName:string = props.params.productName;
    console.log(categoryName)

    const price:number = props.searchParams.price;
    console.log('search Param: ', price)

    //const path = `/categories/${categoryName}/${productId}`;
    //const result = ProductsPage({ searchParams: { search: Object.values(params).join('/') } })


    const products: Product[] = await ProductService.getProducts();
    
      // 3. Filter products
      const filteredProducts = products.filter((p) =>
        p.title.toLowerCase().includes(productName.toLowerCase()) &&
        p.category.toLowerCase().includes(categoryName.toLowerCase()) &&
        p.price.toString().includes(price.toString())
      );
    
      // 4. Render products
        return (
        <div style={{ padding: "1rem" }}>
      <h4>Showing results:</h4>
          <div className="row mt-3">
                  {filteredProducts.length === 0 ? (
                    <p>No products found </p>
                  ) : (
                    filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  )}
                </div>
        </div>
      );
    }


    




//searchParams    /categories/electronics/sanDisk?price=109




