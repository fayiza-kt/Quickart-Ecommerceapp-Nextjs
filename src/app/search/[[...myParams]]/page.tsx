import ProductCard from '@/app/components/ProductCard/ProductCard';
import { ProductService } from '@/app/services/product-services';
import React from 'react'

export default async function DynamicSearch(props:any) {
    console.log('Optional Params props: ', props)
    const myParams : string [] = props.params.myParams || [];
    const category = myParams[0];
    const item =  myParams[1];
    const brand =  myParams[2];
    const model =  myParams[3];

    //const searchQuery = category.toLowerCase() || item.toLowerCase() || brand.toLowerCase() || model.toLowerCase() || '';
    const searchQuery = myParams.join('/'); 
    const allProducts = await ProductService.getProducts();
    
    const filteredProducts = allProducts.filter((product:any) =>
        product.title.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
      );

  return (
    <div>
      <div className="container mt-4">
      <h3>{searchQuery && `Showing result for "${searchQuery}"`}</h3>

      <div className="row mt-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))
        ) : (
          <p>No products found for "<strong>{searchQuery}</strong>"</p>
        )}
      </div>
    </div>

    </div>
  )
}

//localhost:3000/search/electronics
