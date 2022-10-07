import '../App.css';
import React, { useEffect, useState } from "react";
import Navbar from './navbar';

function UploadMeme({ handleSubmit, handleChange }) {

    const [categories, setCategories] = useState([]);



    useEffect(() => {
        fetch("https://meme-pages.herokuapp.com/categories")
            .then(response => response.json())
            .then((cat) => setCategories(cat));
    }, []);

    return (

        <><Navbar />
            <div className='all'>
                <div className="memeload">
                    <div className="upload p-5 mx-auto">
                        <p className="h5  my-3 uploadTitle">UPLOAD A MEME</p>
                        <div className="row">
                            <div className="col-md-6">
                                {/* <label >Enter Meme Name</label> */}
                                <input type="text" className="mx-2 form-control" placeholder="Enter Meme Name" name="name" onChange={handleChange} />

                            </div>
                            <div className="col-md-6">
                                {/* <label className="mx-2">Choose a category</label> */}
                                <select onChange={handleChange} name="category" value="Nonsensical" className=' form-select' >

                                    {categories.map((c, index) => {
                                        return <option key={index} value={c.name}>
                                            {c.name}
                                        </option>;
                                    })}

                                </select>
                            </div>
                            <div className="row my-4 ">
                                <div className="col-md-6 ">
                                    <input type="text" className='mx-2 form-control' placeholder="Upload a meme url" name="image_url" onChange={handleChange} />
                                </div>
                                <div className='col-md-6'>
                                    <button type='submit' onSubmit={handleSubmit} style={{ float: 'right' }} className="btn btn-success btn-sm btns" onClick={handleSubmit}>Upload</button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );

}
export default UploadMeme;