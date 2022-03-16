import { Search } from "@material-ui/icons";
import React from "react";
import Action from "./actions/Action";
import Logo from "./logo/Logo";
import Searchbar from "./searchbar/Searchbar";
import './navbar.css';

function Navbar(){
    return <div className="navbar">
        <Logo/>
        <Searchbar/>
        <Action/>
    </div>;
}

export default Navbar;