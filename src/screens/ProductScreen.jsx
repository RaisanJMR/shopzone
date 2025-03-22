import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useCart } from '../hooks/useCart';
import Header from '../components/Header';
import { FaStar, FaRegStar, FaLongArrowAltLeft  } from 'react-icons/fa';

const ProductScreen = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const { dispatch } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BASE_URL}products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                console.error('Error fetching product:', err);
            }
        };

        fetchProduct();
    }, [id]);

    const renderStars = (rate) => {
        const stars = [];
        const fullStars = Math.floor(rate);
        const remaining = 5 - fullStars;
        for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={`star-${i}`} className="text-yellow-500" />);
        for (let i = 0; i < remaining; i++) stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-300" />);
        return stars;
    };

    if (!product) return <div className="text-center mt-10">Loading...</div>;

    return (
        <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-blue-600 hover:underline cursor-pointer"
          >
            <FaLongArrowAltLeft />
          </button>
  
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:w-1/2 object-contain h-[400px]"
            />
            <div className="md:w-1/2">
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-xl font-semibold mb-4">${product.price}</p>
  
              <div className="flex items-center mb-2">
                {renderStars(product.rating?.rate || 0)}
                <span className="ml-2 text-sm text-gray-600">
                  ({product.rating?.count || 0} in stock)
                </span>
              </div>
  
              <button
                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                className={`px-6 py-2 rounded text-white mt-2 transition cursor-pointer ${
                  product.rating?.count > 0
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={product.rating?.count <= 0}
              >
                {product.rating?.count > 0 ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        </div>
      </>    );
};

export default ProductScreen;
