import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, emptyCart, updateToCart,addToCart } from '../redux/action';
import { cartData } from '../redux/reducer';

export default function Cart() {
    const dispatch = useDispatch()
    const result = useSelector((state) => state.cartData);
    const amount = result.length && result.map(item=>item.price*item.quantity).reduce((prev,next)=>prev+next);
    return (
        <div>
            {/* <Link to="/">
                Back to Product Page
               
            </Link> */}
            <h1>Cart Page</h1>
            
            <div className='cart-table'>
                <table>
                    <tr key="">
                        <th>S.No.</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                    {
                        result.map((item, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td><img src={item.photo} alt="" style={{width:'80px'}}/></td>
                                <td>{item.name}</td>
                                <td>{item.price * item.quantity}</td>
                                <td>{item.quantity} <button onClick={()=>dispatch(addToCart(item))}>+</button> <button onClick={()=>dispatch(updateToCart(item))}>-</button></td>
                                <td><button className='remove-cart' onClick={() => dispatch(removeFromCart(item.id))}>X</button></td>
                            </tr>
                        ))
                    }
                </table>
                <div className='price-details'>
                    <div className='price'><span>Price: </span> <span>{amount}</span></div>
                    <div className='price'><span>Discount: </span> <span>{amount/10}</span></div>
                    <div className='price'><span>Tax: </span> <span>0</span></div>
                    <div className='price'><span style={{fontWeight:'bold'}}>Total: </span> <span style={{fontWeight:'bold'}}>{amount - (amount/10)}</span></div>
                    <div className='price'><span><button onClick={()=>dispatch(emptyCart())}>Empty Cart</button> </span> <span><button >Checkout</button></span></div>
                    

                </div>
            </div>
        </div>
    )
}
