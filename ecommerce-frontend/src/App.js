import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>E-Commerce Website</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">Price: ${product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
