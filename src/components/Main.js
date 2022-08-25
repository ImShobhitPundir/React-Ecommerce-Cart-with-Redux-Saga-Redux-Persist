
import { addToCart,removeFromCart,emptyCart } from '../redux/action';
import { productList } from '../redux/productAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Main() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.productData);
  const cartData = useSelector((state)=>state.cartData);
  let count;
  useEffect(()=>{
    dispatch(productList())
  },[])
  
  function checkCart(id){
    let visibility;
    //let res = cartData.find(item => item.id.toString().includes(id));
    let res = cartData.find(item => item.id === id);
    if(res){
      visibility = 'hidden';
    }else{
      visibility = 'visible';
    }
    return visibility;
  }
  
  //console.warn("filtered data",res)
  return (
    <div>
     
     
     
      <div className='product-container'>
        {
          productData.map((item)=>(
            <div className='product-item'>
       
              <img src={item.photo} alt="" />
              <div className='title'>{item.name}</div>
              <div className='price'>Rs. {item.price}</div>
              <div className='brand'>{item.brand}</div>
              
              <button className='add-cart' onClick={()=>dispatch(addToCart(item))} style={{visibility:checkCart(item.id)}}>Add To Cart</button>
              {/* <button className='remove-cart' onClick={()=>dispatch(removeFromCart(item.id))}>Remove from Cart</button> */}
            </div>
          ))
        }
      </div>
    </div>
  );
}
