import { useNavigate } from "react-router-dom"
import React, {useEffect, useState} from "react";
import axios from 'axios'
function Create(){
    const navigate = useNavigate();

    const [message, setMessage] = useState()

    useEffect(() =>{
        axios.get('https://gg-server.vercel.app/create')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    })

    return(
        <>
        <h2>Create Page</h2>
        <button onClick={() =>{navigate('/')}}>Home</button>

        </>
    )
}

export default Create