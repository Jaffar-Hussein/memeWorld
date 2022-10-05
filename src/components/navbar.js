import React, { useEffect, useState } from "react";
import '../App.css';

function Navbar() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8002/categories")
            .then(response => response.json())
            .then((cat) => setCategories(cat));
    }, []);

    const all_categories = categories.map((cat) => {
        return <li className="nav-item mx-2" key={cat.name}>
            <a className="nav-link text-black" href="#">{cat.name}</a>
            
        </li>
    })

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item mx-2">
                            <a className="nav-link active  text-black" aria-current="page" href="/">Home</a>
                        </li>
                        {all_categories}

                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item list-unstyled ">
                            <a className="nav-link text-black brand">Meme world</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
                        <li className="nav-item mx-2">
                            <a className="nav-link text-black" href="#"> Favourites </a>
                        </li>

                    </ul>
                    <ul className="navbar-nav me-auto mb-2 ">
                        <li className="nav-item mx-2">
                            <button className="btn btn-success btn-sm btns">Upload</button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )

}
export default Navbar;