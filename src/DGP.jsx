import React from 'react';
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const DGP = () => {
    return (
            <div>
                <img className="modalHeaderImg" src="/images/DGP_Banner.jpg"/>
                <h1 className="profileInnerh1" style={{marginLeft: '300px'}}> David G. Piper</h1>
                <p className="profileInnerText"><strong>Role: </strong>Founder, Programmer, Producer, Designer, Writer.<br/>
                   <strong>Projects: </strong>Aieslum, Murder Simulator, Idyll Haven, Hero Fighter Origins, this website!<br/>
                   <strong>About: </strong>I envisioned Insomnium-Eye since my teenage years, back in the mid 2000's, with a friend. I'm still determined to
                   bring that vision to life to this day, nearly 20 years later. I first attempted to create "Aieslum", a sci-fi beat'em'up, in 2011, but 
                   was unable to due to real-life responsibilities. I attended universtity from 2016 to 2021, and I'm finally able to trully dedicate 
                   myself to Insomnium-Eye and it's projects.</p>
                   <table className="profileButtons" style={{marginLeft: '250px'}}>
                    <tr onClick="window.location.href="><td><AiOutlineMail/></td><td><AiFillLinkedin/></td><td><AiFillGithub/></td></tr>
                   <tr><td><a>Contact</a></td><td><a href="https://www.linkedin.com/in/davidgpiper1/">LinkedIn</a></td><td><a href="https://github.com/Insomnium-EyeGitHub">GitHub</a></td></tr></table>
                   
            </div>
            
 
    );
};

export default DGP;