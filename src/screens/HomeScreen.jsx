import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}products`);
      const data = await res.json();
      setProducts(data);
      setFiltered(data);
    };
    const fetchCategories = async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}products/categories`);
      const data = await res.json();
      setCategories(data);
    };
    fetchData();
    fetchCategories();
  }, []);

  const handleFilter = (categories) => {
    setSelected(categories);
    setFiltered(products.filter(p => p.category === categories));
  };

  const clearFilter = () => {
    setSelected("");
    setFiltered(products);
  };
  if (!filtered) return <div className="text-center mt-10">Loading...</div>;
  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto">
      <Header />
      <Banner />
      <main className="container mx-auto p-6 min-h-[80vh]">
        <FilterBar
          categories={categories}
          selected={selected}
          onChange={handleFilter}
          onClear={clearFilter}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    <Footer/>
    </div>
  );
};

export default Home;
