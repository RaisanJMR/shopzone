import React from 'react';
import { useCart } from '../hooks/useCart';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div className="flex items-center justify-between border-b pb-3">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
        <div>
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          className="text-xs text-red-600 hover:underline cursor-pointer"
          onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
