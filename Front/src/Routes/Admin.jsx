import { Link } from 'react-router-dom'
import './Admin.css'

const Admin = () => {
  return (
<div className='adm-div'>
  <section className='adm-search'>
    <h1>Bienvenido Administrador</h1>
    <input type="text" placeholder="Buscar producto..."/>
  </section>
  <div className="adm-container">
    <section className="adm">
      <Link to={"/admin/AddProduct"}>
        <button>Agregar producto</button>
      </Link>
      <Link to={"/admin/ModifyProduct"}>
        <button>Modificar producto</button>
      </Link>
      <Link to={"/admin/DeleteProduct"}>
        <button>Eliminar producto</button>
      </Link>
    </section>
  </div>
</div>

  )
}

export default Admin