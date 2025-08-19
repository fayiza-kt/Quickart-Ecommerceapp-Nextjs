import AddToCartButton from '@/app/components/AddToCartButton/AddToCartButton';
import { Product } from '@/app/context/CartContext/CartContext';
import { ProductService } from '@/app/services/product-services';
import { Metadata } from 'next';
import React from 'react'


export async function generateMetadata(
  { params }: { params: Promise<{ productid: string }> }
): Promise<Metadata> {
  const { productid } = await params;
  const product: Product | null = await ProductService.getProductById(Number(productid));

  if (product) {
    return {
      title: product.title,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [product.image],
      },
    };
  }

  return {
    title: "Product not found",
    description: "The requested product does not exist.",
  };
}

export default async function ProductDetail({ params }: { params: Promise<{ productid: string }> }) {
  const { productid } = await params;
  let product: Product | null = null;

  if (productid) {
    product = await ProductService.getProductById(Number(productid));
  }

  if (!product) {
    return <div className="container mt-4">Product not found</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" style={{ maxHeight: '400px', objectFit: 'contain' }} />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <h4 className="text-success">₹{(product.price * 83).toFixed(0)}</h4>
          <p className="text-warning mb-1">
            {'★'.repeat(Math.round(product.rating.rate))} <span className="text-muted">({product.rating.count})</span>
          </p>
          <AddToCartButton id={product.id.toString()}/>
        </div>
      </div>
    </div>
  )
}


