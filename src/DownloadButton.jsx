// DownloadButton.js
import React from 'react';
import cv from './assets/cv.png'
const DownloadButton = () => {
    const handleDownload = () => {
        // Replace 'path/to/your/image.jpg' with the actual path to your image
        const imagePath = {cv};
    
        // Create a link element
        const link = document.createElement('a');
    
        // Set the download attribute and create a URL from the image path
        link.download = 'image.jpg';
        link.href = imagePath;
    
        // Append the link to the document and trigger a click event
        document.body.appendChild(link);
        link.click();
    
        // Remove the link from the document
        document.body.removeChild(link);
      };
    
  return (
    <button onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadButton;
