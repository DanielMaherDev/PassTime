import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './ZoomableImage.css';

function ZoomableImage() {
    return ( <
        div className = "zoomable-image-container" >
        <
        Zoom >
        <
        img src = "https://upload.wikimedia.org/wikipedia/commons/6/6e/Irish_emigrants_1890.jpg"
        alt = "Historical Image"
        className = "zoomable-image" /
        >
        <
        /Zoom> <
        /div>
    );
}

export default ZoomableImage;