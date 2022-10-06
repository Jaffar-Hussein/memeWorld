import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Cards from "./cards";
import Navbar from './navbar';
function Categories(){
let {category} = useParams();
    const [filtered, setFiltered] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:8002/memes?category=${category}`)
        .then(response => response.json())
            .then((cat) => setFiltered(cat));
    })
    return(
       <div>
       <Navbar/>
        <div className="container my-5">
            <p className="h5 pop" >{category}</p>
            <Cards memes={filtered} key={filtered.id} />
        </div>
       </div>
    );

}
export default Categories;