import Link from 'next/link';
import React, { Suspense } from 'react'
import ProductCard from '../components/ProductCard/ProductCard';
import { ProductService } from '../services/product-services';
import { Metadata } from 'next';
import {headers} from 'next/headers'

export const metadata: Metadata = {
  title: "Quickart - Products",
  description: "Browse our collection of products",
};

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
}

export default async function ProductsPage({ searchParams }: { searchParams:  Promise<{ search?: string }> }) {
  
  //Accessing cookies and headers
  const headersList = await headers();
  const referer = headersList.get('referer');
  console.log('Referer:', referer);
  console.log('User-Agent:', headersList.get('user-agent'));
  console.log('Host:', headersList.get('host'));
  // 1. Fetch products
  const products: Product[] = await ProductService.getProducts();
  // 2. Get the search query from URL
  const resolvedSearchParams = await searchParams;
  const searchQuery = resolvedSearchParams.search?.toLowerCase() || "";

  // 3. Filter products
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery) ||
    p.category.toLowerCase().includes(searchQuery) ||
    p.description.toLowerCase().includes(searchQuery)
  );

  // 4. Render products
    return (
    <div style={{ padding: "1rem" }}>
      <h2>Products</h2>
      <Suspense fallback={<div style={{ color: "blue" }}>Loading...</div>}>
      <a href="#bottomsection">Go to End of list</a>
      {searchQuery && <p>Showing results for: "{searchQuery}"</p>}
      <div className="row mt-3">
              {filteredProducts.length === 0 ? (
                <p>No products found for "{searchQuery}"</p>
              ) : (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              )}
            </div>
            <h3 id="bottomsection">End of list</h3>
        </Suspense>
    </div>
  );
}



