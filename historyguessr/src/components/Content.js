import React from 'react';
import './Content.css';

function Content() {
    return ( <
        div className = "content" >
        <
        div className = "image-container" >
        <
        img src = "https://upload.wikimedia.org/wikipedia/commons/6/6e/Irish_emigrants_1890.jpg"
        alt = "Historical Image"
        className = "image" /
        >
        <
        /div> <
        div className = "input-section" >
        <
        input type = "text"
        placeholder = "Enter your guess" / >
        <
        button > Submit < /button> <
        /div> <
        /div>
    );
}

export default Content;