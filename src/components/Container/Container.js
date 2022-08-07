import { useEffect, useState } from 'react';
import Product from '../Item/Product'

function Container() {

  const [info, setInfo] = useState([])
  
  useEffect(()=>{
    fetch('product-data.json')
    .then((resp) => resp.json())
    .then((data) => setInfo(data))
  }, [])
  return (
      <section className='body'>
        <div>
          <h2>Catalogo de Zapatillas</h2>
          <p>Elegi tu producto</p>
        </div>
        <div className='catalogo'>
          {info.map(i => <Product product={i.name} price={i.price} img={i.image} stock={i.stock} />)}
        </div>
      </section>
  );
}

export default Container;