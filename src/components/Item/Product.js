import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';

export default function Product() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140px"
        max-width="150px"
        image="https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-1-mid-light-smoke-grey-2022-554724-078_600x.png?v=1641232018"
        alt="Air Jorda 1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Air Jordan 1 Mid Light Smoke Grey Anthracite
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {accounting.formatMoney(24450)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">Ver Mas</Button>
      </CardActions>
    </Card>
  );
}

