import React from "react";
import "./Teleport.scss";
function Teleport() {
  return (
    <div className="container">
      <div className="banner_tele">
        <div className="content_banner">
          <h1 data-content="PLAYPAUSE">PLAYPAUSE</h1>
          <div className="info_author">
            <h2>VAN HUY</h2>
            <p>Frontend Developer</p>
          </div>
          <div className="bg_banner"></div>
          <div className="model_tele"></div>
        </div>
      </div>
      <div
        className="slider_tele"
        style={{
          "--width": `100px`,
          "--height": `50px`,
          "--quantity": 10,
        }}
      >
        <div className="list">
          <div
            className="item"
            style={{
              "--position": 1,
            }}
          >
            <img src="image/slider1_1.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 2,
            }}
          >
            <img src="image/slider1_2.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 3,
            }}
          >
            <img src="image/slider1_3.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 4,
            }}
          >
            <img src="image/slider1_4.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 5,
            }}
          >
            <img src="image/slider1_5.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 6,
            }}
          >
            <img src="image/slider1_6.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 7,
            }}
          >
            <img src="image/slider1_7.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 8,
            }}
          >
            <img src="image/slider1_8.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 9,
            }}
          >
            <img src="image/slider1_9.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 10,
            }}
          >
            <img src="image/slider1_10.png" alt="" />
          </div>
        </div>
      </div>
      <div
        className="slider_tele"
        style={{
          "--width": `200px`,
          "--height": `200px`,
          "--quantity": 9,
        }}
        reverse="true"
      >
        <div className="list">
          <div
            className="item"
            style={{
              "--position": 1,
            }}
          >
            <img src="image/slider2_1.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 2,
            }}
          >
            <img src="image/slider2_2.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 3,
            }}
          >
            <img src="image/slider2_3.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 4,
            }}
          >
            <img src="image/slider2_4.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 5,
            }}
          >
            <img src="image/slider2_5.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 6,
            }}
          >
            <img src="image/slider2_6.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 7,
            }}
          >
            <img src="image/slider2_7.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 8,
            }}
          >
            <img src="image/slider2_8.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 9,
            }}
          >
            <img src="image/slider2_9.png" alt="" />
          </div>
          <div
            className="item"
            style={{
              "--position": 10,
            }}
          >
            <img src="image/slider2_10.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teleport;
