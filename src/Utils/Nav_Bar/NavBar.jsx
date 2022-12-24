import "./NavBar.css";
import { Globe, ShoppingCartSimple, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";
const NavBar = (props) => {
  const navigate = useNavigate();
  return (
    <div className="nav_bar">
      <div className="left_nav_bar">
        <img
          onClick={()=>{
            navigate({ pathname: '/' });
         }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1764px-Epic_Games_logo.svg.png"
          alt=""
        />
        <ul>
          <li style={{ borderBottom: "5px solid#007AFF", color: "white" }}>
            STORE
          </li>
          <li>FAQ</li>
          <li>HELP</li>
          <li>UNREAL ENGINE</li>
        </ul>
      </div>
      <div className="right_nav_bar">
        <ul>
          <li
          onClick={()=>{
            navigate({ pathname: '/Cart' });
         }}
          ><ShoppingCartSimple  size={20} weight="light" /></li>
          <li>
            <Globe size={20} weight="light" />
          </li>
          <li
          onClick={()=>{
            navigate({ pathname: '/Login' });
         }}
          style={{paddingRight:"10px"}}>
            <User style={{marginRight:"10px"}} size={20} weight="light" />
            {
              props.user?(props.user.fullName):"SGIN IN"
            }
            
          </li>
          <li id="DOWNLOAD">
            
              {
                props.user?(<a href="/" onClick={props.handleLogout
                
                }>Log Out</a>):"DOWNLOAD"
              }
            
            
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
