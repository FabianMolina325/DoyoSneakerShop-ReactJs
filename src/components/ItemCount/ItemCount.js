import { useState, useEffect } from "react" ;
import './ItemCount.css';
import Swal from "sweetalert2";


function ItemCount({ unidades }) {

    const [num, setNum] = useState(0);

    useEffect(() =>{

        if(num==unidades - 2){
            Swal.fire({
                title:'Atencion!',
                text:'Quedan pocas unidades',
                icon:'warning',
                timer:2000
            })
        }
    }, [num])

    const sumar = () => {
        if(num < unidades){
            setNum(num + 1)
        }
        else{
            Swal.fire({
                title:'Atencion!',
                text:'Ya ha llegado al maximo de Stock',
                icon:'warning',
                timer:2000
            })
        }
    }
    const restar = () => {
        if (num>0)
        setNum(num - 1)
    }
    
    return ( 
        <>
            <div className="ItemCounter">
                <button className="boton" onClick={restar}>-</button>
                <h4>{num}</h4>
                <button className="boton" onClick={sumar}>+</button>
            </div>
        </>
    )
}

export default ItemCount