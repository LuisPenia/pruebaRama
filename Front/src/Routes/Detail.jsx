import { useParams, useNavigate } from 'react-router-dom';
import "./detail.css";

const Detail = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const { name, description, imageUrl } = product;

  return (
    <div className="detail">
      <div className="header-detail">
      <button className="volver-btn" onClick={() => navigate(-1)}>←</button>
        <h2>{name}</h2>
      </div>
      <div className="content">
        <img src={imageUrl} alt={name} />
        <div><h3>Descripción del disfraz:</h3>
        <p>{description}</p></div>

      </div>
    </div>
  );
};

export default Detail;