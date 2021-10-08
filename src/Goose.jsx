import React from 'react';
import { AiOutlineMail} from 'react-icons/ai';
import { ImDeviantart } from "react-icons/im";

const Goose = () => {
    return (
            <div>
                <img className="modalHeaderImg" src="/images/GooseBG.jpg"/>
                <h1 className="profileInnerh1" style={{marginLeft: '300px'}}> CadmiumRED</h1>
                <p className="profileInnerText"><strong>Role: </strong>Concept Artist, Digital Artist<br/>
                   <strong>Projects: </strong>Murder Simulator, Attack of the Smittens, this website!<br/>
                   <strong>About: </strong>I'm a retro video game-loving artist inspired by the instruction booklet of Super Mario 
                   Brothers 3 for the NES since the artwork triggered something in me to make me want to draw the images of the enemies.  
                   Since then, I've wanted to draw more things that I loved as a kid like Sonic the Hedgehog, Mega Man, 
                   and many other video game-related characters.  
                   Only later did I understand that comic book and manga artists had their own style to how they drew their characters, 
                   environments, and other elements.  <br/>
                   Learning about other kinds of art in college also helped broaden my own horizons to where I absorb a lot of other inspirations.  
                   I look to artists like Cam Kennedy, Jean de Giraud ("Moebius"), and Akira Toriyama continuously these days for 
                   developing my own style, as they made their environments have lots of weathering, character, 
                   and wide range of style to which the reader can easily be sucked into the setting; they also knew how to make 
                   their characters interesting in design to where they all had differing variation in shape and size to where the characters are 
                   easily identifiable and not confused with others.  I try to apply these principles into the work I produce. </p>
                   <table className="profileButtons" style={{marginLeft: '250px'}}>
                    <tr><td><AiOutlineMail/></td><td><ImDeviantart/></td></tr>
                   <tr><td><a>Contact</a></td><td><a href="https://www.deviantart.com/cadmiumred">DeviantArt</a></td></tr></table>
                   
            </div>
            
 
    );
};

export default Goose;