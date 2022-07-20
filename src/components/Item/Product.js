import './Product.css';

function Card(props) {
  return (
        <div class="carts">
          <h2>{props.title}</h2>
          <p>{props.price}</p>    
          <img src={props.img} />         
        </div>
  );
}

export default Card;