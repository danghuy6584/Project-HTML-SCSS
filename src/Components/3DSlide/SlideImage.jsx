import React from "react";
import "./SlideImage.scss";

function SlideImage() {
  return (
    <>
      <div className="baner">
        <div className="slider" style={{ "--quantity": 12 }}>
          <div className="item" style={{ "--position": 1 }}>
            <img
              src="https://i.pinimg.com/236x/b8/92/8f/b8928f3846ea47dd3db2a257acd73265.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img
              src="https://i.pinimg.com/236x/ad/88/f1/ad88f11601fdb73015e989f4d3cbf040.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img
              src="https://i.pinimg.com/236x/8d/5e/b0/8d5eb01e64db627a15d9334f0a9489c7.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img
              src="https://i.pinimg.com/236x/3f/95/41/3f9541fea679a9113f16e5360138ba2f.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img
              src="https://i.pinimg.com/236x/04/37/8b/04378b06c1847e34853ea371c3295f52.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img
              src="https://i.pinimg.com/236x/bb/67/40/bb67401ba4cac57bc13c32aebeadcc07.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img
              src="https://i.pinimg.com/236x/3f/8e/88/3f8e8830c697c71e4dc39ca45ba4a4fd.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img
              src="https://i.pinimg.com/236x/5b/cc/d3/5bccd3a1db73237062566fb000812dce.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img
              src="https://i.pinimg.com/236x/e4/c6/51/e4c651b6a836e3f779168a9d6bdfafd7.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ "--position": 10 }}>
            <img
              src="https://i.pinimg.com/236x/c7/8a/4d/c78a4d2102ac7d07ebc8c5ca8c7cc337.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ "--position": 11 }}>
            <img
              src="https://i.pinimg.com/236x/52/11/7a/52117aaa63c48ccd5743ccee3fb7db78.jpg"
              alt=""
            />
          </div>
          <div className="item" style={{ "--position": 12 }}>
            <img
              src="https://i.pinimg.com/236x/f9/7e/7a/f97e7a8197323979414f6e3eb570cc04.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="content">
          <h1 data-content="CSS ONLY">CSS ONLY</h1>
          <div className="author">
            <h2> VAN HUY </h2>
            <p>Frontend Developer</p>
          </div>
          <div className="model"></div>
        </div>
      </div>
    </>
  );
}

export default SlideImage;
