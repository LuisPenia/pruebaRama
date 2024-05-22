import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Routes/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Admin from './Routes/Admin'
import AddProduct from './Routes/AddProduct'
import React, { useState } from 'react';
import Detail from './Routes/Detail'





function App() {


/*
  // Importamos la función 'leerDisfraces' desde el archivo 'leerDisfraces.js'
  const leerDisfraces = require('./leerDisfraces');

  // Llamamos a la función 'leerDisfraces' pasando la ruta del archivo CSV
  leerDisfraces('disfraces.csv')
    .then((disfraces) => {
      // Este bloque se ejecuta si la promesa se resuelve exitosamente
      console.log(disfraces); // Imprimimos el array 'disfraces' en la consola
    })
    .catch((error) => {
      // Este bloque se ejecuta si la promesa es rechazada
      console.error('Error al leer el archivo CSV:', error); // Imprimimos el error en la consola
    });
*/







  const [products, setProducts] = useState([
    { id: 1,categoria: ' Niños y niñas ' ,name: ' Spiderman ', description: ' Traje ajustado de licra con estampado de telaraña, máscara y lanzadores de telarañas', price: 21.99, imageUrl:[ ' https://m.media-amazon.com/images/I/71RwXhXL71L._AC_SX569_.jpg '] },
    { id: 2,categoria: ' Niños y niñas ' ,name: ' Bombero ', description: ' Mono de trabajo resistente al fuego, casco y herramientas ', price: 19.75, imageUrl:[ ' https://m.media-amazon.com/images/I/81F8WH2Oy-L._AC_SX569_.jpg '] },
    { id: 3,categoria: ' Mujer ' ,name: ' Cleopatra ', description: ' Vestido largo de tela brillante, collar y brazaletes dorados ', price: 25.49, imageUrl: [' https://m.media-amazon.com/images/I/61ej8HfX28L._AC_SY550_.jpg '] },
    { id: 4,categoria: ' Mujer ' ,name: ' Arlequin mujer ', description: ' Mono de cuerpo entero negro y rojo decorado con rombos, volante rojo en el huello y antifaz negro. ', price: 32.74, imageUrl: [' https://m.media-amazon.com/images/I/61rkb1JXfoL._AC_SL1470_.jpg '] },
    { id: 5,categoria: ' Hombre ' ,name: ' Caballero medieval ', description: ' Túnica con capa, cinturón, 2 medallones y puños. Otros accesorios no están incluidos. ', price: 39.89, imageUrl: [' https://m.media-amazon.com/images/I/91huuXnwjyL._AC_SX679_.jpg ' ]},
    { id: 6,categoria: ' Mujer ' ,name: ' Maléfica ', description: ' Vestido con broche desmontable y tocado de personaje ', price: 64.53, imageUrl: [' https://m.media-amazon.com/images/I/81aNvdNWr0L._AC_SY879_.jpg '] },
    { id: 7,categoria: ' Hombre ' ,name: ' Elvis ', description: ' Mono blanco con gliter dorado, estrellas y pedrería impresa ', price: 84.36, imageUrl: [' https://m.media-amazon.com/images/I/71s9MApCJNL._AC_SX679_.jpg ' ]},
    { id: 8,categoria: ' Niños y niñas ' ,name: ' Dinosaurio ', description: ' Mono cómodo para niños pequeños, adaptable con la edad, de franela de alta calidad. ', price: 34.4, imageUrl: [' https://m.media-amazon.com/images/I/51wckD-VogL._AC_SX679_.jpg ' ]},
    { id: 9,categoria: ' Mascotas ' ,name: ' Chuky mascota ', description: ' Hecho de algodón transpirable, suave y amigable para la piel y fibra de poliéster, para la mascota. ', price: 7.69, imageUrl: [' https://m.media-amazon.com/images/I/61j5cIUdZxL.__AC_SY300_SX300_QL70_ML2_.jpg '] },
    { id: 10,categoria: ' Mascotas ' ,name: ' Murciélago mascota ', description: ' Alas de muerciélago para mascota, con correa y cascabel de calabaza ', price: 21.36, imageUrl: [' https://m.media-amazon.com/images/I/61-nzdIJKRL._AC_SX679_.jpg '] },
    { id: 11,categoria: ' Mujer ' ,name: ' Princesa Ogro ', description: ' Vestido verde de estilo medieval para mujer.Incluye vestido y diadema con Orejas.Corona NO incluida. ', price: 22, imageUrl: [' https://res.cloudinary.com/daawucxot/image/upload/fl_preserve_transparency/v1715787266/disfraz-de-princesa-ogro_ytau3c.jpg?_s=public-apps ' ]},
    { id: 12,categoria: ' Niños y niñas ' ,name: ' Galo Obelix ', description: ' Pantalon rayado con cinturon verde y camiseta simil piel. Casco incluido ', price: 25.75, imageUrl: [' https://res.cloudinary.com/daawucxot/image/upload/fl_preserve_transparency/v1715787265/disfraz-de-obelix-infantil_qo6jvf.jpg?_s=public-apps '] },
    { id: 13,categoria: ' Hombre ' ,name: ' Mago gris ', description: ' Incluye tunica, sombrero y cinturon. ', price: 26, imageUrl:[ ' https://res.cloudinary.com/daawucxot/image/upload/fl_preserve_transparency/v1715787263/disfraz-de-mago-gris_lsye7w.jpg?_s=public-apps '] },
    { id: 14,categoria: ' Mujer ' ,name: ' Cavernicola Betty ', description: ' Betty Picapiedra para mujer en talla M.Incluye vestido y gorro(peluca). ', price: 25.5, imageUrl: [' https://res.cloudinary.com/daawucxot/image/upload/fl_preserve_transparency/v1715787262/disfraz-de-betty-cavernicola_q5b3w0.jpg?_s=public-apps '] },
    { id: 15,categoria: ' Niños y niñas ' ,name: ' Harry Potter ', description: ' Tunica de licencia oficial de Grifindor, Incluye tunica, capucha. ', price: 22.3, imageUrl:[ ' https://res.cloudinary.com/daawucxot/image/upload/fl_preserve_transparency/v1715787267/tunica-harry-potter_btjvuw.jpg?_s=public-apps ' ]},
    { id: 16,categoria: ' Mujer ' ,name: ' Marge Simpson ', description: ' Vestido en verde amarillo con collar y peluca ', price: 21.75, imageUrl:[ ' https://res.cloudinary.com/daawucxot/image/upload/fl_preserve_transparency/v1715787263/disfraz-de-madre-de-dibujos-amarillos_cqt8xe.jpg?_s=public-apps ' ]},
    { id: 17,categoria: ' Hombre ' ,name: ' Fontanero Mario Bros ', description: ' Jardinero en azul y camiseta roja. Incluye buzo y gorra. ', price: 20.8, imageUrl: [' https://res.cloudinary.com/daawucxot/image/upload/fl_preserve_transparency/v1715787264/disfraz-de-mario_bros_i3gcsh.jpg?_s=public-apps ' ]},
    { id: 18,categoria: ' Niños y niñas ' ,name: ' Mario Bros infantil ', description: ' Incluye peto con camiseta, gorra y bigote. ', price: 19.65, imageUrl: [' https://res.cloudinary.com/daawucxot/image/upload/fl_preserve_transparency/v1715787264/disfraz-de-mario-bros-infantil_wdn3fo.jpg?_s=public-apps ' ]},
    { id: 19,categoria: ' Niños y niñas ' ,name: ' Buzz Lightyear Infantil ', description: ' Incluye buzo y capucha de tela. ', price: 22.5, imageUrl:[ ' https://res.cloudinary.com/daawucxot/image/upload/fl_preserve_transparency/v1715787262/disfraz-de-buzz-lightyear-infantil_toofoa.jpg?_s=public-apps '] },
    { id: 20,categoria: ' Hombre ' ,name: ' Avatar ', description: ' Incluye mono, cinturon, delantal y muñequeras. ', price: 24.9, imageUrl: [' https://res.cloudinary.com/daawucxot/image/upload/fl_preserve_transparency/v1715787262/disfraz-de-avatar_zscsuk.jpg?_s=public-apps ' ]},
    { id: 21,categoria: ' Niños y niñas ' ,name: ' Pikachu Bebe ', description: ' Mono de una pieza ', price: 21.99, imageUrl: [' https://m.media-amazon.com/images/I/817Af8-nswL._AC_SX569_.jpg '] },
    { id: 22,categoria: ' Mascotas ' ,name: ' SpiderDog ', description: ' Chaquetilla con accesorios aracnidos ', price: 19.75, imageUrl: [' https://m.media-amazon.com/images/I/71Xb+xZPlhL._AC_SY500_.jpg ' ]},
    { id: 23,categoria: ' Hombre ' ,name: ' Fantasma Scream ', description: ' Mascara y Traje, dos piezas ', price: 25.49, imageUrl:[ ' https://m.media-amazon.com/images/I/61UzIjubFrL._AC_SX569_.jpg ' ]},
    { id: 24,categoria: ' Hombre ' ,name: ' BabyShark ', description: ' Mono Traje de 1 cierre de cremallera ', price: 32.74, imageUrl: [' https://m.media-amazon.com/images/I/61qmbh1-bIL._AC_SX569_.jpg ' ]},
    { id: 25,categoria: ' Hombre ' ,name: ' T-Rex Divertido ', description: ' Mono Traje de 1 cierre de cremallera ', price: 39.89, imageUrl: [' https://m.media-amazon.com/images/I/91w-z3hEn9L._AC_SX522_.jpg '] },
    { id: 26,categoria: ' Mujer ' ,name: ' Monja Picara ', description: ' El disfraz unisex incluye bata negra con cuello y puños blancos adjuntos, cinturón de cuerda blanca y tocado en blanco y negro. ', price: 21.99, imageUrl:[ ' https://m.media-amazon.com/images/I/81E60yM4CoL._AC_SY550_.jpg '] },
    { id: 27,categoria: ' Hombre ' ,name: ' Morphsuits ', description: ' Disfraz oficial de Morphsuit: Morphsuits, tampoco sabemos lo que es, pero es espeluznante. Eso es todo lo que necesitas saber ', price: 19.75, imageUrl: [' https://m.media-amazon.com/images/I/61g7JfSdWDL._AC_SX569_.jpg ' ]},
]);

//console.log(products);

//console.log(products);

//console.log(products);
//console.log(products);
const handleAddProduct = (newProduct) => {
console.log('Nuevo producto:', newProduct);
setProducts([...products, newProduct]);
};

return (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home products={products} onAddProduct={handleAddProduct}/>} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/card/:id" element={<Detail products={products} />} />
      <Route
        path="/admin/AddProduct"
        element={<AddProduct products={products} setProducts={setProducts} onAddProduct={handleAddProduct} />}
      />
    </Routes>
    <Footer />
  </div>
);
}


export default App
