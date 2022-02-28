import "./PopButton.css";
import React from "react";

export default function PopButton(props) {
  const {value} = props;


  return (
        <div className="wrapper">
          <button className="submit s">{value}</button>

        </div>





    // <div className="wrapper">
    //   <button className="submit s">Login</button>
    // </div>
  );
}
