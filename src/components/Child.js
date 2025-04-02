
import React,{useState} from "react";
import './../styles/App.css';

const Child = ({setInput}) => {

  return (
    <div style={{backgroundColor:"#CE5A19"}}>
        
          <h1>Child Component</h1>
          <div className="child" >
          <input type="text" onChange={(e)=>setInput(e.target.value)}></input>
          </div>
        </div>
        
  )
}

export default Child
