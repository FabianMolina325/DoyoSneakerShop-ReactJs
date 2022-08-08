import * as React from 'react';
import CartIcon from '../CartIcon/CartIcon';
import './Navbar.css'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <header className="navbar">
          <li><NavLink activeClassName='active' to='/Home'>DoyoSneakerShop</NavLink></li>
          <li><NavLink activeClassName='active' to='/Jordan'>Jordan</NavLink></li>
          <li><NavLink activeClassName='active' to='/Adidas'>Adidas</NavLink></li>
          <CartIcon /> 
    </header>         
  );
}
