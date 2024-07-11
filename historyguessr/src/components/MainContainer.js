import React from 'react';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './MainContainer.css';

function MainContainer() {
    return ( <
        div className = "main-container" >
        <
        Header / >
        <
        div className = "content-wrapper" >
        <
        Content / >
        <
        Sidebar / >
        <
        /div> <
        Footer / >
        <
        /div>
    );
}

export default MainContainer;