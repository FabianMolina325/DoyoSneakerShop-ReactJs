import ItemCount from '../ItemCount/ItemCount';
import './Product.css';

function Card({product, price, img, stock}) {
  return (
    <div className='carts'>
        <div>
          <img src={img} />
          <p><span>{price}</span>$</p>
        </div>
      <p className='title'>{product}</p>
      <a href="" data-id="1" className='btn-add-cart'>Añadir al Carro</a>
      <ItemCount unidades={stock} />
    </div>
  );
}

export default Card;