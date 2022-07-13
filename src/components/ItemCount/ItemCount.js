import { useState } from "react" ;
import './ItemCount.css';


function ItemCount() {
    const [num, setNum] = useState(0);

    const sumar = () => {
        setNum(num + 1)
    }
    const restar = () => {
        if (num>0)
        setNum(num - 1)
    }
    
    return ( 
        <>
            <div className="ItemCounter">
                <button className="boton" onClick={restar}>-</button>
                <p>{num}</p>
                <button className="boton" onClick={sumar}>+</button>
            </div>
        </>
    )
}

export default ItemCount