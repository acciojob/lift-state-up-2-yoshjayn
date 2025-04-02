
import React,{useState} from "react";

import './../styles/App.css';
import Parent from "./Parent";
import Child from "./Child";
const App = () => {
  const [input,setInput] = useState("")

  return (
    <div style={{backgroundColor:"#73F400"}}>
    <Parent input={input}/>
    <Child setInput={setInput}/>
    </div>
  )
}

export default App
