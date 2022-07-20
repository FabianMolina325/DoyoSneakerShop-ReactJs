import { useState , useEffect } from 'react'
import Product from '../Item/Product'
import { getFirestore , doc , getDoc , collection } from 'firebase/firestore'

export default function ItemList({title,price,img}) {

  const [itemsFetch, setItemsFetch] = useState([])
  
useEffect(() => {
    const db = getFirestore();

    const itemsRef = collection( db, "products" )

    getDocs(itemsRef).then((snapshot) => {
      if(snapshot.exists()){
          setItemsFetch([snapshot.docs.maps((doc) => doc.data())])
      }
    })

}, [])
  
  return (
      <section className='cuerpo'>
        <div>
          <h2>Catalogo de Zapatillas</h2>
          <p>Elegi tu producto</p>
        </div>
        <div className='catalogo'>
          <Product items={itemsFetch} />
        </div>
      </section>
  )
}