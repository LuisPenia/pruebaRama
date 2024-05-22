import React, { useEffect, useState } from 'react';
import Card from '../Card/Card.jsx';
import './PorductoList.css'

const ProductList = ({ products }) => {
  const [shuffledProducts, setShuffledProducts] = useState([])

  useEffect(() => {
    const shuffledArray = shuffleArray(products);
    setShuffledProducts(shuffledArray.slice(0, 10));
  }, [products]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const divideIntoGrid = (products) => {
    const grid = [];
    const maxRows = 5;
    const maxCols = 2;
    const totalItems = maxRows * maxCols;

    const filledProducts = [...products, ...Array(totalItems - (products.length % totalItems)).fill(null)];


    for (let row = 0; row < maxRows; row++) {
      grid[row] = [];
      for (let col = 0; col < maxCols; col++) {
        const index = row * maxCols + col;
        if (index < products.length && index < 10) {
          grid[row][col] = products[index];
        } else {
          grid[row][col] = null;
        }
      }
    }

    return grid;
  };

  const grid = divideIntoGrid(shuffledProducts);

  return (
    
    <div className="product-grid">
      <h2>Lo más buscado</h2>
      <div>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((product, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className="col">
                {product ? <Card product={product} /> : <div className="empty-card" />}
              </div>
            ))}
          </div>
        ))}
        </div>

      </div>


  );
};

export default ProductList;

