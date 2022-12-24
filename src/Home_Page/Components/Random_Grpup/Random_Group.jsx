import { useNavigate } from "react-router-dom";
import "./Random_Group.css";
const Random_Group = (props) => {
  const navigate=useNavigate();
  const Games=props.Games;
  return (
    <div className="Random_Group">
      {
          Games.map((item,count=0)=>{
            if(count<3)
            {
              return(
                <div  className="Random_One">
                <img onClick={()=>{
                  navigate({ pathname: `/${item.id}`});
                  
                } } 
                src={item.game_img_group[Math.round(Math.random(2))]} alt="" />
                <div className="details">
                    <h3>{item.game_name}</h3>
                    <p>{item.game_description}</p>
                    <h3>{item.game_state==="Free"?"Free":item.game_price_after_discount}</h3>
                </div> 
              </div>
              )
            }
            
              
          })
        }
{/*         
      <div className="Random_One">
        <img src="https://cdn2.unrealengine.com/egs-runbleverse-season-2-breaker-1920x1080-f337f8c4ba5a.jpg?h=720&resize=1&w=1280" alt="" />
        <div className="details">
            <h3>Need for Speed™ Unbound Palace Edition</h3>
            <p>Rumbleverse Season 2 is here! Brawl with buddies on a new island, new limited-time modes, and an all-new Battle Pass!</p>
            <h3>Free</h3>
        </div> 
      </div>
      <div className="Random_Two">
        <img src="https://cdn2.unrealengine.com/egs-somerville-breaker-1920x1080-77da684bc3f3.jpg?h=720&resize=1&w=1280" alt="" />
        <div className="details">
        <h3>Somerville - Out Now</h3>
        <p>Experience a sci-fi adventure grounded in the intimate repercussions of large-scale conflict.</p>
        <h3>$14.00</h3>
        </div>
      </div>
      <div className="Random_Three">
        <img src="https://cdn2.unrealengine.com/egs-need-for-speed-unbount-palace-edition-breaker-v2-1920x1080-2dd5593fc756.jpg?h=720&resize=1&w=1280" alt="" />
        <div className="details">
        <h3>Rumbleverse - New Season</h3>
        <p>Pre-purchase Need for Speed™ Unbound Palace Edition for 3 days early access and Palace branded content!</p>
        <h3>$94.00</h3>
        </div> */}
        
      
    </div>
  );
};
export default Random_Group;
