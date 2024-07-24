import React, { useContext } from 'react';
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
// import dropdown_icon from '../Components/Images/dropdown.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />

      <div className='shopcategory-indexSort'>
        <p>
          <span>showing 1-12</span>out of 35 products
        </p>


      </div>

      <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>


          }else{
            return null;
          }

        })}
      </div>

      
    </div>
  )
}

export default ShopCategory