import { useNavigate } from "react-router-dom";
import Discover from "./Discover/Discover";
import ExploreComp from "./ExploreComponents/Explor_Components";
import FreeGame from "./Free_Game/Free_Game";
import Game_Classification from "./Game_Classfiction/Game_Classification";
import Game_Group from "./Game_Group/Game_Group";
import Random_Group from "./Random_Grpup/Random_Group";

const HomePage=(props)=>{
    const navigate = useNavigate();
    const Games=props.Games;
    console.log(Games);
    return(
        <div className="bady">
        
        <Discover Games={Games} />
        <Game_Group Games={Games}  />
        <Random_Group Games={Games} />
        <FreeGame  Games={Games}/>
        <Game_Classification Games={Games}/>
        <Game_Group Games={Games} /> 
        <Random_Group  Games={Games}/>
        <ExploreComp Games={Games} />
        <Game_Group  Games={Games}/>
      </div>
    )
}
export default HomePage;