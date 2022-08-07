import * as React from 'react';
import CartIcon from '../CartIcon/CartIcon';
import './Navbar.css'


export default function Navbar() {
  return (
    <header className="navbar">
      <p>DoyoSneakerShop</p>
      <a>Productos</a>
      <CartIcon />
    </header>         
  );
}
