const FilterBar = ({ categories, selected, onChange, onClear }) => (
    <div className="flex gap-4 items-center mb-6">
      <select
        value={selected}
        onChange={e => onChange(e.target.value)}
        className="border px-3 py-2 rounded-md shadow-sm "
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat.toUpperCase()}</option>
        ))}
      </select>
      {(
        <button
          onClick={onClear}
          className="text-sm text-blue-600 hover:underline cursor-pointer"
        >
          Clear Filter
        </button>
      )}
    </div>
  );
  
  export default FilterBar;
  