import { Link } from 'react-router';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';

const ProductCard = ({ product }) => {
  const { cart, dispatch } = useCart();

  const cartItem = cart.find(item => item.id === product.id);
  const quantityInCart = cartItem?.quantity || 0;
  const remainingStock = product.rating.count - quantityInCart;

  const addToCart = () => {
    if (remainingStock > 0) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= Math.floor(rate)
          ? <FaStar key={i} className="text-yellow-400 text-sm" />
          : <FaRegStar key={i} className="text-yellow-400 text-sm" />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <img src={product.image} alt={product.title} className="h-48 object-contain mb-4" />
      
      <h2 className="font-semibold text-lg text-blue-900 line-clamp-2 mb-1">{product.title}</h2>
      <p className="text-sm text-gray-500 mb-1 capitalize">{product.category}</p>
      <p className="font-bold text-blue-700 text-lg">${product.price}</p>

      <div className="flex items-center mt-2 text-sm">
        {renderStars(product.rating.rate)}
        <span className="ml-2 text-gray-600">({remainingStock} in stock)</span>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={addToCart}
          className={`px-3 py-2 text-sm font-medium rounded-lg transition w-full ${
            remainingStock > 0
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          }`}
          disabled={remainingStock <= 0}
        >
          {remainingStock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>

        <Link
          to={`/product/${product.id}`}
          className="px-3 py-2 text-sm font-medium text-blue-700 border border-blue-600 rounded-lg hover:bg-blue-50 w-full text-center transition"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
