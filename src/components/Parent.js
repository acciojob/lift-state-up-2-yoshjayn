
import React,{useState} from "react";
import './../styles/App.css';

const Parent = ({input}) => {

  return (
    <div >
        <h1>Parent Component</h1>
        <div className="parent">
        <p>{input}</p>
          
        </div>
    </div>
  )
}

export default Parent
