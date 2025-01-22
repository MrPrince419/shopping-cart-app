import React from 'react';
import { useCart } from '../hooks/useCart';
import { ShoppingCart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { items } = useCart();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {totalItems > 0 && (
                <span 
                  className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium"
                >
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Shopping Cart App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
