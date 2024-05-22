import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = ({ products, onAddProduct }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrls, setImageUrls] = useState(['']);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingProduct = products.find((product) => product.name === name);
    if (existingProduct) {
      setError('El nombre del producto ya está en uso');
      return;
    }
    const newId = products.length + 1;
    const newProduct = {
      id: newId,
      name,
      code,
      price: parseFloat(price),
      description,
      imageUrls,
    };
    console.log('Nuevo producto:', newProduct);
    onAddProduct(newProduct);
    setName('');
    setCode('');
    setPrice('');
    setDescription('');
    setImageUrls(['']);
    setError('');
    setSuccessMessage('Este artículo fue agregado correctamente');
  };

  const handleImageUrlChange = (e, index) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = e.target.value;
    setImageUrls(newImageUrls);
  };

  const addImageUrl = () => {
    setImageUrls([...imageUrls, '']);
  };

  const removeImageUrl = (index) => {
    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1);
    setImageUrls(newImageUrls);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="form-error">{error}</div>}
        {successMessage && <div className="form-success">{successMessage}</div>}
        <input
          type="text"
          placeholder="Nombre del producto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="Código del producto"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="form-input"
        />
        <textarea
          placeholder="Descripción del producto"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="form-textarea"
        />
        <div className="form-section">
          <h3 className="form-section-title">Imágenes</h3>
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="form-image-input">
              <input
                type="text"
                placeholder="URL de la imagen"
                value={imageUrl}
                onChange={(e) => handleImageUrlChange(e, index)}
                className="form-input"
              />
              {index > 0 && (
                <span
                  className="form-image-remove"
                  onClick={() => removeImageUrl(index)}
                >
                  Eliminar
                </span>
              )}
            </div>
          ))}
          <button type="button" onClick={addImageUrl} className="form-add-image">
            Agregar imagen
          </button>
        </div>
        <button type="submit" className="form-submit">
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default AddProduct;