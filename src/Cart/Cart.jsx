import { Trash } from 'phosphor-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DiscoverItem from '../Home_Page/Components/DiscoverItem/DiscoverItem';
import './Cart.css'
const Cart=(props)=>{
    const GameFav=props.GameFav;
    console.log(GameFav);
    const navigate=useNavigate();
    useEffect(() => {
        if (props.user=== null) {
            navigate('/Login', { replace: true });
        }
      }, [props.user]);

    return(
        <div className='CartMain'>
           
        <div className='ContainerCart'>
            <div className='ContainerItemCart'>
            {
                GameFav?.map((item)=>{
                    return(<span>
                             <DiscoverItem Game_Name={item?.game_name} Game_Image={item?.game_img}/>
                             <Trash onClick={()=>{
                                 props.onDelete(item.id)
                             }
                               
                             } className='trash' size={96} weight="light" />
                            </span>
                        
                    )
                })
            }
            
            </div>
        </div>
        <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}
export default Cart;