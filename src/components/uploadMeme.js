import '../App.css';
import React, { useEffect, useState } from "react";
import Navbar from './navbar';

function UploadMeme({handleSubmit, handleChange}){
   
    const [categories, setCategories] = useState([]);

    

    useEffect(() => {
        fetch("http://localhost:8002/categories")
            .then(response => response.json())
            .then((cat) => setCategories(cat));
    }, []);
 
   return(

    <><Navbar />
    <div className='all'>
           <div className="memeload">
               <div className="upload p-5">
                   <p className="h5  my-2">UPLOAD A MEME</p>
                   <div className="row">
                       <div className="col-md-6">
                           <input type="text" placeholder="Enter Meme Name" name="name" onChange={handleChange} />

                       </div>
                       <div className="col-md-6">
                           <select onChange={handleChange} name="category">
                               {categories.map((c, index) => {
                                   return <option key={index} value={c.name}>
                                       {c.name}
                                   </option>;
                               })}

                           </select>
                       </div>
                       <div className="row my-4 ">
                           <div className="col-md-6 ">
                               <input type="text" placeholder="Upload a meme url" name="image_url" onChange={handleChange} />
                           </div>
                           <div className='col-md-6'>
                               <button type='submit' onSubmit={handleSubmit} className="btn btn-success btn-sm btns" onClick={handleSubmit}>Upload</button>

                           </div>

                       </div>
                   </div>
               </div>
           </div>
       </div></>
   );

}
export default UploadMeme;