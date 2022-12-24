import './Free_Game_Items.css'
const FreeGameItem=(props)=>
{
    let Img=props.Img;
    let GameName=props.GameName;
    let GameDate=props.GameDate;
    let GameState=props.GameState;
    return(
        <div className="Free_Game_Item">
            <div className="Item_Image">
                <img src={Img} alt="" />
                <div style={GameState?{backgroundColor: 'rgb(0, 120, 242)'}:{backgroundColor: 'rgb(0, 0, 0)'}}  className="Item_State"><h3>{GameState?"Free Now":"COMING SOON"} </h3></div>
            </div>
            <div className='Item_Info'>
            <h3>{GameName}</h3>
            <h4>{GameDate}</h4>
            </div>
        </div>
    );
}
export default FreeGameItem;