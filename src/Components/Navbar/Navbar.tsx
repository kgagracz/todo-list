import React from "react";
import SearchBar from "../SearchBar";
import "./Navbar.css";
import { SearchStore } from "../../Store/SearchStore";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img
          src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
          alt="logo"
          width={50}
        />
      </div>
      <div className="searchbar-container">
        <SearchBar searchStore={SearchStore} />
      </div>
    </header>
  );
};

export default Navbar;
