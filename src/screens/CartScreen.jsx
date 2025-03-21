import React from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { useCart } from '../hooks/useCart';

const CartScreen = () => {
    const { cart, dispatch } = useCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="p-4 flex-1 container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                        <div className="text-right font-bold text-lg">Total: ${total.toFixed(2)}</div>
                        <button
                            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
                            onClick={() => dispatch({ type: 'CLEAR_CART' })}
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CartScreen;
