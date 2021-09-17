import React, {useEffect, useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DGP from './DGP';
  
const About = () => {
  return (
    <div className = "layout"
    >
      <h1 className="abtHead">About Page</h1>
      <div className="topText"> 
        <p>
        We are a group of artists, writers, GEESE and programmers with a vision to bring unique, quality content to our readers, players, and viewers.
        In an age of censorship, we seek to tell stories as they ferment in the creator's mind, free of any coercive influence. <br/>
        We believe content is at its best when the creator's vision is unimpeded.
        </p>
      </div>
      <div className="profileDiv">
      <img className="profileTableImg" src= "/images/DGP_Avatar.png"/>
      <table className="profileTable">
        <th><h1>David G. Piper</h1></th>
        <tr>Founder, Lead Developer, Producer, Writer</tr>
        <tr>Envisioned I-Eye since the mid-2000's, attempted "Aieslum" Prototypes since 2011.<br/>
          Writer for "Hero Fighter Origins" & "Idyll Haven".<br/>
          Associate's Degree in "Computer Systems Technology" and "Applied Software Development" at BCIT.<br/>
          Diploma in "Multimedia Business Management" at Vancouver Film School.
        </tr>
        <tr className="abtButton"><DGPPopup/></tr>
      </table>
      </div>
      
    </div>
  );
};

const DGPPopup = () => {
  return(
    <Popup trigger={<button className="modalButton"> Open Modal </button>} modal>
    <DGP/>
  </Popup>
  );
}
  
export default About;