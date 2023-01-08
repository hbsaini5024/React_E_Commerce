import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import './Navbar.css'
import { Link } from 'react-router-dom'
import ProductList from '../product/ProductList'

function Navbar() {

    const cart = useSelector(state=>state.cartReducer.cart);

    let count = 0;

    cart.forEach((value)=>{
      count += value.quantity;
    })

  return (
    <>
    <nav>
        <h2 className="banner">My Myntra</h2>
        <div className="right-layout">
            <div className="cart-layout">
                  <Link to='/cart'><AiOutlineShoppingCart/></Link>
                <h3>{count}</h3>
            </div>
        </div>
    </nav>
    <ProductList/>
    </>
  )
}

export default Navbar