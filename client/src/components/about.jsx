import { useNavigate } from "react-router-dom"
// import React,{useEffect,useState} from "react";
// import axios from "axios";
function About(){
    const navigate = useNavigate();

    return(
        <>
        <h2>About Page</h2>

        <button onClick={() =>{navigate('/create')}}>Create</button>
        </>
    )
}

export default About