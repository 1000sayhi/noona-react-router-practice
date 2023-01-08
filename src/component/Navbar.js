import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate }) => {
  const menulist = [
    "여성",
    "Devided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  const goToAllProductPage = () => {
    authenticate = false;
    navigate("/");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faHeart} />
        <div onClick={authenticate ? goToAllProductPage : goToLogin}>
          {authenticate ? "log out" : "login"}
        </div>
      </div>
      <div className="nav-section">
        <img
          onClick={() => {
            navigate("/");
          }}
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menulist.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <input
            type="text"
            className="search-input"
            onKeyPress={(event) => search(event)}
            placeholder="제품 검색"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
