import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import "./style.scss";

const Searchbar = ({ element }) => {
  return (
    <form className="searchbar">
      <input
        className="searchInput"
        type="text"
        placeholder={`Search ${element} here...`}
      />
      <span className="search-btn">
        <HiOutlineSearch className="btn-icon"/>
      </span>
    </form>
  );
};

export default Searchbar;
