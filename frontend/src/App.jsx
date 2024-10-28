import { useState } from 'react'
import './App.css'
import ImageButton from './imagebutton'
function App() {

  return (
    <>
      <h1>What percentage ABB/ABG are you?</h1>
      <p>Upload a photo of yourself to see what percentage abb/abg you are.</p>
      <ImageButton/>
      <div className=""></div> 
      <p>Developed by Jasen Mark and Alex Zhuang</p>
      <a href="https://www.linkedin.com/in/alex-r-zhuang-45b99a27b/">Alex</a>
      <br/>
      <a href= "https://www.linkedin.com/in/jasen-mark-1447a824b/">Jasen</a>
      
    </>
  )
}

export default App
