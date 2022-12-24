import { Key, X } from "phosphor-react";
import { useState } from "react";
import DiscoverItem from "../DiscoverItem/DiscoverItem";
import Game_Group from "../Game_Group/Game_Group";
import "./Discover.css";
const Discover = (props) => {
  const Games=props.Games;
    const [img,Setimg]=useState("https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg");
  return (
    <div>
    <div className="Container">
      
      <div className="img">
        <img
          src={img}
          alt=""
        />
      </div>
      <div className="ContainerItem">
        {
          Games.map((item,count=0)=>{
            if(count<6)
            {
              return(
                <DiscoverItem   id={item.id} Clicked={Setimg}Game_Name={item.game_name} Game_Image={item.game_img}/>
              )
            }
            
              
          })
        }
      {/* <DiscoverItem Clicked={Setimg} Game_Name={"Mount & Blade II"} Game_Image={"https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg"}/>
      <DiscoverItem Clicked={Setimg}Game_Name={"Football Manager 2023"} Game_Image={"https://cdn2.unrealengine.com/egs-football-manager-2023-carousel-mobile-thumb-1200x1600-521bc2670704.jpg"}/>
      <DiscoverItem Clicked={Setimg}Game_Name={"Genshin Impact"} Game_Image={"https://cdn2.unrealengine.com/en-egs-genshin-impact-3-2-carousel-thumb-1200x1600-f12004b2e08b.jpg"}/>
      <DiscoverItem Clicked={Setimg}Game_Name={"Goat Simulator 3"} Game_Image={"https://cdn2.unrealengine.com/goatsim3-fn-carousel-thumbnail-1200x1600-09b07d157aa0.jpg"}/>
      <DiscoverItem Clicked={Setimg}Game_Name={"Ghostbusters: Spirits Unleashed"} Game_Image={"https://cdn2.unrealengine.com/egs-ghostbusters-spirits-unleashed-carousel-thumb-1200x1600-ce822e7e468a.jpg"}/>
      <DiscoverItem Clicked={Setimg}Game_Name={"Gotham Knights"} Game_Image={"https://cdn2.unrealengine.com/egs-gothamknights-warnerbrosgamesmontreal-s2-1200x1600-1200x1600-d9d5421f5d2a.jpg"}/> */}
      </div>
      
    </div>
    </div>
   
  );
};
export default Discover;
