import React from "react";
export default function Formulario(props) {
  return (
    <form>
        <div className="input-container">
            <input type="text" value={props.username || "wemanconnect"}></input>
        </div>
        <div className="input-container">
            <input type="password" value={props.password || "anything"} />
        </div>
        <div className="input-container">
            <button type="submit">submit</button>
        </div>
    </form>
  );
}