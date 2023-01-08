import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../redux/slices/ProductSlice';
import SingleProduct from './SingleProduct';
import './ProductList.css'

function ProductList() {

    const dispatch = useDispatch();

    const products = useSelector(state=>state.productReducer.products)
    const status = useSelector(state=>state.productReducer.status);

    useEffect(()=>{
        // fetchData();
        dispatch(fetchData())
    },[])

    // redux thunk se kro isse 
    // async function fetchData(){
    //     const response = await fetch('https://api.escuelajs.co/api/v1/products');

    //     const data = await response.json();

    //     dispatch(loadProducts(data));
    // }

    if(status == 'loading'){
        return <h2>Loading.....</h2>
    }

  return (
    <div className='productList'>
        {products.map((item)=>{
            return <h3>
                <SingleProduct product={item} key={item.id}/>
            </h3>
        })}
    </div>
  )
}

export default ProductList