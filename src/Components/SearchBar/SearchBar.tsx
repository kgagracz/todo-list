import { observer } from "mobx-react";
import React from "react";
import { SearchStoreClass } from "../../Store/SearchStore";
import "./SearchBar.css";

interface Props {
  searchStore: SearchStoreClass;
}

const SearchBar: React.FC<Props> = observer(({ searchStore }) => {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Szukaj..."
        value={searchStore.phrase}
        onChange={(e) => searchStore.changePhrase(e.target.value)}
      />
    </div>
  );
});

export default SearchBar;
