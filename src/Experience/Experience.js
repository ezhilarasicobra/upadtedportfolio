import React from "react";
import './Experience.scss'


import events from "./events.json";

function Experience() {
  return (
    <div style={{ marginTop: "50px" }}>
      <div>
        <h2 className="section__title" id='experience'>Professional Experience</h2>
        <section id="timeline">
  
  <div className="tl-item">
    
    <div className="tl-bg" style={{backgroundImage: "url(https://placeimg.com/802/802/nature)"}}></div>
    
    <div className="tl-year">
      <p className="f2 heading--sanSerif">May 2020</p>
     
    </div>

    <div className="tl-content">
      <h3>Cognizant Technology Solutions- Programmer Analyst</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
    </div>

  </div>

  <div className="tl-item">
    
    <div className="tl-bg" style={{backgroundImage: "url(https://placeimg.com/803/803/nature"}}></div>
    
    <div className="tl-year">
      <p className="f2 heading--sanSerif">Jan 2019</p>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
      <p>Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu.</p>
    </div>

  </div>

  <div className="tl-item">
    
  <div className="tl-bg" style={{backgroundImage: "url(https://placeimg.com/802/802/nature"}}></div>
    <div className="tl-year">
      <p className="f2 heading--sanSerif">Feb 2017 </p>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">Phasellus mauris elit</h1>
      <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
    </div>

  </div>

  <div className="tl-item">
    
  <div className="tl-bg" style={{backgroundImage: "url(https://placeimg.com/800/800/nature"}}></div>
    
    <div className="tl-year">
      <p className="f2 heading--sanSerif"> Sep 2016</p>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">Mauris vitae nunc elem</h1>
      <p>Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod. Donec vestibulum efficitur tortor, eget efficitur enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius metus, bibendum imperdiet ex. Curabitur diam quam, blandit at risus nec, pulvinar porttitor lorem. Pellentesque dolor elit.</p>
    </div>

  </div>
</section>

        </div>
     
    </div>
  );
}

export default Experience;
