import { useNavigate } from "react-router-dom"
function Home(){
    const navigate = useNavigate();
    return(
        <>
        <h2>Home Page</h2>

        <button onClick={() =>{navigate('/about')}}>about</button>
        </>
    )
}

export default Home