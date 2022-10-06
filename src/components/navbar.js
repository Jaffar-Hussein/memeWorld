import React, { useEffect, useState } from "react";
import '../App.css';
import { NavLink } from "react-router-dom";

function Navbar() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8002/categories")
            .then(response => response.json())
            .then((cat) => setCategories(cat));
    }, []);

    const all_categories = categories.map((cat, index) => {
        return <li key={index} className="nav-item mx-2" >
            <NavLink  key={index} className="nav-link text-black" to={`/`+cat.name} >{cat.name}</NavLink>
            
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
                            <NavLink className="nav-link active  text-black" aria-current="page" to="/" >Home</NavLink>
                        </li>
                        {all_categories}

                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item list-unstyled ">
                            <NavLink className="nav-link text-black brand">Meme world</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link text-black"  > Favourites </NavLink>
                        </li>

                    </ul>
                    <ul className="navbar-nav me-auto mb-2 ">
                        <NavLink className="nav-item mx-2" to="/upload" >
                            <button className="btn btn-success btn-sm btns">Upload</button>
                        </NavLink>

                    </ul>
                </div>
            </div>
        </nav>
    )

}
export default Navbar;