import React from "react";
import "./SearchEngine.css";

export default function SearchEngine(){
    return (
<form >
<input type="text" placeholder="City name..." autoFocus="on" className="holder"/>
<input type="submit" value="Search" className="button"/>
</form>
    );
}