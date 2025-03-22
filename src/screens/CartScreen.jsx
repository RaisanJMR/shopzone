import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import { useCart } from '../hooks/useCart';
import { FaShoppingCart } from 'react-icons/fa'; // 👈 import icon

const CartScreen = () => {
    const { cart, dispatch } = useCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="p-4 flex-1 container mx-auto">
                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                        <FaShoppingCart className="text-8xl mb-4" />
                        <p className="text-lg">Your cart is empty</p>
                    </div>
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
            <Footer/>
        </div>
    );
};

export default CartScreen;
