import React from 'react';
import { Carousel } from 'antd';
import Slider from "react-slick";
import Component_Item from '../Game_Group/ComponentItem/Components_Item';
import './Game_Group.css';
import { CaretLeft, CaretRight, NotePencil } from 'phosphor-react';




const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotPosition:"top",
  arrows:false

 
  
};
const data=[
  {
    gamename:"Mount & Blade IIIIIIII",
    gameimg:"https://cdn2.unrealengine.com/en-egs-genshin-impact-3-2-carousel-thumb-1200x1600-f12004b2e08b.jpg",
    gamediscount:"-30%",
    gameprice:"25.00$",
    gamepriceafter:"20.00$",
  },
  {
    gamename:"Assassin's Creed Origins Standard Edition",
    gameimg:"https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg",
    gamediscount:"-50%",
    gameprice:"30.00$",
    gamepriceafter:"15.00$",
  },
  {
    gamename:"Mount & Blade IIIIIIII",
    gameimg:"https://cdn2.unrealengine.com/en-egs-genshin-impact-3-2-carousel-thumb-1200x1600-f12004b2e08b.jpg",
    gamediscount:"-30%",
    gameprice:"25.00$",
    gamepriceafter:"20.00$",
  },
  {
    gamename:"Assassin's Creed Origins Standard Edition",
    gameimg:"https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg",
    gamediscount:"-50%",
    gameprice:"30.00$",
    gamepriceafter:"15.00$",
  },
  {
    gamename:"Mount & Blade IIIIIIII",
    gameimg:"https://cdn2.unrealengine.com/en-egs-genshin-impact-3-2-carousel-thumb-1200x1600-f12004b2e08b.jpg",
    gamediscount:"-30%",
    gameprice:"25.00$",
    gamepriceafter:"20.00$",
  },
  {
    gamename:"Assassin's Creed Origins Standard Edition",
    gameimg:"https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg",
    gamediscount:"-50%",
    gameprice:"30.00$",
    gamepriceafter:"15.00$",
  },
  {
    gamename:"Mount & Blade IIIIIIII",
    gameimg:"https://cdn2.unrealengine.com/en-egs-genshin-impact-3-2-carousel-thumb-1200x1600-f12004b2e08b.jpg",
    gamediscount:"-30%",
    gameprice:"25.00$",
    gamepriceafter:"20.00$",
  },
  {
    gamename:"Assassin's Creed Origins Standard Edition",
    gameimg:"https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg",
    gamediscount:"-50%",
    gameprice:"30.00$",
    gamepriceafter:"15.00$",
  },
  {
    gamename:"Mount & Blade IIIIIIII",
    gameimg:"https://cdn2.unrealengine.com/en-egs-genshin-impact-3-2-carousel-thumb-1200x1600-f12004b2e08b.jpg",
    gamediscount:"-30%",
    gameprice:"25.00$",
    gamepriceafter:"20.00$",
  },
  {
    gamename:"Mount & Blade IIIIIIII",
    gameimg:"https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg",
    gamediscount:"-30%",
    gameprice:"25.00$",
    gamepriceafter:"20.00$",
  },
  {
    gamename:"Assassin's Creed Origins Standard Edition",
    gameimg:"https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg",
    gamediscount:"-50%",
    gameprice:"30.00$",
    gamepriceafter:"15.00$",
  },

];
const arr=[1,2,3];
const Game_Group = (props) => {
  const Games=props.Games
  return(
<div className="Game_Group_Container">
      <div className="Game_Group_Header">
        <div className="Game_Group_Header_Left">
          <div className="Game_Group_Header_Left_Title">
            <span>Games On Sale</span>
            <div className="Game_Group_Header_Left_Title_Icon">
              <CaretRight  size={15} weight="light" />
            </div>
          </div>
        </div>

        <div className="Game_Group_Header_Right">
            {/* <div className="Arrow"><CaretLeft onClick={()=>{
              let x=document.querySelector(".slick-dots-top");
              console.log(x.children[0].children[0]);
              
            }}   size={20} weight="light" /></div>
            <div className="Arrow"><CaretRight size={20} weight="light" /></div> */}
        </div>
      </div>
      
      <Carousel 
      
      {...settings}
      {...contentStyle}
      className='Carousal'>
        {
          arr.map(()=>{
            return(
              <span>
              <div className="Game_Group_Components">
                {
                  Games.map((item,count=0)=>{
                    if(count<6)
                    {
                      return(
                        <Component_Item id={item.id} Title={item.game_name} Discount={item.game_discount} PriceBefer={item.game_price} Price={item.game_price_after_discount} Img={item.game_img} />
                      )
                    }
                    
                      
                  })
                }
          </div>
              </span>
            )
          })
        }
      </Carousel>
    </div>
);
}

export default Game_Group;
