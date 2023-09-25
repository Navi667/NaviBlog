import React from 'react';
import ReactDOM from 'react-dom';
import "./backdrop.css";

const backdropRoot = document.getElementById("backdrop-root");

export default function BackDrop(props) {
    return ReactDOM.createPortal(
        <div
        {...props}
        className={`backdrop ${props.className}`}
        >    
        {props.children}
        </div>,
        backdropRoot
    )
};
