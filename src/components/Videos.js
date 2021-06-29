import React from "react";

export default function Videos() {
  return (
    <>
      <div className='videocontain'>
        <div className='paradise'>
          <em>Welcome To The Rider's Paradise</em>
          <h6 className='swing'>
            {" "}
            <em>-The Next Gear Family</em>{" "}
          </h6>
        </div>
        <div className='btn'>
          <a href='nextgear.apk' download>
            <button onClick={() => console.log("pew")}>Download Our App</button>
          </a>
        </div>
        <div className='vidcontainer'>
          <video
            id='wait'
            poster='./poster.jpg'
            src='bike.mp4'
            type='video/mp4'
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
    </>
  );
}
