import { useEffect, useState } from "react";
import Cards from "./cards";
import '../App.css'
function Funny({ onAddFav }) {
    const [funny, setfunny] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8002/funny")
            .then(response => response.json())
            .then((fun) => setfunny(fun));
    }, [])

    return (
        <div className="container my-5">
            <p className="h5 pop" >FUNNY</p>
            <Cards memes={funny} type="funny" onAddFav={onAddFav} />
        </div>


    );
}
export default Funny;