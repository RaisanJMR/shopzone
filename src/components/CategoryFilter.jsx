import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory, onClear }) => (
  <div className="flex gap-2 flex-wrap mb-4">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => onSelectCategory(cat)}
        className={`px-3 py-1 rounded ${
          selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        {cat}
      </button>
    ))}
    {selectedCategory && (
      <button onClick={onClear} className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer">
        Clear Filter
      </button>
    )}
  </div>
);

export default CategoryFilter;
