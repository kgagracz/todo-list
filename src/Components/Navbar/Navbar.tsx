import React from "react";
import SearchBar from "../SearchBar";
import "./Navbar.css";
import { SearchStore } from "../../Store/SearchStore";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="searchbar-container">
        <SearchBar searchStore={SearchStore} />
      </div>
    </header>
  );
};

export default Navbar;
