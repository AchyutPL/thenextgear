import React from "react";

export default function Info() {
  const showall = () => {
    let infopara = document.querySelector(".infopara");
    infopara.classList.toggle("showallman");
    let binakam = document.querySelector(".binakam");
    if (binakam.innerText === "Read More") {
      binakam.innerText = "Read Less";
    } else {
      binakam.innerText = "Read More";
    }
  };
  return (
    <>
      <div className='infocontainer'>
        <h1 className='infohead'>Who is the best motovlogger in Nepal</h1>
        <hr />
        <p className='numberone'>
          #1 SMZ. Not only has he succeeded in making a name as one of the top
          YouTubers in Nepal, he also has been an influential character for
          others.
        </p>
        <img src='/lucas.jpg' alt='' />
        <div>
          <p className='infopara'>
            Just as the automobile was the answer to the 19th-century dream of
            self-propelling the horse-drawn carriage, the invention of the
            motorcycle created the self-propelled bicycle. The first commercial
            design was a three-wheeler built by Edward Butler in Great Britain
            in 1884. It employed a horizontal single-cylinder gasoline engine
            mounted between two steerable front wheels and connected by a drive
            chain to the rear...... wheel.By 1900 many manufacturers were
            converting bicycles—or pedal cycles, as they were sometimes
            called.by adding small, centrally mounted spark ignition engines.
            The need for reliable constructions led to road motorcycle trial
            tests and competition between manufacturers. The original Tourist
            Trophy motorcycle races were held on the Isle of Man in 1907 as
            reliability or endurance races. Such events have been the proving
            ground for many new ideas from early two-stroke-cycle designs to
            supercharged, multivalve engines mounted on aerodynamic,
            carbon-fibre reinforced bodywork.
          </p>
        </div>
        <button className='binakam' onClick={showall}>
          Read More
        </button>
      </div>
    </>
  );
}
