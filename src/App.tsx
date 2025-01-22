import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProductList />
        </div>
        <div className="lg:col-span-1">
          <Cart />
        </div>
      </div>
    </Layout>
  );
};

export default App;
