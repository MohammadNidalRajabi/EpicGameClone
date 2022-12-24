import React, { useState } from 'react';
import './ImageSlider.css';
function ImageSlider(props) {
  
  
  
  const imgs=[
    {id:0,value:"https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/bloons-td-6-nknoh.png?h=270&resize=1&w=480"},
    {id:1,value:"https://source.unsplash.com/user/c_v_r/1900x800"},
    {id:2,value:props.img3}]
  const [wordData,setWordData]=useState(imgs[1])
  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  return (
    <div className="mainn">
        <h1>{props.name}</h1>
      <img src={wordData.value} height="350" width="600" /> 
      <div className='flex_row'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
        </div>
        )}
      </div>
    </div>

     

  );
}

export default ImageSlider;