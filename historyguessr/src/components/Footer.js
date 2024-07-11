import React from 'react';
import YearScrollWheel from './YearScrollWheel';
import './Footer.css';

function Footer() {
    return ( <
        div className = "footer" >
        <
        div className = "score-display" > Score: 100 < /div> <
        YearScrollWheel / >
        <
        div className = "navigation-buttons" >
        <
        button > Skip < /button> <
        button > Next < /button> <
        /div> <
        /div>
    );
}

export default Footer;