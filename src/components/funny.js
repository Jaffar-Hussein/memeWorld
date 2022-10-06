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
    function updated(items) {
        const updatedItems = funny.map((meme) => {
          if (items.id === meme.id) {
            return items;
          }
          else {
            return meme;
          }
        });
        setfunny(updatedItems);
      }
    return (
        <div className="container my-5">
            <p className="h5 pop" >FUNNY</p>
            <Cards memes={funny} type="funny" onAddFav={onAddFav} updated={updated} />
        </div>


    );
}
export default Funny;