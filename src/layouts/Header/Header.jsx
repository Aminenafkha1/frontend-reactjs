import React from "react";

// Imported Images ==========>
import img from "../../assets/images/logo.jpeg";
import navigatorIcon from "../../assets/images/u_navigator.png";

// Imported Icons ==========>
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">TakiQuizz</div>
      <div className="headerRight">
        <div className="headerProfile">
          <img src={img}></img>

          <div className="profileData">
            <span className="username">Username</span>
            <span className="role">Admin</span>
          </div>
        </div>
        <div className="headerLanguage">
          Eng <IoIosArrowDown />
        </div>
        <div className="headerLogout">
          <img src={navigatorIcon} alt="" />
          <button>Logout </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
