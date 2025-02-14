import React from 'react';

const SidebarMenu = ({ categories, onCategoryChange }) => {
  return (
    <div className="w-1/6 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul>
        <li>
          <button
            onClick={() => onCategoryChange('')}
            className="w-full text-left py-2 hover:bg-gray-700 px-2"
          >
            All
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryChange(category)}
              className="w-full text-left py-2 hover:bg-gray-700 px-2"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
