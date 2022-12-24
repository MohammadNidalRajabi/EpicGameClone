import Column from "antd/es/table/Column";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Utils/Nav_Bar/NavBar";
import "./Admin_page.css";
const Admin_Page = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.user=== null||props.user.role!="admin") {
            navigate('/', { replace: true });
        }
      }, [props.user]);



  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      game_name: event.target.GameName.value,
      game_description: event.target.GameDescription.value,
      game_img: event.target.GameImg.value,
      game_discount: event.target.GameDiscount.value,
      game_price: event.target.price.value,
      game_price_after_discount: event.target.PriceAfterDiscount.value,
      game_categore: event.target.Gamecategories.value,
      game_state: event.target.NotFree.value,
      game_img_group:[
        "https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/bloons-td-6-nknoh.png?h=270&resize=1&w=480",
        "https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/bloons-td-6-1u12g.png?h=270&resize=1&w=480",
        "https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/bloons-td-6-ivoqn.png?h=270&resize=1&w=480"

    ],
    };
    event.target.GameName.value="";
    event.target.GameDescription.value="";
    event.target.GameImg.value="";
    event.target.GameDiscount.value="";
    event.target.price.value="";
    event.target.PriceAfterDiscount.value="";
    event.target.Gamecategories.value="";
    event.target.NotFree.cheked=false;
    const postsFromStorage = JSON.parse(localStorage.posts || '[]');
    const newPosts = [newItem, ...postsFromStorage];
    localStorage.posts = JSON.stringify(newPosts);
    props.onAddPost();
    alert('Your Game was added successfully!');
    navigate('/');
    console.log(newItem);
  }

  return (
    <div className="APContainer">
      <h1>Add New Game</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label for="GameName">Game Name</label>
          <input
            type="text"
            name="GameName"
            placeholder="Enter Game Name"
            required
          />
        </div>
        <div className="row">
          <label for="">Game Description</label>
          <textarea
            id=""
            name="GameDescription"
            rows="4"
            cols="50"
            placeholder="Enter Game Description"
            required
          />
        </div>
        <div className="row">
          <label for="afterDiscount">Game Images</label>
          <input
            type="text"
            name="GameImg"
            placeholder="Enter URL Image for game"
            required
          />
        </div>
        <div className="row">
          <label for="">Game categories</label>
          <select name="Gamecategories">
            <option value="sport">Role-playing games</option>
            <option value="sport">Simulation games</option>
            <option value="sport">Sports games</option>
            <option value="sport">Strategy games</option>
            <option value="sport">Puzzle games</option>
            <option value="sport">Idle games</option>
            <option value="sport">Adventure games</option>
            <option value="sport">Action-adventure games</option>
            <option value="sport">Action games</option>
          </select>
        </div>
        <div className="row">
          <label for="">Game State</label>
          <span className="RDButton">
            <input type="radio" id="NotFree" name="NotFree" value="NotFree" checked={true} /> {" "}
            <label for="NotFree">Not Free</label>
              <input type="radio" id="Free" name="NotFree" value="Free" /> {" "}
            <label for="Free">Free</label>
          </span>
        </div>
        <div className="row">
          <label for="GamePrice">Price</label>
          <input type="text" name="price" placeholder="Enter Game Price" />
        </div>
        <div className="row">
          <label for="Discount">Discount</label>
          <input
            type="text"
            name="GameDiscount"
            placeholder="Enter Game Discount"
          />
        </div>
        <div className="row">
          <label for="afterDiscount">Price After Discount</label>
          <input
            type="text"
            name="PriceAfterDiscount"
            placeholder="Enter Game Price After Discount"
          />
        </div>
        <input type="submit" name="" value="Add Game" />
      </form>
      <button onClick={()=>{
        {
       props.handleLogout();
       navigate({ pathname: '/' });
    
    }
      }}>LogOut</button>
    </div>
  );
};
export default Admin_Page;
