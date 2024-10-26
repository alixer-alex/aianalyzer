
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
        <img src={photo}/>
    </>
    )
    
}   