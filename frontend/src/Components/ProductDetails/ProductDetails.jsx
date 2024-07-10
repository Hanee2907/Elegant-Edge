import React, { useContext } from 'react'
import './ProductDetails.css'
import star1 from "../Images/star1.png"
import star2 from "../Images/star2.png";
import { ShopContext } from '../../Context/ShopContext';


const ProductDetails = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    < div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>

            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image}/>
            </div>

        </div>

        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
      

        <div className='productdisplay-right-star'>
            <img src={star1} alt=''/>
            <img src={star1} alt=''/>
            <img src={star1} alt=''/>
            <img src={star1} alt=''/>
            <img src={star2} alt=''/>
            <p>(122)</p>
           
        </div>

        <div className='productdisplay-right-prices'>
            <div className='productdisplay-right-price-old'>${product.old_price}</div>
            <div className='productdisplay-right-price-new'>${product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>

        </div>
        <div className='productdisplay-right-size'>
            <h1>select size</h1>
            <div className='productdisplay-right-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
            </div>
        
        <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
        <p className='productdisplay-right-category'><span>Category:</span>Women,Tshirt</p>
        <p className='productdisplay-right-category'><span>Category:</span>Modern,Tshirt</p>

        </div>
              
        </div>
      
    </div>
  )
}

export default ProductDetails
