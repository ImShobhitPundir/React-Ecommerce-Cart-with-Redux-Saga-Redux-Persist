import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productSearch } from '../redux/productAction';
import { useDispatch } from 'react-redux';

export default function Header() {
    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch()
    console.log("Header data:", result)
    return (
        <div className='header'>
            <Link to="/"><h1 className='logo'>Logo</h1></Link>
            <div className="search-box">
                <input type="text"  placeholder="Search..." onChange={(e)=>dispatch(productSearch(e.target.value))}/>
            </div>
            <Link to="/cart">
                <div className='cart-div'>
                    <span>{result.length}</span>
                    <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="" />
                </div>
            </Link>
        </div>
    )
}
