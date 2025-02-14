import React from 'react';

const ProductList = ({ products }) => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center max-w-xs mx-auto">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-contain mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <p className="text-lg font-semibold text-gray-900 mb-2">Price: ${product.price}</p>
            <p className="text-sm text-gray-500 mb-2">Discount: {product.discountPercentage}%</p>
            <p className="text-sm text-yellow-500 mb-2">Rating: {product.rating} / 5</p>
            <p className="text-sm text-gray-500 mb-2">Stock: {product.stock}</p>
            <p className="text-sm text-gray-500">Category: {product.category}</p>
          </div>
        ))}
      </div>
  );
};

export default ProductList;
