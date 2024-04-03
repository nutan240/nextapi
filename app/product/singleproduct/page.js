// pages/product/singleproduct/page.js
"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function SingleProductPage() {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const id = router.query;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/singleproduct/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    {Array.isArray(product) && product.map((product) => (
        <div>
        <h1>{product.brand}</h1>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
        </div>
    ))}
     
    </div>
  );
}

export default SingleProductPage;
