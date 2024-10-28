import './imagebutton.css'
import { useState } from "react"
export default function ImageButton(){
    const [photo, setPhoto]= useState();
    function handleSubmit(event){
        event.preventDefault();
        setPhoto(URL.createObjectURL(event.target.files[0]));
    }
    
    return( 
    <>
        <input type="file" accept="image/*" id="myFile" name="filename" onChange={handleSubmit}/>
        <br/>
        <img className="max-w-screen-sm max-h-screen-sm" src={photo}/>
    </>
    )
    
}   