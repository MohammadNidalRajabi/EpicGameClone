import { useState,useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin_Page from "./Admin_Page/Admin_page";
import "./App.css";
import Browes from "./Browes/Browes";
import Cart from "./Cart/Cart";
import Discover from "./Home_Page/Components/Discover/Discover";
import ExploreComp from "./Home_Page/Components/ExploreComponents/Explor_Components";
import FreeGame from "./Home_Page/Components/Free_Game/Free_Game";
import Game_Classification from "./Home_Page/Components/Game_Classfiction/Game_Classification";
import Game_Group from "./Home_Page/Components/Game_Group/Game_Group";
import HomePage from "./Home_Page/Components/HomePage";
import NotFound from "./Home_Page/Components/NotFoudPage/Not_Found";
import Random_Group from "./Home_Page/Components/Random_Grpup/Random_Group";
import Login from "./login/log";
import News from "./News_Page/News";
import Footer from "./Utils/Footer/Footer";
import NavBar from "./Utils/Nav_Bar/NavBar";
import Search from "./Utils/Search/Search";
import { TEMP_GAMES } from '../src/Data/temp_data';
import Gamepage from "./gamepage/GamePage";
const getLoggedInUser = () => {
  const localUser = JSON.parse(localStorage.getItem('epic-user'));
  return localUser || null;
}

function App() {
  const [item, setItem] = useState(JSON.parse(localStorage.getItem("gamefav"))||[]);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(getLoggedInUser());
  useEffect(() => fetchPosts(), []);
  const handleLogout = () => {
    localStorage.removeItem('epic-user');
    setUser(null);
  }
  const addItem = (Item) => {
    const newItems = [...item, Item];
    setItem(newItems);
    localStorage.setItem('gamefav', JSON.stringify(newItems));

  }

  const Delete = (id) => {
    const newItems = item.filter(item => item.id !== id);
    setItem(newItems);
    localStorage.setItem('gamefav', JSON.stringify(newItems));

  }
  const fetchPosts = () => {
    const postsFromStorage = JSON.parse(localStorage.posts || '[]');
    if (postsFromStorage.length === 0) {
      localStorage.posts = JSON.stringify(TEMP_GAMES);
      setPosts(TEMP_GAMES);
    } else {
      setPosts(postsFromStorage);
    }
  }

  const handleUserLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem('epic-user', JSON.stringify(loggedInUser));
  }


  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar handleLogout={handleLogout} user={user}></NavBar>
      <Search Games={posts} />
      <div className="language">
        <ul>
          <li>العربية</li>
          <li>English</li>
          <li>French </li>
          <li>Haitian </li>
          <li>Spanish</li>
          <li>Romanian</li>
          <li>Russian</li>
        </ul>
      </div>
      <Routes>
      <Route index element={<HomePage Games={posts} />} />
      <Route path="admin" element={<Admin_Page user={user} handleLogout={handleLogout} onAddPost={fetchPosts} />} />
      <Route path="login" element={<Login user={user} onLogin={handleUserLogin}  />} />
      <Route path="Cart" element={<Cart  onDelete={Delete} GameFav={item}  user={user} />} />
      <Route path="News" element={<News />} />
      <Route path="/:id" element={<Gamepage onAddFunction={addItem} Games={posts} />}/>
      <Route path="Browes" element={<Browes />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
      
      
      <Footer /> 
      
    </div>
  );
}

export default App;
