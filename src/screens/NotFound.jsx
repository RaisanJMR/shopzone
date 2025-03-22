import React from 'react';
import { Link } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700 p-6">
            <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
            <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
            <p className="text-lg mb-6">Sorry, the page you’re looking for doesn’t exist.</p>
            <Link
                to="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg transition duration-200"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
