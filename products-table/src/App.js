import React, { useState } from 'react';
import classnames from 'classnames';

// Components
import Stack from './Components/Base/Stack';
import ProductRow from './Components/Product/ProductRow';

// CSS
import './App.scss';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductRowClick = (index) => {
    setIsSidebarOpen(!isSidebarOpen);
    setSelectedProduct(index);
  }

  return (
    <Stack
      className={
        classnames(
          'app',
          { 'is-sidebar-open': isSidebarOpen, }
        )
      }
      direction="horizontal"
      gap="none"
    >
      <div className="primary">
        <h2>Products</h2>

        <Stack
          gap="x-small"
        >

          {Array(8).fill().map((_, index) => (
            <ProductRow
              key={index}
              isSelected={selectedProduct && selectedProduct.id === index}
              onClick={() => handleProductRowClick(index)}
            />
          ))}
        </Stack>
      </div>

      <div className="secondary">
        <h2>Product Details</h2>
      </div>
    </Stack>
  );
}

export default App;
