import React from "react";
import "./Style1.css";
export default function Profile (prop){
  return (
    <div>
    <h1 classname="appy">{prop.text.name}<br/>{prop.data}</h1>
    </div>
  );
}