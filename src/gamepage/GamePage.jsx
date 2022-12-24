import But from "./Buttons/buttons";
import ImageSlider from "./ImageSlider/Imageslider";
import Req from "./Req/req";
import "./GamePage.css";
import Edition from "./edition/edition";
import SocialFollow from "./followus/foloow";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TEMP_GAMES } from "../Data/temp_data";

function Gamepage(props) {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  const [posts, setPosts] = useState([]);
  const Games = props.Games;
  console.log(Games);
  const [post, setPost] = useState([]);
  const params = useParams();
  useEffect(() => {
    const currentPost = Games.find((p) => p.id?.toString() === params.id);
    setPost(currentPost);
  }, [params.id, Games]);

  return (
    <div focus className="classMainGamePage">
      <div className="awfa">
        <ImageSlider
          img1={post?.game_img_group}
          img2={post?.game_img_group}
          img3={post?.game_img_group}
          name={post?.game_name}
        />
        <But
          game={post}
          onAddFunction={props.onAddFunction}
          discount={post?.game_discount}
          price={post?.game_price}
          afterdisc={post?.game_price_after_discount}
        />
      </div>
      <h3 className="hh3"> Edition</h3>

      <Edition />
      <SocialFollow />

      <Req />
    </div>
  );
}

export default Gamepage;
