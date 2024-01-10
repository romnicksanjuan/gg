import { useNavigate } from "react-router-dom"
function Create(){
    const navigate = useNavigate();
    return(
        <>
        <h2>Create Page</h2>

        <button onClick={() =>{navigate('/')}}>Home</button>
        </>
    )
}

export default Create