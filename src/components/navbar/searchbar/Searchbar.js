import React from "react";
import './searchbar.css';
import SearchIcon from '@material-ui/icons/Search';


function Searchbar(){
    return <div className="searchbar">
        <label htmlFor="searchbar">
        <SearchIcon/>
        </label>
        <input id = "searchbar" color="white"/>
    </div>;
}

export default Searchbar;