import React, { useEffect, useContext } from "react";
import IconButton from '@mui/material/IconButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

function CartIcon() {
  return (
    <div className='cartIcon'>
        <IconButton aria-label='show cart items' color='inherit' position='right'>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart fontSize='large' position='right' />
              </Badge> 
          </IconButton>
    </div>
  );
}

export default CartIcon;