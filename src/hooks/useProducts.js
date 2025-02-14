'use client';
import { useState, useEffect } from 'react';
import productData from '@/api/product.json';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSuccess = true;

          if (isSuccess) {
            resolve(productData.products);
          } else {
            reject('Error loading data');
          }
        }, 2000);
      });
    };

    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    return () => {
      setLoading(false);
    };
  }, []);

  return { products, loading, error };
};

export default useProducts;
