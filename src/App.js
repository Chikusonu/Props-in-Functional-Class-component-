import React from "react";
import "./style.css";
import Profile from "./Profile";


export default function App() {
  return (
    <div>
      <Profile text={{name:"chikusonu"}} data="job"/>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
