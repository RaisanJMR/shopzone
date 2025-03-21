const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 py-24 px-6 text-center overflow-hidden shadow-inner">
      {/* Optional background image */}
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Banner background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Overlay content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-4 animate-fadeIn">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ShopZone</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-800 mb-6 animate-fadeIn delay-100">
          Discover unbeatable deals on fashion, electronics, and home essentials!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition-all duration-300 animate-fadeIn delay-200">
            Shop Now
          </button>
          <button className="bg-white hover:bg-gray-100 text-blue-700 px-6 py-3 rounded-lg text-lg border border-blue-600 transition-all duration-300 animate-fadeIn delay-300">
            View Offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
