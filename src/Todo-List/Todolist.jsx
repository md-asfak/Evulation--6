import React, { useState } from "react";
import "./Todo.css";

export default function Todolist() {
  let [input, setInput] = useState("");
  let [push, setPush] = useState([]);

  let inputFunc = (e) => {
    setInput(e.target.value);
  };

  let addFunc = () => {
    setPush([...push, input]);
    setInput("");
  };

  const delItem = (index) => {
    let filter = [...push];
    filter.splice(index, 1);
    setPush(filter);
  };
  return (
    <>
      <div className="container">
        <h3>This Is Todo List</h3>
        <div className="card_container">
          <h4>List</h4>
          <input type="text" value={input} onChange={(e) => inputFunc(e)} />
          <button onClick={addFunc} className="btn-add">
            <i class="fa-solid fa-plus"></i>
          </button>
          {push.map((item, index) => (
            <div className="card" key={index}>
              <h2>{item}</h2>
              <button onClick={() => delItem(index)} className="del">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
