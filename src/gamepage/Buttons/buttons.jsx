import './but.css';
import Downbut from '../downbut/downbut';
import Item from 'antd/es/list/Item';

function But(props) {

    return (
<div className='butt'>
    <div className='ppp'>
    <p>{props.discount} </p>
    <p className='pppp' style={{color:"rgb(120 120 120)" }} >{props.price} </p>
    <p>{props.afterdisc}</p>

    </div>
<button className='buttt1'>BUY NOW</button>
<button onClick={()=>{
    
     props.onAddFunction(props.game);
     alert("Add Game To Cart Successful")
}} className='buttt2'>ADD TO CART</button>
<button className='buttt2'>ADD TO WISHLIST</button>
<Downbut/>

<div className='btt'>


<button className='but3'>share</button>
<button className='but4'>subscribe</button>

</div>

</div>

    )
    
}
export default But;