import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import {Button} from 'antd'
import {FaRupeeSign} from 'react-icons/fa'
import { countInc } from '../../../redux/slices/CartSlice'


const Cart = () => {

    const cart = useSelector(state=>state.cartReducer.cart);
    const cartObj = useSelector(state=>state.cartReducer.cartObj);
    
    let itemPrice = 0;
    let tax = 50;
    let count = 0;
    cart.forEach((value)=>{
      count += value.quantity;
    })


  return (
    <div>
        <div className="shopping-cart">
            <h1>Shopping Cart</h1>
            <span>{`Total Items : ${count}`}</span>
        </div>
        <div className='flex-container'>
        {cartObj.map((cartvalue)=>{
            itemPrice = itemPrice + cartvalue.price;

            return <div className='floating'>
            <div className="img">
                <img src="https://via.placeholder.com/170x100" alt="" />
            </div>
            <div className="content">
                <h2>{cartvalue.title}</h2>
                <p>{cartvalue.description}</p>
                <h3>{cartvalue.price}<FaRupeeSign/></h3>
            </div>
            </div>
        })}
    </div>
    <div className="payment">
    <h2>{`Total Price     : ${itemPrice}`}<FaRupeeSign/></h2>
    <h2>{`Tax             : ${itemPrice==0 ? 0:tax}`}<FaRupeeSign/></h2>
    <h2>{`Net Total       : ${itemPrice + (itemPrice==0 ? 0:tax)}`}<FaRupeeSign/></h2>
    <br />
    <Button type='primary'>Proceed to Payment</Button>
    </div>
    </div>
  )
}

export default Cart