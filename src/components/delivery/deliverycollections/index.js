import React from 'react'
import Slider from 'react-slick/lib/slider';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './deliverycollections.css'
import DeliveryItem from './deliveryitem';


const deliveryItems=[
{
    id:1,
    title:"Sweets",
    cover:"https://b.zmtcdn.com/data/dish_images/a9481ab8dce1f7cd553fe5dd6f47f7b91637241749.png"
},
{
    id:2,
    title:"Dosa",
    cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
},
{
    id:3,
    title:"Vada",
    cover:"https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png"
},
{
    id:4,
    title:"Sandwich",
    cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
},
{
    id:5,
    title:"Idli",
    cover:"https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png"
},
{
    id:6,
    title:"Chaat",
    cover:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
},
{
    id:7,
    title:"Coffee",
    cover:"https://b.zmtcdn.com/data/dish_images/865258169afc30225d6747c54041e8951634966783.png"
},
{
    id:8,
    title:"Coffee",
    cover:"https://b.zmtcdn.com/data/dish_images/743abc4d4dad9c3f8163084ae4b30bad1635165809.png"
}
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

const deliverycollections = ({item}) => {
  return (
    <div className='delivery-collection'>
      <div className='max-width'>
          <div className='collection-title'>Eat what makes you happy</div>
          <Slider {...settings}>
              {deliveryItems.map((item)=>{
                  return <DeliveryItem item={item}/>
              })}
          </Slider>
      </div>
     
    </div>
  )
}

export default deliverycollections
