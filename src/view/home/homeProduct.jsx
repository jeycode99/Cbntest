import React, { useState, useCallback } from 'react';
//components
import SidebarMenu from '@/components/sidebarMenu';
import ProductList from '@/components/productList';
import Loading from '@/components/loadingMessage';
import Error from '@/components/errorMessage';
//hooks
import useProducts from '@/hooks/useProducts';

const HomeProduct = () => {
  const { products, loading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const categories = [...new Set(products.map((product) => product.category))];

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="flex">
      <SidebarMenu categories={categories} onCategoryChange={handleCategoryChange} />
      <div className="w-5/6 p-8 bg-slate-50">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Product List</h1>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default HomeProduct;
