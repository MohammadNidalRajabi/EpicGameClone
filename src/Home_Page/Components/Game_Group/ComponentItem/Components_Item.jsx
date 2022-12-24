import { useNavigate } from "react-router-dom";

const Component_Item=(props)=>{
    const navigate= useNavigate();
    let Title=props.Title;
    let Discount=props.Discount;
    let PriceBefer=props.PriceBefer;
    let Price=props.Price;
    let Img=props.Img;
    return(
        <div 
        onClick={()=>{
            navigate({ pathname: `/${props.id}`});
            
          } }
         className="Game_Group_Components_Item">
            <div className="IconAdd"></div>
        <img src={Img} alt=""/>
        <div className="Game_Group_Components_Item_Info">
            <h6>{Title}</h6>
            <div className="Game_Group_Components_Item_Info_Price">
                <div className="Discount">{Discount}</div>
                <div className="PriceBefer">{PriceBefer}</div>
                <div className="Price">{Price?Price:"Free"}</div>
            </div>
        </div>
    </div>
    )
}
export default Component_Item;