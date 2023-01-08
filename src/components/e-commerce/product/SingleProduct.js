import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart, removeCartObj, removeFromCart, saveCartObj } from '../../../redux/slices/CartSlice';
import { cartDecrement, cartIncrement } from '../../../redux/slices/ProductSlice';
import './SingleProduct.css'
import {FaRupeeSign} from 'react-icons/fa'

function SingleProduct({product}) {

  const dispatch = useDispatch();
  // console.log(product);


  const cart = useSelector(state=>state.cartReducer.cart);

  const currItem = cart.find(item=>item.id == product.id);
  const currQuantity = currItem ? currItem.quantity : 0;

  return (
    <div className='singleProduct'>
        <img className='productImg' src={product.images[0]} alt={product.title} />
        <div className="productInfo">
        <h2 className='productTitle'>{product.title}</h2>
        <p className='productPrice'>{product.price}<FaRupeeSign/></p>
        </div>
        <div className="cartInfo">
            <button className='button' onClick={()=>{dispatch(removeFromCart(product.id))
            dispatch(removeCartObj(product.id))}}>-</button>
            <h4>{currQuantity}</h4>
            <button className='button' onClick={()=>{dispatch(addToCart(product.id))
            dispatch(saveCartObj(product))}}>+</button>
        </div>
    </div>
  )
}

export default SingleProduct