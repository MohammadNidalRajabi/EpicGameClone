import Gift from '../Assets/Gift.png'
import './Free_Game.css'
import FreeGameItem from './Free_Game_Item/Free_Game_Items';
const FreeGame=()=>
{
    return(
        <div className="FreeGames">
           <div className='FreeGamesHeader'>  
           <div className='FreeGamesHeaderRight'>
           <img src={Gift} alt="" width={50} height={50}/>
           <h2>FreeGames</h2>
           </div>
            
            <button>VIEW MORE</button>
        </div>
        <div className='Free_Game_Items'>
            <FreeGameItem GameState={true} Img="https://cdn1.epicgames.com/offer/0e76e53e157d416ab598342ed3a9dd5a/EGS_RPGinaBox_JustinArnold_S2_1200x1600-14578736d77be5027ee1522f41bb86d9?h=854&resize=1&w=640" GameName="RPG in a Box" GameDate="Free Now - Dec 08 at 06:00 PM" />
            <FreeGameItem GameState={true} Img="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_FortTriumph_CookieByteEntertainment_S2_1200x1600-4371ffe4b85f2e1b4041dcb4e207f0a5?h=854&resize=1&w=640" GameDate="Free Now - Dec 08 at 06:00 PM" GameName="Fort Triumph" />
            <FreeGameItem GameState={false} Img="https://cdn1.epicgames.com/offer/151e56468b5049628653dedab7c88007/EGS_SaintsRowIVReElected_DeepSilverVolition_S2_1200x1600-7607305fd444a7dab171d4404dbe7ff0?h=854&resize=1&w=640" GameDate="Free Dec 08 - Dec 15" GameName="Saints Row IV Re-Elected"/>
            <FreeGameItem GameState={false} Img="https://cdn1.epicgames.com/spt-assets/d92266115f8d4d5680562d993435daa5/download-wildcat-gun-machine-offer-tg9yg.jpg?h=854&resize=1&w=640" GameDate="Free Dec 08 - Dec 15" GameName="Wildcat Gun Machine"/>
           




        </div>
          
        </div>
    );
}
export default FreeGame;