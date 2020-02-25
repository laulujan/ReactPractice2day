import React from 'react'
import HeaderLinks from "./HeaderLinks";

export default function Header(props){
    //
    return <header className="app-header">
            <h1>My header</h1>
            <h2>Welcome</h2>
            <HeaderLinks user={props.user} logout={props.logout} signin={props.signin}/>    
        </header>;
}