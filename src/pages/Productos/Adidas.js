import { useEffect, useState } from 'react';
import Product from '../../components/Item/Product'

function Container() {

  const [info, setInfo] = useState([])
  
  useEffect(()=>{
    fetch('adidas.json')
    .then((resp) => resp.json())
    .then((data) => setInfo(data))
  }, [])
  return (
      <section className='body'>
        <div>
          <h1>Catalogo de Zapatillas</h1>
          <h3>Elegi tus Adidas</h3>
        </div>
        <div className='catalogo'>
          {info.map(i => <Product product={i.name} price={i.price} img={i.image} stock={i.stock} category={i.category} />)}
        </div>
      </section>
  );
}

export default Container;