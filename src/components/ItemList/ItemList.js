import Product from '../Item/Product'
import './ItemList.css'

function ItemList(props) {
  return(
    <div className='itemList'>
      {props.items.map((item) =>(
        <Product 
          title={item.title}
          price={item.price}
          img={item.img}
        />
      ))}
    </div>
  )
}

export default ItemList