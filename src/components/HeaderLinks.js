import React from 'react'

export default function HeaderLinks(props){
    return <span className="header-links">
        {
            props.user ? <a href="/" onClick={props.logout}>log out</a> :
            <span>  
                <a href="/">Sign in</a> |
                <a href="/">Registrarse</a>
            </span>
        }
    </span>;
}
