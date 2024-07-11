import React from 'react';
import './MainMenu.css';

function MainMenu({
    onSelectGameMode
}) {
    return ( <
        div className = "main-menu" >
        <
        h1 > HistoryGuessr < /h1> <
        div className = "menu-option"
        onClick = {
            () => onSelectGameMode('irish')
        } >
        Irish - Guess the Year <
        /div> <
        /div>
    );
}

export default MainMenu;