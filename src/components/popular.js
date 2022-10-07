import { useEffect, useState } from "react";
import Cards from "./cards";
import '../App.css'
function Popular({ onAddFav }) {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch("https://meme-pages.herokuapp.com/")
            .then(response => response.json())
            .then((pop) => setPopular(pop));
    }, [])
    function updated(items) {
        const updatedItems = popular.map((meme) => {
          if (items.id === meme.id) {
            return items;
          }
          else {
            return meme;
          }
        });
        setPopular(updatedItems);
      }
    return (
        <div className="container">
            <p className="h5 pop my-2" >POPULAR</p>
            <Cards memes={popular} type="popular"  updated={updated} />
        </div>


    );
}
export default Popular;