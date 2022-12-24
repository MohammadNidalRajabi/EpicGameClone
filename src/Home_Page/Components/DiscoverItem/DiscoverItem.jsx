import { Link } from "phosphor-react";
import { useNavigate } from "react-router-dom";


const DiscoverItem=(props)=>{
  const navigate = useNavigate();
    let Game_Image=props.Game_Image;
    let Game_Name=props.Game_Name;
    console.log(Game_Image);
    const Click=(id)=>{
      
        props.Clicked(id);
        
      }
    
    return(
    
        <div onClick={()=>{
          Click(Game_Image);
          navigate({ pathname: `/${props.id}`});
          
        } } className="item" >
        <img
          src={Game_Image}
          alt={Game_Name}
        />
        <h6>{Game_Name}</h6>
        <div className="background"></div>
      
          
        
      </div>
      
  
    )
    
       
}
export default DiscoverItem;