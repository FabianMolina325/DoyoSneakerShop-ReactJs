import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';

import { getFirestore, doc, getDoc } from 'firebase/firestore';

useEffect(() => {
  const db = getFirestore();

  const sneakerRef = doc(db, "products", "14aSME7j6mO2qN7iTIO8")

  getDoc(sneakerRef).then((snapshot) => {
    if(snapshot.exists()){
      setSneakerFetch({...snapshot.data})
    }
  })

})

export default function Product() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140px"
        max-width="150px"
        image="https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-1-mid-light-smoke-grey-2022-554724-078_600x.png?v=1641232018"
        alt={category}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {accounting.formatMoney({price})}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">Ver Mas</Button>
      </CardActions>
    </Card>
  );
}

