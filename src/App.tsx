import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-primary-100 via-white to-secondary-100">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={
                  <div className="space-y-8">
                    <header className="text-center">
                      <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text animate-pulse-slow">
                        Welcome to Shopify
                      </h1>
                      <p className="mt-4 text-gray-600 text-lg">
                        Discover amazing products at great prices
                      </p>
                    </header>
                    <ProductList />
                  </div>
                } />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </main>
          
          {/* Floating Action Button */}
          <div className="fixed bottom-8 right-8">
            <button 
              className="bg-accent-500 hover:bg-accent-600 text-white p-4 rounded-full shadow-lg transform transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-opacity-50"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
