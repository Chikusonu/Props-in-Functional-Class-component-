import React from "react";
import "./style.css";
import Function1  from "./Funcfile";
import Class1 from "./Classfile";


export default function App() {
  return (
    <div>
      
      <h1>Hello Programmers </h1>
      <p>Welcome to world of React JS :)</p>

      <Class1 text="Props in class components" />

      <Function1  text="props in function components"/>
    </div>
  );
}
