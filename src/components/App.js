
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
const [input,setInput] = useState("")

  return (
    <div style={{backgroundColor:"#73F400"}}>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <p>{input}</p>
        <div className="parent" style={{backgroundColor:"#C45A19"}}>
          <h1>Child Component</h1>
          <div className="child" >
          <input onChange={(e)=>setInput(e.target.value)}></input>
          </div>
        </div>
    </div>
  )
}

export default App
