import { useNavigate } from "react-router-dom";

const Item=(props)=>
{
        const navigate= useNavigate();
        let Game_Image=props.Game_Image;
        let Game_Name=props.Game_Name;
        let Game_Price=props.Game_Price;
    return(
        <div
        onClick={()=>{
            navigate({ pathname: `/${props.id}`});
            
          } }
        className="Item_Container">
            <img
              src={Game_Image}
              alt={Game_Name}
            />
            <div className="Info">
            <h6>{Game_Name}</h6>
            <h6>{Game_Price}</h6>
            </div>
        </div>
    )
}
export default Item;