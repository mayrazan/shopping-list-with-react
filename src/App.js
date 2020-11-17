import React, {useState, setState} from "react";
import "./App.css";
import { Label } from "./Input";
import { AddItems, RemoveItems } from "./Button";
import { List } from "./List";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function onChange(event){
    setItem(event.target.value);
  }

  function onClick(){
    setList([item]);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>My Shopping List</h1>
      </header>
      <>
        <Label onChange={onChange} value={item}/>
        <AddItems onClick={onClick}/>
        <RemoveItems onClick={item}/>
        <List items={item}/>
      </>
    </div>
  );
}

export default App;
