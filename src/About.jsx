import React, {useEffect, useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DGP from './DGP';
import Goose from './Goose';
  
const About = () => {
  return (
    <div className = "layout"
    >
      <h1 className="abtHead">About Page</h1>
      <div className="topText"> 
        <p>
        We are a group of artists, writers, programmers with a vision to bring unique, quality content to our readers, players, and viewers.
        In an age of censorship, we seek to tell stories as they ferment in the creator's mind, free of any coercive influence. <br/>
        We believe content is at its best when the creator's vision is unimpeded. 
        </p>
      </div>
      <div className="profileAdminDiv">
        <div className="profileImgHolder"><img className="profileTableImg" src= "/images/DGP_Avatar.png"/></div>
        <div className="profileWrapper">
          <h1>David G. Piper</h1>
          <p>Founder, Lead Developer, Producer, Writer</p>
          <DGPPopup/>
        </div>
      </div>
      <div className="profileDivWrapper">
      <div className="profileDiv">
        <div className="profileImgHolder"><img className="profileTableImg" src= "/images/GoosePic.png"/></div>
        <div className="profileWrapper">
          <h1>Harry Goose Waters</h1>
          <p>Artist</p>
          <GoosePopup/>
        </div>
      </div>
      </div>
      <div className="profileDivWrapper">
      <div className="profileDiv">
        <div className="profileImgHolder"><img className="profileTableImg" src= "/images/WadeV.jpg"/></div>
        <div className="profileWrapper">
          <h1>Wade Vezecha</h1>
          <p>Artist</p>
          <GoosePopup/>
        </div>
      </div>
      </div>
    </div>
  );
};

const contentStyle = {
  position: 'fixed', top: '50px', left: '25%', maxHeight: '85%', width: '50%', backgroundColor: 'black', overflow: 'scroll', overflowX: 'hidden'
}

const DGPPopup = () => {
  return(
    <Popup trigger={<button> More </button>} modal {...{DGPPopup, contentStyle}}>
      <DGP/>
    </Popup>
  );
}

const GoosePopup = () => {
  return(
    <Popup trigger={<button> More </button>} modal {...{GoosePopup, contentStyle}}>
      <Goose/>
    </Popup>
  );
}
 
export default About;