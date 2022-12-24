import { useNavigate } from 'react-router-dom';
import DiscoverItem from '../DiscoverItem/DiscoverItem';
import './Game_Classification.css'
import Item from './Item';
const Game_Classification=(props)=>
{
    const navigate=useNavigate();
    const GamesStrategy=props.Games.filter(Games => Games.game_categore.includes(""));
    const GamesAction=props.Games.filter(Games => Games.game_categore.includes("a"));
    const GamesAdventure=props.Games.filter(Games => Games.game_categore.includes("o"));
    return  (
       <div className='Container_Game_Classification'>
        <div className='Left'>
            <div className='Header'>
                <h2>Strategy Games</h2>
                <button>VIEW MORE</button>
            </div>
            
            {
                  GamesStrategy.map((item,count=0)=>{
                    if(count<5)
                    {
                      return(
                        <div className='Continer'>
                        <Item id={item.id}
                        Game_Price={item.game_name} Game_Image={item.game_img}/>
                        </div>
                      )
                    }
                    
                      
                  })
                }
            
            {/* <Item Game_Price={"$60.0"} Game_Name={"Mount & Blade II"} Game_Image={"https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg"}/>
            <Item Game_Price={"$59"}Game_Name={"Mount & Blade II"} Game_Image={"https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg"}/>
            <Item Game_Price={"FREE"}Game_Name={"Mount & Blade II"} Game_Image={"https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg"}/>
            <Item Game_Price={"$9.0"}Game_Name={"Mount & Blade II"} Game_Image={"https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg"}/> */}
            


        </div>
        <div className='Center'>
        <div className='Header'>
                <h2>AdventureGames</h2>
                <button>VIEW MORE</button> 
            </div>
            {
                  GamesAdventure.map((item,count=0)=>{
                    if(count<5)
                    {
                      return(
                        <div className='Continer'>
                        <Item id={item.id} Game_Price={item.game_name} Game_Image={item.game_img}/>
                        </div>
                      )
                    }
                    
                      
                  })
                }
            

        </div>
        <div className='Right'>
        <div className='Header'>
                <h2>Action Games</h2>
                <button>VIEW MORE</button>
            </div>
            {
                  GamesAction.map((item,count=0)=>{
                    if(count<5)
                    {
                      return(
                        <div className='Continer'>
                        <Item id={item.id} Game_Price={item.game_name} Game_Image={item.game_img}/>
                        </div>
                      )
                    }
                    
                      
                  })
                }
            


        </div>
       </div>
    )
}
export default Game_Classification;