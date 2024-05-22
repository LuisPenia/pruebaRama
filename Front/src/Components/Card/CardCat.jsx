import React from 'react'
import "./Card.css";

const CardCat = ({ product }) => {

    if (!product || !product.id || !product.name ||!product.categoria || !product.description || !product.price || !product.imageUrl) {
        return null; // O puedes renderizar un componente de carga o un mensaje de error
      }
    
      const { id, name, categoria, description, price, imageUrl } = product;
    
      return (
        <div className="card">
          <div className="imageContent">
          <h3>{categoria}</h3>
          <img src={imageUrl} alt={name} />
          </div>
        </div>
      );

}

export default CardCat