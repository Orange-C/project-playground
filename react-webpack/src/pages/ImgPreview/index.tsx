import React from "react";
import Button from '@mui/material/Button';

import "./index.scss";

function ImgPreview() {
  return (
    <div>
      <h2>ImgPreview</h2>
      <div className="img-container">
        <img
          className="img-content" 
          src="https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png" 
          alt="text"
        />
        <div className="text-box">
          <div className="text-row">
            <div className="text-col">1</div>
            <div className="text-col">2</div>
          </div>
          <div className="text-row">
            <div className="text-col">3</div>
            <div className="text-col">4</div>
          </div>
        </div>
      </div>
      <Button variant="contained">Contained</Button>
    </div>
  );
}

export default ImgPreview;