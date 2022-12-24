import { Link, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = (props) => {
  const navigate = useNavigate();
  const Temppost = props.Games;
  const [value, setValue] = useState("");

  const onChange = (event) => {
    console.log(Temppost);
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };
  return (
    <div className="Search">
      <ul>
        <div>
          <span>
            <MagnifyingGlass size={20} weight="light" />
            <input
              input="text"
              placeholder="Search store"
              value={value}
              onChange={onChange}
            ></input>
          </span>
          {console.log(Temppost)}
          <div className="dropdown">
            {Temppost.filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.game_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            }).map((item) => (
              <div
                onClick={() => onSearch(item.game_name)}
                className="dropdown-row"
                key={item.id}
              >
                <img
                  onClick={() => {
                    navigate({ pathname: `/${item.id}` });
                  }}
                  src={item.game_img}
                  width="30"
                  height="50"
                  style={{ borderRadius: "5px" }}
                />
                {item.game_name}
              </div>
            ))}
          </div>
        </div>

        <li></li>
        <li style={{ color: "white" }}>Discover</li>
        <li>Browse</li>
        <li>News</li>
      </ul>
    </div>
  );
};
export default Search;
