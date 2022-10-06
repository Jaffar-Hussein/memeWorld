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
    function updated(items) {
        const updatedItems = filtered.map((meme) => {
          if (items.id === meme.id) {
            return items;
          }
          else {
            return meme;
          }
        });
        setFiltered(updatedItems);
      }
    return(
       <div>
       <Navbar/>
        <div className="container my-5">
            <p className="h5 pop" >{category}</p>
            <Cards memes={filtered} key={filtered.id} updated={updated} type="memes"/>
        </div>
       </div>
    );

}
export default Categories;