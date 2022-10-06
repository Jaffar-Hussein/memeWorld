import { useEffect, useState } from "react";
import Cards from "./cards";
import '../App.css'
function Popular({onAddFav}) {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8002/popular")
            .then(response => response.json())
            .then((pop) => setPopular(pop));
    }, [])

    return (
        <div className="container">
            <p className="h5 pop my-2" >POPULAR</p>
            <Cards memes={popular} type="popular" onAddFav={onAddFav} />
        </div>


    );
}
export default Popular;