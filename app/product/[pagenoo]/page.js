// ProductPage.js
"use client"
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Correct import statement

function ProductPage() {
  const [productDetails, setProductDetails] = useState(null);
  const searchParams = useSearchParams(); // Use useSearchParams to get query parameters
console.log(productDetails , 'productDetails')
  useEffect(() => {
    // Check if searchParams is defined before accessing it
    
      const productId = searchParams.get('productId');
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/products/${productId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch product details');
          }
          const data = await response.json();
          setProductDetails(data);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }


      if (productId) {
        fetchProductDetails();
      }
    }
  }, []);

  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {productDetails.id}</p>
      <p>Brand: {productDetails.brand}</p>
      <p>Description: {productDetails.description}</p>
      <p>Price: {productDetails.price}</p>
      {/* Display other product details as needed */}
    </div>
  );
}

export default ProductPage;
