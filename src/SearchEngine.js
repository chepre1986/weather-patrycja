import React from "react";
import "./SearchEngine.css";

export default function SearchEngine(){
    return (
<form>
<input type="text" placeholder="City name..." />
<input type="submit" value="Search"/>
</form>
    );
}